import { renderTemplate } from './dom.js';
import { templates } from './templates.js';
import { validateForm } from './formValidation.js';

export function initEvents() {
    document.querySelectorAll('nav button').forEach(button => {
        button.addEventListener('click', (e) => {
            const page = e.target.dataset.page;
            renderTemplate(templates[page], 'app');
            if(page === 'home') {
                validateForm(); // Inicializa validação no formulário da home
            }
        });
    });
}
