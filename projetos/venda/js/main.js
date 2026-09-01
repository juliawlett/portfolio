const pricing = {
  monthly: {
    pro: 149,
    additionalUser: 40,
    note: 'Cobranca mensal. Cancele quando quiser.'
  },
  annual: {
    pro: 119,
    additionalUser: 32,
    note: 'R$ 1.428 cobrados anualmente. Economia de R$ 360 por ano.'
  }
};

let calculatorBilling = 'monthly';

const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
const billingButtons = document.querySelectorAll('[data-billing]');
const calcButtons = document.querySelectorAll('[data-calc-billing]');
const usersInput = document.querySelector('#users');
const userCount = document.querySelector('#user-count');
const estimatedPrice = document.querySelector('#estimated-price');
const estimatedDescription = document.querySelector('#estimated-description');

function setActiveButton(buttons, activeButton) {
  buttons.forEach((button) => {
    button.classList.toggle('active', button === activeButton);
  });
}

function setBilling(type, activeButton) {
  document.querySelector('#pro-price').textContent = pricing[type].pro;
  document.querySelector('#pro-note').textContent = pricing[type].note;
  setActiveButton(billingButtons, activeButton);
}

function calculatePrice() {
  const users = Number(usersInput.value);
  const includedUsers = 10;
  const additionalUsers = Math.max(0, users - includedUsers);
  const plan = pricing[calculatorBilling];
  const total = plan.pro + additionalUsers * plan.additionalUser;

  userCount.textContent = users;
  estimatedPrice.textContent = total;

  if (additionalUsers === 0) {
    estimatedDescription.textContent = `Inclui ate ${includedUsers} usuarios.`;
    return;
  }

  const plural = additionalUsers > 1 ? 'usuarios adicionais' : 'usuario adicional';
  const annualText = calculatorBilling === 'annual' ? ' com desconto anual' : '';

  estimatedDescription.textContent =
    `${includedUsers} usuarios incluidos + ${additionalUsers} ${plural}${annualText}.`;
}

menuToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

mainNav.addEventListener('click', (event) => {
  if (event.target.tagName === 'A') {
    mainNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }
});

billingButtons.forEach((button) => {
  button.addEventListener('click', () => {
    setBilling(button.dataset.billing, button);
  });
});

calcButtons.forEach((button) => {
  button.addEventListener('click', () => {
    calculatorBilling = button.dataset.calcBilling;
    setActiveButton(calcButtons, button);
    calculatePrice();
  });
});

usersInput.addEventListener('input', calculatePrice);

document.querySelectorAll('.faq-item button').forEach((button) => {
  button.addEventListener('click', () => {
    const item = button.closest('.faq-item');

    document.querySelectorAll('.faq-item').forEach((faqItem) => {
      if (faqItem !== item) {
        faqItem.classList.remove('active');
      }
    });

    item.classList.toggle('active');
  });
});

calculatePrice();
