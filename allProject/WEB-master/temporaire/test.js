var delay = ( function() {
    var timer = 0;
    return function(callback, ms) {
        clearTimeout (timer);
        timer = setTimeout(callback, ms);
    };
})();

delay(function(){
    // do stuff
    document.getElementById("mydiv").style.background = 'linear-gradient(to bottom, white 0%,white 90%,rgba(64,187,106,1) 90%)';
    delay(function(){
    // do stuff
    document.getElementById("mydiv").style.background = 'linear-gradient(to bottom, white 0%,white 80%,rgba(64,187,106,1) 80%)';
    delay(function(){
    // do stuff
    document.getElementById("mydiv").style.background = 'linear-gradient(to bottom, white 0%,white 70%,rgba(64,187,106,1) 70%)';
    delay(function(){
    // do stuff
    document.getElementById("mydiv").style.background = 'linear-gradient(to bottom, white 0%,white 60%,rgba(64,187,106,1) 60%)';
    delay(function(){
    // do stuff
    document.getElementById("mydiv").style.background = 'linear-gradient(to bottom, white 0%,white 50%,rgba(64,187,106,1) 50%)';
    delay(function(){
    // do stuff
    document.getElementById("mydiv").style.background = 'linear-gradient(to bottom, white 0%,white 40%,rgba(64,187,106,1) 40%)';
    delay(function(){
    // do stuff
    document.getElementById("mydiv").style.background = 'linear-gradient(to bottom, white 0%,white 30%,rgba(64,187,106,1) 30%)';
    delay(function(){
    // do stuff
    document.getElementById("mydiv").style.background = 'linear-gradient(to bottom, white 0%,white 20%,rgba(64,187,106,1) 20%)';
    delay(function(){
    // do stuff
    document.getElementById("mydiv").style.background = 'linear-gradient(to bottom, white 0%,white 10%,rgba(64,187,106,1) 10%)';
    delay(function(){
    // do stuff
    document.getElementById("mydiv").style.background = 'linear-gradient(to bottom, white 0%,white 0%,rgba(64,187,106,1) 0%)';
    delay(function(){
    // do stuff
    document.getElementById("image").src="../images/batterie-fin.png";
    
    document.getElementById("text").innerHTML="Vous avez généré <br/> ...";
    }, 1000 );
}, 1000 );
}, 1000 );
}, 1000 );
}, 1000 );

}, 1000 );
}, 1000 );

}, 1000 );
}, 1000 );
}, 1000 );


}, 1000 );

