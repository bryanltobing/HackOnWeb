$(window).on("scroll", function(){
        if($(window).scrollTop() > 400){
            $(".nav").addClass("active");
            $(".navlink").css("color","white");
        } else {
            $(".nav").removeClass("active");
            $(".navlink").css("color","#247BA0");
        }
    });



// const hamburger = document.querySelector(".hamburger");
// const navLinks = document.querySelector(".nav-links");
// const links = document.querySelectorAll(".nav-links li");

// hamburger.addEventListener("click", () => {
//     navLinks.classList.toggle("open");
//     links.forEach(link => {
//     link.classList.toggle("fade");
//     });
// });