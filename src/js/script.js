const Menu = (e) => {
    let list = document.querySelector('ul');
    e.name === 'menu' ? (e.name = "close", list.classList.remove('absolute'), list.classList.remove('opacity-0')) : (e.name = "menu", list.classList.add('absolute'), list.classList.add('opacity-0'))
}