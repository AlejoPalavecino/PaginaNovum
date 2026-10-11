import { it } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import * as contact from '../src/config/contact.js';

function setup({ confirmed = false, clipboard } = {}) {
  const elements = new Map();
  const documentListeners = new Map();
  for (const id of ['contact-service-select', 'contact-company-input', 'contact-name-input', 'contact-reply-input', 'contact-deadline-input', 'contact-selected-service', 'contact-mail-btn', 'cta-revision-notice', 'contact-guide-textarea', 'contact-guide-fallback', 'contact-problem-textarea', 'contact-reset-service', 'contact-copy-guide-btn', 'contact-copy-feedback']) {
    const attributes = new Map();
    const listeners = new Map();
    elements.set(id, {
      value: '', hidden: false, textContent: '', className: '',
      classList: { add() {}, remove() {} },
      setAttribute(name, value) { attributes.set(name, value); },
      removeAttribute(name) { attributes.delete(name); },
      getAttribute(name) { return attributes.get(name); },
      addEventListener(name, fn) { listeners.set(name, fn); },
      dispatch(name, event = {}) { return listeners.get(name)?.(event); },
      focus() { this.focused = true; }, select() { this.selected = true; }
    });
  }
  const context = vm.createContext({
    ...contact,
    CONTACT_CONFIG: { ...contact.CONTACT_CONFIG, email: confirmed ? 'test@example.com' : '[EMAIL_DE_CONTACTO]' },
    document: { getElementById: id => elements.get(id), addEventListener(name, handler) { documentListeners.set(name, handler); } },
    navigator: { clipboard }, setTimeout() {}
  });
  const source = fs.readFileSync('src/main.js', 'utf8');
  const region = source.slice(source.indexOf('let currentConsultationService'), source.indexOf('/**\n * Accessible FAQ'));
  vm.runInContext(region.replaceAll('export function', 'function'), context);
  context.initConsultationHandlers();
  const clickService = (service) => documentListeners.get('click')({ target: { closest: () => ({ getAttribute: () => service }) } });
  return { elements, context, clickService };
}

it('copies a generated guide from current fields while keeping recovery hidden', async () => {
  let copied;
  const { elements, context } = setup({ clipboard: { async writeText(text) { copied = text; } } });
  assert.equal(elements.get('contact-guide-fallback').hidden, true);
  const values = { 'contact-company-input': 'Empresa Ñ', 'contact-name-input': 'Ana & función', 'contact-reply-input': 'teléfono 123', 'contact-deadline-input': 'Esta semana', 'contact-problem-textarea': 'Pieza dañada\nPlano número 3' };
  for (const [id, value] of Object.entries(values)) { elements.get(id).value = value; elements.get(id).dispatch('input'); }
  context.updateConsultationState('Ingeniería Inversa');
  elements.get('contact-guide-textarea').value = 'Stale recovery text must not be copied';
  await elements.get('contact-copy-guide-btn').dispatch('click');
  assert.equal(copied, contact.buildConsultationBody('Ingeniería Inversa', { company: values['contact-company-input'], name: values['contact-name-input'], replyContact: values['contact-reply-input'], deadline: values['contact-deadline-input'], problem: values['contact-problem-textarea'] }));
  assert.equal(elements.get('contact-guide-fallback').hidden, true);
  elements.get('contact-reset-service').dispatch('click');
  assert.equal(elements.get('contact-problem-textarea').value, values['contact-problem-textarea']);
  assert.equal(elements.get('contact-company-input').value, values['contact-company-input']);
});

it('reveals and selects current generated text only after clipboard rejection', async () => {
  let reject = true;
  const { elements, context } = setup({ clipboard: { async writeText() { if (reject) throw new Error('denied'); } } });
  elements.get('contact-problem-textarea').value = 'Detalles propios & plano';
  context.updateConsultationState('Repuesto Express');
  await elements.get('contact-copy-guide-btn').dispatch('click');
  const guide = elements.get('contact-guide-textarea');
  assert.equal(guide.value, contact.buildConsultationBody('Repuesto Express', { problem: 'Detalles propios & plano' }));
  assert.equal(guide.focused, true);
  assert.equal(guide.selected, true);
  assert.equal(elements.get('contact-guide-fallback').hidden, false);
  elements.get('contact-problem-textarea').value = 'Nueva pieza';
  elements.get('contact-problem-textarea').dispatch('input');
  assert.equal(elements.get('contact-guide-fallback').hidden, true, 'Old recovery must not remain visible after edits');
  reject = false;
  await elements.get('contact-copy-guide-btn').dispatch('click');
  assert.equal(elements.get('contact-guide-fallback').hidden, true);
});

