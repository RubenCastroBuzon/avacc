"use strict";

function avacc_showHide(shID) {
    var elem = document.getElementById(shID);
    var elem_show = document.getElementById(shID+'-show');
    if (elem) {
        if (elem_show.style.display != 'none') {
            elem_show.style.display = 'none';
            elem.style.display = 'block';
        }
        else {
            elem_show.style.display = 'inline';
            elem.style.display = 'none';
        }
    }
}


(function (window, document) {
    var vmenu = document.getElementById('purecss_menu'),
        WINDOW_CHANGE_EVENT = ('onorientationchange' in window) ? 'orientationchange':'resize';

    function toggleHorizontal() {
        [].forEach.call(
            document.getElementById('purecss_menu').querySelectorAll('.custom-can-transform'),
            function(el){
                el.classList.toggle('pure-menu-horizontal');
            }
        );
    };

    function toggleMenu() {
        console.log("toggleMenu");
        var vmenu = document.getElementById('purecss_menu');
        // set timeout so that the panel has a chance to roll up
        // before the menu switches states
        if (vmenu.classList.contains('open')) {
            setTimeout(toggleHorizontal, 500);
        }
        else {
            toggleHorizontal();
        }
        vmenu.classList.toggle('open');
        document.getElementById('toggle').classList.toggle('x');
    };

    // Function to add event listener to t
    function load() {
        var vtoggle = document.getElementById('toggle');
        if(vtoggle != null) {
            vtoggle.addEventListener('click', function (e) {
                toggleMenu();
                e.preventDefault();
            });
        }

        function closeMenu() {
            var vmenu = document.getElementById('purecss_menu');
            if(vmenu != null) {
                if (vmenu.classList.contains('open')) {
                    toggleMenu();
                }
            }
        }

        window.addEventListener(WINDOW_CHANGE_EVENT, closeMenu);
    } 

    document.addEventListener("DOMContentLoaded", load, false);
})(this, this.document);

