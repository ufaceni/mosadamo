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

var modalHolder = document.getElementById('myModal');

function modal (id){
    modalHolder.style.display = "block";
    var modalImg = document.getElementById("imageModal");
    var captionText = document.getElementById("caption");
    var element = document.getElementById(id);
    modalImg.src = element.src;
    captionText.innerHTML = element.alt;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
    modalHolder.style.display = "none";
}

function removeWebHostStuff() {
    var url = location.href;
    if (url.indexOf('file:///') === -1 && url.indexOf('localhost') === -1) {
        var divs = document.body.getElementsByTagName('div');
        var webHostDiv = divs[divs.length-1];
        webHostDiv.parentNode.removeChild(webHostDiv);
    }
}

window.onload = function() {
   // setTimeout(removeWebHostStuff, 1000);
   removeWebHostStuff();
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