it('never creates a fake email link while the address is unconfirmed', () => {
  const { elements } = setup();
  const problem = elements.get('contact-problem-textarea');
  problem.value = 'Una pieza dañada';
  problem.dispatch('input');
  const button = elements.get('contact-mail-btn');
  assert.equal(button.getAttribute('href'), undefined);
  assert.equal(button.getAttribute('aria-disabled'), 'true');
  let prevented = false;
  button.dispatch('click', { preventDefault() { prevented = true; } });
  assert.equal(prevented, true);
});

it('updates the express mailto as the problem and selected service change', () => {
  const { elements, context } = setup({ confirmed: true });
  const problem = elements.get('contact-problem-textarea');
  problem.value = 'Repuesto dañado & plano\nEquipo número 3';
  problem.dispatch('input');
  context.updateConsultationState('ingeniería inversa');
  const url = elements.get('contact-mail-btn').getAttribute('href');
  const params = new URLSearchParams(url.split('?')[1]);
  assert.ok(params.get('body').includes(problem.value));
  assert.ok(params.get('subject').includes('Ingeniería Inversa'));
  assert.equal(elements.get('cta-revision-notice').hidden, true);
  problem.value = '   ';
  problem.dispatch('input');
  assert.equal(elements.get('contact-mail-btn').getAttribute('href'), undefined);
});

it('provides selectable generated text when clipboard is absent', async () => {
  const { elements, context } = setup();
  elements.get('contact-problem-textarea').value = 'Necesitamos una adaptación';
  context.updateConsultationState('Partner Industrial');
  await elements.get('contact-copy-guide-btn').dispatch('click');
  const guide = elements.get('contact-guide-textarea');
  assert.ok(guide.value.includes('Consulta: Partner Industrial'));
  assert.ok(guide.value.includes('Necesitamos una adaptación'));
  assert.equal(guide.selected, true);
  assert.equal(elements.get('contact-guide-fallback').hidden, false);
});

it('prevents empty email continuation by keyboard and focuses the problem field', () => {
  const { elements } = setup({ confirmed: true });
  let prevented = false;
  elements.get('contact-mail-btn').dispatch('keydown', { key: 'Enter', preventDefault() { prevented = true; } });
  assert.equal(prevented, true);
  assert.equal(elements.get('contact-problem-textarea').focused, true);
  assert.ok(elements.get('contact-copy-feedback').textContent.includes('brevemente'));
});

it('synchronizes native service selection with CTAs and preserves optional values', () => {
  const { elements, context, clickService } = setup({ confirmed: true });
  const select = elements.get('contact-service-select');
  assert.ok(select, 'Service selector is wired into the runtime fixture');
  for (const [id, value] of [['contact-company-input', 'Empresa Ñ'], ['contact-name-input', 'Ana'], ['contact-reply-input', 'teléfono 123'], ['contact-deadline-input', 'Esta semana']]) elements.get(id).value = value;
  elements.get('contact-problem-textarea').value = 'Pieza dañada';
  clickService('Repuesto Express');
  assert.equal(select.value, 'Repuesto Express');
  select.value = 'Ingeniería Inversa';
  select.dispatch('change');
  assert.equal(elements.get('contact-selected-service').textContent, 'Ingeniería Inversa');
  const body = new URLSearchParams(elements.get('contact-mail-btn').getAttribute('href').split('?')[1]).get('body');
  assert.ok(body.includes('Empresa Ñ'));
  assert.ok(body.includes('teléfono 123'));
  elements.get('contact-reset-service').dispatch('click');
  assert.equal(select.value, 'Consulta general');
  assert.equal(elements.get('contact-name-input').value, 'Ana');
  assert.equal(elements.get('contact-deadline-input').value, 'Esta semana');
});
