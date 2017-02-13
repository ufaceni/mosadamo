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

var slideIndex = 0;

function startTimer(){
    var i,
        slides = document.getElementsByClassName("mySlides"),
        dots = document.getElementsByClassName("dot");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(startTimer, 6000);
}

var url = {
    tabUrl: {
        news: 'base.html',
        about: 'about.html',
        fashion: 'fashion.html',
        wear: 'wear.html',
        contact: 'contact.html'
    }
}

function tabClick(e){
    for(var i in url.tabUrl){
        if(e.id === i){
            location.href = url.tabUrl[i];
        }
    }
}

var main = {
    onLoad: function(){
    }
}

window.onload = function() {
    main.onLoad();
};


var app = {
    /** main onload function */
    onLoad: function() {
        logd('loaded'); 
        startTimer();
    }
};

/** we wait for window to load */
window.onload = function() {
    app.onLoad();
};
 