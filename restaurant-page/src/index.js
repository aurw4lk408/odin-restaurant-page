import './reset.css';
import './style.css';
import Logo from './logo.png'

function createHeader() {
    const header = document.createElement('div');
    header.classList.add('header');

    const header_link_left = document.createElement('div');
    header_link_left.classList.add('header_left');

    for (let i = 0; i < 2; i++) {
        if (i === 0) {
            const logo = new Image(100, 100);
            logo.src = Logo;
            header_link_left.appendChild(logo);
        }
        else if (i === 1) {
            const logo_txt = document.createElement('span');
            logo_txt.appendChild(document.createTextNode('ODIN RESTAURANT'));
            header_link_left.appendChild(logo_txt);
            logo_txt.classList.add('logo_text');
        }
    }
    
    
    const header_link_right = document.createElement('div');
    header_link_right.classList.add('header_right');


    for (let i = 1; i < 4; i++) {
        if (i === 1) {
            const home = document.createElement('div');
            home.classList.add('header_link', 'home');
            const home_txt = document.createElement('span');
            home_txt.appendChild(document.createTextNode("Home"));
            home.appendChild(home_txt);

            header_link_right.appendChild(home);
        }
        else if (i === 2) {
            const menu = document.createElement('div');
            menu.classList.add('header_link', 'menu');
            const menu_txt = document.createElement('span');
            menu_txt.appendChild(document.createTextNode("Menu"));
            menu.appendChild(menu_txt);

            header_link_right.appendChild(menu);
        }
        else if (i === 3) {
            const contact = document.createElement('div');
            contact.classList.add('header_link', 'contact');
            const contact_txt = document.createElement('span');
            contact_txt.appendChild(document.createTextNode("Contact"));
            contact.appendChild(contact_txt);

            header_link_right.appendChild(contact);
        }
    }

    header.appendChild(header_link_left);
    header.appendChild(header_link_right);
    document.querySelector('#content').appendChild(header);
}

console.log("I am working");


function createCenter() {
    const center_container = document.createElement('div');
    center_container.classList.add('center_container');
    const center = document.createElement('div');
    center.classList.add('center');

    const center_left = document.createElement('div');
    center_left.classList.add('center_left');
    const center_right = document.createElement('div');
    center_right.classList.add('center_right');

    for (let i = 0; i < 4; i++) {
        if (i === 0) {
            const welcome = document.createElement('div');
            welcome.classList.add('center_text', 'welcome');
            const welcome_text = document.createElement('span');
            welcome_text.appendChild(document.createTextNode('Welcome to the Odin Restaurant'))
            welcome.appendChild(welcome_text);
            center_left.appendChild(welcome);
        }
        else if (i === 1) {
            const description = document.createElement('div');
            description.classList.add('center_text', 'rest_description');
            const description_text = document.createElement('span');
            description_text.appendChild(document.createTextNode('Using the freshest and finest ingredients across all of the 9 realms, the Odin Restaurant serves only the best quality food to its customers.'))
            description.appendChild(description_text);
            center_left.appendChild(description);
        }
        else if (i === 2) {
            const schedule = document.createElement('div');
            schedule.classList.add('center_text', 'schedule');

            const schedule_text = document.createElement('p');
            schedule_text.setAttribute('style', 'white-space: pre;');
            schedule_text.textContent = "Hours\r\nSunday: 8am - 8pm\r\nMonday: 6am - 6pm\r\nTuesday: 6am - 6pm\r\nWednesday: 6am - 6pm\r\nThursday: 6am - 10pm\r\nFriday: 6am - 10pm\r\nSaturday: 8am - 10pm"
            schedule.appendChild(schedule_text);
            center_right.appendChild(schedule);
        }
        else if (i === 3) {
            const location = document.createElement('div');
            location.classList.add('center_text', 'location');
            const location_text = document.createElement('span');
            location_text.setAttribute('style', 'white-space: pre;');
            location_text.appendChild(document.createTextNode('Location:\r\nAsgard, Valhalla'));
            location.appendChild(location_text);
            center_right.appendChild(location);
        }
    }

    center.appendChild(center_left);
    center.appendChild(center_right);
    center_container.appendChild(center);
    document.querySelector('#content').appendChild(center_container);
}

function createFooter() {
    const footer = document.createElement('div');
    footer.classList.add('footer');
    
    const footer_text1 = document.createElement('span');
    footer_text1.appendChild(document.createTextNode('Restaurant picture was obtained from Unsplash.com'));

    const footer_text2 = document.createElement('span');
    footer_text2.appendChild(document.createTextNode('Food pictures were obtained from Pexels.com'))

    footer.appendChild(footer_text1);
    footer.appendChild(footer_text2);
    document.querySelector('#content').appendChild(footer);
}


function pageLoad() {
    createHeader();
    createCenter();
    createFooter();
}

pageLoad();

const home_btn = document.querySelector('.home');
home_btn.addEventListener("click", () => {
    document.querySelector('.center_container').remove();
    document.querySelector('.footer').remove();
    createCenter();
    createFooter();
})

const menu_btn = document.querySelector('.menu');
menu_btn.addEventListener("click", () => {
    document.querySelector('.center').innerHTML = "";
})
