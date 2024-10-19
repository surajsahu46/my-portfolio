//function toggleMenu() {
 // const menu = document.querySelector('.menu-links');
  //const icon = document.querySelector('.hamburger-icon');
  //menu.classList.toggle('open');
  //icon.classList.toggle('open');
//}


function toggleMenu() {
  const menu = document.querySelector('.menu-links');
  const icon = document.querySelector('.hamburger-icon');
  const isOpen = menu.classList.toggle('open');
  
  // Toggle aria-expanded for accessibility
  icon.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  
  // Toggle open class for the hamburger icon
  icon.classList.toggle('open');

  // Close menu when clicking outside of it
  document.addEventListener('click', function handleClickOutside(event) {
    if (!menu.contains(event.target) && !icon.contains(event.target)) {
      menu.classList.remove('open');
      icon.classList.remove('open');
      icon.setAttribute('aria-expanded', 'false');
      document.removeEventListener('click', handleClickOutside);
    }
  });
}
