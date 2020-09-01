import '../css/base.css';

let coll = document.getElementsByClassName('collapse');
for (let i = 0; i < coll.length; i++) {
	coll[i].addEventListener('click', function () {
		this.classList.toggle('active');
		let content = this.nextElementSibling;
		if (content.style.maxHeight) {
			content.style.maxHeight = null;
		} else {
			content.style.maxHeight = '500px';
		}
		this.childNodes[1].classList.toggle('active');
		this.childNodes[2].classList.toggle('active');
	});
}