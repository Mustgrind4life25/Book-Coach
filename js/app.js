//get the hamburger menu

function toggleMenu(){
	let hamburger = document.querySelector(".menu-links")
	let icon = document.querySelector(".hamburger-icon")

	hamburger.classList.toggle("open")
	icon.classList.toggle("open")
}
