# PROJET Developpement Multimédia:

# 1) Présentation :
Nous nous intéressons au développement d’un module permettant de capturer la photo de l’utilisateur pour pouvoir l’ajouter à son profile. Ce module sera utilisable dans les applications Web, Mobiles
hybrides et Desktop basées sur les technologies WEB.

Le module sera développé en utilisant une approche incrémentale en trois versions successives :
## Version 1 :
Cette version doit comporter :
1. Etape 1 : Une interface pour les actions de la capture
2. Etape 2 : Enregistrement de l’image encodée
## Version 2 :
Cette version va améliorer l’interface de la version 1 en ajoutant :
1. Etape 1 : Ajouter à l’interface des composants permettant d’ajuster la qualité de l’image
en ajoutant des effets à l’image (contraste, luminosité, teinte, etc…)
## Version 3 :
Dans cette version, nous permettrons aux utilisateur de recadrer et de pivoter l’image
(cropping). Pour cela, l’interface doit présenter un rectangle (Outline) avec des poignets
permettant de guider l’utilisateur dans ses actions.
1. Etape 1 : Tracer l’Outline avec ses poignets de recadrage
2. Etape 2 : Rendre l’Outline et ses poignets sensibles aux mouvements de la sourie
(Evénements)
3. Etape 3 : Gérer le recadrage (en largeur et en hauteur) et le pivotement selon les
événements de la sourie
4. Etape 4 : Enregistrement de l’image recadrer.

# 2)Description :

L’utilisateur appuie sur le bouton « photo » , et aprés On affiche l’interface qui contient une « vidéo » et le bouton « capturer ». La vidéo affiche la
sortie de la caméra de l’utilisateur. Si le dispositif de l’utilisateur n’a pas de caméra, on affiche et on démarre une petite 
video en boucle.

![image](https://user-images.githubusercontent.com/46229189/57962700-cfd4b100-7909-11e9-85f6-03ca040a263a.png)

Quand l’utilisateur appuie sur le bouton « capturer », on affiche un compte à rebour (Countdown) de 3 secondes au terme duquel on capture l’image. (On l’affiche)
L’image est ensuite encodée soous format Base64 pour etre finalement enregistrer.

ainsi qu'il contient en plus des éléments décrits dans la version 1, un ensemble de boutons permettant d’ajuster les réglages de l’image
capturée à savoir la luminosité , contraste et la saturation .
Un bouton « esauvegarder » permettra l’enregistrement de l’image finalisée.

![image](https://user-images.githubusercontent.com/46229189/57962766-c4ce5080-790a-11e9-99cf-2c4b247a7bf7.png)

Si on clique sur bloquer, une video est affiché.

![image](https://user-images.githubusercontent.com/46229189/57962801-1c6cbc00-790b-11e9-83a3-4cb325792be9.png)

sinon la camera est On.


![image](https://user-images.githubusercontent.com/46229189/57962818-3c9c7b00-790b-11e9-863b-910c27ed59f1.png)

## Exemple de filtrage d'une image :

![image](https://user-images.githubusercontent.com/46229189/57963151-dd8d3500-790f-11e9-9065-bf952b1e929f.png)

## Exemple de recadrage d'image :
![image](https://user-images.githubusercontent.com/46229189/57963248-285b7c80-7911-11e9-88b3-6560077bf48f.png)

Aprés recadrage :
![image](https://user-images.githubusercontent.com/46229189/57963265-5771ee00-7911-11e9-9df1-70ed8dad608c.png)

## Sauvegarde de l'image :
on clique sur sauvegarder , aprés avoir filtré la photo ,et voilà elle va commencé à se télécharger.
![image](https://user-images.githubusercontent.com/46229189/57963207-8e93cf80-7910-11e9-8891-11a1e44d924f.png)

voilà c'est téléchargé :
![image](https://user-images.githubusercontent.com/46229189/57963218-b7b46000-7910-11e9-8890-94a53643a707.png)

