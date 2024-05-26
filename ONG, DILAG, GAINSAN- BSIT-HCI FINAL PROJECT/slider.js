document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector(".slider");
    const sliders = document.querySelector(".sliders");
    const navItems = document.querySelectorAll(".nav-item");
    const toTop = document.querySelector(".to-top");
    let currentIndex = 0;

    window.addEventListener("scroll", () =>{
        if(window.pageYOffset > 100){
            toTop.classList.add("active");
        }else{
            toTop.classList.remove("active");
        }
    })

    const intervalId = setInterval(function() {
        currentIndex = (currentIndex + 1) % navItems.length;
        scrollToSlide(currentIndex);
    }, 3000);

    navItems.forEach(function(item, index) {
        item.addEventListener("click", function(event) {
            event.preventDefault();
            currentIndex = index;
            scrollToSlide(currentIndex);
        });
    });

    function scrollToSlide(index) {
        const slideWidth = slider.offsetWidth;
        slider.scrollTo({
            left: slideWidth * index,
            behavior: "smooth"
        });
    }
});