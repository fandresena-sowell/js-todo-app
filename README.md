# Application de Liste de Tâches (Todo App)

Application web moderne permettant de gérer des listes de tâches avec des fonctionnalités avancées.

## 🚀 Démarrage

### Prérequis
- Node.js (version 16 ou supérieure)
- npm (inclus avec Node.js)

### Installation

1. Cloner le dépôt :
```bash
git clone [url-du-repo]
cd js-todo-app
```

2. Installer les dépendances :
```bash
npm install
```

3. Lancer le serveur de développement :
```bash
npm run dev
```

4. Ouvrir l'application dans votre navigateur à l'adresse indiquée (généralement http://localhost:5173)

## 📋 Plan de développement

Ce projet est structuré en plusieurs phases de développement définies dans le fichier [ai/TODO.md](ai/TODO.md). Chaque tâche dispose d'une description détaillée dans le dossier `ai/tasks/`.

### Design Figma
[Ici](https://www.figma.com/design/w50oZDzN9ZQcB7o665puyA/Simple-ToDo-List-Design-(Community)?node-id=0-1&p=f&t=sxrxdNqlSEMimpg0-0)
### Progression des tâches

Pour suivre la progression et contribuer au projet, complétez les tâches dans l'ordre suivant :

1. **Configuration et Structure de Base**
   - Initialisation du projet avec Vite
   - Mise en place de la structure de base
   - Configuration des dépendances et du système de build

2. **Fonctionnalités Principales**
   - Interface utilisateur de base
   - Ajout et suppression de tâches
   - Marquage des tâches comme complétées
   - Édition des tâches existantes

3. **Système de Stockage Local**
   - Configuration de LocalStorage
   - Sauvegarde et récupération des tâches

4. **Organisation et Filtrage**
   - Catégorisation des tâches
   - Filtrage par statut
   - Recherche et tri

5. **Améliorations de l'Interface Utilisateur**
   - Design et convivialité
   - Animations et mode sombre/clair
   - Adaptabilité aux différents appareils

6. **Fonctionnalités Avancées**
   - Dates d'échéance et notifications
   - Système de priorités
   - Sous-tâches

7. **Optimisation et Tests**
   - Tests unitaires et d'intégration
   - Optimisation des performances
   - Accessibilité

## 🧰 Structure du projet

```
js-todo-app/
├── ai/                # Documentation et tâches du projet
│   ├── tasks/         # Détails d'implémentation des tâches
│   └── TODO.md        # Liste des tâches à accomplir
├── public/            # Ressources statiques
├── src/               # Code source de l'application
│   ├── assets/        # Images, icônes, etc.
│   ├── components/    # Composants réutilisables
│   ├── styles/        # Fichiers CSS
│   ├── utils/         # Fonctions utilitaires
│   ├── index.html     # Page HTML principale
│   └── main.js        # Point d'entrée JavaScript
├── tests/             # Tests unitaires et d'intégration
├── .gitignore         # Fichiers à ignorer par Git
├── package.json       # Dépendances et scripts npm
├── vite.config.js     # Configuration de Vite
└── README.md          # Documentation du projet
```

## 🛠️ Comment contribuer

1. Consultez le fichier [ai/TODO.md](ai/TODO.md) pour voir les tâches disponibles
2. Sélectionnez une tâche non assignée et lisez sa description détaillée dans `ai/tasks/`
3. Suivez les étapes d'implémentation décrites dans le fichier de la tâche
4. Validez votre travail selon les critères de réussite de la tâche
5. Mettez à jour TODO.md en marquant la tâche comme terminée
6. Soumettez vos modifications avec un commit suivant la convention :
   ```
   type: description brève (tâche-id)
   ```
   Exemple : `feat: ajout de l'interface de base (FEAT-001)`

## 💻 Technologies utilisées

- Vite - Outil de build rapide
- JavaScript ES6+ - Pour la logique de l'application
- HTML5 & CSS3 - Pour la structure et le style
- LocalStorage - Pour le stockage des données

## 📝 Convention de Commits

Le projet utilise la convention de commits suivante :
- `feat:` Nouvelle fonctionnalité
- `fix:` Correction de bug
- `docs:` Modification de la documentation
- `style:` Changements de style/CSS
- `refactor:` Refactorisation du code sans modification de fonctionnalité
- `perf:` Amélioration des performances
- `test:` Ajout ou correction de tests
- `chore:` Tâches de maintenance

## 📜 Licence

[MIT](LICENSE) 