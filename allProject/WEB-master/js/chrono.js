
function chrono(){
centi++; //incrémentation des dixièmes de 1
if (centi>9){centi=0;secon++;}
if (secon>59){secon=0;minu++;} 
document.forsec.secc.value=" "+centi; //on affiche les dixièmes
document.forsec.seca.value=" "+secon; //on affiche les secondes
document.forsec.secb.value=" "+minu; //on affiche les minutes
compte=setTimeout('chrono()',100) ;
}

function rasee(){ //fonction qui remet les compteurs à 0
	clearTimeout(compte); //arrête la fonction chrono()
	centi=0;
	secon=0;
	minu=0;
	document.forsec.secc.value=" "+centi;
	document.forsec.seca.value=" "+secon;
	document.forsec.secb.value=" "+minu;
	}