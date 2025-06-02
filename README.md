# Studio Fabian - Site Vitrine Architecture d'Intérieur

🏠 **Site web professionnel pour Studio Fabian, architecte d'intérieur spécialisée dans la création d'espaces élégants et sur-mesure.**

## 📊 **Statut du projet**

[![CI](https://github.com/Lolemploi5/AndreeaFabian.fr/actions/workflows/ci.yml/badge.svg)](https://github.com/Lolemploi5/AndreeaFabian.fr/actions/workflows/ci.yml)
[![Tests](https://github.com/Lolemploi5/AndreeaFabian.fr/actions/workflows/tests.yml/badge.svg)](https://github.com/Lolemploi5/AndreeaFabian.fr/actions/workflows/tests.yml)
[![Deploy](https://github.com/Lolemploi5/AndreeaFabian.fr/actions/workflows/deploy.yml/badge.svg)](https://github.com/Lolemploi5/AndreeaFabian.fr/actions/workflows/deploy.yml)
[![codecov](https://codecov.io/gh/Lolemploi5/AndreeaFabian.fr/branch/main/graph/badge.svg)](https://codecov.io/gh/Lolemploi5/AndreeaFabian.fr)
[![Coverage](https://img.shields.io/badge/coverage-43.6%25-yellow.svg)](./coverage/index.html)
[![Tests](https://img.shields.io/badge/tests-28%20passed-brightgreen.svg)](./__tests__)

---

## 📋 **Description**

Site vitrine moderne développé avec Vue.js 3 présentant les services, réalisations et expertise de Studio Fabian. Le site offre une expérience utilisateur fluide avec des animations soignées et un design responsive adapté à tous les appareils.

### ✨ **Fonctionnalités principales**

- **🎨 Interface moderne** : Design élégant avec palette de couleurs raffinée
- **📱 Responsive design** : Optimisé pour desktop, tablette et mobile
- **🎬 Animations fluides** : Transitions entre pages et micro-interactions
- **📧 Formulaire de contact** : Envoi automatique vers Telegram
- **🖼️ Galerie interactive** : Carrousel et grille d'images avec modal
- **⚡ Performance optimisée** : Chargement rapide et interface réactive

---

## 🛠️ **Technologies utilisées**

| Technologie | Version | Description |
|-------------|---------|-------------|
| **Vue.js** | `^3.5.16` | Framework JavaScript progressif |
| **Vue Router** | `^4.5.1` | Routage côté client |
| **Vite** | `^6.3.5` | Build tool ultra-rapide |
| **CSS3** | - | Styles avancés et animations |
| **HTML5** | - | Structure sémantique |

---

## 📁 **Structure du projet**

```
AndreeaFabian.fr/
├── 📄 index.html              # Point d'entrée HTML
├── 📄 package.json            # Dépendances et scripts
├── 📄 vite.config.js          # Configuration Vite
├── 📄 README.md               # Documentation
├── 📁 public/                 # Assets statiques
│   ├── 🖼️ logo.jpg            # Logo Studio Fabian
│   └── 🖼️ tendance*.jpg       # Images tendances
├── 📁 src/                    # Code source
│   ├── 📄 App.vue             # Composant racine avec transitions
│   ├── 📄 main.js             # Point d'entrée JavaScript
│   ├── 📁 assets/             # Assets dynamiques
│   │   └── 📁 carrousel/      # Images réalisations
│   ├── 📁 components/         # Composants réutilisables
│   │   ├── 🧩 Header.vue      # En-tête avec navigation
│   │   └── 🧩 BottomBar.vue   # Pied de page avec contacts
│   ├── 📁 router/             # Configuration routage
│   │   └── 📄 index.js        # Routes définies
│   └── 📁 views/              # Pages principales
│       ├── 🏠 Home.vue        # Page d'accueil
│       ├── 🛠️ Services.vue     # Page services
│       ├── 🖼️ Realisations.vue # Galerie réalisations
│       └── 📞 Contact.vue     # Formulaire contact
```

---

## 🚀 **Installation et lancement**

### Prérequis
- **Node.js** (version 16+ recommandée)
- **npm** ou **yarn**

### Étapes d'installation

```bash
# 1. Cloner le projet
git clone https://github.com/Lolemploi5/AndreeaFabian.fr.git
cd AndreeaFabian.fr

# 2. Installer les dépendances
npm install

# 3. Configurer les variables d'environnement
cp .env.example .env
# Ajouter vos clés Telegram dans .env

# 4. Lancer en mode développement
npm run dev

# 5. Ouvrir dans le navigateur
# http://localhost:5173
```

---

## ⚙️ **Configuration**

### Variables d'environnement (.env)

```env
# Configuration Telegram pour formulaire contact
VITE_TELEGRAM_BOT_TOKEN=your_bot_token_here
VITE_TELEGRAM_CHAT_ID=your_chat_id_here
```

### Scripts disponibles

```bash
# 🚀 Développement
npm run dev     # Mode développement avec hot-reload
npm run build   # Build de production optimisé
npm run preview # Aperçu du build local

# 🧪 Tests
npm run test          # Tests unitaires en mode watch
npm run test:run      # Exécution unique des tests
npm run test:ui       # Interface graphique interactive pour les tests
npm run test:coverage # Rapport de couverture de code détaillé
```

---

## 📖 **Pages et fonctionnalités**

### 🏠 **Accueil** (`/`)
- Message d'accroche élégant
- Section tendances actuelles
- Carrousel de réalisations interactif
- Navigation fluide vers autres sections

### 🛠️ **Services** (`/services`)
- Présentation des engagements
- Liste détaillée des accompagnements
- Call-to-action vers contact
- Design immersif avec sections colorées

### 🖼️ **Réalisations** (`/realisations`)
- Grille responsive d'images
- Modal d'agrandissement
- Effets hover sophistiqués
- Chargement automatique des images

### 📞 **Contact** (`/contact`)
- Formulaire complet et validé
- Envoi automatique vers Telegram
- Animations de confirmation
- Informations de contact interactives

---

## 🎨 **Design et UX**

### Palette de couleurs
- **Principal** : `#bfa77a` (beige doré)
- **Secondaire** : `#c2b5a3` (beige clair)
- **Accent** : `#e7d8f6` (lavande)
- **Texte** : `#222` (gris foncé)
- **Arrière-plan** : `#f8f5f1` (crème)

### Typographie
- **Titres** : Times New Roman (élégance classique)
- **Corps** : Inter (lisibilité moderne)
- **Navigation** : Inter (consistance UI)

### Animations
- **Transitions de pages** : Glissement directionnel intelligent
- **Micro-interactions** : Hover, focus, click
- **Carrousel** : Slides fluides avec aperçus
- **Formulaire** : Feedback visuel temps réel

---

## 📱 **Responsive Design**

Le site s'adapte parfaitement à tous les écrans :

- **Desktop** (1200px+) : Layout complet avec toutes les fonctionnalités
- **Tablette** (900px-1200px) : Adaptation des grilles et espacements
- **Mobile** (600px-900px) : Navigation burger, layout vertical
- **Petit mobile** (<600px) : Interface optimisée tactile

---

## 🔧 **Fonctionnalités techniques**

### Système de routage
- **Vue Router 4** avec transitions personnalisées
- **Navigation directionnelle** intelligente
- **Mode history** pour URLs propres

### Gestion des images
- **Import dynamique** avec Vite glob
- **Lazy loading** natif
- **Optimisation** automatique

### Formulaire de contact
- **Validation** côté client
- **Envoi Telegram** sécurisé
- **Feedback** utilisateur immédiat
- **Format** professionnel des messages

### Performance
- **Build optimisé** avec Vite
- **Tree-shaking** automatique
- **Code splitting** par route
- **Assets** optimisés

### Tests et qualité

- **Vitest** pour les tests unitaires avec interface UI
- **28 tests** couvrant tous les composants (52.6% de couverture)
- **Interface graphique** interactive pour les tests (`npm run test:ui`)
- **Couverture de code** détaillée avec v8 provider
- **GitHub Actions** pour l'intégration continue

---

## 🚀 **CI/CD et GitHub Actions**

### Workflows automatisés

Le projet utilise **GitHub Actions** pour l'intégration et le déploiement continus :

#### 🔧 **CI - Intégration Continue**
```yaml
# .github/workflows/ci.yml
- Tests unitaires automatiques (Vitest)
- Vérification de la qualité du code
- Build de production
- Validation des performances
```

#### 🧪 **Tests**
```yaml
# .github/workflows/tests.yml
- Exécution de la suite de tests
- Couverture de code
- Tests de régression
- Validation multi-navigateurs
```

#### 🚀 **Déploiement**
```yaml
# .github/workflows/deploy.yml
- Build automatique sur push
- Déploiement sur la branche gh-pages
- Mise à jour des environnements
- Notifications de déploiement
```

### Badges de statut

- [![CI](https://github.com/Lolemploi5/AndreeaFabian.fr/actions/workflows/ci.yml/badge.svg)](https://github.com/Lolemploi5/AndreeaFabian.fr/actions/workflows/ci.yml) - Statut du build et des tests
- [![Tests](https://github.com/Lolemploi5/AndreeaFabian.fr/actions/workflows/tests.yml/badge.svg)](https://github.com/Lolemploi5/AndreeaFabian.fr/actions/workflows/tests.yml) - Résultats des tests unitaires
- [![Deploy](https://github.com/Lolemploi5/AndreeaFabian.fr/actions/workflows/deploy.yml/badge.svg)](https://github.com/Lolemploi5/AndreeaFabian.fr/actions/workflows/deploy.yml) - Statut du déploiement
- [![codecov](https://codecov.io/gh/Lolemploi5/AndreeaFabian.fr/branch/main/graph/badge.svg)](https://codecov.io/gh/Lolemploi5/AndreeaFabian.fr) - Couverture de code

---

## 🚀 **Déploiement**

### Build de production
```bash
npm run build
```

### Hébergement recommandé
- **Netlify** : Déploiement automatique
- **Vercel** : Performance optimale
- **GitHub Pages** : Solution gratuite
- **Serveur classique** : Apache/Nginx

### Configuration serveur
```nginx
# Configuration Nginx exemple
location / {
    try_files $uri $uri/ /index.html;
}
```

---

## 🤝 **Contribution**

### Standards de code
- **ESLint** pour la qualité
- **Prettier** pour le formatage
- **Conventional Commits** pour l'historique
- **Vue Style Guide** respecté

### Workflow Git
```bash
# Nouvelle fonctionnalité
git checkout -b feature/nom-fonctionnalite
git commit -m "feat: description de la fonctionnalité"
git push origin feature/nom-fonctionnalite
```

---

## 📞 **Contact et support**

**Studio Fabian**
- 📧 Email : andreea.fabian@hotmail.com
- 📱 Téléphone : 06 98 26 04 46
- 📸 Instagram : [@studio.fabian](https://www.instagram.com/studio.fabian/)

**Développement technique**
- 🐛 Issues : Utiliser GitHub Issues
- 💡 Suggestions : Créer une Discussion
- 📖 Documentation : Consulter ce README

---

## 📄 **Licence**

Ce projet est développé pour **Studio Fabian**. Tous droits réservés.

---

*Dernière mise à jour : Juin 2025*
