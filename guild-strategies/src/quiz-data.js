export const quizData = [
    // --- AVERZIAN ---
    {
        boss: "averzian",
        roles: ["all", "dps", "healer"],
        difficulty: "normal",
        question_fr: "Lors de la mécanique Umbral Collapse, que doit faire le joueur ciblé ?",
        question_en: "During the Umbral Collapse mechanic, what should the targeted player do?",
        answers_fr: [
            "Courir loin du groupe",
            "Diriger l'impact sur un Voidshaper pour briser son bouclier",
            "Se cacher derrière un pilier",
            "Courir vers les tanks pour partager les dégâts"
        ],
        answers_en: [
            "Run far from the group",
            "Direct the impact onto a Voidshaper to break its shield",
            "Hide behind a pillar",
            "Run to the tanks to share damage"
        ],
        correct: 1,
        explanation_fr: "Umbral Collapse est requis pour briser le bouclier des Voidshapers, ce qui permet de les tuer avant qu'ils n'atteignent 100 d'énergie.",
        explanation_en: "Umbral Collapse is required to break the Voidshapers' shields, allowing them to be killed before reaching 100 energy."
    },
    {
        boss: "averzian",
        roles: ["all", "tank"],
        difficulty: "normal",
        question_fr: "Combien de fois les tanks peuvent-ils soaker une case de grille par vague ?",
        question_en: "How many grid cells can tanks soak per wave?",
        answers_fr: ["1", "2", "3", "Tant qu'ils ont des CDs défensifs"],
        answers_en: ["1", "2", "3", "As long as they have defensive CDs"],
        correct: 1,
        explanation_fr: "Règle du 2/3 : Le raid peut détruire 2 adds par vague via les soaks Tanks. Le 3ème capturera toujours sa zone.",
        explanation_en: "2/3 Rule: The raid can destroy 2 adds per wave via Tank soaks. The 3rd will always capture its zone."
    },
    {
        boss: "averzian",
        roles: ["tank"],
        difficulty: "normal",
        question_fr: "Quand faut-il effectuer le Tank Swap sur Averzian ?",
        question_en: "When should the Tank Swap occur on Averzian?",
        answers_fr: ["À 5 stacks", "Après chaque Dark Upheaval", "À chaque Shadow's Advance", "Dès que le taunt est disponible"],
        answers_en: ["At 5 stacks", "After each Dark Upheaval", "At each Shadow's Advance", "As soon as taunt is available"],
        correct: 2,
        explanation_fr: "Blackening Wounds réduit les PV max. Il faut swap à chaque Shadow's Advance.",
        explanation_en: "Blackening Wounds reduces max HP. You must swap at each Shadow's Advance."
    },
    {
        boss: "averzian",
        roles: ["all"],
        difficulty: "heroic",
        question_fr: "En Héroïque, quelle règle supplémentaire s'applique à la capacité Desolation ?",
        question_en: "On Heroic, what additional rule applies to the Desolation ability?",
        answers_fr: ["Elle inflige 50% de dégâts en plus", "Il ne faut pas soaker les zones déjà capturées", "Elle cible 2 fois plus de joueurs", "Il faut la soaker à 3 minimum"],
        answers_en: ["It deals 50% more damage", "You must not soak already captured zones", "It targets twice as many players", "It must be soaked by at least 3 players"],
        correct: 1,
        explanation_fr: "Il faut surveiller et éviter les joueurs qui soakent les zones qui ont déjà été capturées.",
        explanation_en: "Watch out for and avoid players soaking zones that have already been captured."
    },
    {
        boss: "averzian",
        roles: ["all", "dps"],
        difficulty: "normal",
        question_fr: "Que se passe-t-il si un Voidshaper atteint 100 d'énergie (Gathering Darkness) ?",
        question_en: "What happens if a Voidshaper reaches 100 energy (Gathering Darkness)?",
        answers_fr: ["Il se soigne complètement", "Le raid wipe instantanément", "Il lance un bouclier sur le boss", "Il fait spawn 3 autres adds"],
        answers_en: ["It heals to full", "The raid instantly wipes", "It casts a shield on the boss", "It spawns 3 more adds"],
        correct: 1,
        explanation_fr: "Gathering Darkness tue le raid s'il est incanté. Tuez le Voidshaper avant qu'il n'atteigne 100 d'énergie.",
        explanation_en: "Gathering Darkness kills the raid if cast. Kill the Voidshaper before it reaches 100 energy."
    },

    // --- VORASIUS ---
    {
        boss: "vorasius",
        roles: ["all"],
        difficulty: "normal",
        question_fr: "Où DOIVENT mourir les Blistercreeps ?",
        question_en: "Where MUST the Blistercreeps die?",
        answers_fr: ["Loin du raid", "Au centre de la salle", "SUR les murs de cristal", "Sous le boss"],
        answers_en: ["Away from the raid", "In the center of the room", "ON the crystal walls", "Under the boss"],
        correct: 2,
        explanation_fr: "Mécanique Wall Break : Les exploser sur les murs de cristal est impératif pour les briser.",
        explanation_en: "Wall Break mechanic: Exploding them on the crystal walls is imperative to break them."
    },
    {
        boss: "vorasius",
        roles: ["all", "dps", "healer"],
        difficulty: "normal",
        question_fr: "Comment anticiper le point de départ du balayage Void Breath ?",
        question_en: "How do you anticipate the starting point of the Void Breath sweep?",
        answers_fr: ["Un timer DBM l'indique toujours", "Une alerte vocale du boss", "Regardez quelle main du boss brille", "Il part toujours de la gauche"],
        answers_en: ["A DBM timer always indicates it", "A voice line from the boss", "Look at which hand of the boss glows", "It always starts from the left"],
        correct: 2,
        explanation_fr: "La main brillante de Vorasius indique le côté de départ du balayage.",
        explanation_en: "Vorasius's glowing hand indicates the starting side of the sweep."
    },
    {
        boss: "vorasius",
        roles: ["all", "healer"],
        difficulty: "normal",
        question_fr: "Que faut-il faire sur le debuff des joueurs touchés par l'explosion des adds ?",
        question_en: "What must be done about the debuff on players hit by an add explosion?",
        answers_fr: ["Les soigner à 100% PV", "Utiliser une immunité", "Les dispeler rapidement", "Rien, il disparaît tout seul après 5s"],
        answers_en: ["Heal them to 100% HP", "Use an immunity", "Dispel them quickly", "Nothing, it disappears on its own after 5s"],
        correct: 2,
        explanation_fr: "Le debuff augmente les dégâts subis et doit être dispelé.",
        explanation_en: "The debuff increases damage taken and must be dispelled."
    },
    {
        boss: "vorasius",
        roles: ["tank"],
        difficulty: "normal",
        question_fr: "Combien d'augmentation de dégâts donne le debuff Smashed, nécessitant un tank swap ?",
        question_en: "How much damage increase does the Smashed debuff give, requiring a tank swap?",
        answers_fr: ["+50%", "+100%", "+150%", "+200%"],
        answers_en: ["+50%", "+100%", "+150%", "+200%"],
        correct: 2,
        explanation_fr: "Smashed augmente les dégâts physiques subis de +150%, ce qui est mortel.",
        explanation_en: "Smashed increases physical damage taken by +150%, which is deadly."
    },
    {
        boss: "vorasius",
        roles: ["all"],
        difficulty: "heroic",
        question_fr: "En Héroïque, combien de Blistercreeps faut-il sacrifier par mur de cristal ?",
        question_en: "On Heroic, how many Blistercreeps must be sacrificed per crystal wall?",
        answers_fr: ["1", "2", "3", "4"],
        answers_en: ["1", "2", "3", "4"],
        correct: 1,
        explanation_fr: "En Héroïque, les murs nécessitent 2 explosions d'adds pour être détruits.",
        explanation_en: "On Heroic, walls require 2 add explosions to be destroyed."
    },

    // --- SALHADAAR ---
    {
        boss: "salhadaar",
        roles: ["all"],
        difficulty: "normal",
        question_fr: "Lors de Shattering Twilight, où doivent se trouver les tanks ?",
        question_en: "During Shattering Twilight, where should the tanks be?",
        answers_fr: ["Au centre avec le boss", "Orientés vers les bords de salle", "Dans le groupe DPS", "Très loin l'un de l'autre"],
        answers_en: ["In the center with the boss", "Oriented towards the edges of the room", "In the DPS group", "Very far from each other"],
        correct: 1,
        explanation_fr: "L'impact fait apparaître des pics. Il faut orienter le boss vers les bords pour ne pas encombrer le centre.",
        explanation_en: "The impact spawns spikes. Orient the boss towards the edges to avoid cluttering the center."
    },
    {
        boss: "salhadaar",
        roles: ["all", "healer"],
        difficulty: "normal",
        question_fr: "À quel seul moment faut-il dispeler Despotic Command ?",
        question_en: "When is the ONLY time you should dispel Despotic Command?",
        answers_fr: ["Dès qu'il est appliqué", "À 3 secondes de la fin", "Lorsque le joueur est au bord de la salle", "Quand le joueur n'a plus beaucoup de PV"],
        answers_en: ["As soon as applied", "With 3 seconds left", "When the player is at the edge of the room", "When the player has low HP"],
        correct: 2,
        explanation_fr: "Dispelez les joueurs UNIQUEMENT lorsqu'ils sont au bord de la salle pour y déposer la zone de vide.",
        explanation_en: "Dispel players ONLY when they are at the edge of the room to drop the void zone there."
    },
    {
        boss: "salhadaar",
        roles: ["all", "dps"],
        difficulty: "normal",
        question_fr: "Quelle phase offre le meilleur moment pour utiliser la Bloodlust ?",
        question_en: "Which phase offers the best moment to use Bloodlust?",
        answers_fr: ["Dès le pull", "Unbound Phase (100 Énergie)", "La phase d'exécution (sous 20%)", "Juste après Shattering Twilight"],
        answers_en: ["On pull", "Unbound Phase (100 Energy)", "Execution phase (under 20%)", "Right after Shattering Twilight"],
        correct: 1,
        explanation_fr: "La Bloodlust s'utilise pendant la phase Unbound (Cosmic Unraveling) car le boss subit +25% de dégâts.",
        explanation_en: "Bloodlust is used during the Unbound Phase (Cosmic Unraveling) because the boss takes +25% damage."
    },
    {
        boss: "salhadaar",
        roles: ["all", "dps"],
        difficulty: "heroic",
        question_fr: "En Héroïque, que ne faut-il JAMAIS faire lors de la gestion des orbes ?",
        question_en: "On Heroic, what should you NEVER do when managing orbs?",
        answers_fr: ["Les ralentir", "Les tuer simultanément", "Les soaker", "S'en approcher à moins de 5m"],
        answers_en: ["Slow them", "Kill them simultaneously", "Soak them", "Approach within 5m of them"],
        correct: 1,
        explanation_fr: "Ne tuez pas les orbes en même temps ! Laissez le DOT raid expirer avant de tuer la suivante.",
        explanation_en: "Do not kill orbs simultaneously! Let the raid DOT expire before killing the next one."
    },
    {
        boss: "salhadaar",
        roles: ["healer"],
        difficulty: "normal",
        question_fr: "Que se passe-t-il sur la cible du dispel (Despotic Command) juste après le dispel ?",
        question_en: "What happens to the dispel target (Despotic Command) right after being dispelled?",
        answers_fr: ["Elle gagne +100% de vitesse", "Elle devient immunisée aux dégâts", "Elle reçoit un énorme absorb de soins", "Elle perd 50% de ses PV maximum"],
        answers_en: ["Gains +100% speed", "Becomes immune to damage", "Receives a huge healing absorb", "Loses 50% of maximum HP"],
        correct: 2,
        explanation_fr: "Soignez intensivement le joueur APRÈS le dispel pour vider son absorb de soins (Heal Absorb).",
        explanation_en: "Intensively heal the player AFTER the dispel to clear their healing absorb."
    },

    // --- VAELGOR & EZZORAK ---
    {
        boss: "vaelgor",
        roles: ["all", "tank"],
        difficulty: "normal",
        question_fr: "Quelle est la distance minimale à conserver entre les deux boss pour éviter Twilight Fury ?",
        question_en: "What is the minimum distance to keep between the two bosses to avoid Twilight Fury?",
        answers_fr: ["5 mètres", "10 mètres", "15 mètres", "30 mètres"],
        answers_en: ["5 meters", "10 meters", "15 meters", "30 meters"],
        correct: 2,
        explanation_fr: "Maintenez impérativement les deux boss à plus de 15 mètres l'un de l'autre pour éviter le buff de dégâts.",
        explanation_en: "Strictly keep the two bosses over 15 meters apart to avoid the damage buff."
    },
    {
        boss: "vaelgor",
        roles: ["all"],
        difficulty: "normal",
        question_fr: "Que faut-il faire lors de l'Intermission (Midnight Flames) ?",
        question_en: "What must be done during the Intermission (Midnight Flames)?",
        answers_fr: ["Répartir le raid aux 4 coins", "Stacker dans la barrière du PNJ (Radiant Barrier)", "Tuer tous les petits adds en priorité", "Cacher le boss derrière un pilier"],
        answers_en: ["Spread the raid to 4 corners", "Stack in the NPC's barrier (Radiant Barrier)", "Kill all small adds as priority", "Hide the boss behind a pillar"],
        correct: 1,
        explanation_fr: "Stockez vos CDs et restez dans la zone de Radiant Barrier du PNJ pour survivre au souffle.",
        explanation_en: "Save CDs and stack in the NPC's Radiant Barrier zone to survive the breath."
    },
    {
        boss: "vaelgor",
        roles: ["all", "dps"],
        difficulty: "normal",
        question_fr: "Les deux dragons partagent-ils leurs points de vie (Health Pool) ?",
        question_en: "Do both dragons share their health pool?",
        answers_fr: ["Oui, 100% partagés", "Non, pas du tout", "Leur écart ne doit pas dépasser 10%", "Uniquement pendant l'intermission"],
        answers_en: ["Yes, 100% shared", "No, not at all", "Their gap must not exceed 10%", "Only during intermission"],
        correct: 2,
        explanation_fr: "Les boss doivent mourir ensemble (max 10% d'écart). Le tethering (lien) ne les empêche pas de vivre séparément si l'écart se creuse trop.",
        explanation_en: "Bosses must die together (max 10% diff). The tethering doesn't prevent them from living separately if the gap grows too large."
    },
    {
        boss: "vaelgor",
        roles: ["all", "dps", "healer"],
        difficulty: "heroic",
        question_fr: "Quelle est la restriction majeure pour la mécanique Gloom (soak des sphères) ?",
        question_en: "What is the major restriction for the Gloom mechanic (sphere soaking)?",
        answers_fr: ["Ne peut être soak que par le tank", "Nécessite toute la vie du groupe", "Ne pas soaker deux fois de suite (Diminish)", "Il faut être sous immunité"],
        answers_en: ["Can only be soaked by tank", "Requires full group health", "Do not soak twice in a row (Diminish)", "Must be under immunity"],
        correct: 2,
        explanation_fr: "Rotation stricte de 2 groupes de 5 joueurs. Si vous soakez deux fois de suite, les dégâts sont fatals.",
        explanation_en: "Strict rotation of 2 groups of 5 players. Soaking twice in a row results in fatal damage."
    },
    {
        boss: "vaelgor",
        roles: ["all"],
        difficulty: "normal",
        question_fr: "À quel niveau d'énergie les dragons s'envolent-ils pour l'intermission ?",
        question_en: "At what energy level do the dragons take flight for the intermission?",
        answers_fr: ["50", "75", "100", "0"],
        answers_en: ["50", "75", "100", "0"],
        correct: 2,
        explanation_fr: "À 100 Énergie, les deux s'envolent (Midnight Flames).",
        explanation_en: "At 100 Energy, both take flight (Midnight Flames)."
    },

    // --- LIGHTBLINDED VANGUARD ---
    {
        boss: "lightblinded",
        roles: ["all", "dps"],
        difficulty: "normal",
        question_fr: "Quel membre du trio doit être la priorité absolue (Focus target) ?",
        question_en: "Which member of the trio must be the absolute priority (Focus target)?",
        answers_fr: ["Bellamy (Tank)", "Senn (Soigneur)", "Lightblood (Dégâts)", "N'importe lequel, ils partagent la vie"],
        answers_en: ["Bellamy (Tank)", "Senn (Healer)", "Lightblood (Damage)", "Any, they share health"],
        correct: 1,
        explanation_fr: "Tuez War Chaplain Senn en premier. Ses soins et boucliers (Sacred Shield) sont les plus dangereux.",
        explanation_en: "Kill War Chaplain Senn first. His healing and shields (Sacred Shield) are the most dangerous."
    },
    {
        boss: "lightblinded",
        roles: ["all"],
        difficulty: "normal",
        question_fr: "Que se passe-t-il si vous attaquez ou soignez Senn ou un allié alors que Senn est dans son Aura of Peace (bleue) ?",
        question_en: "What happens if you attack or heal Senn or an ally while Senn is in his Aura of Peace (blue)?",
        answers_fr: ["Vous mourrez instantanément", "Vous êtes pacifié (impossible d'agir)", "Le boss gagne 100% d'énergie", "Rien"],
        answers_en: ["You die instantly", "You are pacified (unable to act)", "The boss gains 100% energy", "Nothing"],
        correct: 1,
        explanation_fr: "Ne soignez/tapez pas Senn dans son aura bleue sous peine d'être pacifié de vos actions.",
        explanation_en: "Do not heal/attack Senn in his blue aura, otherwise you will be pacified from your actions."
    },
    {
        boss: "lightblinded",
        roles: ["tank"],
        difficulty: "normal",
        question_fr: "Quel sort force le Taunt Swap immédiat chez les tanks ?",
        question_en: "Which spell forces the immediate Taunt Swap for tanks?",
        answers_fr: ["Sacred Shield", "Final Verdict / Judgment", "Execution Sentence", "Consecration"],
        answers_en: ["Sacred Shield", "Final Verdict / Judgment", "Execution Sentence", "Consecration"],
        correct: 1,
        explanation_fr: "Swappez de cible immédiatement sur le Judgment pour éviter le one-shot du Final Verdict sur la même cible.",
        explanation_en: "Swap targets immediately on Judgment to avoid an instant kill from Final Verdict on the same target."
    },
    {
        boss: "lightblinded",
        roles: ["all"],
        difficulty: "heroic",
        question_fr: "En Héroïque, que laisse chaque boss au sol après sa phase d'Aura ?",
        question_en: "On Heroic, what does each boss leave on the ground after their Aura phase?",
        answers_fr: ["Des orbes de lumière curatives", "Des zones de feu sacré (Consecration)", "Des murs infranchissables", "Rien"],
        answers_en: ["Healing light orbs", "Holy fire zones (Consecration)", "Impassable walls", "Nothing"],
        correct: 1,
        explanation_fr: "Chaque boss drop une zone de feu (Consecration) après sa phase d'Aura, ce qui réduit drastiquement l'espace.",
        explanation_en: "Each boss drops a zone of fire (Consecration) after its Aura phase, drastically reducing room space."
    },
    {
        boss: "lightblinded",
        roles: ["all", "dps"],
        difficulty: "normal",
        question_fr: "Quand faut-il utiliser la Bloodlust ?",
        question_en: "When should Bloodlust be used?",
        answers_fr: ["Au pull", "Après la mort de Senn", "À 10% de vie du boss", "Pendant l'immunité Forbearance (vers 2m30)"],
        answers_en: ["On pull", "After Senn's death", "At 10% boss health", "During Forbearance immunity (around 2m30)"],
        correct: 3,
        explanation_fr: "Attendez la Forbearance (vers 2:30-3:00) pour éviter que les boss ne deviennent immunisés pendant la BL.",
        explanation_en: "Wait for Forbearance (around 2:30-3:00) to prevent bosses from becoming immune during BL."
    },

    // --- CHIMAERUS ---
    {
        boss: "chimaerus",
        roles: ["all"],
        difficulty: "normal",
        question_fr: "Comment obtenir la vision 'Alnsight' permettant d'attaquer les Manifestations (Adds) dans l'Aln ?",
        question_en: "How do you gain 'Alnsight' to attack Manifestations (Adds) in the Aln?",
        answers_fr: ["Tuer un petit add", "Ramasser un orbe", "Soaker le sort Alndust Upheaval avec le tank", "Rester immobile pendant 5 secondes"],
        answers_en: ["Kill a small add", "Pick up an orb", "Soak the Alndust Upheaval spell with the tank", "Stand still for 5 seconds"],
        correct: 2,
        explanation_fr: "Alndust Upheaval est un soak groupé sur le tank qui donne Alnsight (40s) aux joueurs ayant soak.",
        explanation_en: "Alndust Upheaval is a grouped soak on the tank that grants Alnsight (40s) to those who soaked."
    },
    {
        boss: "chimaerus",
        roles: ["all"],
        difficulty: "normal",
        question_fr: "Que se passe-t-il si un add n'est pas mort lorsque Chimaerus atteint 100 énergie (Consume) ?",
        question_en: "What happens if an add is not dead when Chimaerus reaches 100 energy (Consume)?",
        answers_fr: ["Le boss se soigne de 50%", "Le boss mange l'add et gagne +100% dmg", "Le timer de l'enrage est divisé par deux", "L'add se multiplie par 3"],
        answers_en: ["Boss heals for 50%", "Boss eats the add and gains +100% dmg", "Enrage timer is halved", "The add multiplies by 3"],
        correct: 1,
        explanation_fr: "Le boss mange tous les adds restants. S'il en mange un seul, le bonus de +100% dégâts amène souvent au wipe.",
        explanation_en: "The boss eats all remaining adds. Eating even one grants +100% damage which is usually a wipe."
    },
    {
        boss: "chimaerus",
        roles: ["all", "healer"],
        difficulty: "heroic",
        question_fr: "Comment doit être géré le DoT Consuming Miasma ?",
        question_en: "How should the Consuming Miasma DoT be managed?",
        answers_fr: ["À ne pas dispeler, mais healer à travers", "Dispel sur n'importe quel endroit de la salle", "Dispel stratégique (sur un joueur) DANS les pools d'Alndust", "Immunité requise (Bulle, Ice Block, etc.)"],
        answers_en: ["Do not dispel, heal through it", "Dispel anywhere in the room", "Strategic dispel ON the Alndust pools", "Requires immunity (Bubble, Ice Block, etc.)"],
        correct: 2,
        explanation_fr: "Le dispel stratégique d'un joueur ciblé par Miasma permet de nettoyer (cleaner) les mares (pools) d'Alndust au sol.",
        explanation_en: "Strategically dispelling a player targeted by Miasma clears the Alndust pools on the ground."
    },
    {
        boss: "chimaerus",
        roles: ["all", "dps"],
        difficulty: "normal",
        question_fr: "Que devez-vous faire lors des souffles Corrupted Devastation en Phase 2 ?",
        question_en: "What must you do during the Corrupted Devastation breaths in Phase 2?",
        answers_fr: ["Courir dans tous les sens", "Vous stacker pour bait les souffles (les superposer)", "Sauter au moment de l'impact", "Ne pas bouger et utiliser un CD défensif"],
        answers_en: ["Run everywhere", "Stack to bait the breaths (overlap them)", "Jump at the moment of impact", "Don't move and use a defensive CD"],
        correct: 1,
        explanation_fr: "Les souffles sont baitables. Stackez-vous pour baîter la ligne au même endroit et économiser de l'espace sûr.",
        explanation_en: "Breaths can be baited. Stack to bait the line in the same place and save safe space."
    },
    {
        boss: "chimaerus",
        roles: ["tank", "dps"],
        difficulty: "normal",
        question_fr: "Quelle est la priorité absolue lors du combat contre les Manifestations ?",
        question_en: "What is the absolute priority when fighting Manifestations?",
        answers_fr: ["Swarming Shades", "Colossal Horror", "Haunting Essence", "Tant que ça tape, c'est bon"],
        answers_en: ["Swarming Shades", "Colossal Horror", "Haunting Essence", "Just hitting anything is fine"],
        correct: 1,
        explanation_fr: "Colossal Horror est la priorité de DPS/Tank. Son Discordant Roar (+10% dmg pour lui) se cumule.",
        explanation_en: "Colossal Horror is the DPS/Tank priority. Its Discordant Roar (+10% dmg buff to itself) stacks."
    },

    // --- BELO'REN ---
    {
        boss: "beloren",
        roles: ["all", "tank"],
        difficulty: "normal",
        question_fr: "Lors du Guardian's Edict (Combo de Frontaux), qui doit soak le 3ème frontal ?",
        question_en: "During Guardian's Edict (Frontal Combo), who must soak the 3rd frontal?",
        answers_fr: ["Le Tank Light", "Le Tank Void", "Les deux tanks en même temps", "Le groupe mêlée"],
        answers_en: ["The Light Tank", "The Void Tank", "Both tanks at the same time", "The melee group"],
        correct: 2,
        explanation_fr: "Chaque tank soak sa couleur pour les frontaux 1 et 2. Le 3ème frontal combine les deux couleurs et doit être soak par les deux tanks.",
        explanation_en: "Each tank soaks their color for frontals 1 and 2. The 3rd frontal combines both colors and must be soaked by both tanks."
    },
    {
        boss: "beloren",
        roles: ["all"],
        difficulty: "normal",
        question_fr: "Qu'est-ce qui indique votre couleur (Light ou Void) dans la Phase 1 ?",
        question_en: "What indicates your color (Light or Void) in Phase 1?",
        answers_fr: ["Le boss le crie au chat", "La mécanique Voidlight Convergence vous donne votre débuff (Feather)", "La couleur de votre équipement", "Rien, vous devez deviner"],
        answers_en: ["The boss yells it in chat", "The Voidlight Convergence mechanic gives you your debuff (Feather)", "The color of your gear", "Nothing, you must guess"],
        correct: 1,
        explanation_fr: "Au pull, Voidlight Convergence vous assigne une plume (Light ou Void). Vous devez TOUJOURS interagir avec VOTRE couleur uniquement.",
        explanation_en: "On pull, Voidlight Convergence assigns you a feather (Light or Void). You must ALWAYS interact with YOUR color only."
    },
    {
        boss: "beloren",
        roles: ["all", "dps"],
        difficulty: "normal",
        question_fr: "Quelle est la règle d'or concernant les Radiant Echoes (vague d'orbes) ?",
        question_en: "What is the golden rule concerning Radiant Echoes (orb wave)?",
        answers_fr: ["Prendre toutes les orbes", "Créer un espace (gap) en absorbant 2-3 orbes de SA propre couleur pour laisser passer le groupe", "Soaker une orbe de la couleur OPOSÉE", "Ne toucher à aucune orbe"],
        answers_en: ["Take all orbs", "Create a gap by absorbing 2-3 orbs of YOUR OWN color to let the group pass", "Soak an orb of the OPPOSITE color", "Don't touch any orb"],
        correct: 1,
        explanation_fr: "Le raid doit passer le mur d'orbes. Quelques joueurs de la bonne couleur vont soaker pour créer une ouverture (gap) sûre.",
        explanation_en: "The raid must pass the orb wall. A few players of the correct color soak to create a safe opening (gap)."
    },
    {
        boss: "beloren",
        roles: ["all", "dps"],
        difficulty: "normal",
        question_fr: "En Phase 2 (Intermission Ashen Shell), quand devez-vous utiliser votre Bloodlust ?",
        question_en: "In Phase 2 (Ashen Shell Intermission), when should you use Bloodlust?",
        answers_fr: ["Sur les petits adds", "À la reprise de la P1", "Dès la transformation du boss en œuf pour le burst", "Vous la gardez pour les 10%"],
        answers_en: ["On the small adds", "Upon returning to P1", "As soon as the boss morphs into an egg to burst it", "Save it for the last 10%"],
        correct: 2,
        explanation_fr: "La Bloodlust s'utilise sur l'Œuf en P2 car les dégâts subis par l'œuf y sont persistants (c'est la phase de burst).",
        explanation_en: "Bloodlust is used on the Egg in P2 because damage done to the egg is persistent (it's the burn phase)."
    },
    {
        boss: "beloren",
        roles: ["all"],
        difficulty: "normal",
        question_fr: "En Phase 2 (Incubation of Flames), où devez-vous vous placer ?",
        question_en: "In Phase 2 (Incubation of Flames), where should you stand?",
        answers_fr: ["N'importe où", "Strictement sur la part de tarte (secteur) correspondant à VOTRE couleur pour survivre", "Près des tanks", "Le plus loin possible de l'œuf"],
        answers_en: ["Anywhere", "Strictly on the pie slice (sector) corresponding to YOUR color to survive", "Near the tanks", "As far from the egg as possible"],
        correct: 1,
        explanation_fr: "Le sol se divise en tranches colorées (slices). Il faut naviguer dans un secteur de SA propre couleur au moment de l'explosion.",
        explanation_en: "The floor divides into colored slices. You must navigate into a sector of YOUR OWN color right when it explodes."
    }
];
