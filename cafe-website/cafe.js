const menuOpenButton =document.querySelector("#menu-open-button");
const menuCloseButton =document.querySelector("#menu-close-button");
const navLinks =document.querySelectorAll(".nav-menu .nav-link")


menuOpenButton.addEventListener("click",()=>{
    document.body.classList.toggle("show-mobile-menu")
});
menuCloseButton.addEventListener("click",()=> menuOpenButton.click());
navLinks.forEach(link=>{
  link.addEventListener("click",()=>menuOpenButton.click());
});

const aboutLink = document.querySelector(".nav-menu .nav-link[href='#about']"); // Select the About link
const aboutSection = document.querySelector(".about-section"); // Select the About 
aboutLink.addEventListener("click", (event) => {
    event.preventDefault(); 
    aboutSection.scrollIntoView({ behavior: "smooth" }); 
    document.body.classList.remove("show-mobile-menu");
});

const menuLink = document.querySelector(".nav-menu .nav-link[href='#menu']");
const menuSection =document.querySelector(".menu-section");
menuLink.addEventListener("click", (event) => {
    event.preventDefault();;
    menuSection.scrollIntoView({ behavior: "smooth" });
    document.body.classList.remove("show-mobile-menu");
    });

    const testiLink = document.querySelector(".nav-menu .nav-link[href='#testimonial']");
    const testiSection =document.querySelector(".testimonials-section");
    testiLink.addEventListener("click", (event) => {
        event.preventDefault();;
        testiSection.scrollIntoView({ behavior: "smooth" });
        document.body.classList.remove("show-mobile-menu");
        });

        const gallLink = document.querySelector(".nav-menu .nav-link[href='#gallery']");
    const gallSection =document.querySelector(".gallery-section");
    gallLink.addEventListener("click", (event) => {
        event.preventDefault();;
        gallSection.scrollIntoView({ behavior: "smooth" });
        document.body.classList.remove("show-mobile-menu");
        });
        
        

    const swiper = new Swiper('.slider-wrapper', {
        loop: true,
        grabCursor: true,
        spaceBetween:25,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          dynamicBullets : true,
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      breakpoints: {
        0:{
          slidesPerView: 1
        },
        768:{
          slidesPerView: 2
        },
        1024:{
          slidesPerView: 3
          },

      }
        
      });