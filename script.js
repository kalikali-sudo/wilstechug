const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.onclick = () =>{
navMenu.classList.toggle("show");
}

document.getElementById("contactForm").addEventListener("submit",function(e){

e.preventDefault();

alert("Your request has been sent!");

});
const hero = document.querySelector(".hero-bg");

window.addEventListener("scroll", () => {

let scroll = window.scrollY;

hero.style.transform = "scale(1.2) translateY(" + scroll * 0.2 + "px)";

});

function openForm() {
    document.getElementById("formPopup").classList.add("active");
}

function closeForm() {
    document.getElementById("formPopup").classList.remove("active");
}

/* Optional: close when clicking outside */
window.onclick = function(e) {
    const popup = document.getElementById("formPopup");
    if (e.target === popup) {
        popup.classList.remove("active");
    }
}





document.addEventListener("DOMContentLoaded", function () {

    console.log("✅ JS LOADED");

    const promo = document.getElementById("promoOverlay");
    const wheel = document.getElementById("wheel");
    const spinBtn = document.getElementById("spinBtn");
    const result = document.getElementById("result");
    const claimBtn = document.getElementById("claimBtn");

    let spun = false;

    const OFFER_KEY = "promoClaimed";
    const OFFER_DURATION = 24 * 60 * 60 * 1000; // 24 hours in ms
    const lastClaim = localStorage.getItem(OFFER_KEY);
    const now = Date.now();

    // ✅ SHOW POPUP ONLY IF NOT CLAIMED WITHIN 24H
    if (!lastClaim || now - lastClaim >= OFFER_DURATION) {
        setTimeout(() => {
            promo.style.display = "flex";
            promo.style.opacity = "1";
            promo.style.pointerEvents = "auto"; // allow interaction
            spinBtn.disabled = false;
            claimBtn.disabled = true;
            result.innerHTML = ""; // reset
        }, 300000); // 5 minutes = 300,000 ms
   
    // ✅ ENABLE SPIN BUTTON
    spinBtn.addEventListener("click", function () {
        if (spun) return;

        spun = true;

        const rotations = 360 * 5 + Math.floor(Math.random() * 360);
        wheel.style.transform = "rotate(" + rotations + "deg)";

        setTimeout(() => {
            result.innerHTML = "🎉 You won 50% OFF!";
            claimBtn.disabled = false;
        }, 3000);
    });

    // ✅ CLAIM BUTTON
    claimBtn.addEventListener("click", function () {

        // store claim timestamp
        localStorage.setItem(OFFER_KEY, Date.now());

        // fade out
        promo.style.opacity = "0";
        promo.style.pointerEvents = "none";

        setTimeout(() => {
            promo.style.display = "none";

            const formSection = document.getElementById("book-service");

            if (formSection) {
                const offset = 120; // adjust if needed

                const y = formSection.getBoundingClientRect().top + window.pageYOffset - offset;

                window.scrollTo({
                    top: y,
                    behavior: "smooth"
                });
            }

        }, 300);
    });

});

// ✅ CLOSE PROMO BUTTON
function closePromo() {
    const promo = document.getElementById("promoOverlay");

    promo.style.opacity = "0";
    promo.style.pointerEvents = "none"; // prevents blocking

    setTimeout(() => {
        promo.style.display = "none";
    }, 300);

    // remember user closed it
    localStorage.setItem("promoClosed", "true");
}










const openBtn = document.getElementById("openPassportForm");
const overlay = document.getElementById("passportFormOverlay");
const closeBtn = document.getElementById("closePassportForm");
const form = document.getElementById("passportForm");
const steps = form.querySelectorAll(".form-step");
let currentStep = 0;

// Open / close overlay
openBtn.addEventListener("click", () => overlay.style.display = "flex");
closeBtn.addEventListener("click", () => overlay.style.display = "none");
overlay.addEventListener("click", e => { if(e.target === overlay) overlay.style.display = "none"; });

// Step navigation with validation
form.querySelectorAll(".next-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const inputs = steps[currentStep].querySelectorAll("input, select");
    let valid = true;
    inputs.forEach(input => {
      if(!input.checkValidity()){
        input.reportValidity();
        valid = false;
      }
    });
    if(valid){
      steps[currentStep].style.display = "none";
      currentStep++;
      steps[currentStep].style.display = "block";
    }
  });
});

form.querySelectorAll(".prev-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    steps[currentStep].style.display = "none";
    currentStep--;
    steps[currentStep].style.display = "block";
  });
});



const disclaimerModal = document.getElementById("disclaimerModal");
const agreeBtn = document.getElementById("agreeBtn");

const openFormBtn = document.getElementById("openPassportForm");
const formPopup = document.getElementById("passportFormOverlay");

// SHOW DISCLAIMER FIRST
openFormBtn.addEventListener("click", function () {
    disclaimerModal.style.display = "flex";
});

// AFTER AGREEMENT → OPEN FORM
agreeBtn.addEventListener("click", function () {
    disclaimerModal.style.display = "none";
    formPopup.style.display = "flex";
});




document.addEventListener("DOMContentLoaded", function () {

    const menuBtn = document.getElementById("menuBtn");
    const navMenu = document.getElementById("navMenu");

    menuBtn.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });

    // Close menu after clicking a navigation link
    const navLinks = navMenu.querySelectorAll("a");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            navMenu.classList.remove("active");
        });
    });

});














