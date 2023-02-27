
let element = document.getElementById('container');
let btn = document.getElementById('theme_btn');
let logo = document.getElementById('logo');
const links = document.getElementById('link');


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