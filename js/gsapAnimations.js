const tm = gsap.timeline({defaults: {duration: 1, delay: .1}});

// gsap.registerPlugin(ScrollTrigger);

tm
.fromTo('.mainBox', { scale: 0 }, {scale : 1, delay: .3})
.fromTo('.header-project', {y: 30, opacity:0}, {y:0, opacity: 1, delay: -.9})
.fromTo('.title-text', {y: 30, opacity:0}, {y:0, opacity: 1, delay: -.7})
.fromTo('.title-underline-project', {scale:0, opacity:0}, {scale:1, opacity: 1, delay: -.9})

.fromTo('.nav_burguer', {opacity: 0, scale: 0, rotate: 360, x: 200}, {opacity: 1, scale:1, rotate: 0, x:0, delay: -.7})
.fromTo('.logo', {y: -30, opacity: 0}, {y:0, delay: -.7, opacity: 1, delay: -.2})
.fromTo('.mainBox-note', {opacity:0, x: 20}, { opacity: 1, x: 0, delay: -.7})
.fromTo('.mainBox-boton-text', { opacity: 0, scale:0}, {opacity: 1, scale: 1, delay: -.9})
.fromTo('.mainBox-intro', {opacity: 0, y:20}, {opacity: 1, y: 0, delay: -.8})


gsap.from('.thingsMade-img-left', {
    scrollTrigger: {
        trigger: '.thingsMade-img-left',
        start: "30px 90%",
        end: "bottom 100px",
        scrub: true,
        togggleActions:"restart pause resume pause"
     },
        x:17,
        rotation: 360,
        duration: .5
    });

    gsap.from('.thingsMade-img-rigth', {
        scrollTrigger: {
            trigger: '.thingsMade-img-rigth',
            start: "30px 90%",
            end: "bottom 100px",
            scrub: true,
            togggleActions:"restart pause resume pause"
         },
            x:-17,
            rotation: -360,
            duration: .5
        });

        gsap.from('.process-steps', {
            scrollTrigger: {
                trigger: '.process-steps',
                start: "10px 60%",
                end: "+=100",
                scrub: true,
                togggleActions:"restart pause resume pause"
             },
                opacity:0,
                y: "-50px",
                duration: 2
            });

            gsap.from('.project-images', {
                scrollTrigger: {
                    trigger: '.project-images',
                    start: "70px 70%",
                    end: "+=200",
                    scrub: true,
                    togggleActions:"restart pause resume pause"
                 },
                    opacity:0,
                    scale: 0,
                    duration: 2
                });

                gsap.from('.research-img', {
                    scrollTrigger: {
                        trigger: '.research-img',
                        start: "70px 70%",
                        end: "+=200",
                        scrub: true,
                        togggleActions:"restart pause resume pause"
                     },
                        opacity:0,
                        scale: 0,
                        duration: 2
                    });

                   


