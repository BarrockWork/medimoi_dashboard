# Médi'Moi - Dashboard

## Introduction
Application Front React pour le dashboard.
Médi'Moi est une application web pour aider à vérifier la santé tous les jours et suivre des traitements périodique.

## Pré-requis
Pour lancer le projet vous aurez besoin de la configuration suivante :
* [Nodejs >= v14](https://nodejs.org/en/download/) + [Yarn >= v1.22 (préférence)](https://yarnpkg.com/getting-started/install) ou [Npm >= v6.14](https://www.npmjs.com/)

## Stack technique
* [react v17](https://fr.reactjs.org/)
* [react-admin](https://marmelab.com/react-admin/Tutorial.html)
* [Ramda](https://ramdajs.com/)
* [Slugify](https://www.npmjs.com/package/slugify)
* [Jest](https://jestjs.io/fr/docs/getting-started)
* [mui/material](https://yarnpkg.com/package/@mui/material)
* [ra-input-rich-text](https://yarnpkg.com/package/ra-input-rich-text)

## Pour initialiser le projet

### 1/ Configurer les variables d'environnements
Créer son fichier ".env.local" à partir du .env qui contiendra les variable d'environnement du projet.
Exemple pour la connexion avec sa base de données :
> Exemple avec l'url de l'API: API_BASE_URL="http://localhost:4000/api/v1"

### 2/ Les commandes à exécuter pour le développement
```
1. Installer les modules nodes:
  a) Sans mettre à jour les packages (Recommandé ): yarn install --frozen-lockfile ou npm ci 
  b) En mettant les package (Uniquement si necessaire car cela impacte l'équipe): yarn install ou npm install 
2. Exécuter l'application: yarn start ou npm run start
```