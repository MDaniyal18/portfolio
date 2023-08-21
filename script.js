/* ================== toggle icon navbar ================== */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};



/* ================== scroll sections active link ================== */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });

        };
    });


/* ================== Sticky navbar ================== */
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /* ================== hide toggle icon and navbar when clicked navbar link (scroll) ================== */
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};

/* ================== Scroll Reveal ================== */
ScrollReveal ({
    reset: true,
    distance:'80px',
    duration: 2000,
    delay: 200
})

ScrollReveal().reveal('.home-content, .heading', { origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right'});


/* ================== typed js ================== */
const typed = new Typed('.multiple-text', {
    strings: ['Full-Stack Developer', 'Cyber Expert', 'Videographer', 'Stock Photographer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});



// function myFunction() {
//   var dots = document.getElementById("dots");
//   var moreText = document.getElementById("more");
//   var btnText = document.getElementById("myBtn");

//   if (dots.style.display === "none") {
//     dots.style.display = "inline";
//     btnText.innerHTML = "Read more";
//     moreText.style.display = "none";
//   } else {
//     dots.style.display = "none";
//     btnText.innerHTML = "Read less";
//     moreText.style.display = "inline";
//   }
// }

// Function to show the "Read More" content
function showMoreContent(dotsId, moreId) {
    const dots = document.getElementById(dotsId);
    const moreText = document.getElementById(moreId);
    const btn = document.querySelector(`button[onclick="toggleReadMore('${dotsId}', '${moreId}')"]`);
  
    dots.style.display = "none";
    moreText.style.display = "inline";
    btn.textContent = "Read Less";
  }
  
  // Function to hide the "Read More" content
  function hideMoreContent(dotsId, moreId) {
    const dots = document.getElementById(dotsId);
    const moreText = document.getElementById(moreId);
    const btn = document.querySelector(`button[onclick="toggleReadMore('${dotsId}', '${moreId}')"]`);
  
    dots.style.display = "inline";
    moreText.style.display = "none";
    btn.textContent = "Read More";
  }
  
  // Initial setup to show only the truncated content by default
  hideMoreContent("dots", "more");
  hideMoreContent("dots1", "more1");
  hideMoreContent("dots2", "more2");
  hideMoreContent("dots3", "more3");
  hideMoreContent("dots4", "more4");
  hideMoreContent("dots5", "more5");
  hideMoreContent("dots6", "more6");  
  
  // Function to toggle the "Read More" content when the button is clicked
  function toggleReadMore(dotsId, moreId) {
    const moreText = document.getElementById(moreId);
    if (moreText.style.display === "none") {
      showMoreContent(dotsId, moreId);
    } else {
      hideMoreContent(dotsId, moreId);
    }
  }
  
