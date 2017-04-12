/*
Aufgabe: Portfolio
Name: Braun Dominik
Matrikel: 254901
Datum: 19.02.2017
Hiermit versichere ich, dass ich diesen
Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.
*/
//Die nachfolgende Funktion wurde nicht selbst geschrieben sondern hier (https://developer.mozilla.org/de/docs/Web/Events/resize) entnommen.
//Die Funktion dient dem Zweck das abfeuern des resize Event Listeners zu drosseln.
(function () {
    var throttle = function (type, name, obj) {
        obj = obj || window;
        var running = false;
        var func = function () {
            if (running) {
                return;
            }
            running = true;
            requestAnimationFrame(function () {
                obj.dispatchEvent(new CustomEvent(name));
                running = false;
            });
        };
        obj.addEventListener(type, func);
    };
    /* init - you can init any event */
    throttle("resize", "optimizedResize");
})();
//FUNKTION DIE EINE ZUF�LLIGE ZAHL ZUR�CKGIBT. Nicht von mir geschrieben (Quelle:https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Math/math.random)
function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
//S�mtlicher nachfolgender Code wurde nur von mir verfasst
//Diese Funktion realisiert das Aus- und Einklappen des Men�s 
var menustate = true;
function togglemenu() {
    if (menustate) {
        Velocity(document.getElementsByClassName("navigationbox"), "transition.slideDownBigIn", { stagger: 250, drag: true, duration: 500, delay: 100 });
        menustate = !menustate;
    }
    else {
        Velocity(document.getElementsByClassName("navigationbox"), "transition.slideUpBigOut", { stagger: 350, backwards: true, drag: true, duration: 500, delay: 100 });
        menustate = !menustate;
    }
}
//Funktion die zur�ckggibt ob man sich in der mobilen Ansicht befindet
function isMobile() {
    var isMobile;
    if (window.innerWidth < 570) {
        isMobile = true;
    }
    else {
        isMobile = false;
    }
    return isMobile;
}
//Funktion die s�mtliche Headeranimationen ausf�hrt
//1. Headertexte werden durchgewechselt
//2. Auf Grundlage einer zuf�lligen Zahl werden verschiedene Unter�berschriften und dazugeh�rige Texte f�r den Scrolltrigger angezeigt.
function headeranimation() {
    var headertext = document.getElementsByClassName("animatechange");
    var animationdelay = 0;
    var subscroll = getRandom(1, 4);
    var sub1 = "Do u wanna see the snowflakes ?";
    var sub2 = "Wait !? There is an elephant on the ceiling";
    var sub3 = "Is bottleflipping still cool ?";
    var note1 = "Let it scroll, let it scroll";
    var note2 = "See the elephants";
    var note3 = "You might wanna try it with this stylish bottle";
    for (i = 1; i < headertext.length; i++) {
        headertext[i].style.display = "none";
    }
    for (i = 1; i < headertext.length; i++) {
        Velocity(headertext[i], "transition.slideDownBigIn", { duration: 650, delay: animationdelay });
        if (i + 1 < headertext.length) {
            Velocity(headertext[i], "transition.slideDownBigOut", { duration: 500, delay: 300 });
        }
        animationdelay += 1450;
    }
    //ANIMATIONEN DER UNTER�BERSCHRIFT UND DES SCROLLINGTRIGGERS (ZUF�LLIG)
    switch (subscroll) {
        case 1:
            document.getElementById("headersub").innerHTML = sub1;
            document.getElementById("scrolltext").innerHTML = note1;
            break;
        case 2:
            document.getElementById("headersub").innerHTML = sub2;
            document.getElementById("scrolltext").innerHTML = note2;
            break;
        case 3:
            document.getElementById("headersub").innerHTML = sub3;
            document.getElementById("scrolltext").innerHTML = note3;
            break;
        default:
            document.getElementById("headersub").innerHTML = sub1;
            document.getElementById("scrolltext").innerHTML = note1;
    }
    Velocity(document.getElementById("headersub"), "transition.slideLeftIn", {
        duration: 400, delay: animationdelay - 500
    });
    Velocity(document.getElementById("scrollnotifier"), "transition.slideUpIn", {
        duration: 400, delay: animationdelay - 500
    });
}
document.addEventListener('DOMContentLoaded', function () {
    var newState = isMobile();
    //Optimierter Resize Event Listener und Funktion welche die Seite beim Resizen neu l�dt
    window.addEventListener("optimizedResize", function () {
        if (newState != isMobile()) {
            location.reload();
            newState = !newState;
            console.log("reloaded");
        }
    });
    //ALLE ANIMATIONEN DIE NUR IN DER DESKTOPANSICHT AUSGEF�HRT WERDEN
    if (!isMobile()) {
        //FIRE HEADER ANIMATION
        headeranimation();
        //Scrollmagic
        //Triggert eine Velocity Animation wenn bis zu einem bestimmten Trigger gescrollt wird
        var controller = new ScrollMagic.Controller();
        var scene = new ScrollMagic.Scene({ triggerElement: document.getElementById("trigger1") })
            .setVelocity(document.getElementById("aboutme"), { opacity: 1 }, { duration: 400 })
            .addTo(controller);
        var scene = new ScrollMagic.Scene({ triggerElement: document.getElementById("trigger2") })
            .setVelocity(document.getElementById("projects"), { opacity: 1 }, { duration: 400 })
            .addTo(controller);
        var scene = new ScrollMagic.Scene({ triggerElement: document.getElementById("trigger3") })
            .setVelocity(document.getElementById("snowflakes"), { opacity: 1 }, { duration: 400 })
            .addTo(controller);
        var scene = new ScrollMagic.Scene({ triggerElement: document.getElementById("trigger4") })
            .setVelocity(document.getElementById("snowflakes2"), { opacity: 1 }, { duration: 400 })
            .addTo(controller);
        var scene = new ScrollMagic.Scene({ triggerElement: document.getElementById("trigger5") })
            .setVelocity(document.getElementById("elephants"), { opacity: 1 }, { duration: 400 })
            .addTo(controller);
        var scene = new ScrollMagic.Scene({ triggerElement: document.getElementById("trigger6") })
            .setVelocity(document.getElementById("elephants2"), { opacity: 1 }, { duration: 400 })
            .addTo(controller);
        var scene = new ScrollMagic.Scene({ triggerElement: document.getElementById("trigger7") })
            .setVelocity(document.getElementById("bottles"), { opacity: 1 }, { duration: 400 })
            .addTo(controller);
        var scene = new ScrollMagic.Scene({ triggerElement: document.getElementById("trigger8") })
            .setVelocity(document.getElementById("contact"), { opacity: 1 }, { duration: 400 })
            .addTo(controller);
        var scene = new ScrollMagic.Scene({ triggerElement: document.getElementById("trigger1") })
            .setVelocity(document.getElementById("scrollnotifier"), { opacity: 0 }, { duration: 200 })
            .addTo(controller);
    }
    //EVENTLISTENER F�R MOBIL UND DESKTOP 
    //EVENTLISTENER F�R AUSKLAPPEN/EINKLAPPEN DES MEN�S
    document.getElementById("menubutton").addEventListener("click", togglemenu);
    //EVENTLISTENER F�R DAS AUSKLAPPMEN�
    document.getElementById("aboutmenav").addEventListener("click", function () {
        togglemenu();
        Velocity(document.getElementById("trigger1"), "scroll", { duration: 3000, easing: "easeInBack" });
    });
    document.getElementById("projectsnav").addEventListener("click", function () {
        togglemenu();
        Velocity(document.getElementById("trigger2"), "scroll", { duration: 3000, easing: "easeInBack" });
    });
    document.getElementById("project1").addEventListener("click", function () {
        Velocity(document.getElementById("trigger3"), "scroll", { duration: 3000, easing: "easeInBack" });
    });
    document.getElementById("project2").addEventListener("click", function () {
        Velocity(document.getElementById("trigger5"), "scroll", { duration: 3000, easing: "easeInBack" });
    });
    document.getElementById("project3").addEventListener("click", function () {
        Velocity(document.getElementById("trigger7"), "scroll", { duration: 3000, easing: "easeInBack" });
    });
    document.getElementById("contactmenav").addEventListener("click", function () {
        togglemenu();
        Velocity(document.getElementById("trigger8"), "scroll", { duration: 3000, easing: "easeInBack" });
    });
    //EVENTLISTENER F�R MOBILE STARTSEITE
    document.getElementById("aboutmobile").addEventListener("click", function () {
        Velocity(document.getElementById("trigger1"), "scroll", { duration: 3000, easing: "easeInBack" });
    });
    document.getElementById("projectsmobile").addEventListener("click", function () {
        Velocity(document.getElementById("trigger2"), "scroll", { duration: 3000, easing: "easeInBack" });
    });
    document.getElementById("contactmobile").addEventListener("click", function () {
        Velocity(document.getElementById("trigger8"), "scroll", { duration: 3000, easing: "easeInBack" });
    });
});
//# sourceMappingURL=portfolio.js.map