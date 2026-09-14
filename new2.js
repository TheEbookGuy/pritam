/* ================= PRICE SYSTEM ================= */

const prices = {
    Paper: 12,
    Metal: 35,
    Plastic: 18,
    "E-Waste": 60
};


/* ================= ELEMENTS ================= */

const wasteSelect = document.getElementById("waste");
const quantityInput = document.getElementById("quantity");

const estimatedPrice =
    document.getElementById("estimatedPrice");

const heroPrice =
    document.getElementById("heroPrice");


/* ================= PRICE CALCULATOR ================= */

function updatePrice() {

    const waste = wasteSelect.value;

    const quantity =
        Number(quantityInput.value) || 0;

    if (!waste || quantity <= 0) {

        estimatedPrice.innerText = "₹0";

        heroPrice.innerText = "₹120";

        return;
    }


    const price =
        prices[waste] * quantity;


    estimatedPrice.innerText =
        "₹" + price;


    heroPrice.innerText =
        "₹" + price;

}


wasteSelect.addEventListener(
    "change",
    updatePrice
);

quantityInput.addEventListener(
    "input",
    updatePrice
);



/* ================= SCROLL ================= */

function scrollToBooking() {

    document
        .getElementById("booking")
        .scrollIntoView({
            behavior: "smooth"
        });

}


function scrollToHow() {

    document
        .getElementById("how")
        .scrollIntoView({
            behavior: "smooth"
        });

}



/* ================= BOOKING FORM ================= */

const form =
    document.getElementById("pickupForm");


form.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();


        const name =
            document.getElementById("name").value;

        const waste =
            wasteSelect.value;

        const quantity =
            Number(quantityInput.value);

        const date =
            document.getElementById("date").value;

        const address =
            document.getElementById("address").value;


        const total =
            prices[waste] * quantity;


        const points =
            quantity * 10;


        /* UPDATE DASHBOARD */

        document.getElementById(
            "totalWaste"
        ).innerText =
            quantity + " kg";


        document.getElementById(
            "totalMoney"
        ).innerText =
            "₹" + total;


        document.getElementById(
            "totalPickups"
        ).innerText =
            "1";


        document.getElementById(
            "ecoPoints"
        ).innerText =
            points;


        /* UPDATE STATUS */

        document.getElementById(
            "statusText"
        ).innerText =
            "Pickup booked for " + name;


        const badge =
            document.getElementById("statusBadge");


        badge.innerText =
            "Pickup Confirmed";


        /* SUCCESS MESSAGE */

        alert(
            "♻️ Pickup Confirmed!\n\n" +

            "Customer: " + name + "\n" +

            "Waste: " + waste + "\n" +

            "Quantity: " + quantity + " kg\n" +

            "Estimated Value: ₹" + total + "\n" +

            "Eco Points: " + points
        );


        /* SCROLL DASHBOARD */

        document
            .getElementById("dashboard")
            .scrollIntoView({
                behavior: "smooth"
            });

    }
);



/* ================= ANIMATED COUNTER ================= */

const counter =
    document.querySelector(".counter");


let started = false;


function animateCounter() {

    if (started) return;

    const rect =
        counter.getBoundingClientRect();


    if (rect.top < window.innerHeight) {

        started = true;

        let current = 0;

        const target =
            Number(counter.dataset.target);


        const interval =
            setInterval(() => {

                current +=
                    Math.ceil(target / 80);


                if (current >= target) {

                    current = target;

                    clearInterval(interval);

                }


                counter.innerText =
                    current.toLocaleString() + "+";


            }, 20);

    }

}


window.addEventListener(
    "scroll",
    animateCounter
);

animateCounter();



/* ================= DATE ================= */

const dateInput =
    document.getElementById("date");


const today =
    new Date()
        .toISOString()
        .split("T")[0];


dateInput.min = today;