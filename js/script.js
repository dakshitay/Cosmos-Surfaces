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
/* =====================================
      CONTACT LOCATION DATA
===================================== */

const locations = {

    boston:{

        title:"Boston, MA",

        address:"205 Flanders Road<br>Westborough, MA 01581",

        phone:"508-329-5584",

        phoneLink:"5083295584",

        email:"Boston@cosmossurfaces.com",

        map:"https://maps.google.com/maps?q=205%20Flanders%20Road%20Westborough%20MA%2001581&output=embed"
    },

    charleston:{

        title:"Charleston, SC",

        address:"6920 Weber Blvd<br>Suite 100<br>Ladson, SC 29456",

        phone:"843-552-7910",

        phoneLink:"8435527910",

        email:"Charleston@cosmossurfaces.com",

        map:"https://maps.google.com/maps?q=6920%20Weber%20Blvd%20Ladson%20SC&output=embed"
    },

    charlotte:{

        title:"Charlotte, NC",

        address:"1440 Westinghouse Blvd<br>Suite G<br>Charlotte, NC 28273",

        phone:"704-248-8702",

        phoneLink:"7042488702",

        email:"Charlotte@cosmossurfaces.com",

        map:"https://maps.google.com/maps?q=1440%20Westinghouse%20Blvd%20Charlotte%20NC&output=embed"
    },

    dallas:{

        title:"Dallas, TX",

        address:"2244 Luna Rd<br>Suite 100<br>Carrollton, TX 75006",

        phone:"214-377-5969",

        phoneLink:"2143775969",

        email:"Dallas@cosmossurfaces.com",

        map:"https://maps.google.com/maps?q=2244%20Luna%20Rd%20Carrollton%20TX&output=embed"
    },

    greensboro:{

        title:"Greensboro, NC",

        address:"4300 Federal Dr<br>Greensboro, NC 27410",

        phone:"336-882-2282",

        phoneLink:"3368822282",

        email:"Greensboro@cosmossurfaces.com",

        map:"https://maps.google.com/maps?q=4300%20Federal%20Dr%20Greensboro%20NC&output=embed"
    },

    nashville:{

        title:"Nashville, TN",

        address:"601 Maddox Road<br>Mt. Juliet, TN 37122",

        phone:"615-501-0611",

        phoneLink:"6155010611",

        email:"Nashville@cosmossurfaces.com",

        map:"https://maps.google.com/maps?q=601%20Maddox%20Road%20Mt.%20Juliet%20TN&output=embed"
    },

    raleigh:{

        title:"Raleigh, NC",

        address:"501 S New Hope Rd<br>Raleigh, NC 27610",

        phone:"919-212-0303",

        phoneLink:"9192120303",

        email:"Raleigh@cosmossurfaces.com",

        map:"https://maps.google.com/maps?q=501%20S%20New%20Hope%20Rd%20Raleigh%20NC&output=embed"
    },

    washington:{

        title:"Washington, DC",

        address:"3900 Stonecroft Blvd<br>Suite B<br>Chantilly, VA 20151",

        phone:"703-996-4484",

        phoneLink:"7039964484",

        email:"Info.DC@cosmossurfaces.com",

        map:"https://maps.google.com/maps?q=3900%20Stonecroft%20Blvd%20Chantilly%20VA&output=embed"
    },

    atlanta:{

        title:"Atlanta, GA",

        address:"IGM Surfaces<br>1235 Commerce Road<br>Suite L<br>Morrow, GA 30260",

        phone:"770-739-5677",

        phoneLink:"7707395677",

        email:"atlanta@igmsurfaces.com",

        map:"https://maps.google.com/maps?q=1235%20Commerce%20Road%20Morrow%20GA&output=embed"
    },

    houston:{

        title:"Houston, TX",

        address:"IGM Surfaces<br>8017 Pinemont Dr.<br>#300<br>Houston, TX 77040",

        phone:"713-690-1008",

        phoneLink:"7136901008",

        email:"Houston@igmsurfaces.com",

        map:"https://maps.google.com/maps?q=8017%20Pinemont%20Dr%20Houston%20TX&output=embed"
    },

    northbergen:{

        title:"North Bergen, NJ",

        address:"IGM Surfaces<br>2038 83rd Street<br>North Bergen, NJ 07047",

        phone:"201-869-5200",

        phoneLink:"2018695200",

        email:"OrdersNJ@igmsurfaces.com",

        map:"https://maps.google.com/maps?q=2038%2083rd%20Street%20North%20Bergen%20NJ&output=embed"
    },

    philadelphia:{

        title:"Philadelphia, PA",

        address:"IGM Surfaces<br>725 County Line Road<br>Huntingdon Valley, PA 19006",

        phone:"610-264-4466",

        phoneLink:"6102644466",

        email:"InquiryPA@igmsurfaces.com",

        map:"https://maps.google.com/maps?q=725%20County%20Line%20Road%20Huntingdon%20Valley%20PA&output=embed"
    },

    windsor:{

        title:"Windsor, CT",

        address:"IGM Surfaces<br>800 Marshall Phelps Rd.<br>#2<br>Windsor, CT 06095",

        phone:"860-298-0368",

        phoneLink:"8602980368",

        email:"igmctsales@igmsurfaces.com",

        map:"https://maps.google.com/maps?q=800%20Marshall%20Phelps%20Rd%20Windsor%20CT&output=embed"
    }

};


/* =====================================
      CHANGE LOCATION
===================================== */

function changeLocation(){

    const value = document.getElementById("locationSelect").value;

    const data = locations[value];

    document.getElementById("locationInfo").innerHTML = `

        <h3>${data.title}</h3>

        <p>${data.address}</p>

        <p><strong>Phone:</strong><br>

        <a href="tel:${data.phoneLink}">${data.phone}</a>

        </p>

        <p><strong>Email:</strong><br>

        <a href="mailto:${data.email}">${data.email}</a>

        </p>

    `;

    document.getElementById("googleMap").src = data.map;

}

/* Load default location */

window.addEventListener("load", changeLocation);
