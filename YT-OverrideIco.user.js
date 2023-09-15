// ==UserScript==
// @name            YT-OverrideIco
// @namespace       Violentmonkey Scripts
// @version         1.1
// @author          Keshmi
// @description:ru  Переопределяет ресурс иконок для Youtube.
// @updateURL       https://github.com/KeshmiOn/YT-OverrideIco/raw/main/YT-OverrideIco.user.js
// @match           https://youtube.com/*
// @match           https://www.youtube.com/*
// @description     15.09.2023
// ==/UserScript==

(function() {
    'use strict';

    var resourceURL = "https://yt3.ggpht.com/";
    var redirectURL = "https://yt4.ggpht.com/";

    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === "childList") {
                var replacedElements = document.querySelectorAll('img[src^="' + resourceURL + '"]');
                replacedElements.forEach(function(element) {
                    var originalURL = element.getAttribute('src');
                    if (originalURL.startsWith(resourceURL)) {
                        var newURL = originalURL.replace(resourceURL, redirectURL);
                        element.setAttribute('src', newURL);
                    }
                });
            }
        });
    });

    observer.observe(document, { childList: true, subtree: true });
})();
