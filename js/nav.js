const navs = [{
    Text: ' Home ',
    Url: 'index.html',
    Class: ' Home ',
    Alt: ' Click here to view the home link '
},
{
    Text: ' Menu ',
    Url: ' menu.html ',
    Class: ' link-1',
    Alt: ' Click Here to visit Menu '
},
{
    Text: ' About Us ',
    Url: ' about.html',
    Class: ' link-2 ',
    Alt: ' Click here to visit About Us '
},
{
    Text: ' Staff ',
    Url: ' staff.html ',
    Class: ' link-3 ',
    Alt: ' Click Here to visit Staff '
}


];

// Loop that places list items to create the navBar. 
const navBarMarkup = `
${navs.map(nav => `<li class="navlink"><a href=${nav.Url} class="${nav.Class}" alt="${nav.Alt}">${nav.Text}</a>`).join(' ')}</li>
`;

document.querySelector(' ul ').innerHTML = navBarMarkup;

// Creates hamburger icon for mobile navigation

// Select HTML objects

const burger = document.querySelector('.burger i');
const nav = document.querySelector('.nav');

// Defining a function

function toggleNav(){
burger.classList.toggle('fa-bars');
burger.classList.toggle('fa-times');
nav.classList.toggle('nav-active');
}

// Calling the function after click event occurs
burger.addEventListener('click', function() {
toggleNav();
});