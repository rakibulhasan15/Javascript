const navSlider = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav_links');
  const navLinks = document.querySelectorAll('.nav_links li');

  
  burger.addEventListener('click', () => {

    // Togol nav
     nav.classList.toggle('nav_active');

     // Animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation){
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.50s ease forwards ${index / 7 + 0.5}s`;
      }
      
    });

    // Burgar animation
    burger.classList.toggle('togg');

  });

}

navSlider();