

function setPile(percent) {
    var val = Math.floor(100 - percent);
    console.log("Percent " + val); 
    document.getElementById("mydiv").style.background = 'linear-gradient(to bottom, white 0%,white' + val +'%' + ',rgba(64,187,106,1)'+ val+ '%)';
	document.getElementById("text").innerHTML = Math.floor(percent) + "Watt";
}

