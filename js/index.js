//Permettre au menu d'arrêter la barre de défilement lorsque le menu burger est activée.

// 1) Saisir la case à cocher qui contrôle le menu adaptatif ...
let caseCocher = document.querySelector("#cc-pour-bouton-burger");
let leBody = document.querySelector("body");

// 2) ... et lui associer un écouteur d'événement.
caseCocher.addEventListener("click", gererLeDefilement);

// 3) Fonction pour gérer l'événement.
function gererLeDefilement(_event) {
	if(caseCocher.checked == true) {
		leBody.style.overflowY = "hidden";
	}
	else{
		leBody.style.overflowY = "scroll";
	}
}

//Fermer le menu adaptatif lorsque un de ses items est cliqué

// 1) Saisir *TOUS* les items (liens) contenus dans le menu adaptatif ...
let lesBoutons = document.querySelectorAll(".menu .annee > a");
            
// 2) ... puis leur associer chacun le même écouteur d'événement (boucle)
for (let unBouton of lesBoutons) {
                unBouton.addEventListener("click", controlerBoutonBurger);
            }

// 3) Fonction pour gérer l'événement.
function controlerBoutonBurger() {
                //Gérer l'état de la case à cocher
                //Remettre la barre de défilement sur le body
                caseCocher.checked = false;
                leBody.style.overflowY = "scroll";
            }




//Permettre d'agrandir une photo en cliquant dessus.


let lesPhotos = document.querySelectorAll('.contenu section .photo');
console.log("Sélecteur de tous les éléments PICTURE : ", lesPhotos);

for (let unePhoto of lesPhotos) {
    unePhoto.addEventListener('click', agrandirePhoto);
 }

function agrandirePhoto(evt){
    let unePhoto = evt.currentTarget;
    unePhoto.classList.toggle('elargir-photo');
}

//Permettre d'afficher les photos lorsque l'on défile la page.

window.addEventListener("scroll", gererAffichageContenuSections);

		function gererAffichageContenuSections() {
			let hauteurViewport = window.innerHeight;

			let lesContenusDesections = document.querySelectorAll(".conteneurDesPhotos");

			for (let unContenu of lesContenusDesections) {
				let positionHautDuContenu = unContenu.getBoundingClientRect().top;

				if(positionHautDuContenu < hauteurViewport * 0.5){
					unContenu.classList.add("active")
				}
				else {
					unContenu.classList.remove("active")
				}
				
			}
		}