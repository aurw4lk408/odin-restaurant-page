const menu_btn = document.querySelector('.menu');
menu_btn.addEventListener("click", () => {
    document.querySelector('.center_container').remove();
    document.querySelector('.footer').remove();

    const center_container = document.createElement('div');
    center_container.classList.add('center_container');
    const center_menu = document.createElement('div');
    center_menu.classList.add('center_menu');

    //make sign and beverages
    const beverage_sign = document.createElement('div');
    beverage_sign.classList.add('sign');
    beverage_sign.textContent = "Beverage";
    center_menu.appendChild(beverage_sign);
    
    for (let i = 0; i < beveragesArray.length; i++) {
        const beverage = document.createElement('div');
        beverage.classList.add('beverage');
        const title = document.createElement('div');
        title.textContent = `${beveragesArray[i].title}`;
        const descript = document.createElement('div');
        descript.textContent = `${beveragesArray[i].description}`;
        const price = document.createElement('div');
        price.textContent = `${beveragesArray[i].price}`;

        beverage.appendChild(title);
        beverage.appendChild(descript);
        beverage.appendChild(price);
    }

    //make sign and sides



    //make sign and dishes


    center_container.appendChild(center_menu);
    document.querySelector('#content').appendChild(center_container);
})

function newItem(title, description, price) {
    return {title, description, price}
}

const avocado_shake = newItem("Avocado Shake", "A delicious avocado shake that goes well with any order!", "$4")
const thai_tea = newItem("Thai Tea", "A tasty tea that will satisfy any sweet-tooth’s craving.", "$3");
const roasted_potatoes = newItem("Roasted Potatoes", "A good, hearty helping of perfectly cooked potatoes.", "$5");
const fruit_bowl = newItem("Fruit Bowl", "A bowl filled with the best fruits of the 9 realms.", "$6");
const fettuccine = newItem("Fettuccine Alfredo", "A classic fettuccine alfredo dish with a rich and creamy sauce.", "$10");
const steak = newItem("Steak", "Our signature dish: tender, flavorful, and juicy, you won’t be able to stop eating once you’ve tried it.", "$13");
const pancakes = newItem("Pancakes", "A stack of homemade pancakes with our sweet and savory honey.", "$8");

let beveragesArray = [avocado_shake, thai_tea];
let sidesArray = [roasted_potatoes, fruit_bowl];
let dishesArray = [fettuccine, pancakes, steak];

