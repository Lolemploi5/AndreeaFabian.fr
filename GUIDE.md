# 🎯 Guide d'Utilisation - Studio Fabian

## 📋 Table des matières

1. [🚀 Démarrage rapide](#-démarrage-rapide)
2. [🧪 Tests et qualité](#-tests-et-qualité)
3. [🔧 Développement](#-développement)
4. [📊 Monitoring](#-monitoring)
5. [🚢 Déploiement](#-déploiement)

---

## 🚀 Démarrage rapide

### Installation
```bash
# Cloner le projet
git clone https://github.com/Lolemploi5/AndreeaFabian.fr.git
cd AndreeaFabian.fr

# Installer les dépendances
npm install

# Lancer en développement
npm run dev
```

### Premiers pas
- Ouvrir http://localhost:5173
- Explorer les 4 pages : Accueil, Services, Réalisations, Contact
- Tester les animations et interactions

---

## 🧪 Tests et qualité

### Exécution des tests
```bash
# Tests en mode watch
npm run test

# Tests avec interface graphique
npm run test:ui
# → Ouvre http://localhost:51205/__vitest__/

# Tests uniques
npm run test:run

# Rapport de couverture
npm run test:coverage
# → Génère coverage/index.html
```

### Couverture actuelle
- **28 tests** sur 6 fichiers
- **43.6%** de couverture globale
- **100%** sur BottomBar, Services, Realisations
- **96.3%** sur Header
- **80.6%** sur Home
- **42.5%** sur Contact

### Structure des tests
```
src/__tests__/
├── BottomBar.test.js     # 4 tests
├── Contact.test.js       # 5 tests
├── Header.test.js        # 4 tests
├── Home.test.js          # 4 tests
├── Realisations.test.js  # 6 tests
└── Services.test.js      # 5 tests
```

---

## 🔧 Développement

### Architecture
```
src/
├── components/           # Composants réutilisables
│   ├── Header.vue       # Navigation principale
│   └── BottomBar.vue    # Footer avec contacts
├── views/               # Pages de l'application
│   ├── Home.vue         # Page d'accueil
│   ├── Services.vue     # Présentation services
│   ├── Realisations.vue # Galerie projets
│   └── Contact.vue      # Formulaire contact
├── router/              # Configuration routage
└── assets/              # Images et ressources
```

### Scripts disponibles
```bash
npm run dev           # Serveur développement
npm run build         # Build production
npm run preview       # Aperçu build
npm run test          # Tests unitaires
npm run test:ui       # Interface tests
npm run test:coverage # Rapport couverture
npm run summary       # Résumé projet
```

### Technologies utilisées
- **Vue.js 3.5.16** - Framework principal
- **Vue Router 4.5.1** - Routage SPA
- **Vite 6.3.5** - Build tool
- **Vitest 3.2.0** - Tests unitaires
- **@vue/test-utils 2.4.6** - Utilities tests Vue

---

## 📊 Monitoring

### Visualisation des tests
```bash
# Interface graphique complète
npm run test:ui
```
**Fonctionnalités :**
- Vue d'ensemble des tests
- Détails par fichier
- Historique des exécutions
- Filtrage et recherche
- Mode watch automatique

### Rapport de couverture
```bash
# Génération HTML
npm run test:coverage
open coverage/index.html
```
**Métriques disponibles :**
- Couverture par ligne
- Couverture par branche
- Couverture par fonction
- Détails par fichier
- Lignes non couvertes

### Résumé automatique
```bash
# Affichage complet du statut
npm run summary
```

---

## 🚢 Déploiement

### Build de production
```bash
npm run build
# → Génère dist/ optimisé
```

### GitHub Actions
Le projet inclut 3 workflows automatiques :

#### CI - Intégration Continue
- Tests sur push/PR
- Validation qualité code
- Build multi-environnements

#### Tests - Couverture
- Exécution suite complète
- Génération rapports
- Upload Codecov

#### Deploy - Déploiement
- Build automatique
- Déploiement GitHub Pages
- Notifications

### Hébergement
**Options recommandées :**
- **Netlify** : `npm run build` → glisser dist/
- **Vercel** : Import GitHub → Auto-deploy
- **GitHub Pages** : Workflow inclus
- **Serveur** : Servir dist/ statiquement

---

## 🏆 Résumé des accomplissements

✅ **Site complet** avec 4 pages fonctionnelles  
✅ **28 tests unitaires** avec 43.6% de couverture  
✅ **Interface tests UI** avec Vitest  
✅ **Animations fluides** et transitions directionnelles  
✅ **Bottom bar** avec contacts et design moderne  
✅ **GitHub Actions** CI/CD complète  
✅ **Documentation** complète et détaillée  
✅ **Build optimisé** prêt pour production  

---

**🎉 Projet entièrement configuré et prêt pour la production !**
