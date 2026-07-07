// ======================================
// STICKY HEADER
// ======================================

window.addEventListener("scroll", function () {

    const header = document.querySelector(".header");

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


// ======================================
// FADE IN ANIMATION
// ======================================

window.addEventListener("load", function () {

    const form = document.querySelector(".form-container");

    if (form) {

        form.style.opacity = "0";
        form.style.transform = "translateY(40px)";

        setTimeout(() => {

            form.style.transition = "all .8s ease";

            form.style.opacity = "1";

            form.style.transform = "translateY(0)";

        }, 200);

    }

});


// ======================================
// FORM SUBMIT (TEMPORARY)
// ======================================

const form = document.querySelector("form");

if(form){

    form.addEventListener("submit", function(e){

        e.preventDefault();

        alert("Thank you! Your inquiry has been received.");

        form.reset();

    });

}


// ======================================
// GOOGLE MAP
// (Coming Next)
// ======================================

// We will add dynamic map switching here.
// Example:
// Dallas → Dallas Map
// Boston → Boston Map
// Atlanta → Atlanta Map