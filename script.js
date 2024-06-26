// Avvio video pagina home
var modal = document.getElementById("videoModal");
var btn = document.getElementById("openModal");
var span = document.getElementsByClassName("close")[0];
var video = document.getElementById("video");
var overlay = document.getElementById("videoOverlay");
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
    video.pause();
    video.currentTime = 0;
    overlay.classList.remove("hidden");
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        video.pause();
        video.currentTime = 0;
        overlay.classList.remove("hidden");
    }
}

// When the user clicks the overlay, start the video
overlay.onclick = function() {
    overlay.classList.add("hidden");
    video.play();
}

// Avvio carosello pagina home
var swiper = new Swiper('.home-slider', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// Toggle navbar display on small screens
document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector("#menu-btn");
    const navbar = document.querySelector(".navbar");

    menuBtn.addEventListener("click", function () {
        navbar.classList.toggle("active");
    });
});


// Immagini da destra e sinistra pagina home

document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.image-column img, .nostrastoria, .mission');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    });

    images.forEach(image => {
        observer.observe(image);
    });
});

// Avvio contatore pagina home

document.addEventListener('DOMContentLoaded', function () {
    const counters = document.querySelectorAll('.numscroller');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const max = +counter.getAttribute('data-max');
                const increment = +counter.getAttribute('data-increment');
                const delay = +counter.getAttribute('data-delay');

                let currentValue = +counter.innerText;

                const updateCounter = () => {
                    if (currentValue < max) {
                        currentValue += increment;
                        counter.innerText = Math.min(currentValue, max);
                        setTimeout(updateCounter, delay);
                    }
                };

                updateCounter();

                observer.unobserve(counter);
            }
        });
    });

    counters.forEach(counter => {
        observer.observe(counter);
    });
});
