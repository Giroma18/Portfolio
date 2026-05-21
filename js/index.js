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


//Permettre d'afficher les publication lorsque la page est loader

window.addEventListener("scroll", gererAffichageContenuSections);


// Appel initial pour afficher les sections visibles dès le chargement
window.addEventListener("DOMContentLoaded", gererAffichageContenuSections);

		function gererAffichageContenuSections() {
			let hauteurViewport = window.innerHeight;

			let lesContenusDesections = document.querySelectorAll(".conteneurDesPhotos");
			let lesvideos = document.querySelectorAll(".video-responsive");
			let lesTitres = document.querySelectorAll(".vertical-gradient-text");

			for (let unContenu of lesContenusDesections) {
				let positionHautDuContenu = unContenu.getBoundingClientRect().top;

				if(positionHautDuContenu < hauteurViewport * 0.9){
					unContenu.classList.add("active")
				}
				else {
					unContenu.classList.remove("active")
				}
				
			}
			for (let unevideo of lesvideos) {
				let positionHautDeLaVideo = unevideo.getBoundingClientRect().top;

				if(positionHautDeLaVideo < hauteurViewport * 0.9){
					unevideo.classList.add("active")
				}
				else {
					unevideo.classList.remove("active")
				}
				
			}
			for (let unTitre of lesTitres) {
				let positionHautDuTitre = unTitre.getBoundingClientRect().top;

				if(positionHautDuTitre < hauteurViewport * 0.9){
					unTitre.classList.add("active")
				}
				else {
					unTitre.classList.remove("active")
				}
				
			}
		}

     // permettre au menu de glisser vers le haut lors du défilement vers le bas et de revenir 
        
        let lastScrollTop = 0; // position du scroll précédente
        // Saisir l'entete
        let header = document.querySelector(".menu");
        let headerMobile = document.querySelector(".barre-menu");

        // Lui associer un écouteur d'évènement
        window.addEventListener("scroll", gererLeDefilement);

        // Fonction de l'évènement
        function gererLeDefilement(_event) {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
	    if(currentScroll > lastScrollTop) {
		    // On scroll vers le bas et cache le header
            // En rajouter au header un style qui est le translate 
            header.style.transform = 'translateY(-150%)';
            headerMobile.style.transform = 'translateY(-150%)';
            console.log("scroll")
	    }
	    else{
		    // On scroll vers le haut et montrer le header
            // On change le style translate a 0
            header.style.transform = 'translateY(0)';
            headerMobile.style.transform = 'translateY(0)';
	    }
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // éviter les valeurs négatives
        }

function enableDragScroll(slider) {
    let isDragging = false;
    let startX = 0;
    let startScroll = 0;

    slider.addEventListener("pointerdown", (e) => {
        // Empêcher le drag quand on clique sur un bouton dans le slider
        if (e.target.closest("button")) return;

        isDragging = true;
        slider.setPointerCapture(e.pointerId);
        slider.classList.add("dragging");

        startX = e.clientX;
        startScroll = slider.scrollLeft;
    });

    slider.addEventListener("pointermove", (e) => {
        if (!isDragging) return;

        const dx = e.clientX - startX;
        slider.scrollLeft = startScroll - dx;
    });

    slider.addEventListener("pointerup", () => {
        isDragging = false;
        slider.classList.remove("dragging");
    });
}

document.querySelectorAll(".galerie").forEach(enableDragScroll);

function createSlider(prevBtn, nextBtn, sliderId) {
  const slider = document.getElementById(sliderId);
  document.querySelector(prevBtn).onclick = () => slider.scrollLeft -= 320;
  document.querySelector(nextBtn).onclick = () => slider.scrollLeft += 320;
}

createSlider(".prev1", ".next1", "slider1");
createSlider(".prev2", ".next2", "slider2");

// Parallax

window.addEventListener("scroll", function () {
  document.querySelectorAll(".parallax").forEach(el => {
    const speed = el.getAttribute("data-speed");
    const y = window.scrollY * speed;
    el.style.backgroundPosition = `center ${y}px`;
  });
});






