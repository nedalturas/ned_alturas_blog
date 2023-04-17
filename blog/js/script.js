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

const body = document.getElementsByTagName('body');


function webDimension(){

	body.getHeight * devicePixelRatio;


}