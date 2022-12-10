
// variables
const switchbutton = document.querySelector('.main-section .switch-button');
const switcharea = document.querySelector('.main-section .switch-button .switch');
const pop_up = document.getElementById('pop_up');
const join_circle = document.getElementById('join_circle');
const join_container = document.getElementsByClassName('join-container');
const xmark = document.querySelector('.pop-up #xmark i');
const pop_up_layout = document.querySelector('.pop-up-layout');
const updates = document.getElementById('updates');
const main_section_Active = document.querySelector('.main-section .container.active');
const main_section_finished = document.querySelector('.main-section .container.finished');
const menu_fistline = document.querySelector('.top-section .header .menu-bar .top-left');
const top_section = document.querySelector('.top-section');
const menu_secondline = document.querySelector('.top-section .header .menu-bar .middel');
const menu_thirdline = document.querySelector('.top-section .header .menu-bar .bottom-right');
const notifications_section = document.getElementsByClassName('notifications-section');
const nav = document.getElementsByClassName('nav');
const main_section_layout = document.querySelector('.main-section .layer');
const card_section = document.querySelector('.card-section');



//show pop up when join circle is clicked
join_circle.addEventListener('click', () => {
    popup();
    
});

function popup() {
    pop_up.classList.add('active-pop-up');
    setTimeout(() => {
        pop_up_layout.style.display = 'block';
    }, 100);
    
}

// remove pop up when xmark is clicked
xmark.addEventListener('click', () => {
    pop_up.classList.remove('active-pop-up');
    pop_up_layout.style.display = 'none';
});

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}





// show notifications when updates is clicked
updates.addEventListener('click', () => {
    topFunction();
    main_section.classList.add('translateY');
    updates.classList.add('displayNone');
    my_circles.innerHTML = '<div class="notification-text"><h3>Notifications</h3></div>';
    menu_fistline.classList.add('fist-line');
    menu_secondline.classList.add('second-line');
    menu_thirdline.classList.add('third-line');
    notifications_section[0].style.display = 'block';
    notifications_section[0].style.position = 'absolute';
    main_section_layout.style.display = 'block';
});




// close notifications when close is clicked
menu_bar.addEventListener('click', () => {
    topFunction();
    // close notifications section
    if (my_circles.innerText == 'Notifications') {
        main_section.classList.remove('translateY');
        updates.classList.remove('displayNone');
        my_circles.innerHTML = '<div class="my-circles-text"><h3>My Circles</h3></div>';
        menu_fistline.classList.remove('fist-line');
        menu_secondline.classList.remove('second-line');
        menu_thirdline.classList.remove('third-line');
        notifications_section[0].style.display = 'none';
        main_section_layout.style.display = 'none';
    }

    // toggle menu bar links
    else if (my_circles.innerText != 'Notifications') {
        main_section.classList.toggle('translateY');
        updates.classList.toggle('displayNone');
        menu_fistline.classList.toggle('fist-line');
        menu_secondline.classList.toggle('second-line');
        menu_thirdline.classList.toggle('third-line');
        my_circles.innerHTML = 'My circles';

        if (menu_thirdline.classList.contains('third-line')) {
            my_circles.innerHTML = '';

        }
        nav[0].classList.toggle('toggle-dispay');
        main_section_layout.style.display = 'block';
        main_section_layout.classList.toggle('zindex1-toggle');
    }



    if (my_circles.innerText != '') {
        main_section_layout.style.display = 'none';
        
    }

});



main_section_finished.style.display="none"
main_section_Active.style.display="block"

// to switch the switch area
switchbutton.addEventListener('click', () => {
    switcharea.classList.toggle('active-switch');
    // when switch button is clicked change the content 2 cards
    if (switcharea.classList.contains('active-switch')) {
main_section_finished.style.display="block"
main_section_Active.style.display="none"


    } else {
        main_section_finished.style.display="none"
        main_section_Active.style.display="block"

    }
});



menu_bar.addEventListener('click', () => {
    setTimeout(() => {
        main_section.classList.toggle('zindex1-toggle');
    }, 10);
    setTimeout(() => {
        newJoin();
    }, 210);
});



updates.addEventListener('click', () => {
    main_section.classList.add('zindex1-toggle');

    newJoin();

});




//get the main section layer
//creat new join circle > has the same class & id


function newJoin() {
    const new_join = `
    <div onclick="pop()" id="join_circle" class="join-circle join-circle-stylejs">
    <div class="join-container">
        <div class="join-text"> <i class="fa fa-circle-notch"></i> join circle</div>
    </div>
</div>
    `;

    main_section_layout.innerHTML = new_join;


}
// 

function pop() {
    popup();
}



main_section_layout.addEventListener("click",(e) => {  
    togglemenubar();
});




function togglemenubar() {
    topFunction();
    // close notifications section
    if (my_circles.innerText == 'Notifications') {
        main_section.classList.remove('translateY');
        updates.classList.remove('displayNone');
        my_circles.innerHTML = '<div class="my-circles-text"><h3>My Circles</h3></div>';
        menu_fistline.classList.remove('fist-line');
        menu_secondline.classList.remove('second-line');
        menu_thirdline.classList.remove('third-line');
        notifications_section[0].style.display = 'none';
        main_section_layout.style.display = 'none';
        main_section.style.borderTopLeftRadius = "29px"
        main_section.style.borderTopRightRadius = "29px"



    }

    // toggle menu bar links
    else if (my_circles.innerText != 'Notifications') {
        main_section.classList.toggle('translateY');
        updates.classList.toggle('displayNone');
        menu_fistline.classList.toggle('fist-line');
        menu_secondline.classList.toggle('second-line');
        menu_thirdline.classList.toggle('third-line');
        my_circles.innerHTML = 'My circles';

        if (menu_thirdline.classList.contains('third-line')) {
            my_circles.innerHTML = '';

        }
        nav[0].classList.toggle('toggle-dispay');
        main_section_layout.style.display = 'block';
        main_section_layout.classList.toggle('zindex1-toggle');
    }



    if (my_circles.innerText != '') {
        main_section_layout.style.display = 'none';
        
    }

    setTimeout(() => {
        main_section.classList.toggle('zindex1-toggle');
    }, 10);
    setTimeout(() => {
        newJoin();
    }, 210);
}


