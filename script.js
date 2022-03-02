function openForm() {
  document.getElementById("popupForm").style.display = "block";
}
function closeForm() {
  document.getElementById("popupForm").style.display = "none";
}
function confirmation() {
  alert("Merci pour votre commande, celle-ci a bien été envoyer,\nvous recevrez sous peu un SMS de validation de votre commande");
  document.getElementById("popupForm").style.display = "none";
}
function confirmationIdee() {
  alert("Merci pour votre idée :)");
  document.getElementById("popupForm").style.display = "none";
}
function painTradi() {
  alert("Le pain traditionnel est constituée d’un mélange de farine de blé (de type 55 ou de type 65),\nd’eau potable, de sel de cuisine, de levure ou levain.");
}
function painCamp() {
  alert("Le “pain de campagne” est fait à base de farine de blé mélangée ou non avec de la farine de seigle,\nselon un procédé qui évite le blanchiment de la pâte, développe une saveur acidulée, et prolonge sa fraîcheur grâce à un pétrissage,\nune fermentation et un mode de cuisson particuliers.");
}
function painCereal() {
  alert("Le “pain aux céréales et graines” est composé de farine de blé tendre à laquelle sont ajoutées des céréales\n(épeautre, maïs, millet, avoine…) et/ou des graines (lin, pavot, tournesol…).");
}
function painEpeau() {
  alert("L'épeautre est une céréale très ancienne, très proche du froment et, considéré comme l'ancêtre du blé.\nPar rapport au blé, l'épeautre a un goût un peu plus prononcé (de noisettes) et surtout, il contient moins de gluten que ce dernier.");
}
function painMais() {
  alert("Le pain de maïs est un pain rapide contenant de la farine de maïs et une cuisine amérindienne.\nIls sont généralement levés par la levure chimique.");
}
function painGluten() {
  alert("Le pain sans gluten peut être réalisé avec des céréales naturellement dépourvues de gluten, comme le sarrasin, ou le riz.\nLes farines de soja, de châtaigne et de pois chiche sont également sans gluten.");
}
function painSeigle() {
  alert("Le pain de seigle fait partie des pains dits pains spéciaux en ce qu'il est fabriqué principalement avec de la farine de seigle.\nCe pain est aussi appelé « pain noir »");
}
function painAvoine() {
  alert("Céréale très populaire depuis quelques années, l’avoine a comme principal avantage son contenu en fibres solubles.\nIl est intéressant de noter que de toutes les céréales, l'avoine est la plus riche en lipides, principalement en acides gras insaturés.");
}
