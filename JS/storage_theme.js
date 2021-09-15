"use strict";

const storage = window.localStorage;
const body    = document.querySelector('body');
const check   = document.querySelector('.toggle');
// const button  = document.querySelectorAll('.btn');
const card    = document.querySelectorAll('.card__link');

let dark = Boolean(storage.getItem('dark'));

//Function for change theme of multiple elements
function darkThemeIterator(arry, oldClass, newClass){
    for (const item of arry) {
        item.classList.remove(oldClass);
        item.classList.add(newClass);
    }
};

//it changes and keeps the theme when reloading or it go back.
const comprobationDark = dark =>{
    if(dark){
        body.classList.add('change-Color');
        // darkThemeIterator(button, 'btn', 'btn-dark');
        darkThemeIterator(card, 'card__link', 'link-dark');
        check.checked = true;
    } else {
        body.classList.remove('change-Color');
        // darkThemeIterator(button, 'btn-dark', 'btn');
        darkThemeIterator(card, 'link-dark', 'card__link');
        check.checked = false;
    }
};

comprobationDark(dark);

//This the swicht for change the theme.
check.addEventListener('click', function(){
    if(this.checked){
        body.classList.add('change-Color');
        // darkThemeIterator(button, 'btn', 'btn-dark');
        darkThemeIterator(card, 'card__link', 'link-dark');
        storage.setItem('dark', true)
    } else {
        body.classList.remove('change-Color');
        // darkThemeIterator(button, 'btn-dark', 'btn');
        darkThemeIterator(card, 'link-dark', 'card__link');
        storage.removeItem('dark');
    }
});
