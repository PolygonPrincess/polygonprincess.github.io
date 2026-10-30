(function () {
    'use strict';

    function initTooltips() {
        if (!window.bootstrap || !bootstrap.Tooltip) {
            return;
        }

        document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(function (element) {
            new bootstrap.Tooltip(element);
        });
    }

    function initClippy() {
        if (typeof clippy === 'undefined') {
            return;
        }

        // Respect reduced-motion and data-saver preferences.
        if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            return;
        }
        if (navigator.connection && navigator.connection.saveData) {
            return;
        }

        // Absolute path so Clippy also works from /about/ and /support/.
        clippy.BASE_PATH = '/assets/clippyjs/agents/';

        clippy.load('Clippy', function (agent) {
            agent.show();

            var speech = document.body.getAttribute('data-clippy-speech');
            if (speech) {
                agent.speak(speech);
            }

            document.querySelectorAll('[data-clippy-hover]').forEach(function (element) {
                element.addEventListener('mouseenter', function () {
                    agent.animate('Searching');
                });
            });
        }, function () {
            // If the agent cannot load, leave the page fully usable.
        });
    }

    function startClippy() {
        if ('requestIdleCallback' in window) {
            window.requestIdleCallback(initClippy, { timeout: 2000 });
        } else {
            window.setTimeout(initClippy, 1000);
        }
    }

    initTooltips();

    if (document.readyState === 'complete') {
        startClippy();
    } else {
        window.addEventListener('load', startClippy);
    }
})();
