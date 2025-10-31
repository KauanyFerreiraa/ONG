export function renderTemplate(templateFn, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = templateFn();
}
