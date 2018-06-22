$(document).ready(function() {
    // hidden elements
    $(window).on("load", function() {
        $('nav, footer').css('opacity', '0');
    });
    // banner resize on scroll 
    $(window).on("scroll touchmove", function() {
        $('.banner, #banner-logo, nav, footer').toggleClass('scroll', $(document).scrollTop() > 0);
        $('nav, footer').css('opacity', '1');
    });

    //Modal Popup
    //$("#testimonials .read-more a, #testimonials-popup .close-button a").click(function(event) {
    //$("body").toggleClass("show-testimonials-popup");
    //event.preventDefault();
    //});

    //wildcard character reveal on click
    $('a.1').click(function() {
        //reveal animal by changing background image
        $('#seaturtle').css('background-image', 'url("./img/tillysreefadventure/seaturtle-sm.png")');
        //background image resize
        $('#seaturtle').css('background-size', 'contain');
        //change descriptive texts
        $('article.desc.1 p:first-child, article.desc.1 p:last-child').addClass('active');
        //change header colour for added contrast
        $('a.1 header.wildcard h3').css('background-color', 'rgb(25, 57, 133)');
    });

    $('a.2').click(function() {
        //reveal animal by changing background image
        $('#seahorse').css('background-image', 'url("./img/tillysreefadventure/seahorse.png")'); 
        //background image resize
        $('#seahorse').css('background-size', 'contain');
        //change descriptive texts
        $('article.desc.2 p:first-child, article.desc.2 p:last-child').addClass('active');
        //change header colour for added contrast
        $('a.2 header.wildcard h3').css('background-color', 'rgb(25, 57, 133)');
    });

    $('a.3').click(function() {
        //reveal animal by changing background image
        $('#octopus').css('background-image', 'url("./img/tillysreefadventure/octopus.png")'); 
        //background image resize
        $('#octopus').css('background-size', 'contain');
        //change descriptive texts
        $('article.desc.3 p:first-child, article.desc.3 p:last-child').addClass('active');
        //change header colour for added contrast
        $('a.3 header.wildcard h3').css('background-color', 'rgb(25, 57, 133)');
    });
    

    // For better user experience on iPad
    function detectwindowwidth() {
        // alert user that the website is best viewed in ipad landscape mode, or on the desktop
        if ($(window).innerWidth() < 960) {
        alert('The website is best viewed on landscape mode in iPad or on the desktop with screen width 1024px and above.');
        }
    }
    // Triggers detectwindowwidth function when window is <960px
    $(window).resize(detectwindowwidth())
      
    // particles.js lib - https://github.com/VincentGarreau/particles.js  
    particlesJS(
        "particles-js", {
            "particles": {
                "number": {
                    "value":6,"density": {
                        "enable":true,"value_area":800
                    }
                },
                "color": {
                    "value":"#acd9dc"
                },
                "shape": {
                    "type":"circle","stroke": {
                        "width":0,"color":"#000"
                    },
                    "polygon":{
                        "nb_sides":4
                    }
                },
                "opacity": {
                    "value":0.41662326840954034,"random":true,"anim": {
                        "enable":false,"speed":1,"opacity_min":0.1,"sync":false
                    }
                },
                "size": {
                    "value":152.22773268810127,"random":true,"anim": {
                        "enable":true,"speed":4.869141813755329,"size_min":9.73828362751066,"sync":false
                    }
                },
                "line_linked": {
                    "enable":false
                },
                "move": {
                    "enable":true,"speed":4.807191558571619,"direction":"top","random":true,"straight":false,"out_mode":"out","bounce":false,"attract": {
                        "enable":false,"rotateX":600,"rotateY":1200
                    }
                }
            },
            "interactivity": {
                "detect_on":"canvas","events": {
                    "onhover": {
                        "enable":true,"mode":"bubble"
                    },
                    "onclick": {
                        "enable":true,"mode":"remove" 
                    },
                    "resize":true
                },
                "modes": {
                    "grab":{
                        "distance":400,"line_linked": {
                            "opacity":1
                        }
                    },
                    "bubble": {
                        "distance":400,"size":40,"duration":2,"opacity":8,"speed":3
                    },
                    "repulse": {
                        "distance":200,"duration":0.1
                    },
                    "push": {
                        "particles_nb":4
                    },
                    "remove": {
                        "particles_nb":2
                    }
                }
            },
            "retina_detect":true
        });
        
    
    
    // particles.js background bubbles stats counter removed


    
});


	//Slideshow JS modified from W3Schools https://www.w3schools.com/howto/howto_js_slideshow.asp

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("carousel");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "grid";  
    
}