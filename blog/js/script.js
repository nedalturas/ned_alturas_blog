
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
const toggleSwitch = document.querySelector('#mode-toggle');

function switchMode(e) {
	if (e.target.checked) {
		document.body.classList.add('dark-mode');
	} else {
		document.body.classList.remove('dark-mode');
	}
}

toggleSwitch.addEventListener('change', switchMode, false);

