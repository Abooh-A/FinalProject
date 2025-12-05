 document.getElementById('contactForm').addEventListener('submit', function(event) {
            event.preventDefault();

            const feedbackMessage = document.getElementById('feedback-message');
            const feedbackTitle = document.getElementById('feedback-title');
            const feedbackText = document.getElementById('feedback-text');
            const formElement = document.getElementById('contactForm');
            
            // 1. Reset feedback box and visibility
            feedbackMessage.classList.add('hidden');
            feedbackMessage.classList.remove('opacity-100', 'bg-red-100', 'border-red-400', 'text-red-700', 'bg-green-100', 'border-green-400', 'text-green-700');

            const fullName = document.getElementById('full-name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            const isRobotChecked = document.getElementById('not-a-robot').checked;

            // Simple client-side check for required fields (in addition to the 'required' attribute)
            if (!fullName || !email || !message) {
                 // Handle Validation Error
                feedbackMessage.classList.remove('hidden');
                feedbackMessage.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'opacity-100');
                feedbackTitle.textContent = 'Submission Failed:';
                feedbackText.textContent = "Please fill in all required fields.";
                return;
            }

            if (!isRobotChecked) {
                // Handle Validation Error
                feedbackMessage.classList.remove('hidden');
                feedbackMessage.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'opacity-100');
                feedbackTitle.textContent = 'Submission Failed:';
                feedbackText.textContent = "Please confirm you are not a robot to proceed.";
                return;
            }

            // Log the data (simulating "processing")
            console.log('--- Form Data Submitted ---');
            console.log(`Full Name: ${fullName}`);
            console.log(`Email: ${email}`);
            console.log(`Message: ${message}`);
 

            // Clear the form fields first
            formElement.reset();


            // Display Success Message with a small delay to ensure visibility after reset
            setTimeout(() => {
                feedbackMessage.classList.remove('hidden');
                feedbackMessage.classList.add('bg-green-100', 'border-green-400', 'text-green-700', 'opacity-100');
                feedbackTitle.textContent = 'Message Sent Successfully!';
                feedbackText.textContent = `Thank you, ${fullName}. We have received your message.`;
            }, 50);

        });
		const slides = [
    'eeshapenkey_htmlproject/about_protest', 
    'eeshapenkey_htmlproject/about_plant', 
    'eeshapenkey_htmlproject/about_wind', 
];

let currentSlideIndex = 0;
const imageElement = document.getElementById('carousel-image');


function showSlide() {
    // Ensure the index wraps around (looping)
    if (currentSlideIndex >= slides.length) {
        currentSlideIndex = 0; // Go back to the first slide
    }
    if (currentSlideIndex < 0) {
        currentSlideIndex = slides.length - 1; // Go to the last slide
    }

    // Set the image source
    imageElement.src = slides[currentSlideIndex];
}

/**
 * Changes the current slide index by a given step (1 for next, -1 for prev).
 * @param {number} step - The amount to change the index by.
 */
function changeSlide(step) {
    currentSlideIndex += step;
    showSlide();
}

// Initialize the carousel on page load
document.addEventListener('DOMContentLoaded', showSlide);