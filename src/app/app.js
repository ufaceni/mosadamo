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
