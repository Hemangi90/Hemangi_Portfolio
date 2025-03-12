document.addEventListener("DOMContentLoaded", function () {
    // Smooth Scrolling for Navigation Links
    const links = document.querySelectorAll("nav ul li a");

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });


    

    const text = "Passionate Web Developer & Problem Solver";
    let index = 0;
    function typeEffect() {
        document.querySelector('.typing-text').innerHTML = text.substring(0, index) + "|";
        index++;
        if (index <= text.length) {
            setTimeout(typeEffect, 100);
        } else {
            document.querySelector('.typing-text').innerHTML = text;
        }
    }
    window.onload = typeEffect;




    // Bouncing Animation for Profile Images in Home and About Sections
    const profileImages = document.querySelectorAll(".profile img");

    profileImages.forEach(image => {
        image.style.animation = "bounce 1s infinite ease-in-out";
    });

    // const profileimg = document.querySelectorAll(".profile img");

    // profileimg.forEach(image => {
    //     image.style.animation = "bounce 1s infinite ease-in-out";
    // });
});
