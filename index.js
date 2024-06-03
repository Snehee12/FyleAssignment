// Get the button and popup elements
const contactButton = document.getElementById('open-popup');
const popup = document.getElementById('popup');
const closeButton = document.querySelector('.popup-close');
const contactForm = document.getElementById('contact-form');

// Function to open the popup
function openPopup() {
    popup.style.display = 'block';
}

// Function to close the popup (using either the button or clicking outside)
function closePopup() {
    popup.style.display = 'none';
}

function submitForm(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form data (example)
    const workEmail = document.getElementById('workEmail').value;
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;

    // Simulate successful submission (display message)
    alert('Details submitted successfully');
    
    const formData = new FormData(contactForm);
    fetch(contactForm.action, {
        method: 'POST',
        body: formData
      })
      .then(response => {
        if (response.ok) {
          alert('Form submitted successfully!');
        } else {
          alert('Error submitting form!');
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });

    // Optionally clear the form after submission
    contactForm.reset();

    // Optionally close the popup after submission
    closePopup();
}
contactButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
contactForm.addEventListener('submit', submitForm);
popup.addEventListener('click', function(event) {
    if (event.target === popup) {
        closePopup();
    }
});

// $("#ajaxForm").submit(function(e){
//     e.preventDefault();
//     var action = $(this).attr("action");
//     $.ajax({
//     type: "POST",
//     url: action,
//     crossDomain: true,
//     data: new FormData(this),
//     dataType: "json",
//     processData: false,
//     contentType: false,
//     headers: {
//     "Accept": "application/json"
//     }
// }).done(function() {
//     alert('The form was submitted successfully.')
// }).fail(function() {
//     alert('An error occurred! Please try again later.')
// });
// });




//---------- FOR MOVING IMAGES (SLIDING)------------------

let slideIndex = 1;
const slides = document.getElementsByClassName('slide');
const dots = document.getElementsByClassName('dot');

function showSlides(n) {
  let i;
  const totalSets = Math.ceil(slides.length / 3); // Show 3 images at a time
  if (n > totalSets) { slideIndex = 1 }
  if (n < 1) { slideIndex = totalSets }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  dots[slideIndex - 1].className += " active";
  document.querySelector('.slider').style.transform = `translateX(${-1240 * (slideIndex - 1)}px)`;
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function nextSlide() {
  showSlides(slideIndex += 1);
}

function prevSlide() {
  showSlides(slideIndex -= 1);
}

// Initialize the slider
showSlides(slideIndex);



// ------------IMAGES SLIDE WALA HOVER KARNE PR -------------- 
const slideContainers = document.querySelectorAll('.slide-container');

slideContainers.forEach(container => {
  const image = container.querySelector('.slide');
  const hoverContent = container.querySelector('.hover-content');

  image.addEventListener('click', () => {
    // Handle click event here (e.g., navigate to a link)
    console.log('Image clicked!'); // Example placeholder
  });
});



// -----------------IMAGE CHANGING IN OUR PROJECT ----------
const contentBoxes = document.querySelectorAll('.content-box');
const changingImage = document.querySelector('.changing-img');

contentBoxes.forEach(box => {
  box.addEventListener('click', (event) => {
    const clickedId = event.target.id;
    console.log(clickedId);    // Update the image source based on the clicked ID
    switch (clickedId) {
      case 'first':
        console.log('first');
        changingImage.src = "public\\ci1.png";
        break;
      case 'second':
        console.log('second');
        changingImage.src = "public\\ci2.jpg";
        break;
      case 'third':
        console.log('third');
        changingImage.src = "public\\ci3.jpg";
        break;
    }
  });
});




