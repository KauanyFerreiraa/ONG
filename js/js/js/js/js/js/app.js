import { renderTemplate } from './dom.js';
import { templates } from './templates.js';
import { initEvents } from './events.js';
import { validateForm } from './formValidation.js';

// Inicializa SPA na Home
renderTemplate(templates.home, 'app');
validateForm();

// Inicializa eventos do menu
initEvents();
