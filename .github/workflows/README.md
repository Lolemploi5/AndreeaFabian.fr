# GitHub Actions Workflows

Ce dossier contient les workflows d'intégration continue et de déploiement pour le projet Studio Fabian.

## 🔧 Workflows disponibles

### `ci.yml` - Intégration Continue
- **Déclenchement** : Push sur `main`/`develop`, Pull Requests vers `main`
- **Actions** :
  - Installation des dépendances
  - Vérification du code (linting)
  - Exécution des tests unitaires
  - Build de production
  - Upload des artefacts

### `tests.yml` - Tests et Couverture
- **Déclenchement** : Push sur `main`/`develop`, Pull Requests vers `main`
- **Actions** :
  - Exécution de tous les tests unitaires
  - Génération du rapport de couverture
  - Upload vers Codecov

### `deploy.yml` - Déploiement
- **Déclenchement** : Push sur `main` uniquement
- **Actions** :
  - Build de production
  - Déploiement automatique sur GitHub Pages
  - Notification de déploiement

## 📊 Badges de statut

Les badges de statut sont disponibles dans le README principal et se mettent à jour automatiquement après chaque build.

## 🔑 Secrets requis

Pour le bon fonctionnement des workflows, aucun secret supplémentaire n'est requis. Le token `GITHUB_TOKEN` est fourni automatiquement par GitHub Actions.
