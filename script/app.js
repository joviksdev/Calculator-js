// Grab Html element
const alert = document.querySelector('.alert');
const collected_value = document.querySelector('.collected-value');
const total_result = document.querySelector('.total-result');
const calculate = document.querySelector('.equal');
const clear = document.querySelector('.clear');
const clear_all = document.querySelector('.clear-all');
const operator = [...document.querySelectorAll('.operator')];
const value = [...document.querySelectorAll('.value')];

// Special variable
let initial_num = '';
let total_num = '';

// Set Event Listener on cLick on Number, Opertor and Dot(.) btn
value.forEach(btn => {
  btn.addEventListener('click', e => {
    setPop(e.target);
    const btnValue = e.target.getAttribute('btn-value');
    collected_value.classList.remove('up');

    if (total_num === '') {
      initial_num += btnValue;
      collected_value.textContent = initial_num;
    }

    if (total_num !== '' && btn.classList.contains('operator')) {
      initial_num = total_num;
      initial_num += btnValue;
      collected_value.textContent = initial_num;
      total_result.textContent = '';
    }

    if (total_num !== '' && btn.classList.contains('num')) {
      initial_num += btnValue;
      collected_value.textContent = initial_num;
      total_result.textContent = '';
    }
  });
});

// Clear
clear.addEventListener('click', e => {
  setPop(e.target);
  collected_value.classList.remove('up');

  const array = [...initial_num];
  array.pop();
  initial_num = array.join('');
  collected_value.textContent = initial_num;
});

// Clear All Value
clear_all.addEventListener('click', e => {
  setPop(e.target);
  collected_value.classList.remove('up');

  initial_num = '';
  total_num = '';
  collected_value.textContent = '';
  total_result.textContent = '';
});

// Perform Calculation

calculate.addEventListener('click', e => {
  // Set and remove pop effect
  setPop(e.target);

  try {
    total_num = eval(initial_num);
    total_result.textContent = total_num;
  } catch (err) {
    total_result.textContent = 'Styntac Error';
    total_result.classList.add('pop', 'show');
    setTimeout(() => total_result.classList.remove('pop', 'show'), 2000);
    setTimeout(() => collected_value.classList.remove('up'), 2000);
    console.log(err);
  }

  total_result.classList.add('show');
  setPop(total_result);
  collected_value.classList.add('up');
});

// Set and Remove Pop Effect
const setPop = elem => {
  elem.classList.add('pop');
  setTimeout(() => elem.classList.remove('pop'), 300);
};
