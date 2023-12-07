
let bodyshow = document.querySelector('#bodyshow');


document.querySelector('#show').onclick = () =>{

    bodyshow.classList.toggle('active');
}

let login = document.querySelector('#login');

document.querySelector('.menu-icon').onclick=()=>{

    login.classList.toggle('perform');
}


ScrollReveal({   reset: true,
                 distance: '60px',
                 duration:2500,
                 delay:400
               
});
ScrollReveal().reveal('.animate',{ delay: 500 });
