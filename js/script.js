let percent=0;

let loading=setInterval(function(){

    percent++;

    document.getElementById(
        "percent"
    ).innerHTML=percent+"%";

    if(percent>=100){

        clearInterval(loading);

        setTimeout(function(){

            document.getElementById(
                "loader"
            ).style.display="none";

            document.getElementById(
                "website"
            ).style.display="flex";

            document.body.style
                .overflow="auto";

        },300);

    }

},40);