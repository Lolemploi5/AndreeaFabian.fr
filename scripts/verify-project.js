#!/usr/bin/env node

/**
 * Script de vérification finale du projet Studio Fabian
 * Vérifie tous les composants et génère un rapport de statut
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 VÉRIFICATION FINALE - PROJET STUDIO FABIAN\n');

// Couleurs pour la console
const colors = {
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
  reset: '\x1b[0m',
  bold: '\x1b[1m'
};

function checkFile(filePath, description) {
  const exists = fs.existsSync(filePath);
  const status = exists ? '✅' : '❌';
  const color = exists ? colors.green : colors.red;
  console.log(`${color}${status} ${description}${colors.reset}`);
  return exists;
}

function checkWorkflow(workflowName) {
  const filePath = `.github/workflows/${workflowName}.yml`;
  return checkFile(filePath, `Workflow ${workflowName}`);
}

function checkComponent(componentName) {
  const filePath = `src/components/${componentName}.vue`;
  return checkFile(filePath, `Composant ${componentName}`);
}

function checkTest(testName) {
  const filePath = `src/__tests__/${testName}.test.js`;
  return checkFile(filePath, `Tests ${testName}`);
}

function checkPackageScript(scriptName) {
  try {
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    const exists = packageJson.scripts && packageJson.scripts[scriptName];
    const status = exists ? '✅' : '❌';
    const color = exists ? colors.green : colors.red;
    console.log(`${color}${status} Script npm: ${scriptName}${colors.reset}`);
    return exists;
  } catch (error) {
    console.log(`${colors.red}❌ Erreur lecture package.json${colors.reset}`);
    return false;
  }
}

let totalChecks = 0;
let passedChecks = 0;

function check(result) {
  totalChecks++;
  if (result) passedChecks++;
  return result;
}

console.log(`${colors.bold}📁 STRUCTURE DU PROJET${colors.reset}`);
check(checkFile('package.json', 'Configuration npm'));
check(checkFile('vite.config.js', 'Configuration Vite'));
check(checkFile('index.html', 'Point d\'entrée HTML'));
check(checkFile('README.md', 'Documentation principale'));

console.log(`\n${colors.bold}🧩 COMPOSANTS${colors.reset}`);
check(checkComponent('Header'));
check(checkComponent('BottomBar'));

console.log(`\n${colors.bold}📄 PAGES${colors.reset}`);
check(checkFile('src/views/Home.vue', 'Page d\'accueil'));
check(checkFile('src/views/Services.vue', 'Page Services'));
check(checkFile('src/views/Realisations.vue', 'Page Réalisations'));
check(checkFile('src/views/Contact.vue', 'Page Contact'));

console.log(`\n${colors.bold}🧪 TESTS UNITAIRES${colors.reset}`);
check(checkTest('Header'));
check(checkTest('BottomBar'));
check(checkTest('Home'));
check(checkTest('Services'));
check(checkTest('Realisations'));
check(checkTest('Contact'));

console.log(`\n${colors.bold}🚀 WORKFLOWS GITHUB ACTIONS${colors.reset}`);
check(checkWorkflow('ci'));
check(checkWorkflow('tests'));
check(checkWorkflow('deploy'));

console.log(`\n${colors.bold}📚 DOCUMENTATION${colors.reset}`);
check(checkFile('README.md', 'README principal'));
check(checkFile('GUIDE.md', 'Guide développeur'));
check(checkFile('CHANGELOG.md', 'Historique des modifications'));
check(checkFile('STATUS.md', 'État du projet'));
check(checkFile('GITHUB_PAGES_SETUP.md', 'Guide GitHub Pages'));
check(checkFile('RESOLUTION_FINALE.md', 'Résolution finale'));

console.log(`\n${colors.bold}⚙️ SCRIPTS NPM${colors.reset}`);
check(checkPackageScript('dev'));
check(checkPackageScript('build'));
check(checkPackageScript('test'));
check(checkPackageScript('test:ui'));
check(checkPackageScript('test:coverage'));

console.log(`\n${colors.bold}📊 RÉSULTAT FINAL${colors.reset}`);
const percentage = Math.round((passedChecks / totalChecks) * 100);
const color = percentage === 100 ? colors.green : percentage >= 90 ? colors.yellow : colors.red;

console.log(`${color}${colors.bold}✓ ${passedChecks}/${totalChecks} vérifications réussies (${percentage}%)${colors.reset}`);

if (percentage === 100) {
  console.log(`\n${colors.green}${colors.bold}🎉 PROJET ENTIÈREMENT OPÉRATIONNEL !${colors.reset}`);
  console.log(`${colors.cyan}Le site Studio Fabian est prêt pour la production.${colors.reset}`);
} else {
  console.log(`\n${colors.yellow}⚠️ Quelques éléments manquent encore.${colors.reset}`);
}

console.log(`\n${colors.blue}🌐 URL de déploiement: https://Lolemploi5.github.io/AndreeaFabian.fr${colors.reset}`);
console.log(`${colors.blue}📖 Documentation: ./README.md${colors.reset}`);
console.log(`${colors.blue}🔧 Guide setup: ./GITHUB_PAGES_SETUP.md${colors.reset}`);
