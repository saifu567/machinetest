
  
  // var $grid = $(".grid").isotope({
  //   itemSelector: ".all",
  //   percentPosition: true,
  //   masonry: {
  //     columnWidth: ".all"
  //   }
  // })

  const filterContainer = document.querySelector(".gallery-filter"),
 galleryItems = document.querySelectorAll(".gallery-item");

 filterContainer.addEventListener("click", (event) =>{
   if(event.target.classList.contains("filter-item")){
   	 // deactivate existing active 'filter-item'
   	 filterContainer.querySelector(".active").classList.remove("active");
   	 // activate new 'filter-item'
   	 event.target.classList.add("active");
   	 const filterValue = event.target.getAttribute("data-filter");
   	 galleryItems.forEach((item) =>{
       if(item.classList.contains(filterValue) || filterValue === 'all'){
       	item.classList.remove("hide");
       	 item.classList.add("show");
       }
       else{
       	item.classList.remove("show");
       	item.classList.add("hide");
       }
   	 });
   }
 });



 var init = false;
var swiper;
function swiperCard() {
  if (window.innerWidth >= 0) {
    if (!init) {
      init = true;

      var homeisSwiper = new Swiper(".home-is-swiper", {
        slidesPerView: 1.26,
        spaceBetween: 30,
        speed: 1200,
        navigation: {
          nextEl: ".home-is-button-next",
          prevEl: ".home-is-button-prev",
        },
        autoplay: 
    {
      delay: 2000,
    },
        breakpoints: {
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 2.65,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 2.16,
            spaceBetween: 30,
          },
          1400: {
            slidesPerView: 2.56,
            spaceBetween: 30,
          },
        },
      });
    }
  }
}
swiperCard();