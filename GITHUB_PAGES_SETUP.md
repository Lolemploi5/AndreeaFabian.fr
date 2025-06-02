# Configuration GitHub Pages

Ce guide vous explique comment configurer GitHub Pages pour permettre le déploiement automatique.

## 🚀 Étapes de configuration

### 1. Activer GitHub Pages

1. Allez dans votre repository GitHub
2. Cliquez sur **Settings** (Paramètres)
3. Scrollez jusqu'à la section **Pages** dans le menu de gauche
4. Dans **Source**, sélectionnez **GitHub Actions**

### 2. Configurer les permissions

Si vous êtes propriétaire du repository :

1. Allez dans **Settings** > **Actions** > **General**
2. Dans **Workflow permissions**, sélectionnez :
   - ✅ **Read and write permissions**
   - ✅ **Allow GitHub Actions to create and approve pull requests**

### 3. Vérifier les environnements

1. Allez dans **Settings** > **Environments**
2. Un environnement `github-pages` sera créé automatiquement lors du premier déploiement
3. Vous pouvez y configurer des règles de protection si nécessaire

## 🔧 Résolution des problèmes

### Erreur "Write access to repository not granted"

Cette erreur peut survenir si :
- Le repository est un fork (les forks ont des restrictions)
- Les permissions GitHub Actions ne sont pas correctement configurées
- Vous n'êtes pas propriétaire/administrateur du repository

**Solutions :**
1. Vérifiez les permissions dans Settings > Actions > General
2. Si c'est un fork, activez les Actions dans votre fork
3. Contactez l'administrateur du repository pour les permissions

### Le déploiement fonctionne mais le site n'est pas accessible

1. Vérifiez que GitHub Pages est activé dans Settings > Pages
2. Attendez quelques minutes (la propagation peut prendre du temps)
3. Vérifiez l'URL : `https://[username].github.io/[repository-name]`

## 📝 URL du site déployé

Une fois configuré, votre site sera disponible à :
```
https://Lolemploi5.github.io/AndreeaFabian.fr
```

## 🔄 Déploiement automatique

Après configuration, chaque push sur la branche `main` :
1. Lance les tests automatiquement
2. Build le projet si les tests passent
3. Déploie sur GitHub Pages
4. Met à jour le site en quelques minutes

## 📊 Suivi des déploiements

- Consultez l'onglet **Actions** pour voir l'état des workflows
- Les échecs de déploiement apparaîtront avec des détails d'erreur
- L'URL du site déployé sera affichée dans les logs du workflow
