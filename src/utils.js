exports.createElement = (type, options) => {
    const element = document.createElement(type);

    if (options.content) {
        element.textContent = options.content;
    }

    if (options.classes) {
        element.classList.add(...options.classes);
    }

    if (options.src) {
        element.src = options.src;
    }

    return element;
}