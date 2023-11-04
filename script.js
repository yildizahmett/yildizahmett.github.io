const welcomeDiv = document.getElementById('welcome');

function animateDiv() {
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

document.addEventListener('DOMContentLoaded', animateDiv);
