import { InjuryCategory } from '../types';

export const disabilityData: InjuryCategory[] = [
  {
    name: "I. Membre Supérieur (hors main)",
    subcategories: [
      {
        name: "1.1. Amputations",
        injuries: [
          { name: "Épaule - Amputation interscapulothoracique (membre dominant)", rate: 95 },
          { name: "Épaule - Amputation interscapulothoracique (membre non dominant)", rate: 85 },
          { name: "Épaule - Désarticulation de l'épaule (membre dominant)", rate: 95 },
          { name: "Épaule - Désarticulation de l'épaule (membre non dominant)", rate: 85 },
          { name: "Bras - Au tiers supérieur (membre dominant)", rate: 95 },
          { name: "Bras - Au tiers supérieur (membre non dominant)", rate: 80 },
          { name: "Bras - Au tiers moyen ou inférieur (membre dominant)", rate: 90 },
          { name: "Bras - Au tiers moyen ou inférieur (membre non dominant)", rate: 80 },
          { name: "Coude - Désarticulation du coude (membre dominant)", rate: 90 },
          { name: "Coude - Désarticulation du coude (membre non dominant)", rate: 80 },
        ],
      },
      {
        name: "1.2. Atteinte des fonctions articulaires",
        injuries: [
          { name: "Épaule - Blocage, omoplate bloquée (membre dominant)", rate: 55 },
          { name: "Épaule - Blocage, omoplate bloquée (membre non dominant)", rate: 45 },
          { name: "Épaule - Blocage, avec omoplate mobile (membre dominant)", rate: 40 },
          { name: "Épaule - Blocage, avec omoplate mobile (membre non dominant)", rate: 30 },
          { name: "Épaule - Limitation moyenne de tous les mouvements (membre dominant)", rate: 20 },
          { name: "Épaule - Limitation moyenne de tous les mouvements (membre non dominant)", rate: 15 },
          { name: "Épaule - Limitation légère de tous les mouvements (membre dominant)", rate: [10, 15] },
          { name: "Épaule - Limitation légère de tous les mouvements (membre non dominant)", rate: [8, 10] },
          { name: "Épaule - Périarthrite douloureuse (taux à ajouter aux limitations)", rate: 5 },
          { name: "Épaule - Formes graves de luxation récidivante, récidives fréquentes (membre dominant)", rate: 40 },
          { name: "Épaule - Formes graves de luxation récidivante, récidives fréquentes (membre non dominant)", rate: 30 },
          { name: "Épaule - Formes moyennes de luxation récidivante, récidives espacées (membre dominant)", rate: 20 },
          { name: "Épaule - Formes moyennes de luxation récidivante, récidives espacées (membre non dominant)", rate: 15 },
          { name: "Épaule - Formes légères de luxation (membre dominant)", rate: [10, 15] },
          { name: "Épaule - Formes légères de luxation (membre non dominant)", rate: [8, 10] },
          { name: "Coude - Blocage flexion-extension, angle favorable (membre dominant)", rate: 25 },
          { name: "Coude - Blocage flexion-extension, angle favorable (membre non dominant)", rate: 22 },
          { name: "Coude - Blocage flexion-extension, angle défavorable (100-145° ou 0-60°) (membre dominant)", rate: 40 },
          { name: "Coude - Blocage flexion-extension, angle défavorable (100-145° ou 0-60°) (membre non dominant)", rate: 35 },
          { name: "Coude - Limitation flexion-extension, mouvements conservés de 70-145° (membre dominant)", rate: 10 },
          { name: "Coude - Limitation flexion-extension, mouvements conservés de 70-145° (membre non dominant)", rate: 8 },
          { name: "Coude - Limitation flexion-extension, mvts conservés autour angle favorable (membre dominant)", rate: 20 },
          { name: "Coude - Limitation flexion-extension, mvts conservés autour angle favorable (membre non dominant)", rate: 15 },
          { name: "Coude - Limitation flexion-extension, mouvements conservés de 0-70° (membre dominant)", rate: 25 },
          { name: "Coude - Limitation flexion-extension, mouvements conservés de 0-70° (membre non dominant)", rate: 22 },
          { name: "Poignet - Blocage en rectitude/extension, sans atteinte prono-supination (membre dominant)", rate: 15 },
          { name: "Poignet - Blocage en rectitude/extension, sans atteinte prono-supination (membre non dominant)", rate: 10 },
          { name: "Poignet - Blocage en flexion, sans troubles importants prono-supination (membre dominant)", rate: 35 },
          { name: "Poignet - Blocage en flexion, sans troubles importants prono-supination (membre non dominant)", rate: 30 },
          { name: "Poignet - Limitation prono-supination (s'ajoute au blocage) (membre dominant)", rate: [10, 15] },
          { name: "Poignet - Limitation prono-supination (s'ajoute au blocage) (membre non dominant)", rate: [8, 12] },
        ],
      },
      {
        name: "1.3. Pseudarthroses et déformations",
        injuries: [
          { name: "Clavicule - Cal difforme, sans compression nerveuse (membre dominant)", rate: [2, 5] },
          { name: "Clavicule - Cal difforme, sans compression nerveuse (membre non dominant)", rate: [1, 3] },
          { name: "Clavicule - Pseudarthrose (membre dominant)", rate: 5 },
          { name: "Clavicule - Pseudarthrose (membre non dominant)", rate: 3 },
          { name: "Épaule - Épaule ballante (perte substance osseuse étendue) (membre dominant)", rate: 70 },
          { name: "Épaule - Épaule ballante (perte substance osseuse étendue) (membre non dominant)", rate: 60 },
          { name: "Bras - Déformation avec atrophie musculaire (taux à ajouter) (membre dominant)", rate: [5, 10] },
          { name: "Bras - Déformation avec atrophie musculaire (taux à ajouter) (membre non dominant)", rate: [4, 8] },
          { name: "Bras - Pseudarthrose diaphyse humérale, serrée (membre dominant)", rate: 20 },
          { name: "Bras - Pseudarthrose diaphyse humérale, serrée (membre non dominant)", rate: 15 },
          { name: "Bras - Pseudarthrose diaphyse humérale, lâche (membre dominant)", rate: 50 },
          { name: "Bras - Pseudarthrose diaphyse humérale, lâche (membre non dominant)", rate: 40 },
          { name: "Bras - Raccourcissement important (> 4cm) (membre dominant)", rate: [5, 10] },
          { name: "Bras - Raccourcissement important (> 4cm) (membre non dominant)", rate: [4, 8] },
          { name: "Coude - Coude ballant (perte substance osseuse) (membre dominant)", rate: 55 },
          { name: "Coude - Coude ballant (perte substance osseuse) (membre non dominant)", rate: 45 },
          { name: "Avant-bras (2 os) - Pseudarthrose serrée (membre dominant)", rate: 20 },
          { name: "Avant-bras (2 os) - Pseudarthrose serrée (membre non dominant)", rate: 15 },
          { name: "Avant-bras (2 os) - Pseudarthrose lâche (avant-bras ballant) (membre dominant)", rate: 50 },
          { name: "Avant-bras (2 os) - Pseudarthrose lâche (avant-bras ballant) (membre non dominant)", rate: 40 },
          { name: "Avant-bras (radius) - Pseudarthrose serrée (membre dominant)", rate: 8 },
          { name: "Avant-bras (radius) - Pseudarthrose serrée (membre non dominant)", rate: 6 },
          { name: "Avant-bras (radius) - Pseudarthrose lâche (membre dominant)", rate: 30 },
          { name: "Avant-bras (radius) - Pseudarthrose lâche (membre non dominant)", rate: 25 },
          { name: "Avant-bras (cubitus) - Pseudarthrose serrée (membre dominant)", rate: 5 },
          { name: "Avant-bras (cubitus) - Pseudarthrose serrée (membre non dominant)", rate: 4 },
          { name: "Avant-bras (cubitus) - Pseudarthrose lâche (membre dominant)", rate: 25 },
          { name: "Avant-bras (cubitus) - Pseudarthrose lâche (membre non dominant)", rate: 20 },
          { name: "Poignet - Poignet ballant (perte substance carpe) (membre dominant)", rate: 40 },
          { name: "Poignet - Poignet ballant (perte substance carpe) (membre non dominant)", rate: 25 },
        ],
      },
      {
        name: "1.4. Séquelles musculaires et tendineuses",
        injuries: [
          { name: "Rupture du deltoïde (membre dominant)", rate: [10, 25] },
          { name: "Rupture du deltoïde (membre non dominant)", rate: [6, 20] },
          { name: "Rupture du biceps, séquelles légères (membre dominant)", rate: 4 },
          { name: "Rupture du biceps, séquelles légères (membre non dominant)", rate: 3 },
          { name: "Rupture du biceps, un des deux chefs non réparé (membre dominant)", rate: 12 },
          { name: "Rupture du biceps, un des deux chefs non réparé (membre non dominant)", rate: 10 },
          { name: "Rupture complète de l'insertion inférieure du biceps non réparée (membre dominant)", rate: 25 },
          { name: "Rupture complète de l'insertion inférieure du biceps non réparée (membre non dominant)", rate: 20 },
          { name: "Syndrome de Volkmann (membre dominant)", rate: [30, 70] },
          { name: "Syndrome de Volkmann (membre non dominant)", rate: [25, 60] },
        ],
      },
    ]
  },
  {
    name: "II. La Main",
    subcategories: [
      {
        name: "2.1. Amputations",
        injuries: [
          { name: "Amputation métacarpienne conservant palette carpienne (membre dominant)", rate: 70 },
          { name: "Amputation métacarpienne conservant palette carpienne (membre non dominant)", rate: 60 },
          { name: "Pouce - Perte avec le premier métacarpien (membre dominant)", rate: 35 },
          { name: "Pouce - Perte avec le premier métacarpien (membre non dominant)", rate: 30 },
          { name: "Pouce - Perte des deux phalanges (membre dominant)", rate: 28 },
          { name: "Pouce - Perte des deux phalanges (membre non dominant)", rate: 24 },
          { name: "Pouce - Perte de la phalange unguéale (membre dominant)", rate: 14 },
          { name: "Pouce - Perte de la phalange unguéale (membre non dominant)", rate: 12 },
          { name: "Index/Médius - Trois phalanges (avec ou sans tête métacarpien) (membre dominant)", rate: 14 },
          { name: "Index/Médius - Trois phalanges (avec ou sans tête métacarpien) (membre non dominant)", rate: 12 },
          { name: "Index/Médius - Deux phalanges ou phalange unguéale seule (membre dominant)", rate: 7 },
          { name: "Index/Médius - Deux phalanges ou phalange unguéale seule (membre non dominant)", rate: 6 },
          { name: "Annulaire - Trois phalanges (avec ou sans tête métacarpien) (membre dominant)", rate: 6 },
          { name: "Annulaire - Trois phalanges (avec ou sans tête métacarpien) (membre non dominant)", rate: 5 },
          { name: "Annulaire - Deux phalanges ou phalange unguéale (membre dominant)", rate: 3 },
          { name: "Annulaire - Deux phalanges ou phalange unguéale (membre non dominant)", rate: 3 },
          { name: "Auriculaire - Trois phalanges (avec ou sans tête métacarpien) (membre dominant)", rate: 8 },
          { name: "Auriculaire - Trois phalanges (avec ou sans tête métacarpien) (membre non dominant)", rate: 7 },
          { name: "Auriculaire - Deux phalanges ou phalange unguéale (membre dominant)", rate: 4 },
          { name: "Auriculaire - Deux phalanges ou phalange unguéale (membre non dominant)", rate: 4 },
        ]
      },
      {
        name: "2.2. Atteinte des fonctions articulaires",
        injuries: [
          { name: "Carpo-métacarpienne du pouce - Blocage en position de fonction (membre dominant)", rate: 14 },
          { name: "Carpo-métacarpienne du pouce - Blocage en position de fonction (membre non dominant)", rate: 12 },
          { name: "Carpo-métacarpienne du pouce - Blocage en position défavorable (membre dominant)", rate: 28 },
          { name: "Carpo-métacarpienne du pouce - Blocage en position défavorable (membre non dominant)", rate: 24 },
          { name: "Carpo-métacarpienne du pouce - Luxation ancienne non réduite (membre dominant)", rate: [9, 12] },
          { name: "Carpo-métacarpienne du pouce - Luxation ancienne non réduite (membre non dominant)", rate: [7, 10] },
          { name: "Pouce (métacarpo-phalangienne) - Blocage en semi-flexion/extension (membre dominant)", rate: 6 },
          { name: "Pouce (métacarpo-phalangienne) - Blocage en semi-flexion/extension (membre non dominant)", rate: 4 },
          { name: "Pouce (métacarpo-phalangienne) - Blocage en flexion complète (membre dominant)", rate: 10 },
          { name: "Pouce (métacarpo-phalangienne) - Blocage en flexion complète (membre non dominant)", rate: 8 },
          { name: "Pouce (métacarpo-phalangienne) - Laxité articulaire non réduite (membre dominant)", rate: 15 },
          { name: "Pouce (métacarpo-phalangienne) - Laxité articulaire non réduite (membre non dominant)", rate: 12 },
          { name: "Pouce (inter-phalangienne) - Blocage en flexion complète (membre dominant)", rate: 10 },
          { name: "Pouce (inter-phalangienne) - Blocage en flexion complète (membre non dominant)", rate: 8 },
          { name: "Pouce (inter-phalangienne) - Blocage en semi-flexion/extension ou luxation (membre dominant)", rate: 6 },
          { name: "Pouce (inter-phalangienne) - Blocage en semi-flexion/extension ou luxation (membre non dominant)", rate: 4 },
          { name: "Autres doigts - Raideur Index (membre dominant)", rate: [7, 14] },
          { name: "Autres doigts - Raideur Index (membre non dominant)", rate: [6, 12] },
          { name: "Autres doigts - Raideur Annulaire et Médius (membre dominant)", rate: [4, 6] },
          { name: "Autres doigts - Raideur Annulaire et Médius (membre non dominant)", rate: [3, 5] },
          { name: "Autres doigts - Raideur Auriculaire (membre dominant)", rate: [4, 8] },
          { name: "Autres doigts - Raideur Auriculaire (membre non dominant)", rate: [3, 6] },
        ]
      },
      {
        name: "2.3. Pseudarthroses et déformations (Main)",
        injuries: [
          { name: "Métacarpien - Cal saillant entraînant une gêne fonctionnelle (membre dominant)", rate: [2, 4] },
          { name: "Métacarpien - Cal saillant entraînant une gêne fonctionnelle (membre non dominant)", rate: [2, 4] },
        ]
      },
      {
        name: "2.4. Ostéite et ostéomyélite (Main)",
        injuries: [
            { name: "Fistule persistante unique (s'ajoute aux éléments séquellaires)", rate: 10 },
            { name: "Fistule persistante avec déformation osseuse (s'ajoute aux éléments séquellaires)", rate: [10, 25] },
        ]
      }
    ]
  },
  {
    name: "III. Membre Inférieur",
    subcategories: [
      {
        name: "1. Amputations",
        injuries: [
          { name: "Perte des deux membres inférieurs", rate: 100 },
          { name: "Amputation inter-ilio-abdominale", rate: 100 },
          { name: "Cuisse - Désarticulation de la hanche", rate: 100 },
          { name: "Cuisse - Amputation inter-trochantérienne", rate: 100 },
          { name: "Cuisse - Amputation sous-trochantérienne", rate: 100 },
          { name: "Cuisse - Amputation au tiers moyen ou inférieur", rate: 80 },
          { name: "Genou - Désarticulation", rate: 80 },
          { name: "Jambe - Amputation au tiers supérieur", rate: 70 },
          { name: "Jambe - Amputation au tiers moyen ou inférieur", rate: 70 },
          { name: "Cheville - Désarticulation tibio-tarsienne", rate: 50 },
          { name: "Cheville - Amputation du pied avec conservation calcanéum", rate: 40 },
          { name: "Pied - Désarticulation médico-tarsienne de Chopart", rate: 45 },
          { name: "Pied - Amputation transmétatarsienne de l'avant-pied", rate: 30 },
          { name: "Orteils - Perte de 5 orteils", rate: 25 },
          { name: "Orteils - Premier orteil (2 phalanges avec métatarsien)", rate: 20 },
          { name: "Orteils - Premier orteil (2 phalanges)", rate: 12 },
          { name: "Orteils - Premier orteil (phalange distale)", rate: 5 },
          { name: "Orteils - Amputation d'un orteil (autre que le premier)", rate: 2 },
          { name: "Orteils - 2ème ou 5ème orteil avec leur métatarsien", rate: 10 },
          { name: "Orteils - 3ème ou 4ème orteil avec leur métatarsien", rate: 5 },
        ]
      },
      {
        name: "2. Atteintes des fonctions articulaires",
        injuries: [
          { name: "Symphyse pubienne - Disjonction", rate: [10, 20] },
          { name: "Articulations sacro-iliaques - Diastasis", rate: 45 },
          { name: "Articulations sacro-iliaques - Arthropathies douloureuses chroniques", rate: 15 },
          { name: "Hanche - Blocage en rectitude (position favorable)", rate: 55 },
          { name: "Hanche - Blocage en mauvaise position (flexion, adduction, abduction)", rate: 70 },
          { name: "Hanche - Blocage des deux hanches", rate: 100 },
          { name: "Hanche - Limitation des mouvements favorables", rate: [10, 25] },
          { name: "Hanche - Limitation des mouvements très limités", rate: [25, 40] },
          { name: "Genou - Blocage en rectitude (favorable)", rate: 30 },
          { name: "Genou - Blocage en flexion de 5 à 25°", rate: 35 },
          { name: "Genou - Blocage en flexion de 25 à 50°", rate: 40 },
          { name: "Genou - Blocage en flexion de 50 à 80°", rate: 50 },
          { name: "Genou - Blocage en flexion au-delà de 80°", rate: 60 },
          { name: "Genou - Déviation en valgum ou varum (en plus)", rate: [10, 15] },
          { name: "Genou - Déficit d'extension de 5 à 25°", rate: 5 },
          { name: "Genou - Déficit d'extension de 25°", rate: 15 },
          { name: "Genou - Déficit d'extension de 45°", rate: 30 },
          { name: "Genou - Flexion limitée à 110°", rate: 5 },
          { name: "Genou - Flexion limitée à 90°", rate: 15 },
          { name: "Genou - Flexion limitée à 45°", rate: 25 },
          { name: "Genou - Mouvements anormaux (laxité ligamentaire)", rate: [5, 35] },
          { name: "Genou - Blocage ou dérobement intermittent", rate: [5, 15] },
          { name: "Genou - Rotule anormalement mobile (rupture ailerons)", rate: 10 },
          { name: "Genou - Luxation récidivante", rate: 15 },
          { name: "Genou - Patellectomie", rate: 5 },
          { name: "Genou - Hydarthrose chronique légère", rate: 5 },
          { name: "Genou - Hydarthrose chronique récidivante avec amyotrophie", rate: 15 },
          { name: "Pied/Cheville (tibio-tarsienne) - Blocage en bonne position, mobilité conservée", rate: 15 },
          { name: "Pied/Cheville (tibio-tarsienne) - Blocage en bonne position, perte mobilité autres articulations", rate: [20, 35] },
          { name: "Pied/Cheville (tibio-tarsienne) - Blocage pied en talus", rate: 25 },
          { name: "Pied/Cheville (tibio-tarsienne) - Blocage pied en équin prononcé", rate: [20, 35] },
          { name: "Pied/Cheville - Déviation en varus (en plus)", rate: 15 },
          { name: "Pied/Cheville - Déviation en valgus (en plus)", rate: 10 },
          { name: "Pied/Cheville - Limitation des mouvements (angle favorable)", rate: 5 },
          { name: "Pied/Cheville - Diastasis tibio-péronier important", rate: 12 },
          { name: "Pied (sous-astragalienne/tarso-métatarsienne) - Blocage ou limitation", rate: 15 },
          { name: "Pied (métataso-phalangiennes) - Blocage gros orteil en rectitude", rate: 5 },
          { name: "Pied (métataso-phalangiennes) - Blocage gros orteil en mauvaise position", rate: 10 },
          { name: "Pied (métataso-phalangiennes) - Blocage autres orteils en rectitude", rate: 2 },
          { name: "Pied (métataso-phalangiennes) - Blocage autres orteils en mauvaise position", rate: 4 },
          { name: "Pied (métataso-phalangiennes) - Limitation mouvements gros orteil", rate: [2, 4] },
          { name: "Pied (métataso-phalangiennes) - Limitation mouvements autres orteils", rate: [1, 4] },
          { name: "Pied (interphalangienne gros orteil) - Blocage", rate: 3 },
          { name: "Pied (interphalangienne gros orteil) - Limitation", rate: 1 },
        ]
      },
      {
        name: "3. Pseudarthroses, Déformations, Raccourcissements",
        injuries: [
          { name: "Cuisse - Angulation, déformation avec retentissement marche", rate: [10, 30] },
          { name: "Cuisse - Pseudarthrose du fémur", rate: 70 },
          { name: "Genou - Pseudarthrose consécutive à une résection", rate: 50 },
          { name: "Genou - Genou ballant", rate: 60 },
          { name: "Jambe - Angulation, déformation en baïonnette", rate: [5, 25] },
          { name: "Jambe - Pseudarthrose du tibia ou des deux os", rate: 70 },
          { name: "Pied - Affaissement de la voûte plantaire", rate: [5, 15] },
          { name: "Pied - Pieds creux post-traumatique", rate: [5, 10] },
          { name: "Pied - Exostose sous-calcanéenne", rate: 15 },
          { name: "Pied - Cal vicieux, exubérant", rate: [5, 15] },
          { name: "Raccourcissement - Moins de 2 cm", rate: 0 },
          { name: "Raccourcissement - De 2 à 3 cm", rate: [2, 4] },
          { name: "Raccourcissement - De 4 cm", rate: 9 },
          { name: "Raccourcissement - De 5 cm", rate: 15 },
          { name: "Raccourcissement - De 6 cm", rate: 18 },
          { name: "Raccourcissement - De 7 cm", rate: 21 },
          { name: "Raccourcissement - De 8 cm", rate: 24 },
          { name: "Raccourcissement - De 9 cm", rate: 27 },
          { name: "Raccourcissement - De 10 cm", rate: 30 },
        ]
      },
      {
        name: "4. Séquelles Musculaires et Tendineuses",
        injuries: [
          { name: "Rupture musculaire complète (triceps, adducteurs, etc.)", rate: [10, 15] },
          { name: "Rupture du tendon rotulien ou quadricipital - Non réparée", rate: 30 },
          { name: "Rupture d'un aileron rotulien, avec mobilité anormale", rate: 15 },
          { name: "Rupture du tendon d'Achille - Non réparée", rate: 30 },
          { name: "Rupture des péroniers latéraux - Complète", rate: 20 },
          { name: "Rupture des péroniers latéraux - Incomplète", rate: 10 },
          { name: "Luxation des tendons péroniers (origine traumatique)", rate: 10 },
        ]
      },
      {
        name: "5. Ostéites et Ostéomyélites",
        injuries: [
            { name: "Fistule persistante unique", rate: 10 },
            { name: "Fistules persistantes multiples, avec déformation osseuse", rate: [15, 25] },
        ]
      }
    ]
  },
  {
    name: "IV. Rachis",
    subcategories: [
      {
        name: "Rachis Cervical",
        injuries: [
            { name: "Douleurs et gêne fonctionnelle discrètes", rate: [5, 15] },
            { name: "Douleurs et gêne fonctionnelle importantes", rate: [15, 30] },
            { name: "Séquelles anatomiques et fonctionnelles très importantes", rate: [40, 50] },
        ]
      },
      {
        name: "Rachis Dorso-Lombaire",
        injuries: [
            { name: "Douleurs et gêne fonctionnelle discrètes", rate: [5, 15] },
            { name: "Douleurs et gêne fonctionnelle importantes", rate: [15, 25] },
            { name: "Séquelles anatomiques et fonctionnelles très importantes", rate: [25, 40] },
        ]
      },
      {
        name: "Sacrum et Coccyx",
        injuries: [
            { name: "Fracture du sacrum avec gêne", rate: [5, 15] },
            { name: "Coccygodynie (douleurs en position assise)", rate: [5, 15] },
        ]
      }
    ]
  },
  {
    name: "V. Crâne et Système Nerveux",
    subcategories: [
      {
        name: "1. Séquelles osseuses (Crâne)",
        injuries: [
            { name: "Embarrure crânienne persistante - 1/2 cm", rate: 2 },
            { name: "Embarrure crânienne persistante - 1 cm", rate: 5 },
            { name: "Embarrure crânienne persistante - Plus de 1 cm", rate: 10 },
            { name: "Perte de substance osseuse - Diamètre 3 cm", rate: 2 },
            { name: "Perte de substance osseuse - Diamètre 4 à 9 cm", rate: [20, 40] },
            { name: "Perte de substance osseuse - Diamètre 10 cm", rate: [40, 60] },
            { name: "Volet cicatrisé en mauvaise position", rate: [5, 10] },
        ]
      },
      {
        name: "2.1. Séquelles propres au crâne et l'encéphale",
        injuries: [
            { name: "Syndrome post-commotionnel (céphalées, vertiges, etc.)", rate: [5, 20] },
            { name: "Syndrome cervico-céphalique - Isolé", rate: [5, 15] },
            { name: "Syndrome cervico-céphalique - Associé à un syndrome post-commotionnel (max 25%)", rate: [15, 25] },
            { name: "Épilepsie généralisée légère (contrôlée par traitement)", rate: [10, 15] },
            { name: "Épilepsie généralisée mal contrôlée (crises fréquentes)", rate: [30, 70] },
            { name: "Épilepsie généralisée incontrôlée (impossible toute activité)", rate: 100 },
            { name: "Épilepsie focalisée Bravais-Jacksonnienne", rate: [10, 40] },
            { name: "Épilepsie focalisée psycho-motrice", rate: [10, 60] },
            { name: "Épilepsie focalisée frontale / occipitale / pariétale", rate: [10, 40] },
            { name: "Syndrome parkinsonien léger (répondant au traitement)", rate: [10, 20] },
            { name: "Syndrome parkinsonien accentué avec gêne appréciable", rate: [20, 40] },
            { name: "Syndrome parkinsonien important", rate: [40, 90] },
            { name: "Syndrome parkinsonien excluant toute activité", rate: 100 },
            { name: "Torticolis spasmodiques, post-traumatiques", rate: [10, 20] },
            { name: "Tremblement volitionnel post-traumatique (unilatéral, dominant)", rate: [30, 60] },
            { name: "Tremblement volitionnel post-traumatique (unilatéral, non dominant)", rate: [20, 40] },
            { name: "Syndrome cérébelleux bilatéral global (incompatible avec travail)", rate: 100 },
            { name: "Syndrome cérébelleux bilatéral incomplet", rate: [60, 80] },
            { name: "Syndrome cérébelleux bilatéral léger", rate: [30, 50] },
            { name: "Syndrome cérébelleux unilatéral complet (dominant)", rate: 80 },
            { name: "Syndrome cérébelleux unilatéral complet (non dominant)", rate: 75 },
            { name: "Syndrome cérébelleux unilatéral moyen (dominant)", rate: [30, 70] },
            { name: "Syndrome cérébelleux unilatéral moyen (non dominant)", rate: [25, 65] },
            { name: "Syndrome cérébelleux unilatéral léger (dominant)", rate: [10, 25] },
            { name: "Syndrome cérébelleux unilatéral léger (non dominant)", rate: [10, 20] },
            { name: "Dysarthrie légère", rate: [5, 15] },
            { name: "Dysarthrie importante", rate: [15, 60] },
            { name: "Atteinte complète de l'expression verbale (Aphasie)", rate: 100 },
            { name: "Séquelles psychonévrotiques (post-coma) - Névroses", rate: [20, 40] },
            { name: "Séquelles psychonévrotiques (post-coma) - Syndrome psychiatrique", rate: [20, 100] },
            { name: "Atteinte diffuse des hémisphères - Troubles amnésiques", rate: [30, 80] },
            { name: "Atteinte diffuse des hémisphères - Troubles sévères de l'attention", rate: [40, 80] },
            { name: "Atteinte diffuse des hémisphères - Grande indifférence, passivité", rate: 100 },
        ]
      },
      {
        name: "2.1.9. Nerfs crâniens",
        injuries: [
            { name: "Nerf Trijumeau - Anesthésie simple sans douleur", rate: [5, 10] },
            { name: "Nerf Trijumeau - Névralgie intense et persistante", rate: [10, 60] },
            { name: "Nerf Trijumeau - Atteinte motrice unilatérale (mastication)", rate: 5 },
            { name: "Nerf Trijumeau - Atteinte motrice bilatérale (mastication)", rate: [20, 30] },
            { name: "Nerf Facial - Paralysie périphérique totale et définitive", rate: [20, 30] },
            { name: "Nerf Facial - Paralysie périphérique partielle et définitive", rate: [10, 30] },
            { name: "Nerf Facial - Paralysie bilatérale", rate: [20, 50] },
            { name: "Nerf Facial - Contracture post-paralytique ou hémispasme", rate: [10, 20] },
            { name: "Nerf Glossopharyngien - Paralysie unilatérale (fausse route)", rate: 10 },
            { name: "Nerf Glossopharyngien - Paralysie bilatérale (exceptionnelle)", rate: 20 },
            { name: "Nerf Spinal - Atrophie du trapèze et sterno-cléido-mastoïdien", rate: [15, 30] },
        ]
      },
      {
        name: "2.3. Séquelles propres à l'atteinte médullaire",
        injuries: [
            { name: "Syndromes atrophiques MS - Prédominance proximale (ceinture scapulaire) (dominant)", rate: [20, 40] },
            { name: "Syndromes atrophiques MS - Prédominance proximale (ceinture scapulaire) (non dominant)", rate: [20, 35] },
            { name: "Syndromes atrophiques MS - Prédominance distale (main, avant-bras) (dominant)", rate: [30, 70] },
            { name: "Syndromes atrophiques MS - Prédominance distale (main, avant-bras) (non dominant)", rate: [30, 60] },
            { name: "Syndromes atrophiques MS - Atteinte complète avec impotence totale (dominant)", rate: 90 },
            { name: "Syndromes atrophiques MS - Atteinte complète avec impotence totale (non dominant)", rate: 80 },
            { name: "Syndromes atrophiques MI - Prédominance proximale (ceinture pelvienne)", rate: [40, 50] },
            { name: "Syndromes atrophiques MI - Prédominance muscles de la cuisse", rate: [20, 40] },
            { name: "Syndromes atrophiques MI - Prédominance distale (pied, jambe)", rate: [25, 50] },
            { name: "Syndromes atrophiques MI - Atteinte complète avec impotence absolue", rate: 75 },
            { name: "Troubles sphinctériens - Rétention rebelle (coprostase)", rate: 10 },
            { name: "Troubles sphinctériens - Incontinence urinaire incomplète", rate: [10, 25] },
            { name: "Troubles sphinctériens - Incontinence urinaire complète", rate: 70 },
            { name: "Troubles génitaux - Abolition ou diminution considérable des érections", rate: [10, 20] },
            { name: "Syndrome de la queue de cheval", rate: [30, 50] },
        ]
      },
       {
        name: "2.4. Séquelles d'atteinte cérébrale ou médullaire",
        injuries: [
            { name: "Hémiplégie - Impotence complète avec troubles sphinctériens", rate: 100 },
            { name: "Hémiplégie - Conservation activité réduite (côté dominant)", rate: [60, 80] },
            { name: "Hémiplégie - Conservation activité réduite (côté non dominant)", rate: [50, 70] },
            { name: "Monoplégie MI - Marche possible mais difficile en terrain accidenté", rate: 30 },
            { name: "Monoplégie MI - Marche difficile, même en terrain plat", rate: 40 },
            { name: "Monoplégie MS - Préhension possible avec gêne dextérité (dominant)", rate: [10, 25] },
            { name: "Monoplégie MS - Préhension possible avec gêne dextérité (non dominant)", rate: [8, 20] },
            { name: "Monoplégie MS - Préhension possible sans dextérité (dominant)", rate: [25, 50] },
            { name: "Monoplégie MS - Préhension possible sans dextérité (non dominant)", rate: [20, 45] },
            { name: "Monoplégie MS - Mouvements très difficiles (dominant)", rate: [50, 75] },
            { name: "Monoplégie MS - Mouvements très difficiles (non dominant)", rate: [45, 65] },
            { name: "Monoplégie MS - Mouvements impossibles (dominant)", rate: 85 },
            { name: "Monoplégie MS - Mouvements impossibles (non dominant)", rate: 75 },
            { name: "Douleurs de type spino-thalamique (brûlure unilatérale)", rate: [20, 60] },
            { name: "Douleurs de type spino-thalamique avec impotence totale d'un membre", rate: 80 },
        ]
      },
       {
        name: "2.5. Système nerveux périphérique",
        injuries: [
            { name: "Paralysie totale du membre supérieur (dominant)", rate: 90 },
            { name: "Paralysie totale du membre supérieur (non dominant)", rate: 80 },
            { name: "Plexus branchial - Paralysie radiculaire supérieure (Duchenne-Erb) (dominant)", rate: 55 },
            { name: "Plexus branchial - Paralysie radiculaire supérieure (Duchenne-Erb) (non dominant)", rate: 45 },
            { name: "Plexus branchial - Paralysie radiculaire inférieure (Déjerine-Klumpke)", rate: 65 },
            { name: "Nerf sous-scapulaire - Paralysie isolée (grand dentelé) (dominant)", rate: 10 },
            { name: "Nerf sous-scapulaire - Paralysie isolée (grand dentelé) (non dominant)", rate: 5 },
            { name: "Nerf circonflexe - Paralysie (deltoïde, petit rond) (dominant)", rate: 35 },
            { name: "Nerf circonflexe - Paralysie (deltoïde, petit rond) (non dominant)", rate: 30 },
            { name: "Nerf musculo-cutané - Paralysie (biceps, brachial antérieur) (dominant)", rate: 25 },
            { name: "Nerf musculo-cutané - Paralysie (biceps, brachial antérieur) (non dominant)", rate: 20 },
            { name: "Nerf médian - Paralysie au bras (dominant)", rate: 55 },
            { name: "Nerf médian - Paralysie au bras (non dominant)", rate: 45 },
            { name: "Nerf médian - Paralysie au poignet (dominant)", rate: 45 },
            { name: "Nerf médian - Paralysie au poignet (non dominant)", rate: 35 },
            { name: "Nerf cubital - Paralysie au bras", rate: 45 },
            { name: "Nerf cubital - Paralysie au poignet (griffe cubitale) (dominant)", rate: 35 },
            { name: "Nerf cubital - Paralysie au poignet (griffe cubitale) (non dominant)", rate: 25 },
            { name: "Nerf radial - Paralysie au dessus du coude (dominant)", rate: 55 },
            { name: "Nerf radial - Paralysie au dessus du coude (non dominant)", rate: 45 },
            { name: "Nerf radial - Paralysie au dessous du coude (dominant)", rate: 45 },
            { name: "Nerf radial - Paralysie au dessous du coude (non dominant)", rate: 35 },
            { name: "Paralysie totale d'un membre inférieur, flasque", rate: 75 },
            { name: "Nerf sciatique - Paralysie complète", rate: 60 },
            { name: "Nerf sciatique poplité externe - Paralysie", rate: 30 },
            { name: "Nerf sciatique poplité interne - Paralysie", rate: 30 },
            { name: "Nerf crural - Paralysie (quadriceps)", rate: 40 },
            { name: "Nerf obturateur - Paralysie", rate: 15 },
        ]
      },
       {
        name: "2.6. Syndromes algodystrophiques",
        injuries: [
            { name: "Algodystrophie MS - Forme mineure", rate: [10, 20] },
            { name: "Algodystrophie MS - Forme sévère avec impotence", rate: [30, 50] },
            { name: "Algodystrophie MI - Forme mineure", rate: [10, 20] },
            { name: "Algodystrophie MI - Forme sévère avec impotence", rate: [30, 50] },
        ]
      }
    ]
  },
  {
      name: "VI. Oto-Rhino-Laryngologie (ORL)",
      subcategories: [
          {
              name: "1. Nez et Sinus",
              injuries: [
                  { name: "Sténose nasale unilatérale - Simple diminution", rate: 2 },
                  { name: "Sténose nasale unilatérale - Avec formation de croûtes", rate: 4 },
                  { name: "Sténose nasale unilatérale - Totale avec retentissement", rate: [6, 10] },
                  { name: "Sténose nasale bilatérale - Diminution < 1/3 perméabilité", rate: 4 },
                  { name: "Sténose nasale bilatérale - Diminution accentuée avec croûtes", rate: 8 },
                  { name: "Sténose nasale bilatérale - Serrée avec respiration buccale", rate: [15, 20] },
                  { name: "Sténose nasale bilatérale - Troubles fonctionnels intermittents", rate: [4, 6] },
                  { name: "Perforation de la cloison nasale - Avec phénomènes irritatifs", rate: 3 },
                  { name: "Rhinites croûteuses - Unilatérale", rate: 4 },
                  { name: "Rhinites croûteuses - Bilatérale", rate: 8 },
                  { name: "Troubles olfactifs - Anosmie et troubles divers", rate: [5, 8] },
                  { name: "Déformation de la pyramide nasale (post-traumatique)", rate: [5, 20] },
                  { name: "Sinusite maxillaire chronique - Unilatérale", rate: [5, 8] },
                  { name: "Sinusite maxillaire chronique - Bilatérale", rate: [10, 13] },
                  { name: "Sinusites fronto-ethmoïdales ou sphénoïdales - Unilatérale", rate: [15, 20] },
                  { name: "Sinusites fronto-ethmoïdales ou sphénoïdales - Bilatérale", rate: [25, 30] },
                  { name: "Cranio-hydrorrhée - Non compliquée", rate: 30 },
                  { name: "Cranio-hydrorrhée - Compliquée de méningite à répétition", rate: 60 },
              ]
          },
          {
              name: "3. Pharynx",
              injuries: [
                  { name: "Gêne à la déglutition par rétrécissement", rate: [5, 35] },
              ]
          },
          {
              name: "4. Larynx",
              injuries: [
                  { name: "Troubles vocaux - Dysphonie seule", rate: [5, 8] },
                  { name: "Troubles vocaux - Aphonie sans dyspnée", rate: 30 },
                  { name: "Troubles respiratoires - Trachéotomie sans port de canule", rate: 50 },
                  { name: "Troubles respiratoires - Trachéotomie avec port de canule", rate: 80 },
              ]
          },
          {
              name: "5. Oreilles",
              injuries: [
                  { name: "Vertiges - Sans signes objectifs, légère commotion labyrinthique", rate: 5 },
                  { name: "Vertiges - Avec signes objectifs (nystagmus)", rate: [10, 15] },
                  { name: "Vertiges - Inexcitabilité vestibulaire unilatérale", rate: 20 },
                  { name: "Vertiges - Inexcitabilité vestibulaire bilatérale", rate: 25 },
                  { name: "Surdité - Cophose (surdité totale) unilatérale, oreille opposée normale", rate: 15 },
                  { name: "Surdité - Cophose (surdité totale) bilatérale", rate: 70 },
                  { name: "Surdité - Perte auditive légère (ex: 25-35dB une oreille, normale autre)", rate: 3 },
                  { name: "Surdité - Perte auditive moyenne (ex: 45-55dB une oreille, normale autre)", rate: 8 },
                  { name: "Surdité - Perte auditive sévère (ex: 65-80dB une oreille, normale autre)", rate: 15 },
                  { name: "Surdité - Perte auditive bilatérale moyenne (ex: 45-55dB deux oreilles)", rate: 35 },
                  { name: "Acouphènes - Gênant le sommeil, avec baisse acuité", rate: [2, 5] },
                  { name: "Oreille moyenne - Perforation du tympan, sans suppuration", rate: [3, 5] },
                  { name: "Oreille moyenne - Otorrhée chronique tubaire unilatérale", rate: [3, 5] },
                  { name: "Oreille moyenne - Otorrhée suppurée chronique unilatérale", rate: [5, 10] },
                  { name: "Oreille moyenne - Otorrhée suppurée chronique bilatérale", rate: [5, 15] },
                  { name: "Oreille externe - Sténose du conduit sans surdité (unilatérale)", rate: [2, 3] },
                  { name: "Oreille externe - Sténose du conduit sans surdité (bilatérale)", rate: [3, 6] },
                  { name: "Oreille externe - Déformation/cicatrice/amputation du pavillon", rate: [2, 10] },
              ]
          }
      ]
  },
  {
      name: "VII. Ophtalmologie",
      subcategories: [
          {
              name: "1. Altération de la fonction visuelle",
              injuries: [
                  { name: "Cécité complète (avec tierce personne)", rate: 100 },
                  { name: "Quasi-cécité", rate: 100 },
                  { name: "Cécité professionnelle non récupérable", rate: 100 },
                  { name: "Scotome central bilatéral", rate: [50, 90] },
                  { name: "Perte complète de la vision d'un oeil (l'autre étant normal)", rate: 30 },
                  { name: "Ablation ou altération du globe (oeil normal) avec prothèse", rate: 33 },
                  { name: "Ablation ou altération du globe (oeil normal) sans prothèse", rate: 40 },
                  { name: "Scotome central unilatéral - Sans perte champ visuel", rate: [15, 18] },
                  { name: "Scotome central unilatéral - Avec perte champ visuel", rate: 30 },
                  { name: "Vision - Acuité 1/10 un oeil, normale autre oeil", rate: 19 },
                  { name: "Vision - Acuité 1/20 un oeil, normale autre oeil", rate: 30 },
                  { name: "Vision - Acuité 1/10 aux deux yeux", rate: 80 },
                  { name: "Vision - Cécité un oeil, acuité 1/20 à l'autre", rate: 90 },
                  { name: "Champ visuel - Déficit en îlot", rate: [5, 15] },
                  { name: "Champ visuel - Rétrécissement concentrique < 10° (un oeil)", rate: [10, 15] },
                  { name: "Champ visuel - Rétrécissement concentrique < 10° (deux yeux)", rate: [70, 80] },
                  { name: "Hémianopsie homonyme droite ou gauche", rate: [30, 35] },
                  { name: "Hémianopsie hétéronyme binasale", rate: [15, 20] },
                  { name: "Hémianopsie hétéronyme bitemporale", rate: [40, 80] },
                  { name: "Hémianopsie horizontale supérieure", rate: [10, 15] },
                  { name: "Hémianopsie horizontale inférieure", rate: [30, 50] },
                  { name: "Vision binoculaire - Diplopie persistante non améliorée", rate: 5 },
                  { name: "Paralysie de l'accommodation et du sphincter irien - Ophtalmoplégie interne unilatérale", rate: 10 },
                  { name: "Paralysie de l'accommodation et du sphincter irien - Ophtalmoplégie interne bilatérale", rate: 20 },
                  { name: "Mydriase isolée - Unilatérale", rate: 5 },
                  { name: "Mydriase isolée - Bilatérale", rate: 10 },
              ]
          },
          {
              name: "2. Annexe de l'oeil",
              injuries: [
                  { name: "Orbite - Lésions des nerfs moteurs/sensitifs", rate: [10, 20] },
                  { name: "Paupières - Déviation des bords (entropion, ectropion, etc.)", rate: [5, 10] },
                  { name: "Paupières - Ptosis / blépharospasme non volontaire (un oeil)", rate: [5, 15] },
                  { name: "Paupières - Ptosis / blépharospasme non volontaire (deux yeux)", rate: [20, 40] },
                  { name: "Paupières - Lagophtalmie (ajouter 10% pour un oeil)", rate: 10 },
                  { name: "Voies lacrymales - Larmoiement par lésion", rate: [5, 10] },
                  { name: "Voies lacrymales - Fistules (pour chaque oeil)", rate: [10, 15] },
                  { name: "Squelette orbitaire - Déformation importante", rate: [5, 15] },
              ]
          }
      ]
  },
  {
      name: "VIII. Stomatologie & Maxillo-faciale",
      subcategories: [
          {
              name: "2. Maxillaire supérieur",
              injuries: [
                  { name: "Mobilité importante du maxillaire avec mastication difficile", rate: [30, 40] },
                  { name: "Mobilité d'un petit fragment du maxillaire", rate: [10, 30] },
                  { name: "Enfoncement et bascule postérieure (faux prognathisme)", rate: [15, 40] },
                  { name: "Trouble léger de l'articulé dentaire par consolidation vicieuse", rate: [5, 15] },
                  { name: "Enfoncement de malaire", rate: [5, 15] },
                  { name: "Perte de substance de la voûte palatine (avec prothèse)", rate: [5, 10] },
                  { name: "Perte de substance du voile du palais (non opéré)", rate: [15, 30] },
                  { name: "Perte de substance partielle du maxillaire (sans prothèse possible)", rate: [5, 20] },
              ]
          },
          {
              name: "3. Mandibule (Maxillaire inférieur)",
              injuries: [
                  { name: "Consolidation vicieuse avec troubles de l'articulé", rate: [5, 15] },
                  { name: "Consolidation vicieuse avec troubles graves (impossibilité de prothèse)", rate: [15, 40] },
                  { name: "Perte de substance et pseudarthrose avec gêne mastication", rate: [5, 40] },
                  { name: "Perte de substance partielle (sans prothèse fonctionnelle)", rate: [5, 20] },
              ]
          },
          {
              name: "4. Constriction des mâchoires",
              injuries: [
                  { name: "Écartement inférieur à 10 mm", rate: [20, 50] },
                  { name: "Écartement entre 10 mm et 20 mm", rate: [10, 20] },
                  { name: "Écartement supérieur à 20 mm", rate: [5, 10] },
              ]
          },
          {
              name: "5. Luxation temporo-maxillaire",
              injuries: [
                  { name: "Irréductible avec ouverture permanente de la bouche", rate: [10, 20] },
                  { name: "Récidivante", rate: [5, 10] },
                  { name: "Syndrome de Costen", rate: [2, 15] },
              ]
          },
          {
              name: "6. Langue",
              injuries: [
                  { name: "Amputation partielle avec gêne mastication/déglutition", rate: [10, 20] },
                  { name: "Amputation étendue avec troubles plus accusés", rate: [20, 75] },
                  { name: "Amputation totale", rate: 80 },
                  { name: "Paralysie de la langue - Incomplète", rate: [5, 15] },
                  { name: "Paralysie de la langue - Complète", rate: 50 },
              ]
          },
          {
              name: "7-9. Fistule, Névralgies, Dents",
              injuries: [
                  { name: "Fistule salivaire à la peau", rate: 20 },
                  { name: "Perte d'une dent (sans prothèse possible)", rate: 1.5 },
                  { name: "Perte de toutes les dents (sans prothèse possible)", rate: 48 },
                  { name: "Perte de toutes les dents (avec prothèse fixe)", rate: 10.5 },
                  { name: "Perte de toutes les dents (avec prothèse mobile)", rate: 21 },
                  { name: "Perte de vitalité d'une ou plusieurs dents (par dent)", rate: 0.5 },
              ]
          }
      ]
  },
  {
      name: "IX. Appareil Digestif",
      subcategories: [
          {
              name: "2. Oesophage",
              injuries: [
                  { name: "Trouble léger avec dysphagie intermittente", rate: 10 },
                  { name: "Séquelles avec sténose organique partielle", rate: [30, 50] },
                  { name: "Sténose totale s'opposant à l'alimentation", rate: 80 },
              ]
          },
          {
              name: "3. Estomac-Duodénum",
              injuries: [
                  { name: "Troubles légers", rate: 10 },
                  { name: "Troubles moyens", rate: [20, 30] },
                  { name: "Troubles graves", rate: [50, 70] },
              ]
          },
          {
              name: "4. Intestin Grêle",
              injuries: [
                  { name: "Troubles légers", rate: 10 },
                  { name: "Troubles moyens avec nécessité d'une diététique", rate: [20, 30] },
                  { name: "Troubles graves (malabsorption, diarrhée)", rate: [50, 70] },
                  { name: "Fistule du grêle (assujettissement propre)", rate: 25 },
              ]
          },
          {
              name: "5. Colon",
              injuries: [
                  { name: "Troubles légers du transit", rate: 10 },
                  { name: "Troubles moyens du transit", rate: [20, 30] },
                  { name: "Troubles graves du transit", rate: [50, 70] },
                  { name: "Fistule stercorale intermittente", rate: 25 },
                  { name: "Anus contre-nature", rate: 60 },
              ]
          },
          {
              name: "6. Rectum et Anus",
              injuries: [
                  { name: "Troubles légers (rectite, etc.)", rate: 10 },
                  { name: "Troubles moyens (incontinence anale partielle)", rate: [30, 50] },
                  { name: "Troubles graves (incontinence totale)", rate: [50, 70] },
                  { name: "Fistules anales simples", rate: 5 },
                  { name: "Fistules anales trans ou extrasphinctériennes", rate: [10, 15] },
                  { name: "Fistules anales complexes", rate: [20, 30] },
              ]
          },
          {
              name: "7-8. Paroi Abdominale et Hernies",
              injuries: [
                  { name: "Cicatrices vicieuses ou cheloïdes de l'abdomen", rate: [5, 10] },
                  { name: "Rupture isolée du grand droit", rate: 10 },
                  { name: "Hernie peu volumineuse, non douloureuse", rate: 5 },
                  { name: "Hernie scrotale plus ou moins réductible", rate: 8 },
                  { name: "Hernie volumineuse, douloureuse, irréductible", rate: 20 },
                  { name: "Hernie bilatérale", rate: 25 },
                  { name: "Éventration petite", rate: 5 },
                  { name: "Éventration moyenne", rate: 15 },
                  { name: "Éventration grande", rate: [30, 40] },
                  { name: "Hernies diaphragmatiques - Troubles modérés", rate: [10, 20] },
                  { name: "Hernies diaphragmatiques - Troubles importants", rate: [20, 40] },
              ]
          }
      ]
  },
  {
      name: "X. Appareil Respiratoire",
      subcategories: [
          {
              name: "1. Paroi Thoracique",
              injuries: [
                  { name: "Fracture de côtes, selon douleur", rate: [2, 5] },
                  { name: "Fracture de côtes, type volet thoracique avec déformation", rate: [5, 10] },
                  { name: "Fracture du sternum, avec gêne et douleur à l'effort", rate: [2, 5] },
                  { name: "Fracture du sternum, avec enfoncement et douleurs", rate: [5, 15] },
              ]
          },
          {
              name: "2. Atteintes de la Fonction Respiratoire",
              injuries: [
                  { name: "Insuffisance respiratoire légère", rate: [10, 30] },
                  { name: "Insuffisance respiratoire moyenne", rate: [30, 50] },
                  { name: "Insuffisance respiratoire importante", rate: [50, 100] },
                  { name: "Séquelles de tuberculose, pneumothorax, pyothorax", rate: [10, 20] },
                  { name: "Rétrécissement de la trachée", rate: [10, 20] },
              ]
          }
      ]
  },
  {
      name: "XI. Appareil Cardio-vasculaire",
      subcategories: [
          {
              name: "1. Coeur",
              injuries: [
                  { name: "Insuffisance cardiaque légère", rate: [10, 30] },
                  { name: "Insuffisance cardiaque moyenne", rate: [30, 60] },
                  { name: "Insuffisance cardiaque grave", rate: [60, 100] },
                  { name: "Séquelles d'infarctus ou troubles du rythme", rate: [20, 30] },
                  { name: "Troubles du rythme ayant entraîné la pose d'un stimulateur", rate: [10, 20] },
              ]
          },
          {
              name: "2. Vaisseaux",
              injuries: [
                  { name: "Anévrysme aortique non opéré", rate: [80, 100] },
                  { name: "Anévrysme aortique opéré, bien contrôlé", rate: [30, 40] },
                  { name: "Anévrysme des artères périphériques / artério-veineux", rate: [10, 20] },
                  { name: "Oblitération artérielle - Forme légère", rate: [20, 30] },
                  { name: "Oblitération artérielle - Forme moyenne", rate: [30, 50] },
                  { name: "Oblitération artérielle - Forme grave", rate: [50, 70] },
                  { name: "Troubles phlébitiques (phlébite, ulcère variqueux) - Forme légère", rate: [5, 10] },
                  { name: "Troubles phlébitiques (phlébite, ulcère variqueux) - Forme moyenne", rate: [10, 20] },
                  { name: "Troubles phlébitiques (phlébite, ulcère variqueux) - Forme grave", rate: [20, 30] },
                  { name: "Hypertension artérielle en soi", rate: [10, 20] },
              ]
          }
      ]
  },
  {
      name: "XII. Appareil Urinaire",
      subcategories: [
          {
              name: "1. Rein",
              injuries: [
                  { name: "Néphrectomie sans insuffisance rénale significative", rate: [15, 20] },
                  { name: "Néphrectomie avec grande éventration lombaire", rate: [30, 40] },
                  { name: "Hématurie ou protéinurie isolée", rate: [5, 10] },
                  { name: "Insuffisance rénale légère", rate: [10, 20] },
                  { name: "Insuffisance rénale moyenne", rate: [20, 40] },
                  { name: "Insuffisance rénale importante", rate: [40, 60] },
                  { name: "Insuffisance rénale avancée (hémodialyse)", rate: [50, 100] },
                  { name: "Traumatisme rénal (séquelles anatomiques)", rate: [15, 30] },
              ]
          },
          {
              name: "2-3. Bassinet, Uretère, Vessie",
              injuries: [
                  { name: "Hydronéphrose bien tolérée", rate: [10, 20] },
                  { name: "Hydronéphrose compliquée (crises douloureuses, infection)", rate: [20, 40] },
                  { name: "Séquelles de rupture d'uretère bien tolérée", rate: [10, 20] },
                  { name: "Séquelles de rupture d'uretère mal tolérée ou avec fistule", rate: [40, 50] },
                  { name: "Urétérostomie cutanée - Unilatérale", rate: 60 },
                  { name: "Urétérostomie cutanée - Bilatérale ou sur rein unique", rate: 80 },
                  { name: "Tumeur vésicale (selon type et traitement)", rate: [30, 80] },
                  { name: "Tumeur vésicale maligne avec infiltration", rate: 100 },
                  { name: "Infection chronique ou à répétition du bas appareil", rate: [10, 30] },
                  { name: "Rétention d'urine chronique (sondage)", rate: 50 },
                  { name: "Fistule - Incontinence permanente (port d'un appareil)", rate: 60 },
                  { name: "Pollakiurie simple", rate: [10, 25] },
                  { name: "Entérocystoplastie d'agrandissement", rate: [30, 50] },
                  { name: "Entérocystoplastie (type Bricker)", rate: 60 },
                  { name: "Dysurie (débit > 10 ml/s)", rate: 10 },
                  { name: "Rétrécissement urétral sans retentissement", rate: 20 },
                  { name: "Rétrécissement urétral avec retentissement", rate: [30, 50] },
                  { name: "Rétrécissement urétral opéré", rate: [15, 20] },
              ]
          },
          {
              name: "4. Éventration",
              injuries: [
                  { name: "Éventration hypogastrique après intervention urinaire - Petite", rate: 5 },
                  { name: "Éventration hypogastrique après intervention urinaire - Moyenne", rate: 15 },
                  { name: "Éventration hypogastrique après intervention urinaire - Grande", rate: [30, 40] },
              ]
          }
      ]
  },
  {
      name: "XIII. Appareil Génital",
      subcategories: [
          {
              name: "1. Masculin",
              injuries: [
                  { name: "Perte de la verge", rate: [50, 60] },
                  { name: "Perte d'un testicule (atrophie, orchidectomie)", rate: [10, 20] },
                  { name: "Castration bilatérale", rate: [30, 50] },
                  { name: "Émasculation totale (perte des testicules et du pénis)", rate: [60, 80] },
              ]
          },
          {
              name: "2. Féminin",
              injuries: [
                  { name: "Prolapsus utérin - Cas légers", rate: [2, 10] },
                  { name: "Prolapsus utérin - Cas graves (incontinence d'effort)", rate: 30 },
                  { name: "Cicatrices vulvaires ou vaginales gênantes", rate: [5, 10] },
                  { name: "Perte anatomique/fonctionnelle des deux ovaires", rate: [50, 20] }, // Note: Typo in source doc? 50 à 20? Using [20,50]
                  { name: "Hystérectomie", rate: [20, 50] }, // Note: Typo in source doc? 50 à 20? Using [20,50]
                  { name: "Amputation d'un sein", rate: [20, 50] }, // Note: Typo in source doc? 50 à 20? Using [20,50]
                  { name: "Amputation des seins", rate: [30, 60] }, // Note: Typo in source doc? 60 à 30? Using [30,60]
              ]
          }
      ]
  },
  {
      name: "XIV. La Rate",
      subcategories: [
          {
              name: "1. Séquelles de Splénectomie",
              injuries: [
                  { name: "Cicatrice de bonne qualité, pas de modification sanguine", rate: 10 },
                  { name: "Modification de la formule sanguine", rate: [15, 30] },
              ]
          }
      ]
  },
  {
      name: "XV. Glandes Endocrines",
      subcategories: [
          {
              name: "1-3. Hypophyse, Surrénales, Thyroïde",
              injuries: [
                  { name: "Diabète insipide post-traumatique", rate: [10, 30] },
                  { name: "Syndrome d'hypopituitarisme antérieur", rate: [60, 70] },
                  { name: "Maladie d'Addison post-traumatique", rate: [40, 70] },
                  { name: "Maladie de Basedow", rate: [5, 40] },
              ]
          },
          {
              name: "4-5. Parathyroïdes",
              injuries: [
                  { name: "Hypoparathyroïdie légère", rate: [10, 30] },
                  { name: "Hypoparathyroïdie compliquée (ajouter taux des organes atteints)", rate: [10, 30] },
              ]
          },
          {
              name: "6. Pancréas Endocrine",
              injuries: [
                  { name: "Diabète sucré équilibré par régime et hypoglycémiants oraux", rate: [5, 10] },
                  { name: "Diabète sucré nécessitant régime strict et insuline", rate: [30, 40] },
                  { name: "Diabète sucré avec acidose ou coma, régime difficile", rate: [40, 70] },
              ]
          }
      ]
  },
  {
      name: "XVI. Téguments (Peau)",
      subcategories: [
          {
              name: "1. Cicatrices",
              injuries: [
                  { name: "Scalp total ou brûlures étendues du cuir chevelu", rate: 30 },
                  { name: "Scalp partiel ou brûlure partielle du cuir chevelu", rate: [5, 20] },
                  { name: "Cicatrices disgracieuses du visage gênant la mimique", rate: [5, 30] },
                  { name: "Cicatrices des mains - Une main", rate: 5 },
                  { name: "Cicatrices des mains - Les deux mains", rate: 10 },
                  { name: "Cicatrices vicieuses et chéloïdes imposant protection au travail", rate: [5, 10] },
                  { name: "Cicatrices vicieuses et chéloïdes de la plante du pied, gênant la marche", rate: [10, 20] },
                  { name: "Cicatrices vicieuses et chéloïdes de la plante du pied, rendant port de chaussure impossible", rate: [20, 25] },
                  { name: "Dermo-épidermite (selon étendue, fréquence, etc.)", rate: [5, 10] },
                  { name: "Fistule à la peau (selon nombre)", rate: [1, 8] },
              ]
          }
      ]
  }
];
