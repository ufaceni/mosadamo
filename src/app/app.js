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
 