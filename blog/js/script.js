
let element = document.getElementById('container');
let btn = document.getElementById('theme_btn');
let logo = document.getElementById('logo');
const links = document.getElementById('link');

// Darkmode function have to be polished
function changeTheme(){
	element.classList.toggle('darkmode');

	element.style.transition = 'Ease 400ms';

	if (btn.innerHTML == 'LIGHT') {
		btn.innerHTML = 'DARK'
		logo.style.color = 'BLACK';
		links.style.color = 'BLACK';


	}else{
		btn.innerHTML = 'LIGHT';
		logo.style.color = 'WHITE';
		links.style.color = 'WHITE';
	}
}


// Will have to replace this later
const toggleSwitch = document.querySelector('input[type="checkbox"]');
const toggleIcon = document.querySelector('#toggle-icon');

function switchTheme(event) {
	if (event.target.checked) {
		document.documentElement.setAttribute('data-theme', 'dark');
		localStorage.setItem('theme', 'dark');
	} else {
		document.documentElement.setAttribute('data-theme', 'light');
		localStorage.setItem('theme', 'light');
	}    
}

toggleSwitch.addEventListener('change', switchTheme);

const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
	document.documentElement.setAttribute('data-theme', currentTheme);

	if (currentTheme === 'dark') {
		toggleSwitch.checked = true;
	}
}
