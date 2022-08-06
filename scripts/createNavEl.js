export function createNavEl(data) {
    const listElements = data.map(
        el =>
        `
        <li class="nav__item">
        <a href="#" class="nav__item-link" id='${el.id}'>
        ${el.title}
        </a>
        </li>
        `
    );
    const listContainer = document.createElement('ul');
    listContainer.classList.add('nav__items');
    listContainer.innerHTML = listElements;
    return listContainer;
}