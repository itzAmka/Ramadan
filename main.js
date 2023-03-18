const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li a');
const logo = document.querySelector('.logo');
const footerYear = document.querySelector('.footer-year');

// colors
const secondaryClr = '#ffdd83';
const accentClr = '#98dfd6';

hamburgerMenu.addEventListener('click', () => {
	hamburgerMenu.classList.toggle('change');
	navLinks.classList.toggle('active');

	if (hamburgerMenu.classList.contains('change')) {
		logo.style.color = secondaryClr;
	} else {
		logo.style.color = accentClr;
	}

	links.forEach(link => {
		link.addEventListener('click', () => {
			navLinks.classList.remove('active');
			hamburgerMenu.classList.remove('change');
			logo.style.color = accentClr;
		});
	});
});

footerYear.textContent =
	new Date().getFullYear() == 2023
		? '2023'
		: `2023 - ${new Date().getFullYear()}`;
