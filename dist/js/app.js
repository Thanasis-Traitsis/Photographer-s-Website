var w = 0;
var fsSmall = 0;
var fsBigger = 0;

function reportWindowSize() {
  w = window.innerWidth;

  if( w < 650){
    fsSmall = 1.3;
    fsBigger = 1.6;
  }
  
  else if ( w < 1200){
    fsSmall = 1.4;
    fsBigger = 1.7;
  }

  else{
    fsSmall = 1.7;
    fsBigger = 2;
  }
}

window.onresize = reportWindowSize;
window.onload = reportWindowSize;

//======================================================== HEADER
const tl = gsap.timeline({
  defaults: { duration: 1, ease: "Power3.easeOut"}
})

const body = document.querySelector("body");
const navBtn = document.querySelector(".nav__menu");
const bLine1 = document.querySelector("#burger1");
const bLine2 = document.querySelector("#burger2");
const bLine3 = document.querySelector("#burger3");
const navList = document.querySelector(".nav__list");

let showMenu = false;

navBtn.addEventListener("click", ()=>{
  if(!showMenu) {
    tl.to(bLine3, {bottom: 0, duration: .5});
    tl.to(bLine3, {left: 0, width: "100%", duration: .5});
    tl.to(navList, {top: "70px"});
    tl.to(bLine1, {rotate: "45deg", marginBottom: "0", duration: .75}, "<");
    tl.to(bLine2, {rotate: "-45deg", duration: .75}, "<");
    body.classList.add("active__menu");

    showMenu = true;
  }

  else{
    tl.to(navList, {top: "calc(-100vh + 70px)"});
    tl.to(bLine1, {rotate: "0", marginBottom: "18px", duration: .75}, "<");
    tl.to(bLine2, {rotate: "0", duration: .75}, "<");
    tl.to(bLine3, {left: "auto", width: "30px", duration: .5}, "<85%")
    tl.to(bLine3, {bottom: "auto",marginTop: "18px", duration: .5});
    body.classList.remove("active__menu");

    showMenu = false;
  }
})

//======================================================== PAGE ANIMATIONS
pageTransition = () => {
  var timeline = gsap.timeline();

  timeline.to(".page-transition1", {
    transformOrigin: "bottom",
    duration: 1,
    scaleY: 1
  });

  timeline.to(".page-transition2", {
    transformOrigin: "bottom",
    duration: 1,
    scaleY: 1
  });

  timeline.to(".page-transition1", {
    duration: .8,
    scaleY: 0,
    transformOrigin: "top",
    delay: .3
  }, "<50%");

  timeline.to(".page-transition2", {
    duration: .8,
    scaleY: 0,
    transformOrigin: "top",
    delay: .3
  }, "<1%");


  // timeline.set(".page-transition", {
  //   bottom: "-100%"
  // });

  if(window.innerWidth < 1200){
    timeline.to(navList, {top: "calc(-100vh + 70px)"}, "<");
    timeline.to(bLine1, {rotate: "0", marginBottom: "18px", duration: .75}, "<");
    timeline.to(bLine2, {rotate: "0", duration: .75}, "<");
    timeline.to(bLine3, {left: "auto", width: "30px", duration: .5}, "<")
    timeline.to(bLine3, {bottom: "auto",marginTop: "18px", duration: .5}, "<");
      body.classList.remove("active__menu");
  
      showMenu = false;
  }

}

function delay(n){
  n = n || 2000;
  return new Promise(done => {
    setTimeout(() => {
      done();
    }, n);
  });
}

barba.init({
  sync: true,

  transitions: [  
    {
      async leave(data) {
        const done = this.async();

        pageTransition();
        await delay(1500);
        done();
      },

      async enter(data){
        contentAnimation();
        let href = data.current.url.href;
        let currenthref = data.next.url.href;

        const header_contact1 = ["LET'S", "HIRE", "LET'S"];
        const header_contact2 = ["TALK", "ME", "WORK"];

        var contactHeader = document.querySelector(".contact-main__header");

        if(href == "https://marioskgm.netlify.app/index.html" && currenthref == "https://marioskgm.netlify.app/contact.html" ){
          contactHeader.children[0].innerHTML = header_contact1[0];
          contactHeader.children[1].innerHTML = header_contact2[0];
        }

        else if(href == 'https://marioskgm.netlify.app/services.html' && currenthref == "https://marioskgm.netlify.app/contact.html" ){
          contactHeader.children[0].innerHTML = header_contact1[1];
          contactHeader.children[1].innerHTML = header_contact2[1];
          contactHeader.children[0].style.marginLeft = "20px";
          contactHeader.children[1].style.marginRight = "50px";
        }

        else if(href == 'https://marioskgm.netlify.app/work.html' && currenthref == "https://marioskgm.netlify.app/contact.html" ){
          contactHeader.children[0].innerHTML = header_contact1[2];
          contactHeader.children[1].innerHTML = header_contact2[2];
        }        
      },

      async once(data){
        contentAnimation();
      },
    }
  ],
})


