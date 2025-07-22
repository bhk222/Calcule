import { GoogleGenAI, Type, Chat } from "@google/genai";
import { disabilityData } from '../data/disabilityRates';

if (!process.env.API_KEY) {
  console.error("Clé API manquante. Veuillez définir la variable d'environnement API_KEY.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });

export const getInjuryInformation = async (injuryName: string): Promise<string> => {
  const prompt = `
    En tant qu'expert médical vulgarisatez, expliquez la condition suivante en termes simples et concis, comme pour un patient. 
    N'utilisez pas de jargon médical complexe. Ne donnez aucun conseil médical, de traitement ou de pronostic.
    La condition est : "${injuryName}".
    Focalisez-vous sur une description générale de ce que c'est et la partie du corps concernée.
    La réponse doit faire un paragraphe court.
  `;

  try {
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
    });
    return response.text;
  } catch (error) {
    console.error("Erreur lors de l'appel à l'API Gemini:", error);
    return "Désolé, une erreur s'est produite lors de la récupération des informations. Veuillez réessayer plus tard.";
  }
};

export const createRateCalculatorChatSession = (): Chat => {
    const injuryListForPrompt = disabilityData.flatMap(category =>
        category.subcategories.flatMap(sub =>
            sub.injuries.map(injury => ({
                name: injury.name,
                rate: injury.rate,
                category: `${category.name} > ${sub.name}`
            }))
        )
    );
    
    const schema = {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            name: {
              type: Type.STRING,
              description: 'Le nom exact et complet de la lésion, tel que trouvé dans la liste de référence.',
            },
            chosenRate: {
              type: Type.INTEGER,
              description: "Le taux d'incapacité choisi. Si le barème est une fourchette, choisir une valeur en fonction de la gravité décrite. Sinon, utiliser la valeur fixe.",
            },
            justification: {
                type: Type.STRING,
                description: "Une brève justification en une phrase expliquant pourquoi cette lésion a été sélectionnée et comment le taux a été choisi."
            }
          },
          required: ["name", "chosenRate", "justification"]
        },
    };

    const systemInstruction = `
        En tant qu'expert en évaluation du dommage corporel, votre rôle est de guider l'utilisateur pour qu'il décrive un cas clinique de manière précise via une conversation. Votre ton doit être serviable, professionnel et empathique.

        Voici votre processus de conversation :
        1.  Commencez la conversation par un message de bienvenue : "Bonjour ! Je suis votre assistant pour l'estimation du taux d'incapacité. Pour commencer, veuillez décrire la situation clinique, les blessures, ou les douleurs que vous souhaitez faire évaluer."
        2.  Analysez la réponse de l'utilisateur. Si elle est vague (ex: "j'ai une fracture", "douleur au bras"), posez des questions de clarification pour obtenir les détails essentiels. Exemples de questions :
            -   "Pourriez-vous préciser le siège exact de la fracture ?"
            -   "À quel niveau du bras se situe la douleur ? Est-ce le membre dominant ou non dominant ?"
            -   "Cette blessure entraîne-t-elle une limitation de mouvement ? Si oui, laquelle ?"
        3.  Continuez cet échange jusqu'à ce que vous ayez collecté suffisamment d'informations pour identifier avec certitude une ou plusieurs lésions dans la liste de référence.
        4.  Lorsque vous estimez avoir tous les éléments, informez l'utilisateur que vous allez procéder à l'analyse. Par exemple : "Merci pour ces précisions. Je vais maintenant analyser ces informations."
        5.  Votre message SUIVANT doit être **UNIQUEMENT** un objet JSON valide, sans aucun texte, commentaire, ou bloc de code markdown (\`\`\`json). Ce JSON doit respecter le schéma suivant.

        Schéma JSON à respecter :
        ${JSON.stringify(schema, null, 2)}
        
        IMPORTANT : Vous ne devez JAMAIS inventer une lésion. Le champ "name" dans le JSON doit correspondre EXACTEMENT à une entrée de la liste de référence.

        Liste de référence des lésions :
        ${JSON.stringify(injuryListForPrompt, null, 2)}
    `;

    const chat = ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
          systemInstruction: systemInstruction,
        },
    });

    return chat;
};

export const createLegislativeChatSession = (): Chat => {
    const systemInstruction = `
        Vous êtes un assistant IA spécialisé dans la législation algérienne sur la sécurité sociale. Votre rôle est de fournir des informations claires et précises sur l'ensemble du système, en vous basant sur les textes de loi fondamentaux.

        Textes de référence principaux :
        - Loi n° 83-11 du 2 juillet 1983 relative aux assurances sociales.
        - Loi n° 83-12 du 2 juillet 1983 relative à la retraite.
        - Loi n° 83-13 du 2 juillet 1983 relative aux accidents du travail et aux maladies professionnelles.
        - Loi n° 83-14 du 2 juillet 1983 relative aux obligations des assujettis en matière de sécurité sociale.
        - Loi n° 83-15 du 2 juillet 1983 relative au contentieux en matière de sécurité sociale.
        - Ainsi que leurs décrets d'application et textes modificatifs ultérieurs.

        Directives :
        1.  **Salutation initiale** : Commencez toujours par : "Bonjour ! Je suis votre guide sur la législation de la sécurité sociale algérienne. Comment puis-je vous aider ? Vous pouvez me poser des questions sur la retraite, l'assurance maladie, les accidents du travail, les cotisations, etc."
        2.  **Champ d'expertise élargi** : Répondez aux questions sur :
            - Les assurances sociales (maladie, maternité, invalidité, décès).
            - Les accidents du travail et maladies professionnelles (déclaration, indemnisation, rentes).
            - La retraite (conditions d'ouverture des droits, calcul de la pension, retraite anticipée).
            - Les obligations des employeurs et des travailleurs (affiliation, cotisation).
            - Les prestations familiales.
            - Le contentieux de la sécurité sociale.
        3.  **NE PAS CALCULER DE TAUX OU DE MONTANTS** : Vous ne devez **JAMAIS** calculer de taux d'incapacité (IPP) ou de montant de pension précis. Si un utilisateur vous le demande, répondez poliment : "Je peux vous donner les règles et les modes de calcul prévus par la loi, mais je ne peux pas effectuer de calcul pour un cas personnel. Cette évaluation doit être faite par les services compétents de la Caisse Nationale des Assurances Sociales (CNAS) ou de la Caisse Nationale des Retraites (CNR)."
        4.  **Ton et Style** : Soyez professionnel, informatif et neutre. Structurez vos réponses avec des listes à puces ou des paragraphes clairs pour une meilleure lisibilité.
        5.  **Avertissement** : Terminez chaque réponse par une clause de non-responsabilité : "Veuillez noter que ces informations sont fournies à titre indicatif et ne remplacent pas les conseils d'un juriste ou une consultation auprès des services compétents de la CNAS ou de la CNR."
        6.  **Simplicité** : Évitez le jargon juridique excessif. Expliquez les concepts en des termes simples.
    `;

    const chat = ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
          systemInstruction: systemInstruction,
        },
    });

    return chat;
};