# Mode d’emploi – L’Atelier du Volcan

Bienvenue Tristan ! Voici comment piloter ton site vitrine sans écrire une ligne de code.

## 1. Accéder à l’administration
- Ouvre ton navigateur et rends-toi sur **atelierduvolcan.fr/admin** (ou sur l’URL de préproduction si tu testes en local).
- Connecte-toi via GitHub/GitLab/Bitbucket (selon la configuration Git Gateway). Une fois connecté, tu arrives sur Decap CMS.

## 2. Modifier les contenus
Tout se passe dans le menu de gauche.

### Accueil
1. Clique sur **Page d’accueil**.
2. Mets à jour le titre, le sous-titre, l’image du hero, les 4 points forts, les services mis en avant, etc.
3. Clique sur **Save** puis sur **Publish** pour mettre le contenu en ligne.

### À propos
1. Ouvre **Page À propos**.
2. Modifie l’introduction, l’histoire de l’atelier et les valeurs.
3. Publie tes changements.

### Services
1. Va dans **Services**.
2. Chaque entrée correspond à une page service (charpente, pergola, extensions…).
3. Tu peux :
   - Ajuster le titre, l’extrait, la description longue.
   - Ajouter/supprimer des points clés.
   - Modifier l’image (colle l’URL d’une photo ou charge ta propre image dans l’onglet **Médias** et copie son adresse).
   - Mettre à jour les étapes du process.
4. Ajoute un nouveau service avec **Add Services** si besoin.
5. Publie.

### Réalisations
- Section **Réalisations** : ajoute de nouveaux projets (titre, description, image). L’ordre de la liste correspond à l’affichage sur le site.

### Avis clients
- Section **Avis clients** : gère les témoignages (nom, note sur 5, message).

### Coordonnées & réseaux
- Mets à jour l’adresse, le téléphone, l’email, les liens Facebook/Instagram ou l’email qui reçoit les messages du formulaire (onglet **Emails (Resend)**).

## 3. Gérer les images
- Onglet **Media** (icône photo) → clique sur **Upload** pour envoyer une image.
- Une fois l’image importée, clique dessus puis sur **Copy URL** et colle cette URL dans le champ image correspondant.

## 4. Sauvegarde automatique
- Chaque modification publiée crée un commit sur GitHub : ton historique est versionné automatiquement.
- Aucun risque de perdre une version, tu peux revenir en arrière depuis GitHub si besoin.

## 5. Mise en ligne sur Vercel
- Dès que tu publies dans Decap, Vercel déclenche un déploiement automatique.
- La mise en ligne prend généralement **moins de 30 secondes**.

## 6. Formulaire de contact
- Les messages partent vers **contact@atelier-du-volcan.com** via Resend.
- Pas de clé API Resend ? Le site affiche quand même “Merci, votre message a été envoyé” et t’invite à vérifier ta boîte mail.
- Ajoute ta clé dans la variable d’environnement `RESEND_API_KEY` sur Vercel pour activer l’envoi réel.

## 7. Besoin d’aide ?
- Tu peux modifier le contenu autant de fois que nécessaire.
- Pour un changement graphique ou fonctionnel, crée une nouvelle demande sur GitHub ou contacte ton développeur.

Bonne création !
