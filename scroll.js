let typos = document.querySelectorAll(".typos");

function scrollcharge (){
	let scrollTop = document.documentElement.scrollTop;
	for (var i= 0; i < row-foot.lenght; 1++) {
		let alturatypos = typos[i].offsetTop;
		if(alturatypos<scrollTop) {
			typos[i].style.opacity = 1;

		}
	}
}

window.addEventListener('scroll', scrollcharge);