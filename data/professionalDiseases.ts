import { DiseaseCategory } from '../types';

export const professionalDiseasesData: DiseaseCategory[] = [
  {
    name: "Affections dues aux agents chimiques",
    diseases: [
      {
        tableau: "Tableau n°1",
        name: "Saturnisme professionnel (affections provoquées par le plomb et ses composés)",
        description: "Ensemble des manifestations cliniques et biologiques dues à une intoxication par le plomb. Peut inclure des troubles digestifs (coliques de plomb), neurologiques (encéphalopathie), rénaux et hématologiques (anémie).",
        delay: "3 ans pour l'atteinte rénale, 1 an pour les autres affections.",
        workList: "Travaux de traitement, manipulation, emploi du plomb, de ses minerais, alliages et combinaisons. Exemples : fabrication et récupération d'accumulateurs, travaux de peinture contenant du plomb, soudure, etc."
      },
      {
        tableau: "Tableau n°4",
        name: "Benzénisme (affections provoquées par le benzène, le toluène, les xylènes)",
        description: "Affections hématologiques graves (aplasie médullaire, leucémies) suite à une exposition au benzène et ses homologues.",
        delay: "Peut s'étendre jusqu'à 20 ans pour les leucémies.",
        workList: "Préparation, emploi, manipulation de produits contenant du benzène. Exemples : production de carburants, utilisation comme solvant dans les industries du caoutchouc, de la chaussure, etc."
      },
       {
        tableau: "Tableau n°10",
        name: "Affections professionnelles provoquées par l'amiante",
        description: "Maladies respiratoires graves incluant l'asbestose (fibrose pulmonaire), le cancer broncho-pulmonaire, et le mésothéliome (cancer de la plèvre ou du péritoine).",
        delay: "Jusqu'à 40 ans pour le mésothéliome, 30 ans pour le cancer pulmonaire.",
        workList: "Travaux d'extraction, manipulation, et traitement de l'amiante. Travaux d'isolation, de calorifugeage, de flocage. Fabrication de produits en amiante-ciment. Travaux de démolition de structures contenant de l'amiante."
      },
    ]
  },
  {
    name: "Affections dues aux agents physiques",
    diseases: [
      {
        tableau: "Tableau n°25",
        name: "Affections provoquées par les rayonnements ionisants",
        description: "Ensemble des pathologies dues à une exposition aux rayonnements X, alpha, bêta, gamma, neutrons. Peut inclure des radiodermites, des cataractes, des leucémies et divers cancers.",
        delay: "Variable, de quelques semaines (radiodermite aiguë) à plus de 30 ans (cancers solides).",
        workList: "Tous travaux exposant à l'action des rayonnements ionisants. Exemples : personnel de radiologie médicale et industrielle, travailleurs de l'industrie nucléaire, personnel de laboratoire utilisant des sources radioactives."
      },
      {
        tableau: "Tableau n°42",
        name: "Surdité professionnelle par exposition aux bruits lésionnels",
        description: "Surdité de perception, bilatérale, irréversible, centrée sur la fréquence 4000 Hz au début. Causée par une exposition prolongée à des niveaux de bruit élevés.",
        delay: "1 an après la fin de l'exposition au bruit.",
        workList: "Travaux exposant à un niveau de bruit quotidien de 85 dB(A) ou plus. Exemples : chaudronnerie, tôlerie, BTP, travail sur rotatives d'imprimerie, aéroports."
      }
    ]
  },
   {
    name: "Affections dues aux agents biologiques",
    diseases: [
      {
        tableau: "Tableau n°18",
        name: "Tétanos professionnel",
        description: "Maladie infectieuse grave causée par la toxine de Clostridium tetani, pénétrant dans l'organisme par une plaie, même minime.",
        delay: "30 jours.",
        workList: "Travaux agricoles, horticoles, d'élevage. Travaux de voirie et d'égouts. Manipulation de déchets. Soins vétérinaires et personnel de laboratoire."
      },
      {
        tableau: "Tableau n°40",
        name: "Hépatites virales professionnelles (A, B, C, D, E)",
        description: "Inflammation du foie d'origine virale. La reconnaissance en maladie professionnelle est liée à une exposition au risque de contamination biologique lors de l'activité.",
        delay: "Variable selon le virus, de 6 mois à plusieurs années pour les formes chroniques.",
        workList: "Personnel des établissements de soins, des laboratoires d'analyses médicales. Personnel d'entretien des locaux de soins. Égoutiers, personnel de collecte et de traitement des ordures."
      }
    ]
  },
  {
      name: "Affections dues à l'inhalation de poussières",
      diseases: [
          {
              tableau: "Tableau n°22",
              name: "Pneumoconioses : Silicose, Asbestose, Sidérose",
              description: "Maladies pulmonaires chroniques causées par l'inhalation de poussières minérales (silice, amiante, fer). Caractérisées par une fibrose pulmonaire qui réduit la capacité respiratoire.",
              delay: "Variable, de 5 à 35 ans selon la poussière et l'intensité de l'exposition.",
              workList: "Travaux miniers, de forage, de sablage. Travaux en fonderie. Travaux exposant à l'amiante. Soudure à l'arc."
          }
      ]
  },
  {
      name: "Troubles Musculo-Squelettiques (TMS)",
      diseases: [
          {
              tableau: "Tableau n°57",
              name: "Affections périarticulaires provoquées par certains gestes et postures de travail",
              description: "Ensemble des pathologies des tissus mous autour des articulations : tendinites, syndromes canalaires (ex: canal carpien), bursites. Concerne épaule, coude, poignet, genou.",
              delay: "De 7 jours (hygroma) à 30 jours (tendinites) et 90 jours (épaule).",
              workList: "Travaux comportant de façon habituelle des mouvements répétés, des efforts excessifs, des postures extrêmes ou des vibrations. Exemples : travail à la chaîne, emballage, caissiers, BTP, nettoyage industriel."
          }
      ]
  }
];
