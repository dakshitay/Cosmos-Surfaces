// LOADER

let percent = 0;

let loading = setInterval(function(){

    percent++;

    document.getElementById(
        "percent"
    ).innerHTML = percent + "%";

    if(percent >= 100){

        clearInterval(loading);

        setTimeout(function(){

            document.getElementById(
                "loader"
            ).style.display = "none";

            document.getElementById(
                "website"
            ).style.display = "block";

            document.body.style
                .overflow = "auto";

        },300);

    }

},40);


// NAVBAR

window.addEventListener(
    "scroll",
    function(){

        const header =
            document.querySelector(
                ".header"
            );

        if(window.scrollY > 50){

            header.classList.add(
                "scrolled"
            );

        }else{

            header.classList.remove(
                "scrolled"
            );
        }
    }
);


// HERO SLIDER

const slides =
    document.querySelectorAll(
        ".slide"
    );

let current = 0;

if(slides.length > 0){

    setInterval(function(){

        slides[current]
            .classList.remove(
                "active"
            );

        current++;

        if(current >= slides.length)
            current = 0;

        slides[current]
            .classList.add(
                "active"
            );

    },5000);
}