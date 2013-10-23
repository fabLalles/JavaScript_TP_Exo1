// Fonction mult qui multiplie 2 valeurs
function mult(v){
  return function(e){
    return v*e;
  }
}

// Fonction sub qui soustrait 2 valeurs
function sub(v) {
	return function(e) {
		return v-e;
	}
}

// Fonction adder qui prend en compte un nombre indéfinie de paramètre
function adder() {
	var args = Array.prototype.slice.call(arguments); // Transformation de l'objet arguments en un tableau args
	return function(e) {
		var resu = 0; // Déclaration et initialisation de la variable resu
		args.forEach(function(val){
			resu += val(e); // Ajoute le resultat de la fonction val à resu
		});
		return resu; // Retourne le résultat de la fonction
	}
}

// Test pour la fonction sub //
sub(0)(0); // Résultat : 0
sub(2)(1); // Résultat : 1
sub(2)(2); // Résultat : 0
sub(2)(4); // Résultat : -2


// Test pour la fonction adder //
adder(mult(2), sub(2), mult(2))(1); // Résultat : 5