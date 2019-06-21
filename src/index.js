// function component() {
//     const element = document.createElement('div');

//     element.innerHTML = "Hello World";

//     return element;
// }



function createElement (tag = 'div', {
    content = 'Very default',
    classNames = ['module-text', 'special']
} = {}) {
    const element = document.createElement(tag);
    const text = document.createTextNode(content);

    element.classList.add(...classNames);
    element.appendChild(text);

    return element;
}
const greeting = createElement('p', { content = 'Hello World!', classNames = ['very-big', 'primary-color']});
document.body.appendChild(greeting);