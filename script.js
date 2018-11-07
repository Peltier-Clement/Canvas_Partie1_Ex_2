var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
//Maison
ctx.fillStyle = "#a0d7e6";
/*
La fonction .fillRect() permet le tracé et le remplissage d'une
forme carrée ou rectangulaire. Les quatres coordonnées précisées entre les
paranthèses correspondent respectivement au point de départ de l'ordonnée (x),
au point de départ de l'abscisse (y), à la largeur et à la hauteur.
*/
ctx.fillRect(100,100,200,350);
//Fenêtres
ctx.fillStyle = "#C9C9C9";
ctx.fillRect(120,120,50,50);
ctx.fillRect(230,120,50,50);
//Porte
ctx.fillStyle = "#C9C9C9";
ctx.fillRect(150,250,100,150);
ctx.fillStyle = "#d88437";
/*
La propriété globalCompositeOperation définie la position de la forme sur laquelle
elle est appliquée. En l'occurrence, grâce à la valeur "destination-over", le
carré sur lequel nous agissons passera sous les autres carrés définis précédemment.
*/
ctx.globalCompositeOperation = "destination-over";
ctx.rotate(Math.PI / 4);
ctx.fillRect(140,-140,140,140);
