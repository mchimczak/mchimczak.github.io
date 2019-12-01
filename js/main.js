document.addEventListener('DOMContentLoaded', function() {
    //sidenav
    var sidenav = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(sidenav, {
        edge: 'right',
        closeOnClick: true
    });

    //collapsible
    var acordeon = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(acordeon, {
        inDuration: 200,
        outDuration: 200
    });


    tabs = document.querySelector('.tabs');
    var instance = M.Tabs.init(tabs, {
        duration: 500
    });


    
    var slider = document.querySelectorAll('.slider');
    var instances = M.Slider.init(slider, {
        interval: 3000,
        duration: 1000
    });

    
    var modal = document.querySelectorAll('.modal');
    var instances = M.Modal.init(modal, {});

  });


const section_img = document.querySelector('.section__img')

if (window.innerWidth >= 768) {
    section_img.classList.add('container');
}

const offer__boxes = document.querySelectorAll('.offer__wrapper > li');
const offer_boxes_body = document.querySelectorAll(".offer__wrapper .collapsible-body")

if (window.innerWidth >= 768 && window.innerWidth <=1200) {
    // offer__boxes.classList.add('active')
    offer__boxes.forEach( box => {
        box.classList.add('active')
        box.style.pointerEvents = "none";
    })
    offer_boxes_body.forEach( box => {
        box.style.display = 'block'
    })
}