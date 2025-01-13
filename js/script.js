const tariff = 0.21;
const distance = document.getElementById("distance")
const ge = document.getElementById("age")
const form = document.querySelector("form")

form.addEventListener("submit", (event) => {
    event.preventDefault();

    console.log(distance.value + "km", "age " + age.value);


    let discount = 0

    if (parseInt(age.value) >= 65) {
        discount = 0.4;
    }
    else if (parseInt(age.value) < 18) {
        discount = 0.2;
    }
    else {
        discount = 0;
    }

    // price 
    let tot = tariff * parseInt(distance.value);
    price = (tot - (tot * discount)).toFixed(2);

    console.log(price + "€");
    
});
