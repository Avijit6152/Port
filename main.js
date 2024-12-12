// Simple JavaScript for form validation
document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Message sent successfully!");
});



    // Get the button
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");

    // Show the button when the user scrolls down 100px
    window.onscroll = function () {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    };

    // Scroll to the top when the button is clicked
    scrollToTopBtn.onclick = function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };



    document.addEventListener("DOMContentLoaded", function () {
        const h1 = document.querySelector('.logo h1');
        h1.innerHTML = h1.textContent.split('').map(function (char) {
            return char === ' ' ? '&nbsp;' : `<span>${char}</span>`;
        }).join('');
    });
    

