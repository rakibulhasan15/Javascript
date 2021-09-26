function animatedForm() {
  const arrows = document.querySelectorAll('.fa-arrow-down');

  arrows.forEach(arrow => {
    arrow.addEventListener('click', () => {
      const input = arrow.previousElementSibling;
      const parent = arrow.parentElement;
      const nextForm = parent.nextElementSibling;
      
      // Check for validation
         if (input.type === 'text' && validateUser(input)) {
          nextSlide(parent, nextForm);
         } else if (input.type === 'email' && validateEmail(input)) {
          nextSlide(parent, nextForm);
         } else if (input.type === 'password' && validateUser(input)) {
          nextSlide(parent, nextForm)
         } else {
           parent.style.animation = 'shake 0.5s ease';
         }

         // get rid animation
         parent.addEventListener('animationend', () => {
           parent.style.animation = '';
         });
    });
  });

}

function validateUser(user) {
  if(user.value.length < 6) {
    console.log('Not enough characters');
    errorColor('rgb(189, 87, 87)');
  } else {
    errorColor('rgb(87, 189, 130)');
    return true;
  }
}

function validateEmail(email) {
  const validation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  
  if(validation.test(email.value)) {
    errorColor('rgb(87, 189, 130)');
    return true
  } else {
    errorColor('rgb(189, 87, 87)');
  }
}

function nextSlide(parent, nextForm) {
  parent.classList.add('innactive');
  parent.classList.remove('active');
  nextForm.classList.remove('innactive');
}

function errorColor(color) {
  document.body.style.backgroundColor = color;
}


animatedForm()