var deButton = document.querySelector("hamburger_menu");

function doeListLinksNaarRechts(){
	let hetFormulier = document.querySelector("form");
	hetFormulier.classList.toggle("toonForm");
}

deButton.addEventListener("click", doeFormNeerEnOp);

