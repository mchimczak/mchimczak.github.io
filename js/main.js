document.addEventListener('DOMContentLoaded', function() {
    //sidenav
    var sidenav = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(sidenav, {
        edge: 'right',
        closeOnClick: true
    });

    //collapsible
    var acordeon = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(acordeon, {});


    tabs = document.querySelector('.tabs');
    var instance = M.Tabs.init(tabs, {
        duration: 500
    });

  });
