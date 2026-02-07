---
stepsCompleted: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
inputDocuments: ["_bmad-output/brainstorming/brainstorming-session-2026-02-02.md"]
---

# UX Design Specification JSCGuide

**Author:** Laurent
**Date:** 2026-02-02

---

## Executive Summary

### Project Vision
Transformer JSCGuides en un outil "Dashboard" premium, minimaliste et ultra-performant pour les raideurs de World of Warcraft. L'esthétique est inspirée de Salesinsight : sombre, épuré, avec des accents émeraude technologiques.

### Target Users
Raideurs PC/Desktop utilisant le site comme second écran pendant le combat ou entre les pulls.

### Key Design Challenges
- Équilibrer la densité d'information stratégique avec une esthétique "épurée".
- Garantir une fluidité totale ("snappiness") lors des changements de boss ou de difficulté.

### Design Opportunities
- Utiliser une sidebar persistante pour une navigation "Zero-Friction".
- Adopter un thème sombre profond avec l'accent #41bea1.

---

## 1. Fondation Stratégique

### Core User Experience
- **Définit par** : "Comprendre avant d'avoir fini de lire". Focus sur l'absorption rapide via le TL;DR.
- **Stratégie Plateforme** : Priorité Desktop First.
- **Interactions Effortless** : Switch de difficulté instantané sans rechargement.

### Emotional Response
- **Objectifs** : Calme & Contrôle (Sérénité sous pression), Confiance Professionnelle.
- **Design Principles** : Élégance Subtile, Harmonie Technologique.

---

## 2. Inspiration & Fondations Techniques

### UX Pattern Analysis
- **Inspiration** : Salesinsight (Structure 2 colonnes, mode sombre profond).
- **Patterns à adopter** : Sidebar persistante, Whitespace stratégique, Transitions fluides.
- **Anti-Patterns à éviter** : Bento Grid excessive (trop de cartes), icônes spécifiques par boss (rester générique).

### Design System Foundation
- **Choix** : Custom Design System (Vanilla CSS + Custom Properties).
- **Raison** : Performance maximale, fidélité esthétique absolue, micro-animations pro.

---

## 3. Définition de l'Expérience & Visuel

### Core UX Mechanics
- **Interaction Clé** : "Ouvrir, Lire, Agir".
- **Success Criteria** : Compréhension du rôle en < 10 sec, réponse système < 100ms.
- **Feedback** : Micro-animations (Blur Fade) validant chaque action.

### Visual Design Foundation
- **Color System** : 
    - Accent : #41bea1.
    - Tons Difficulté : WoW Standard (Net #1eff00, Hero #0070dd, Myth #a335ee).
    - Fonds : Anthracite (Deep #0a0a0a, Surface #161616, Elevated #1e1e1e).
- **Typography** : **Inter** (Moderne, chirurgicale).
- **Spacing** : Grille de 8px, usage généreux du vide pour la respiration des données.

---

## 4. Directions de Design

### Design Direction Decision
**Dashboard Premium Snappy**. Un layout épuré où le contenu central s'efface lors des transitions pour laisser place à l'information demandée instantanément.

### Implementation Approach
Utilisation exclusive du Vanilla CSS pour les transitions, les effets de flou et la gestion de la profondeur (anthracite).

---

## 5. User Journey Flows

### [Journey 1] The Panic Lookup (In-Combat)
L'utilisateur a un doute pendant un pull.
- **Trigger** : Une mécanique inconnue arrive ou un wiped précédent.
- **Flow** : Ouvrir Boss Page -> Focus immédiat sur le groupe TL;DR correspondant à son rôle -> Lecture de 2-3 points clés.
- **Success** : Info trouvée en < 3s, retour au jeu serein.

### [Journey 2] The Deep Study (Pre-Raid)
Le joueur apprend le combat avant la soirée.
- **Trigger** : Première rencontre avec le boss.
- **Flow** : Navigation Latérale -> Choix Boss -> Lecture Strat complète -> Vidéo Guide (Lightbox) -> Analyse des aides visuelles (Visual Context).
- **Success** : Compréhension globale du combat acquise.

### [Journey 3] The Context Shift (Difficulty Toggling)
La guilde change de mode de jeu.
- **Trigger** : Leader annonce un changement de difficulté.
- **Flow** : Clic sur le Switcher de difficulté (Normal/Hero/Myth) -> Mutation de la couleur d'accent (Vert/Bleu/Violet) -> Mise à jour du contenu TL;DR sans transition de page.
- **Success** : Information pertinente à la difficulté affichée instantanément.

### Journey Patterns
- **Zero-Friction Navigation** : Pas de rechargement de page.
- **Role Isolation** : Le contenu est filtré par rôle pour réduire le bruit.
- **Visual Validation** : Les couleurs de WoW valident le mode actif.

---

## 6. Component Strategy

### Design System Components
Utilisation d'un **Custom Design System** basé sur des tokens CSS :
- **Layout Tokens** : Variables pour les marges (8px base) et la sidebar (260px).
- **Color Tokens** : Anthracite hierarchy (#0a, #16, #1e) et WoW state colors.
- **Typography Tokens** : Échelles Inter (Titles, Body, Mono for IDs).

### Custom Components
- **Dashboard Sidebar** : Navigation persistante avec indicateurs d'état actif (accent #41bea1).
- **Premium Toggle Switcher** : Contrôle de la difficulté avec feedback visuel coloré (Vert/Bleu/Violet).
- **TL;DR Content Cards** : Panneaux avec bordure subtile (1px rgba white 0.05) et padding généreux.
- **Visual Mechanic Grid** : Composants spécifiques pour les placements 2D (ex: Tic-Tac-Toe).
- **Smooth Cinema Lightbox** : Overlay plein écran avec flou d'arrière-plan pour les vidéos guides.

### Component Implementation Strategy
- **Vanilla First** : Aucun framework JS lourd; utilisation de Web Components ou de scripts légers pour l'interactivité.
- **Depth & Elevation** : Utilisation des ombres et des variations de gris pour créer une hiérarchie visuelle claire sans lignes de séparation lourdes.
- **Snappy Transitions** : Chaque composant réagit aux interactions utilisateur avec des micro-mouvements < 150ms.

### Implementation Roadmap
- **Phase 1 (Core Foundations)** : Mise en place du layout grid, de la sidebar et du système de couleurs.
- **Phase 2 (Content Components)** : Création des cartes TL;DR et du switcher de difficulté.
- **Phase 3 (Experience Enhancement)** : Implémentation de la Lightbox et des visualiseurs de mécaniques complexes.

---
