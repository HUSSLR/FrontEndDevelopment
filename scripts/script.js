console.log("test");

/* Hamburgermenu */
var HamburgerMenuOpenenButton = document.querySelector(".hamburger_menu");
var HamburgerMenuSluitenButton = document.querySelector(".close");


function toggleMenu(){
	let klapMenuUit = document.querySelector(".menu");
	klapMenuUit.classList.toggle("Uitgeklapt");
}

HamburgerMenuSluitenButton.addEventListener("click", toggleMenu); 

HamburgerMenuOpenenButton.addEventListener("click", toggleMenu);


/* Winkelmandje */
var winkelMandjeOpenen = document.querySelector(".winkelmandje");
var winkelMandjeSluiten = document.querySelector(".close_winkelmandje");


function toggleWinkelmand(){
	let openWinkelmand = document.querySelector(".winkelmand");
	console.log("test");
	openWinkelmand.classList.toggle("mandjeOpenen");
}

winkelMandjeOpenen.addEventListener("click", toggleWinkelmand); 

winkelMandjeSluiten.addEventListener("click", toggleWinkelmand);





