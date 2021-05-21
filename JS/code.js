'used strict'

const check  = document.querySelector('.toggle');
const button = document.querySelectorAll('.btn');
const body   = document.querySelector('body');

console.log(button);
check.addEventListener('click', function(){
    if(this.checked){
        body.classList.add('change-Color');
        for (const iterator of button) {
            iterator.classList.remove('btn');
            iterator.classList.add('btn-dark');
        }
    } else {
        body.classList.remove('change-Color');
        for (const iterator of button) {
            iterator.classList.remove('btn-dark');
            iterator.classList.add('btn');
        }
    }
});