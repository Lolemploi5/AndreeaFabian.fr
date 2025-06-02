#!/usr/bin/env node

/**
 * Script de démarrage environnement complet Studio Fabian
 * Lance le serveur dev + interface tests en parallèle
 */

const { spawn } = require('child_process');

console.log('🚀 Démarrage environnement complet Studio Fabian');
console.log('=' .repeat(50));

// Lancer le serveur de développement
console.log('📦 Lancement serveur développement...');
const devServer = spawn('npm', ['run', 'dev'], {
  stdio: 'inherit',
  shell: true
});

// Lancer l'interface des tests
console.log('🧪 Lancement interface tests...');
const testUI = spawn('npm', ['run', 'test:ui'], {
  stdio: 'inherit', 
  shell: true
});

// Afficher les instructions
setTimeout(() => {
  console.log('\n📊 ENVIRONNEMENT ACTIF');
  console.log('=' .repeat(50));
  console.log('🌐 Application disponible à : http://localhost:5173');
  console.log('🧪 Interface tests à : http://localhost:51205/__vitest__/');
  console.log('📊 Couverture disponible : coverage/index.html');
  console.log('');
  console.log('📝 Commandes utiles :');
  console.log('• npm run summary - Résumé du projet');
  console.log('• npm run test:coverage - Rapport de couverture');
  console.log('• npm run build - Build de production');
  console.log('');
  console.log('🛑 Ctrl+C pour arrêter les serveurs');
  console.log('=' .repeat(50));
}, 3000);

// Gestion de l'arrêt propre
process.on('SIGINT', () => {
  console.log('\n🛑 Arrêt des serveurs...');
  devServer.kill();
  testUI.kill();
  process.exit();
});
