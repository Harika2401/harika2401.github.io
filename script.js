// Smooth scrolling for navigation links
const form = document.querySelector(".contact-form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = {
    name: form.elements["name"].value,
    email: form.elements["email"].value,
    message: form.elements["message"].value
  };

  const response = await fetch("https://formspree.io/f/manoozep", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formData)
  });

  if (response.ok) {
    alert("Message sent successfully!");
    form.reset();
  } else {
    alert("Error sending message. Please try again.");
  }
});

document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll animations for sections
const animatedSections = document.querySelectorAll('.animated-section');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
});

animatedSections.forEach(section => {
    observer.observe(section);
});
