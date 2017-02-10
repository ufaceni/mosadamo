var utilities = {
    /** debug logging enabled */
    debugLogging: false,
    
    /** common log */
    log: function() {
        window.console.log.apply(window.console, arguments);
    },
    
    /** debug logging */
    logd: function() {
        window.console.log.apply(window.console, arguments);
    }
};

/** log function */
function log() {
    utilities.log.apply(null, arguments);
}

/** log debug function */
function logd() {
    if (utilities.debugLogging)
        utilities.log.apply(null, arguments);
}

//var modalHolder = document.getElementById('myModal');

/*function modal (id){
    modalHolder.style.display = "block";
    var modalImg = document.getElementById("imageModal");
    var captionText = document.getElementById("caption");
    var element = document.getElementById(id);
    modalImg.src = element.src;
    captionText.innerHTML = element.alt;
}

//var span = document.getElementsByClassName("close")[0];

/*span.onclick = function() {
    modalHolder.style.display = "none";
}*/



window.onload = function() {
   
};


var app = {
    /** main onload function */
    onLoad: function() {
        logd('loaded'); 
    }
};

/** we wait for window to load */
window.onload = function() {
    app.onLoad();
};