function contentAnimation() {
  reportWindowSize;

  const navListItems = document.querySelectorAll(".nav__list-item");
  const navListHome = document.querySelector("#home-link");
  const navListServices = document.querySelector("#services-link");
  const navListWork = document.querySelector("#work-link");
  const navListContact = document.querySelector("#contact-link");

  
  //================================================================================================================== HOME
  if(window.location.pathname === 'https://marioskgm.netlify.app/') {
    console.log('hey');

    window.scrollTo(0,0);
  
    navListItems.forEach( item =>{
      item.classList.remove("active");
    });
  
  navListHome.classList.add("active");

    //======================================================== LOADING SCREEN
    // const loadingScreen = document.querySelector("#loading-screen");
    // const loadingLines = document.querySelector(".circle5");
    // const loadingLines2 = document.querySelector(".circle52");
    // const loadingText = document.querySelectorAll(".loading-screen__text p");

    // gsap.to(loadingLines, {rotate: "360deg", repeat: -1, duration: 2, ease: "none"});
    // gsap.to(loadingLines2, {rotate: "-360deg", repeat: -1, duration: 2, ease: "none"});

    // window.addEventListener("load", function(){
    //   // gsap.to(loadingLines, {rotate: "360deg", repeat: 1, duration: 2, ease: "none"});
    //   // gsap.to(loadingLines2, {rotate: "-360deg", repeat: 1, duration: 2, ease: "none"});
    //   // gsap.fromTo(loadingText, {y: "-200%"}, {y: 0, stagger: .5,ease: "Power3.easeOut"}, "<100%");
    //   gsap.to(loadingScreen, {y: "-100%", delay: .5});
    //   gsap.fromTo(body, {overflow: "hidden"}, {overflow: "visible"}, "<");
    // });
  
    //======================================================== WELCOME PAGE ANIMATIONS
    const welcome = gsap.timeline({
      defaults: { duration: 2.5, ease: "Power3.easeOut"}
    })
    
    const welcomeArrow = document.querySelector(".welcome__arrow-down > img");
    const introHeaders = document.querySelectorAll(".welcome__text-box > p");
    const introImage = document.querySelector(".welcome__img > img");
    
    welcome.fromTo(introImage, {x: "110%"}, {x: "0", duration: 1.5, delay: 2.5});
    welcome.fromTo(introHeaders, {x: "200%"}, {x: "0", duration: 1.25, stagger: .25} , "<25%");
    // welcome.fromTo(welcomeArrow, {rotate: "-135deg"}, {rotate: "0deg", duration: 1});
    
    //======================================================== TRUSTED BY
    
    const tlScroll = gsap.timeline({
      scrollTrigger: {
          trigger: '.trustedby',
          // markers: {startColor: 'pink', endColor: 'pink'},
          scrub: false,
          start: '-100%',
      }
    });
    
    tlScroll.fromTo('.trustedby__companies-icon', {y: "60%", opacity: 0}, {y: "0", opacity: 1, stagger: .5});
    // tlScroll.fromTo('.about', {opacity: '.5'},{opacity: '1'});
    
    //======================================================== ABOUT ANIMATIONS
    
    const tlAbout = gsap.timeline({
      scrollTrigger: {
          trigger: '.about',
          // markers: {startColor: 'pink', endColor: 'pink'},
          scrub: false,
          start: '-50%',
          end: '-20%'
      }
    });
    
    if(window.innerWidth < 1200){
    tlAbout.fromTo(".about__items-camera", {x: "-500%"}, {x: "0", duration: 1});
    tlAbout.fromTo(".about__items-me", {x: "500%"}, {x: "0", duration: 1}, "<50%")
    }

    else{
      tlAbout.fromTo(".about__items-camera", {x: "-500%"}, {x: "0", duration: 1});
      tlAbout.fromTo(".about__items-me", {x: "-500%"}, {x: "0", duration: 1}, "<50%")
    }
    
    //======================================================== SERVICES TOOLS ANIMATIONS
    
    const tlServices= gsap.timeline({
      scrollTrigger: {
          trigger: '.services',
          // markers: {startColor: 'pink', endColor: 'pink'},
          scrub: false,
          start: '-10%',
      }
    });
    
    const wavetl = gsap.timeline({
      defaults: { duration: 5, ease: "circ.out"}
    })
    
    const waveContainer = document.querySelector(".services__percentage-box");
    const waveBox = document.querySelector(".services__percentage-box-wave");
    
    const box1 = document.querySelector("#fillbox1");
    const iconTools = document.querySelectorAll(".services__tools-icon");
    const iconFill = document.querySelectorAll(".services__tools-icon-fill");
    
    const percentageCircle = document.querySelector(".services__percentage");
    const percentageNumber = document.querySelector(".services__percentage-box-number");
    const percentageNumberSpan = document.querySelector(".services__percentage-box-number span");
    
    var bgFillColor = "";
    
    iconTools.forEach(tool =>{
      tool.addEventListener("click", ()=>{
        gsap.to(iconFill, {scaleY: 0, ease: "Power3.easeOut"});
        gsap.to(tool.children[0], {scaleY: 1, ease: "Power3.easeOut"}, "<");
    
        bgFillColor = tool.children[0].id;
    
        if(bgFillColor == "fillbox1"){
          gsap.to(waveContainer, {backgroundColor: "#21caff", ease: "slow(0.7, 0.7, false)"} )
          gsap.to(waveBox, {y: "-77%", ease: "slow(0.7, 0.7, false)"} )
          percentageNumber.innerHTML = "91%";
        }
    
        else if(bgFillColor == "fillbox2") {
          gsap.to(waveContainer, {backgroundColor: "#ea77ff", ease: "slow(0.7, 0.7, false)"} )
          gsap.to(waveBox, {y: "-73%", ease: "slow(0.7, 0.7, false)"} )
          percentageNumber.innerHTML = "85%";
        }
    
        else if(bgFillColor == "fillbox3") {
          gsap.to(waveContainer, {backgroundColor: "#31a8ff", ease: "slow(0.7, 0.7, false)"} )
          gsap.to(waveBox, { y: "-70%", ease: "slow(0.7, 0.7, false)"} )
          percentageNumber.innerHTML = "80%";
        }
    
        // else if(bgFillColor == "fillbox4") {
        //   gsap.to(waveContainer, {backgroundColor: "#ff9a00", ease: "slow(0.7, 0.7, false)"} )
        //   gsap.to(waveBox, { y: "-55%", ease: "slow(0.7, 0.7, false)"} )
        //   percentageNumber.innerHTML = "60%";
        // }
      })
    
    })
    
    tlServices.from(percentageNumberSpan, {
      textContent: 0,
      duration: 5,
      ease: Power3.easeOut,
      snap: { textContent: 1 },
      stagger: 1,
    });
    tlServices.to(box1, {scaleY: 1,duration: 1, ease: "Power3.easeOut"}, "<");
    tlServices.to(waveBox, {rotate: "600%", y: "-77%", duration: 5, ease: "circ.out"}, "<");
    tlServices.to(waveBox, {rotate: "360deg",duration: 10, ease: "none",yoyo: true, repeat: -1}, "<");
    
    //======================================================== SERVICES PERCENTAGE MOVEMENT
    
      waveContainer.addEventListener('mousemove', (e) =>{
        const position = percentageNumber.getBoundingClientRect();
      
        // pageX = the page width
        // position.left = the distance of the element from the left of the screen
        // position.width = the width of the element
        const x = e.pageX - position.left - position.width/2;
        const y = e.pageY - position.bottom - position.height/2;
      
        //Set the number position
        const x2 = x * .05;
        var y2 = 0;
        if(window.innerWidth < 1200){
          y2 = (y * .05) - 98;
        }
        else{
          y2 = (y * .05) - 130;
        }
      
        gsap.to(percentageNumber, {transform: 'translateX('+x2+'%) translateY('+y2+'%)', ease: "Power3.easeOut"});
      
      });
      
      waveContainer.addEventListener('mouseout', () =>{
      
        gsap.to(percentageNumber, {transform: 'translateX(0%) translateY(0%)', ease: "Power3.easeOut"});
      
      });
    
    //======================================================== WORK IMAGES
    
    const workImagesDetails = document.querySelectorAll(".work__images-details");
    const workImagesDetailsHeader = document.querySelectorAll(".work__images-details h1");
    const workImagesDetailsLine = document.querySelectorAll(".work__images-details div");
    const workImagesDetailsButton = document.querySelectorAll(".work__images-details a");
    
    const workImages = document.querySelectorAll(".work__images");
    const workBackgroundImages = document.querySelectorAll(".bgImg");
    
    gsap.to(workImagesDetailsHeader, {y: "-100%", duration: .0001})
    gsap.to(workImagesDetailsLine, {scaleX: "0", duration: .0001})
    gsap.to(workImagesDetailsButton, {y: "100%", duration: .0001})
    
    workImages.forEach(workImg => {
      workImg.addEventListener("mouseover", () =>{
    
        gsap.to(workImg.children[1].children[0], {y: "0"})
        gsap.to(workImg.children[1].children[2], {y: "0"})
        gsap.to(workImg.children[1].children[1], {scaleX: "1"})
      })
    })
    
    workImages.forEach(workImg => {
      workImg.addEventListener("mouseout", () =>{

        gsap.to(workImg.children[1].children[1], {scaleX: "0"})
        gsap.to(workImg.children[1].children[0], {y: "-100%"})
        gsap.to(workImg.children[1].children[2], {y: "100%"})
      })
    })
    
    //======================================================== CAROUSEL TESTIMONIALS

    function reportWindowSize() {
       const windowX = window.innerWidth;
       console.log(windowX)
    }
    
    window.onresize = reportWindowSize;

      var swiper = new Swiper(".mySwiper", {
        grabCursor: true,
        slidesPerView: 1,
        spaceBetween: 30,
        // Responsive breakpoints
        breakpoints: {
          // when window width is >= 650px
          650: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          // when window width is >= 1200px
          1200: {
            slidesPerView: 2,
            spaceBetween: 50
          },
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          renderBullet: function(index, className) {
            return '\
              <div class="box ' + className + '">\
              </div>';
          },
        },
      });
    
    }

  if(window.location.pathname == '/index.html') {

    window.scrollTo(0,0);
  
    navListItems.forEach( item =>{
      item.classList.remove("active");
    });
  
  navListHome.classList.add("active");

    //======================================================== LOADING SCREEN
    // const loadingScreen = document.querySelector("#loading-screen");
    // const loadingLines = document.querySelector(".circle5");
    // const loadingLines2 = document.querySelector(".circle52");
    // const loadingText = document.querySelectorAll(".loading-screen__text p");

    // gsap.to(loadingLines, {rotate: "360deg", repeat: -1, duration: 2, ease: "none"});
    // gsap.to(loadingLines2, {rotate: "-360deg", repeat: -1, duration: 2, ease: "none"});

    // window.addEventListener("load", function(){
    //   // gsap.to(loadingLines, {rotate: "360deg", repeat: 1, duration: 2, ease: "none"});
    //   // gsap.to(loadingLines2, {rotate: "-360deg", repeat: 1, duration: 2, ease: "none"});
    //   // gsap.fromTo(loadingText, {y: "-200%"}, {y: 0, stagger: .5,ease: "Power3.easeOut"}, "<100%");
    //   gsap.to(loadingScreen, {y: "-100%", delay: .5});
    //   gsap.fromTo(body, {overflow: "hidden"}, {overflow: "visible"}, "<");
    // });
  
    //======================================================== WELCOME PAGE ANIMATIONS
    const welcome = gsap.timeline({
      defaults: { duration: 2.5, ease: "Power3.easeOut"}
    })
    
    const welcomeArrow = document.querySelector(".welcome__arrow-down > img");
    const introHeaders = document.querySelectorAll(".welcome__text-box > p");
    const introImage = document.querySelector(".welcome__img > img");
    
    welcome.fromTo(introImage, {x: "110%"}, {x: "0", duration: 1.5, delay: 2.5});
    welcome.fromTo(introHeaders, {x: "200%"}, {x: "0", duration: 1.25, stagger: .25} , "<25%");
    // welcome.fromTo(welcomeArrow, {rotate: "-135deg"}, {rotate: "0deg", duration: 1});
    
    //======================================================== TRUSTED BY
    
    const tlScroll = gsap.timeline({
      scrollTrigger: {
          trigger: '.trustedby',
          // markers: {startColor: 'pink', endColor: 'pink'},
          scrub: false,
          start: '-100%',
      }
    });
    
    tlScroll.fromTo('.trustedby__companies-icon', {y: "60%", opacity: 0}, {y: "0", opacity: 1, stagger: .5});
    // tlScroll.fromTo('.about', {opacity: '.5'},{opacity: '1'});
    
    //======================================================== ABOUT ANIMATIONS
    
    const tlAbout = gsap.timeline({
      scrollTrigger: {
          trigger: '.about',
          // markers: {startColor: 'pink', endColor: 'pink'},
          scrub: false,
          start: '-50%',
          end: '-20%'
      }
    });
    
    if(window.innerWidth < 1200){
    tlAbout.fromTo(".about__items-camera", {x: "-500%"}, {x: "0", duration: 1});
    tlAbout.fromTo(".about__items-me", {x: "500%"}, {x: "0", duration: 1}, "<50%")
    }

    else{
      tlAbout.fromTo(".about__items-camera", {x: "-500%"}, {x: "0", duration: 1});
      tlAbout.fromTo(".about__items-me", {x: "-500%"}, {x: "0", duration: 1}, "<50%")
    }
    
    //======================================================== SERVICES TOOLS ANIMATIONS
    
    const tlServices= gsap.timeline({
      scrollTrigger: {
          trigger: '.services',
          // markers: {startColor: 'pink', endColor: 'pink'},
          scrub: false,
          start: '-10%',
      }
    });
    
    const wavetl = gsap.timeline({
      defaults: { duration: 5, ease: "circ.out"}
    })
    
    const waveContainer = document.querySelector(".services__percentage-box");
    const waveBox = document.querySelector(".services__percentage-box-wave");
    
    const box1 = document.querySelector("#fillbox1");
    const iconTools = document.querySelectorAll(".services__tools-icon");
    const iconFill = document.querySelectorAll(".services__tools-icon-fill");
    
    const percentageCircle = document.querySelector(".services__percentage");
    const percentageNumber = document.querySelector(".services__percentage-box-number");
    const percentageNumberSpan = document.querySelector(".services__percentage-box-number span");
    
    var bgFillColor = "";
    
    iconTools.forEach(tool =>{
      tool.addEventListener("click", ()=>{
        gsap.to(iconFill, {scaleY: 0, ease: "Power3.easeOut"});
        gsap.to(tool.children[0], {scaleY: 1, ease: "Power3.easeOut"}, "<");
    
        bgFillColor = tool.children[0].id;
    
        if(bgFillColor == "fillbox1"){
          gsap.to(waveContainer, {backgroundColor: "#21caff", ease: "slow(0.7, 0.7, false)"} )
          gsap.to(waveBox, {y: "-77%", ease: "slow(0.7, 0.7, false)"} )
          percentageNumber.innerHTML = "91%";
        }
    
        else if(bgFillColor == "fillbox2") {
          gsap.to(waveContainer, {backgroundColor: "#ea77ff", ease: "slow(0.7, 0.7, false)"} )
          gsap.to(waveBox, {y: "-73%", ease: "slow(0.7, 0.7, false)"} )
          percentageNumber.innerHTML = "85%";
        }
    
        else if(bgFillColor == "fillbox3") {
          gsap.to(waveContainer, {backgroundColor: "#31a8ff", ease: "slow(0.7, 0.7, false)"} )
          gsap.to(waveBox, { y: "-70%", ease: "slow(0.7, 0.7, false)"} )
          percentageNumber.innerHTML = "80%";
        }
    
        // else if(bgFillColor == "fillbox4") {
        //   gsap.to(waveContainer, {backgroundColor: "#ff9a00", ease: "slow(0.7, 0.7, false)"} )
        //   gsap.to(waveBox, { y: "-55%", ease: "slow(0.7, 0.7, false)"} )
        //   percentageNumber.innerHTML = "60%";
        // }
      })
    
    })
    
    tlServices.from(percentageNumberSpan, {
      textContent: 0,
      duration: 5,
      ease: Power3.easeOut,
      snap: { textContent: 1 },
      stagger: 1,
    });
    tlServices.to(box1, {scaleY: 1,duration: 1, ease: "Power3.easeOut"}, "<");
    tlServices.to(waveBox, {rotate: "600%", y: "-77%", duration: 5, ease: "circ.out"}, "<");
    tlServices.to(waveBox, {rotate: "360deg",duration: 10, ease: "none",yoyo: true, repeat: -1}, "<");
    
    //======================================================== SERVICES PERCENTAGE MOVEMENT
    
      waveContainer.addEventListener('mousemove', (e) =>{
        const position = percentageNumber.getBoundingClientRect();
      
        // pageX = the page width
        // position.left = the distance of the element from the left of the screen
        // position.width = the width of the element
        const x = e.pageX - position.left - position.width/2;
        const y = e.pageY - position.bottom - position.height/2;
      
        //Set the number position
        const x2 = x * .05;
        var y2 = 0;
        if(window.innerWidth < 1200){
          y2 = (y * .05) - 98;
        }
        else{
          y2 = (y * .05) - 130;
        }
      
        gsap.to(percentageNumber, {transform: 'translateX('+x2+'%) translateY('+y2+'%)', ease: "Power3.easeOut"});
      
      });
      
      waveContainer.addEventListener('mouseout', () =>{
      
        gsap.to(percentageNumber, {transform: 'translateX(0%) translateY(0%)', ease: "Power3.easeOut"});
      
      });
    
    //======================================================== WORK IMAGES
    
    const workImagesDetails = document.querySelectorAll(".work__images-details");
    const workImagesDetailsHeader = document.querySelectorAll(".work__images-details h1");
    const workImagesDetailsLine = document.querySelectorAll(".work__images-details div");
    const workImagesDetailsButton = document.querySelectorAll(".work__images-details a");
    
    const workImages = document.querySelectorAll(".work__images");
    const workBackgroundImages = document.querySelectorAll(".bgImg");
    
    gsap.to(workImagesDetailsHeader, {y: "-100%", duration: .0001})
    gsap.to(workImagesDetailsLine, {scaleX: "0", duration: .0001})
    gsap.to(workImagesDetailsButton, {y: "100%", duration: .0001})
    
    workImages.forEach(workImg => {
      workImg.addEventListener("mouseover", () =>{
    
        gsap.to(workImg.children[1].children[0], {y: "0"})
        gsap.to(workImg.children[1].children[2], {y: "0"})
        gsap.to(workImg.children[1].children[1], {scaleX: "1"})
      })
    })
    
    workImages.forEach(workImg => {
      workImg.addEventListener("mouseout", () =>{

        gsap.to(workImg.children[1].children[1], {scaleX: "0"})
        gsap.to(workImg.children[1].children[0], {y: "-100%"})
        gsap.to(workImg.children[1].children[2], {y: "100%"})
      })
    })
    
    //======================================================== CAROUSEL TESTIMONIALS

    function reportWindowSize() {
       const windowX = window.innerWidth;
       console.log(windowX)
    }
    
    window.onresize = reportWindowSize;

      var swiper = new Swiper(".mySwiper", {
        grabCursor: true,
        slidesPerView: 1,
        spaceBetween: 30,
        // Responsive breakpoints
        breakpoints: {
          // when window width is >= 650px
          650: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          // when window width is >= 1200px
          1200: {
            slidesPerView: 2,
            spaceBetween: 50
          },
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          renderBullet: function(index, className) {
            return '\
              <div class="box ' + className + '">\
              </div>';
          },
        },
      });
    
    }
    
    //================================================================================================================== SERVICES
    
  if(window.location.pathname == '/services.html'){
  
    window.scrollTo(0,0);


      navListItems.forEach( item =>{
        item.classList.remove("active");
      });
    
    navListServices.classList.add("active");
  
    // //======================================================== SERVICES MAIN
    // const welcomeServices = gsap.timeline({
    //   defaults: { duration: 1.2, ease: "Power3.easeOut"}
    // })
    
    // const servicesImages1 = document.querySelectorAll(".services-main__img-box1");
    // const servicesImages2 = document.querySelectorAll(".services-main__img-box2");
    
    // if(window.innerWidth < 1200){
    //   welcomeServices.fromTo(servicesImages1, {x: "100%"}, {x: "0"});
    //   welcomeServices.fromTo(servicesImages2, {x: "100%"}, {x: "0"}, "<35%");
    // }

    // else{
    //   welcomeServices.fromTo(servicesImages2, {x: "-300%"}, {x: "0"});
    //   welcomeServices.fromTo(servicesImages1, {x: "-100%"}, {x: "0"}, "<35%");
    // }
    //======================================================== PHOTO EDITING
    
    const baButton = document.querySelector(".baButton");
    const baBefore = document.querySelector(".photography__container-ba-before");
    const baAfter = document.querySelector(".photography__container-ba-after");
    const baImage = document.querySelector(".photography__container-ba-image");
    
    let baPhoto = false;
    
    if(window.innerWidth < 1200){
      baButton.addEventListener("click", ()=>{
        if(!baPhoto) {
          tl.to(baBefore, {x: "-200%"});
          tl.to(baAfter, {x: "200%"}, "<");
          tl.to(baButton, {rotate: "180deg"}, "<");
          tl.to(baImage.children[0], {scale: "1.1", opacity: 0}, "<");
          tl.to(baImage.children[1], {scale: "1.1", opacity: 1}, "<");
          baBefore.classList.remove("active-ba");
          baAfter.classList.add("active-ba");
          tl.to(baBefore, {top: "90%", duration: .1});
          tl.to(baAfter, {top: "-1em", duration: .1}, "<");
          tl.to(baBefore, {x: "0"});
          tl.to(baAfter, {x: "0"}, "<");
          tl.to(baImage.children[0], {scale: "1"}, "<");
          tl.to(baImage.children[1], {scale: "1"}, "<");
      
          baPhoto = true;
        }
      
        else{
          tl.to(baBefore, {x: "-200%"});
          tl.to(baAfter, {x: "200%"}, "<");
          tl.to(baButton, {rotate: "0"}, "<")
          tl.to(baImage.children[1], {scale: "1.1", opacity: 0}, "<");
          tl.to(baImage.children[0], {scale: "1.1", opacity: 1}, "<");
          baAfter.classList.remove("active-ba");
          baBefore.classList.add("active-ba");
          tl.to(baBefore, {top: "-1em", duration: .1});
          tl.to(baAfter, {top: "90%", duration: .1}, "<");
          tl.to(baBefore, {x: "0"});
          tl.to(baAfter, {x: "0"}, "<");
          tl.to(baImage.children[0], {scale: "1"}, "<");
          tl.to(baImage.children[1], {scale: "1"}, "<");
      
          baPhoto = false;
        }
      })  
    }

    else{
      baButton.addEventListener("click", ()=>{
        if(!baPhoto) {
          tl.to(baButton, {rotate: "180deg"});
          tl.to(baImage.children[0], {scale: "1", opacity: 0}, "<");
          tl.to(baImage.children[1], {scale: "1", opacity: 1}, "<");
          baBefore.classList.remove("active-ba");
          baAfter.classList.add("active-ba");
          tl.to(baImage.children[0], {scale: "1"}, "<");
          tl.to(baImage.children[1], {scale: "1"}, "<");
      
          baPhoto = true;
        }
      
        else{
          tl.to(baButton, {rotate: "-0deg"})
          tl.to(baImage.children[1], {scale: "1", opacity: 0}, "<");
          tl.to(baImage.children[0], {scale: "1", opacity: 1}, "<");
          baAfter.classList.remove("active-ba");
          baBefore.classList.add("active-ba");
          tl.to(baImage.children[0], {scale: "1"}, "<");
          tl.to(baImage.children[1], {scale: "1"}, "<");
      
          baPhoto = false;
        }
      })  
    }
    
    //======================================================== VIDEO TAPE BOXES
    const tape = document.querySelectorAll(".videography__tape");
    
    const videoTapeScroll = gsap.timeline({
      scrollTrigger: {
          trigger: '.videography',
          // markers: {startColor: 'pink', endColor: 'pink'},
          scrub: true,
          start: '-100%',
          end: '150%',
      }
    });
    
    tape.forEach(tapeBox => {
      for(var i=0; i<100;i++){
         tapeBox.innerHTML+="<div class='boxes'><div/>"; 
      }
    });
    
      videoTapeScroll.to(tape, {x: "-5%"});
    
    //======================================================== GRAPHIC DESIGN
    const gdHeaderNumber = document.querySelector(".graphic_design__offer-number svg");
    const gdHeaderOffers = document.querySelector(".graphic_design__offer-header");
      
    if(window.innerWidth < 650){
      var GraphicDesingScroll = gsap.timeline({
        scrollTrigger: {
            trigger: '.graphic_design',
            // markers: {startColor: 'pink', endColor: 'pink'},
            scrub: false,
            start: '10%',
            end: '0%',
        }
      });
    }

    else{
      var GraphicDesingScroll = gsap.timeline({
        scrollTrigger: {
            trigger: '.graphic_design',
            // markers: {startColor: 'pink', endColor: 'pink'},
            scrub: false,
            start: '-20%',
            end: '0%',
        }
      });
    }

    
    GraphicDesingScroll.fromTo(gdHeaderOffers, {y: "-280%"}, {y: "0"});
    GraphicDesingScroll.fromTo(gdHeaderNumber, {x: "-500%"}, {x: "0"});
    
    //======================================================== CAROUSEL GRAPHIC DESIGN PACKAGE
    var swiper2 = new Swiper(".mySwiper2", {
      grabCursor: true,
      slidesPerView: 1,
      spaceBetween: 0,
      // Responsive breakpoints
      breakpoints: {
        // when window width is >= 1200px
        1200: {
          slidesPerView: 2,
          spaceBetween: 0
        },
      },
      pagination: {
        el: ".swiper-pagination2",
        clickable: true,
        renderBullet: function(index, className) {
          return '\
            <div class="box ' + className + '">\
            </div>';
        },
      },
    });
    
    }
    
    //================================================================================================================== WORK
    
  if(window.location.pathname == '/work.html'){

    window.scrollTo(0,0);
  
      navListItems.forEach( item =>{
        item.classList.remove("active");
      });
    
    navListWork.classList.add("active");
  
    //======================================================== WORK MENU
    
    const cardContainer = document.querySelector(".work-menu__container");
    const cards = document.querySelectorAll(".work-menu__card");
    const cardHeader = document.querySelectorAll(".work-menu__card-header");
    const cardsText = document.querySelectorAll(".work-menu__card-text");   
    const imagesWorkContainer =  document.querySelector(".work-menu__images");   

    const workMenu = gsap.timeline({  
      defaults: {duration: 1, ease: "Power3.easeOut"}
    })
    
    if(window.innerWidth < 1200){
      cards.forEach(card => {
    
          card.children[1].addEventListener("click", () =>{
      
            if (card.classList.contains('active')) {
              workMenu.to(card.children[2],{height: "0px"});
              workMenu.to(card.children[0], {left: "-100%", duration: 1.5, ease: "none"});
              workMenu.to(card.children[1], {color: "white", fontSize: +fsSmall+"rem"}, "<"); 
              workMenu.to(card, {paddingLeft: "7%"}, "<");
      
              card.classList.remove("active");
              card.children[1].classList.remove("active");
          }
      
          else{
            workMenu.to(card, {paddingLeft: "11%"});
            workMenu.to(card.children[0], {left: "0"}, "<");
            workMenu.to(card.children[1], {color: "white", fontSize: +fsBigger+"rem"}, "<"); 
            workMenu.to(card.children[2],{height: "auto"});
        
            card.classList.add("active");
            card.children[1].classList.add("active");
          }
      
          })
      })
    }

    else{
      cards.forEach(card => {

        card.children[1].addEventListener("click", () =>{

          cards.forEach(card2 => { 
            gsap.to(card2.children[2],{height: "0px"});
            gsap.to(card2.children[1], {color: "white", fontSize: +fsSmall+"rem", opacity: .5}, "<"); 
            gsap.to(card2, {paddingLeft: "15%"}, "<");

            card2.classList.remove("active");
            card2.children[1].classList.remove("active");
          })
          
          var x = card.children[2].children[1].innerHTML;
          imagesWorkContainer.innerHTML = x;          

          gsap.to(card, {paddingLeft: "17%"});
          gsap.to(card.children[1], {color: "white", fontSize: +fsBigger+"rem", opacity: 1}, "<"); 
          gsap.to(card.children[2], {height: "auto"});
      
          card.classList.add("active");
          card.children[1].classList.add("active");
        })
      })
    }
    }
    
    //================================================================================================================== CONTACT
    
  if(window.location.pathname == '/contact.html'){
  
    window.scrollTo(0,0);

      navListItems.forEach( item =>{
        item.classList.remove("active");
      });
    
    navListContact.classList.add("active");
    
    // const header_contact1 = ["LET'S", "HIRE", "LET'S"];
    // const header_contact2 = ["TALK", "ME", "WORK"];

    // const contactHeader = document.querySelector(".contact-main__header");

    // if(document.referrer == '/index.html'){
    //   console.log("yeaaa");
    //   contactHeader.children[0].innerHTML = header_contact1[0];
    //   contactHeader.children[1].innerHTML = header_contact2[0];
    // }

    // else if(document.referrer == 'http://127.0.0.1:5500/services.html'){
    //   contactHeader.children[0].innerHTML = header_contact1[1];
    //   contactHeader.children[1].innerHTML = header_contact2[1];
    //   contactHeader.children[0].style.marginLeft = "20px";
    //   contactHeader.children[1].style.marginRight = "50px";
    // }

    // else if(document.referrer == 'http://127.0.0.1:5500/work.html'){
    //   contactHeader.children[0].innerHTML = header_contact1[2];
    //   contactHeader.children[1].innerHTML = header_contact2[2];
    // }
  
    //======================================================== CONTACT FORM
    const contactBox = document.querySelectorAll(".contact-form__box");
    const form = document.querySelector("form");
    
    contactBox.forEach((container) => {
      const input = container.querySelector(".contact-form__input");
      const placeholder = container.querySelector(".contact-form__box-placeholder");
      const line = container.querySelector(".contact-form__box-line");
    
      input.addEventListener("focus", () => {
        //Check to see if there is any text in the input
        if (!input.value) {
          //Placeholder Shift
          tl.to(
            placeholder,
            {
              bottom: 45,
              left: 5,
              scale: 0.9,
              duration: 0.5,
              zIndex: 5,
              opacity: 1,
            }
          );
    
          tl.to(
            line,
            {
              scaleX: 1,
            },
            "<50%"
          );
        }
      });
    });
    
    //Revert back if it's not focused
    form.addEventListener("click", () => {
      contactBox.forEach((container) => {
        const input = container.querySelector(".contact-form__input");
        const placeholder = container.querySelector(".contact-form__box-placeholder");
        const line = container.querySelector(".contact-form__box-line");
    
        if (document.activeElement !== input) {
          if (!input.value) {
            gsap.to(line, {
              scaleX: 0,
            });
    
            gsap.to(placeholder, {
              bottom: 10,
              left: 10,
              scale: 1,
              duration: 0.5,
              zIndex: -2,
              opacity: 0.5,
              ease: "Power2.easeOut",
            });
          }
        }
        //We will do our validation
        input.addEventListener('input', (e) =>{
            //Name validation
            // if(e.target.type == 'text'){
            //     let inputText = e.target.value;
            //     if(inputText.length > 2){
            //         //Colorize the line
            //         colorize('#6391E8', line, placeholder);
            //     }
            //     else{
            //         colorize('#FE8C99', line, placeholder);
            //     }
            // }
            //Email validation
            // if(e.target.type == 'email'){
            //     let valid = validateEmail(e.target.value);
            //     if(valid){
            //         //Colorize the line
            //         colorize('#6391E8', line, placeholder);
            //     }
            //     else{
            //         colorize('#FE8C99', line, placeholder);
            //     }
            // }
        });
      });
    });
    
    
    }
    
}




