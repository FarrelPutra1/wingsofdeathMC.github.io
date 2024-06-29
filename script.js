/**
 * absolute top-14 w-full left-0 bg-slate-800 divide-gray-900 divide-y-2
 */
const menu = document.querySelector('.menu');
const hamburgerMenu = document.querySelector('.hamburger-menu');

menu.addEventListener('click',displaymenu);
hamburgerMenu.addEventListener('click',displaymenu);


function displaymenu(){
if(menu.classList.contains('absolute')) {
    menu.classList.add('hidden');

    menu.classList.remove('absolute');
    menu.classList.remove('top-14');
    menu.classList.remove('w-full');
    menu.classList.remove('left-0');
    menu.classList.remove('bg-slate-800');
    menu.classList.remove('divide-gray-900');
    menu.classList.remove('divide-y-2');
}else{
    menu.classList.remove('hidden');

    menu.classList.add('absolute');
    menu.classList.add('top-14');
    menu.classList.add('w-full');
    menu.classList.add('left-0');
    menu.classList.add('bg-slate-800');
    menu.classList.add('divide-gray-900');
    menu.classList.add('divide-y-2');
}
}