export function createContentEl({ id, title, img, text }) {
  const HTML = `
    <article class='article'>
    <h1>${title}</h1>
    <img src=${img} alt=${title} id=${id}>
    <p class='description'>${text}</p>
    </article>`;
  const template = document.createElement("template");
  template.innerHTML = HTML;
  return template.content.firstElementChild;
}

//https://stackoverflow.com/questions/64123400/how-to-create-template-element-dynamically-with-dom-operations
//The Element.firstElementChild read-only property returns an element's first child Element, or null if there are no child elements.
