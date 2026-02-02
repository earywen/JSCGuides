---
stepsCompleted: [1, 2, 3]
inputDocuments: []
session_topic: 'Site web guilde WoW - Stratégies "The Voidspear"'
session_goals: 'Intégration Wowhead/YouTube, Simplicité, Clarté'
selected_approach: 'ai-recommended'
techniques_used: ['Resource Mapping', 'SCAMPER', 'Decision Tree Mapping']
ideas_generated: ['Map Interactif (Grille/Murs)', 'Timeline Boss', 'Difficulty Filter', 'TL;DR Header']
technique_execution_complete: true
facilitation_notes: 'User prefers pragmatic, clean design over flashy gimmicks. Key feature: Dynamic content filtering by difficulty.'
context_file: ''
---

# Brainstorming Session Results

**Facilitator:** Laurent
**Date:** 2026-02-02

## Session Overview

**Topic:** Site web guilde WoW - Stratégies "The Voidspear"
**Goals:** Intégration Wowhead/YouTube, Simplicité, Clarté

## Technique Selection

**Approach:** AI-Recommended Techniques + Custom "Resource Mapping"
**Decisions:**
1.  **Resource Mapping:** 5 Bosses identified with unique visual "bricks" (Grid, Walls, Prio, Sol/Air, Traffic Lights).
2.  **SCAMPER (Design):** Refus des gadgets complexes. Choix du "Clean Design".
    *   **Structure Page:** TL;DR (Roles) -> Timeline Phrases -> Ressources.
    *   **Langue:** Sorts en Anglais + Tooltips Wowhead.
3.  **Decision Tree (Architecture):**
    *   **Navigation:** Accueil (Cartes Boss) -> Page Boss.
    *   **Feature Clé:** **Sélecteur de Difficulté (Normal/HM/Mythic)** qui *filtre* le contenu affiché.
    *   **Addons:** Pas de page générale, mais une section "Outils Recommandés" sur chaque page de boss (ex: helper pour la grille Averzian).

## Technique Execution Results

**Phase 1: Resource Mapping**
- **Imperator Averzian:** Grille 3x3, Tic-Tac-Toe, Gestion Adds.
- **Vorasius:** Murs destructibles, Void Breath (Laser), Physique.
- **Fallen-King Salhadaar:** Space Invaders, Prio Cibles (Orbes > Images).
- **Vaelgor & Ezzorak:** Split Raid, Gestion Sol/Air, Intermission Barrière.
- **Lightblinded Vanguard:** Conseil 3 Boss, Rotation Auras (Bleu/Rouge/Vert).

**Phase 2: SCAMPER (UX)**
- **TL;DR:** 3 colonnes (Tank/Heal/DPS) en haut de page.
- **Timeline:** Déroulé chronologique simple.
- **Substitution:** Remplacer les pavés de texte par des listes à puces claires et des tooltips.

**Phase 3: Decision Tree (Architecture)**
- **System:** Single Page Application (ou navigation très rapide).
- **Filter:** Le switch de difficulté est mandaté. Il doit cacher les mécaniques non pertinentes.
- **Tools:** Section spécifique pour addons boss-spécifiques.

### Session Highlights
**User Focus:** Pragmatisme absolu. Le site est un outil de travail pour la guilde.
**Key Feature:** Le filtrage de difficulté dynamique est la "killer feature" qui garantit la clarté demandée (ne pas noyer le joueur "Normal" sous les infos "Mythic").
