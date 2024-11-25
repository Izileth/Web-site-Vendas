const sections = document.querySelectorAll('section');

sections.forEach(section => {
  section.addEventListener('mouseover', () => {
    section.classList.add('fade-in');
  });
  section.addEventListener('mouseout', () => {
    section.classList.remove('fade-in');
  });
});
document.addEventListener('DOMContentLoaded', function() {
  const menuLinks = document.querySelectorAll('nav a');

  menuLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      // Adiciona uma classe para indicar que o link está ativo
      menuLinks.forEach(l => l.classList.remove('active')); 
      this.classList.add('active'); // Adiciona classe "active" no link clicado

      // Animação suave até a seção
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    });
  });
});
const contactForm = document.getElementById('contact-form');
const nameInput = contactForm.querySelector('input[name="name"]');
const emailInput = contactForm.querySelector('input[name="email"]');
const messageInput = contactForm.querySelector('textarea[name="message"]');
const submitButton = contactForm.querySelector('button[type="submit"]');

// Validação do formulário
function validateForm() {
  let isValid = true;
  if (nameInput.value.trim() === "") {
    nameInput.classList.add('error');
    isValid = false;
  } else {
    nameInput.classList.remove('error');
  }

  if (emailInput.value.trim() === "" || !isValidEmail(emailInput.value)) {
    emailInput.classList.add('error');
    isValid = false;
  } else {
    emailInput.classList.remove('error');
  }

  if (messageInput.value.trim() === "") {
    messageInput.classList.add('error');
    isValid = false;
  } else {
    messageInput.classList.remove('error');
  }

  return isValid;
}

// Validação de email (simplificada)
function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  if (validateForm()) {
    // Desativa o botão para evitar envios duplicados
    submitButton.disabled = true;
    submitButton.textContent = 'Enviando...';

    // Aqui você pode enviar os dados do formulário para um servidor
    // usando AJAX ou outra técnica.
    // ...

    // Após o envio, exiba uma mensagem de sucesso
    // ...

    // Limpa o formulário e reativa o botão
    contactForm.reset();
    submitButton.disabled = false;
    submitButton.textContent = 'Enviar';
  } else {
    // Exibe uma mensagem de erro
    // ...
  }
});

// Adiciona estilos CSS para indicar erros
nameInput.addEventListener('blur', () => {
  validateForm(); // Valida o campo ao sair do foco
});
emailInput.addEventListener('blur', () => {
  validateForm(); // Valida o campo ao sair do foco
});
messageInput.addEventListener('blur', () => {
  validateForm(); // Valida o campo ao sair do foco
});