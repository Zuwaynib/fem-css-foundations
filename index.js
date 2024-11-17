const nav = document.querySelector('.nav');
        const menu = document.querySelector('.menu');
        const close = document.querySelector('.close');
        const body = document.querySelector('.body');

        menu.addEventListener('click', () => {
            nav.classList.add('nav_visible');
            menu.classList.add('menu_hide');
            close.classList.add('close_show');
            body.classList.add('body_no-scroll');
        });

        close.addEventListener('click', () => {
            nav.classList.remove('nav_visible');
            menu.classList.remove('menu_hide');
            close.classList.remove('close_show');
            body.classList.remove('body_no-scroll');
        });