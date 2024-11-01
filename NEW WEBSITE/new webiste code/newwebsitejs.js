// Toggle menu functionality
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

if (menu && navbar) {
    menu.onclick = () => {
        menu.classList.toggle('fa-times');
        navbar.classList.toggle('active');
    };
}

window.onscroll = () => {
    if (menu && navbar) {
        menu.classList.remove('fa-times');
        navbar.classList.remove('active');
    }
};

// Image slider functionality
document.querySelectorAll('.image-slider img').forEach(images => {
    images.onclick = () => {
        var src = images.getAttribute('src');
        document.querySelector('.main-home-image').src = src;
    };
});


// Initialize Swiper (Ensure the Swiper library is included in your project)
var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
    grabCursor: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        }
    },
});


function openModal(modalId) {
    const modal = document.getElementById(modalId);
    const modalContent = modal.querySelector('.modal-content');
    
    modal.style.display = 'flex';

    // Remove animation class (if any) and re-add it to trigger the animation each time
    modalContent.classList.remove('popupAnimation');
    void modalContent.offsetWidth;  // Trigger reflow to restart animation
    modalContent.classList.add('popupAnimation');
}




// Popup functionality for "Thank you for ordering" message
const form = document.getElementById('orderForm');
const popup = document.getElementById('popup');
const closeBtn = document.querySelector('.close-btn');

if (form && popup && closeBtn) {
    // Ensure the popup is hidden on page load
    window.addEventListener('load', function() {
        popup.style.display = 'none';
    });

    // Display the popup on form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault();  // Prevent the default form submission behavior
        popup.style.display = 'flex';  // Show the popup
    });

    // Close the popup when the close button is clicked
    closeBtn.addEventListener('click', function() {
        popup.style.display = 'none';  // Hide the popup
    });

    // Close the popup when clicking outside of the popup content
    window.addEventListener('click', function(event) {
        if (event.target == popup) {
            popup.style.display = 'none';  // Hide the popup
        }
    });
}
function openModal(modalId) {
    document.getElementById(modalId).style.display = "flex";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}
function openModal(modalId) {
    document.getElementById(modalId).style.display = "flex";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const matchaModal = document.getElementById('modalMatcha');
    const espressoModal = document.getElementById('modalEspresso');
    if (event.target === matchaModal) {
        closeModal('modalMatcha');
    }
    if (event.target === espressoModal) {
        closeModal('modalEspresso');
    }
}

function openModal(modalId) {
    document.getElementById(modalId).style.display = "flex";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modals = document.getElementsByClassName('modal');
    for (let i = 0; i < modals.length; i++) {
        if (event.target === modals[i]) {
            modals[i].style.display = "none";
        }
    }
}
// Function to open a specific modal
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'flex';
}

// Function to close a specific modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}



  // Get modal elements
  var modalMatcha = document.getElementById("modalMatcha");
  var modalEspresso = document.getElementById("modalEspresso");

  // Get the boxes that will open the modals
  var boxMatcha = document.querySelector(".box-container .box:nth-child(1)");
  var boxEspresso = document.querySelector(".box-container .box:nth-child(2)");

  // Get the close buttons
  var closeMatcha = document.querySelector("#modalMatcha .close");
  var closeEspresso = document.querySelector("#modalEspresso .close");

  // When the user clicks the box, open the corresponding modal
  boxMatcha.onclick = function() {
      modalMatcha.style.display = "block";
  }

  boxEspresso.onclick = function() {
      modalEspresso.style.display = "block";
  }

  // When the user clicks on the close button, close the modal and prevent default behavior
  closeMatcha.addEventListener("click", function(event) {
      event.preventDefault(); // Prevent the default action (like refreshing)
      modalMatcha.style.display = "none";
  });

  closeEspresso.addEventListener("click", function(event) {
      event.preventDefault(); // Prevent the default action (like refreshing)
      modalEspresso.style.display = "none";
  });

  // When the user clicks anywhere outside the modal, close it
  window.onclick = function(event) {
      if (event.target == modalMatcha) {
          modalMatcha.style.display = "none";
      }
      if (event.target == modalEspresso) {
          modalEspresso.style.display = "none";
      }
  }