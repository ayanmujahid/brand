jQuery("#branding-carousel").owlCarousel({
  autoplay: true,
  rewind: false, /* use rewind if you don't want loop */
  margin: 20,
  loop: true,nsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  nav: false,
  responsive: {
    0: {
      items: 1
    },

    600: {
      items: 3
    },

    1024: {
      items: 4
    },

    1366: {
      items: 6
    }
  }
});
jQuery("#testimonials-carousel").owlCarousel({
  autoplay: false,
  rewind: false, /* use rewind if you don't want loop */
  margin: 20,
  loop: true,nsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  nav: false,
  responsive: {
    0: {
      items: 1
    },

    600: {
      items: 2
    },

    1024: {
      items: 3
    },

    1366: {
      items: 3
    }
  }
});
// Popup JS
$('.various').click(function() {
  $("#staticBackdrop").modal("show");
});
//responsive menu
  $(".menu-bottom").on("click", function() {
      $("html").toggleClass("menu-open")
  });
  $(".menu-bottom").click(function() {
      $(this).toggleClass("click")
  });
// Sroll Smoth Js
  document.addEventListener("DOMContentLoaded", function () {
      gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

      ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1.5,
        effects: true
      });
    });
  // Banner Slider JS
  function duplicateSlides(sliderId) {
    const sliderTrack = document.querySelector(`#${sliderId} .slider-track`);
    const slides = Array.from(sliderTrack.children);
    slides.forEach((slide) => {
      const clone = slide.cloneNode(true);
      sliderTrack.appendChild(clone);
    }); 
  }
  duplicateSlides("slider-1");
  duplicateSlides("slider-2");
  duplicateSlides("slider-3");
  
  // Zendesk Info JS
    $('#saveform').on('submit', function() {
        // console.log("working");

            // alert("hello");
            // console.log("working");
            $zopim(function() {
                $zopim.livechat.set({
                    language: 'en',
                    // name: $('input[name="order_fullname"]').val(),
                    // email: $('input[name="order_email"]').val(),
                    // phone: $('input[name="number"]').val(),
                    // notes: $('textarea[name="order_description"]').val(),
                    
                    name: $('#popup_name').val(),
                    email: $('#popup_email').val(),
                    phone: $('#number3').val(),
                    notes: $('#popup-des').val(),
                });
                // console.log("value submitted");
                // Add tag for sending that form is submitted
                $zopim.livechat.addTags($('.package_name').val() + ' Lead Submitted');
                console.log ("added");
            });
        
    });
    
    // Zendesk Popup JS
    // zE(function() {
    //     $zopim(function() {
    //         $zopim.livechat.setOnUnreadMsgs(unread);
    
    //         function unread(number) {
    //             if (number >= 1) {
    //                 $zopim.livechat.window.show();
    //             }
    //         }
    //     });
    // });

  
  // gsap.registerPlugin(ScrollTrigger);

  // // Pin the banner-row during scroll
  // ScrollTrigger.create({
  //   trigger: ".banner-row",
  //   start: "top top",
  //   end: "+=100%",
  //   pin: true,
  //   scrub: true,
  //   pinSpacing: false
  // });

  // // Animate about-row as it enters
  // gsap.from(".about-row", {
  //   scrollTrigger: {
  //     trigger: ".about-row",
  //     start: "top bottom",
  //     end: "top center",
  //     scrub: true
  //   },
  //   opacity: 0,
  //   y: 100
  // });
  // gsap.registerPlugin(ScrollTrigger);

  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.matchMedia({

    // Desktop only (above 1025px)
    "(min-width: 1025px)": function() {
      // Pin the banner-row during scroll
      ScrollTrigger.create({
        trigger: ".banner-row",
        start: "top top",
        end: "+=100%",
        pin: true,
        scrub: true,
        pinSpacing: false
      });

      // Animate about-row as it enters
      gsap.from(".about-row", {
        scrollTrigger: {
          trigger: ".about-row",
          start: "top bottom",
          end: "top center",
          scrub: true
        },
        opacity: 0,
        y: 100
      });
    }

    // You can optionally add other screen size behaviors too:
    // "(max-width: 768px)": function() {
    //   // Mobile-specific code if needed
    // }
  });

  // Marquee Effect JS
  gsap.registerPlugin(ScrollTrigger);

  const marquee = document.querySelector(".marquee-text");

  // Auto moving timeline
  let marqueeTween = gsap.to(marquee, {
    xPercent: -100,
    repeat: -1,
    duration: 20,
    ease: "linear"
  });

  let lastDirection = 1;

  ScrollTrigger.create({
    trigger: ".marquee-section",
    start: "top bottom",
    end: "bottom top",
    onUpdate: (self) => {
      let velocity = self.getVelocity();
      let dir = velocity > 0 ? 1 : -1;

      // If scroll direction changes, reverse the animation
      if (dir !== lastDirection) {
        marqueeTween.timeScale(dir);
        lastDirection = dir;
      }

      // Adjust speed based on velocity
      gsap.to(marqueeTween, {
        timeScale: gsap.utils.clamp(0.5, 3, Math.abs(velocity / 300)) * dir,
        duration: 0.3,
        overwrite: true
      });
    }
  });
