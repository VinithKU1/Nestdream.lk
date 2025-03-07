

document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector("nav ul");

    menuToggle.addEventListener("click", function() {
        navMenu.classList.toggle("active"); // Show/hide menu on click
    });
});


function openPopup(title, price) {
    document.getElementById('popup-title').innerText = title;
    document.getElementById('popup-price').innerText = price;
    document.getElementById('popup').classList.add('active');
}

function closePopup() {
    document.getElementById('popup').classList.remove('active');
}


// Function to handle clicking a property card
function openProperty(propertyName) {
    alert("Opening details for: " + propertyName);
    // Here, you can redirect to another page with more details
    // window.location.href = 'property-details.html?name=' + encodeURIComponent(propertyName);
}


document.addEventListener("DOMContentLoaded", function () {
    // Get modal elements
    var termsModal = document.getElementById("terms-modal");
    var privacyModal = document.getElementById("privacy-modal");

    // Get button elements
    var termsBtn = document.getElementById("open-terms");
    var privacyBtn = document.getElementById("open-privacy");

    // Get close buttons
    var closeBtns = document.querySelectorAll(".close-btn");

    // Function to open a modal
    function openModal(modal) {
        if (modal) {
            modal.style.display = "flex";
        }
    }

    // Function to close a modal
    function closeModal(modal) {
        if (modal) {
            modal.style.display = "none";
        }
    }

    // Open Terms Modal
    if (termsBtn) {
        termsBtn.addEventListener("click", function () {
            openModal(termsModal);
        });
    }

    // Open Privacy Modal
    if (privacyBtn) {
        privacyBtn.addEventListener("click", function () {
            openModal(privacyModal);
        });
    }

    // Close modals when clicking close button
    closeBtns.forEach(function (btn) {
        btn.addEventListener("click", function () {
            closeModal(termsModal);
            closeModal(privacyModal);
        });
    });

    // Close modals when clicking outside the content box
    window.addEventListener("click", function (event) {
        if (event.target === termsModal) {
            closeModal(termsModal);
        }
        if (event.target === privacyModal) {
            closeModal(privacyModal);
        }
    });
});


document.getElementById("status-btn").addEventListener("click", function() {
    alert("All systems are operational!");
});


// Store the current page URL in localStorage when the page loads
    document.addEventListener("DOMContentLoaded", function () {
        localStorage.setItem("lastVisitedPage", window.location.href);
    });

    function goToLastVisited() {
        let lastPage = localStorage.getItem("lastVisitedPage");
        if (lastPage) {
            window.location.href = lastPage;
        } else {
            alert("No recent visit found.");
        }
    }




