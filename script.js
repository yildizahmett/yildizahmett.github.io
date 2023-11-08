function animateDiv() {
	const welcomeDiv = document.getElementById('welcome');

	welcomeDiv.style.opacity = 0;
	welcomeDiv.animate(
		[
			{ opacity: 0, scale: 2, rotate: '0deg', color: '#FFD700' },
			{ opacity: 1, scale: 1, rotate: '360deg', color: '#000' },
		],
		{
			duration: 2000,
			iterations: 1,
			easing: 'ease-in-out',
			fill: 'both',
			direction: 'alternate',
		}
	);
}

var slideIndex = 0;
var slideIndex2 = 0;
var slideIndex3 = 0;

function showSlides() {
	let i;
	const slides = document.querySelectorAll('#slider img');
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';
	}
	slideIndex++;
	if (slideIndex > slides.length) {
		slideIndex = 1;
	}
	slides[slideIndex - 1].style.display = 'block';
	setTimeout(showSlides, 2000); // Change image every 2 seconds
}

function showSlides2() {
	let i;
	const slides = document.querySelectorAll('#slider2 img');
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';
	}
	slideIndex2++;
	if (slideIndex2 > slides.length) {
		slideIndex2 = 1;
	}
	slides[slideIndex2 - 1].style.display = 'block';
	setTimeout(showSlides2, 2000); // Change image every 2 seconds
}

function showSlides3() {
	let i;
	const slides = document.querySelectorAll('#slider3 img');
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';
	}
	slideIndex3++;
	if (slideIndex3 > slides.length) {
		slideIndex3 = 1;
	}
	slides[slideIndex3 - 1].style.display = 'block';
	setTimeout(showSlides3, 2000); // Change image every 2 seconds
}

function openTab(evt, tabName) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName('tabcontent');
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = 'none';
	}
	tablinks = document.getElementsByClassName('tablinks');
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(' active', '');
	}
	document.getElementById(tabName).style.display = 'block';
	evt.currentTarget.className += ' active';
}

function handleCommentSubmit() {
	const nameInput = document.getElementById('name');
	const surnameInput = document.getElementById('surname');
	const emailInput = document.getElementById('email');
	const textareaInput = document.getElementById('comment');

	if (
		nameInput.value === '' ||
		surnameInput.value === '' ||
		emailInput.value === '' ||
		textareaInput.value === ''
	) {
		alert('Please fill every single field before submitting.');
		return;
	}

	nameInput.value = '';
	surnameInput.value = '';
	emailInput.value = '';
	textareaInput.value = '';

	alert('Your valuable comments will be taken into consideration.');
}

document.addEventListener('DOMContentLoaded', () => {
	if (window.location.pathname === '/favorites.html' || (window.location.pathname.split('/')[window.location.pathname.split('/').length - 1] === "favorites.html")) {
		showSlides();
		showSlides2();
		showSlides3();
	}

	document.querySelector('.sidebar').style.position = 'fixed';

	try {
		animateDiv();
	} catch (error) {
		console.log('Error occured:', error);
	}
});

function openSidebar() {
	if (window.innerWidth < 768) {
		document.querySelector('.sidebar').style.width = '100%';
		return;
	}

	document.querySelector('.sidebar').style.width = '250px';
}

function closeSidebar() {
	document.querySelector('.sidebar').style.width = '0';
}
