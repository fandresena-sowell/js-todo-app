# FEAT-005: Ajouter un système de dates d'échéance pour les tâches

## Fichiers de référence
Les fichiers suivants doivent être consultés lors du travail sur cette tâche :
- TODO.md (Pour comprendre le contexte du projet et les dépendances)
- README.md (Pour l'aperçu du projet et les directives)
- tasks/FEAT-001.md à FEAT-004.md (Tâches précédentes de fonctionnalités)
- tasks/STORAGE-001.md à STORAGE-004.md (Système de stockage)
- src/js/app.js (Logique principale de l'application)
- src/js/models/task.js (ou équivalent pour la définition des tâches)
- src/index.html (Structure HTML principale)

## Aperçu
Cette tâche consiste à implémenter un système permettant d'associer des dates d'échéance aux tâches. L'objectif est de permettre aux utilisateurs de définir quand une tâche doit être terminée, facilitant ainsi la planification et la gestion des priorités. Cette fonctionnalité enrichira considérablement l'application en lui ajoutant une dimension temporelle.

## Exigences
- Étendre le modèle de tâche pour inclure une propriété de date d'échéance
- Créer une interface pour sélectionner et modifier les dates d'échéance
- Implémenter l'affichage des dates d'échéance dans la liste des tâches
- Ajouter un indicateur visuel pour les tâches dont l'échéance approche
- Mettre en évidence les tâches en retard
- Permettre le tri des tâches par date d'échéance
- Assurer la persistance des dates d'échéance dans le stockage local

## Initialisation
- [ ] Réviser le modèle de données existant des tâches
- [ ] Examiner les meilleures pratiques pour la manipulation des dates en JavaScript
- [ ] Planifier les modifications nécessaires à l'interface utilisateur

## Étapes d'implémentation
- [ ] Étendre le modèle de données des tâches:
  - [ ] Ajouter une propriété dueDate au modèle de tâche
  - [ ] Mettre à jour les fonctions de création et de modification des tâches
  - [ ] Adapter le système de stockage pour inclure les dates d'échéance
- [ ] Implémenter l'interface utilisateur pour les dates d'échéance:
  - [ ] Ajouter un sélecteur de date dans le formulaire d'ajout/modification de tâche
  - [ ] Créer un design intuitif pour la sélection de date
  - [ ] Permettre la suppression d'une date d'échéance précédemment définie
- [ ] Développer l'affichage des dates d'échéance:
  - [ ] Présenter les dates d'échéance dans la liste des tâches
  - [ ] Formater les dates de manière lisible et cohérente
  - [ ] Créer des indicateurs visuels pour les échéances proches ou dépassées
- [ ] Implémenter la logique de suivi des échéances:
  - [ ] Développer une fonction pour calculer le temps restant avant l'échéance
  - [ ] Créer un système pour catégoriser les tâches (à temps, bientôt dues, en retard)
  - [ ] Mettre à jour régulièrement l'affichage des échéances
- [ ] Intégrer avec les fonctionnalités existantes:
  - [ ] Ajouter une option de tri par date d'échéance
  - [ ] Assurer la compatibilité avec les fonctions de filtrage existantes
  - [ ] Tester l'interaction avec toutes les fonctionnalités existantes

## Critères de réussite
- Les utilisateurs peuvent ajouter, modifier et supprimer des dates d'échéance pour les tâches
- Les dates d'échéance sont clairement affichées dans l'interface
- L'application fournit des indicateurs visuels pour les échéances proches ou dépassées
- Les tâches peuvent être triées par date d'échéance
- Les dates d'échéance sont correctement sauvegardées et récupérées du stockage local
- L'interface de sélection de date est intuitive et facile à utiliser

## Dépendances
- FEAT-001: Créer l'interface utilisateur de base (HTML/CSS)
- FEAT-002: Implémenter l'ajout de nouvelles tâches
- FEAT-004: Implémenter l'édition des tâches existantes
- STORAGE-001: Configurer le système de stockage avec LocalStorage
- STORAGE-002: Implémenter la sauvegarde automatique des tâches

## Notes
Pour la manipulation des dates, considérer l'utilisation de bibliothèques comme `date-fns` ou `dayjs` qui sont légères et performantes. 

La présentation des dates doit être adaptée à la locale de l'utilisateur. Utiliser l'API Intl.DateTimeFormat pour le formatage localisé des dates.

Les indicateurs visuels pour les échéances devraient suivre une logique intuitive, par exemple:
- Vert: échéance dans plus d'une semaine
- Orange: échéance dans moins d'une semaine
- Rouge: échéance dépassée

## Post-traitement
- [ ] Vérifier la compatibilité avec différents fuseaux horaires
- [ ] Mettre à jour la documentation pour inclure la fonctionnalité de date d'échéance
- [ ] Mettre à jour CHANGELOG.md avec les changements apportés

## Liste de vérification
- [ ] Toutes les étapes d'implémentation terminées
- [ ] Tous les critères de réussite remplis
- [ ] Les dates d'échéance sont correctement gérées dans tous les cas d'utilisation
- [ ] L'interface utilisateur pour les dates est intuitive et accessible
- [ ] La tâche répond pleinement à toutes les exigences
- [ ] Documentation mise à jour selon les besoins
- [ ] CHANGELOG.md mis à jour avec un résumé des changements

## Étapes finales
- [ ] Marquer la tâche comme terminée dans TODO.md
- [ ] Valider les changements avec un message de commit au format conventionnel 