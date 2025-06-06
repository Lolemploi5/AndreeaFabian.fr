#!/bin/bash

# Script de déploiement automatique
# Usage: ./deploy.sh

echo "🔨 Construction de la version de production..."
npm run build

echo "📁 Préparation des fichiers pour le déploiement..."
echo "Fichiers prêts dans le dossier 'dist/'"
echo ""
echo "📋 Fichiers à transférer via SFTP :"
echo "=================================="
find dist -type f | sort

echo ""
echo "✅ Build terminé !"
echo "Vous pouvez maintenant transférer le contenu du dossier 'dist/' vers votre serveur."
echo ""
echo "💡 N'oubliez pas :"
echo "- Transférer TOUS les fichiers du dossier dist/"
echo "- Inclure le fichier .htaccess"
echo "- Vérifier les permissions (644 pour les fichiers, 755 pour les dossiers)"
