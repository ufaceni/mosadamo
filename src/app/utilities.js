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
