let nav = document.getElementById("nav");

let menubtn = document.getElementById("menubtn");

menubtn.addEventListener("click", function() {
    nav.classList.toggle("active");
});


// Hero section Image //
 
 const heroimg = document.getElementById("heroimg");
  const images = [
   "https://images.unsplash.com/photo-1758270705482-cee87ea98738?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
   "https://images.unsplash.com/photo-1758270705518-b61b40527e76?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
   "https://images.unsplash.com/photo-1758270704522-f091f8064a81?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
   "https://images.unsplash.com/photo-1524069290683-0457abfe42c3?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
 ];
 let index = 0;

 setInterval(() => {
    index++;

    if(index >= images.length) {
        index = 0;
    }

    heroimg.src = images[index];
 }, 2000);



// For the Form 
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");

  form.addEventListener("submit", async function(e) {
    e.preventDefault(); // Stop it from going to Formspree page

    const data = new FormData(form);

    const response = await fetch(form.action, {
      method: "POST",
      body: data,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      status.textContent = "✅ Your message has been submitted! Thank you. We will get back to you within 24 hours";
      status.style.color = "#00ff88";
      form.reset(); // <-- This clears all the fields
    } else {
      status.textContent = "❌ Something went wrong. Please try again.";
      status.style.color = "red";
    }
  });


//   theme btn 
let themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    if (document.body.classList.contains("dark-mode")) {

        document.body.classList.remove("dark-mode");

        themeBtn.textContent = "Dark Mode";

    } else {

        document.body.classList.add("dark-mode");

        themeBtn.textContent = "Light Mode";

    }

});




const features = document.querySelectorAll(".features");

function revealOnScroll() {
    features.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            element.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();
