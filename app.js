const authForm = document.getElementById("auth-form");
const reviewForm = document.getElementById("review-form");
const reviewList = document.getElementById("review-list");
const stars = document.querySelectorAll("#stars span");
let selectedStars = 0;

// Manejo de Login/Signup
authForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // alert("Usuario autenticado");
    authForm.style.display = "none";
    reviewForm.style.display = "block";
});

// Selección de estrellas
stars.forEach((star) => {
    star.addEventListener("click", () => {
        selectedStars = star.dataset.value;
        stars.forEach((s) => s.classList.remove("selected"));
        for (let i = 0; i < selectedStars; i++) {
            stars[i].classList.add("selected");
        }
    });
});

// Enviar Reseña
document.getElementById("submit-review").addEventListener("click", () => {
    const text = document.getElementById("review-text").value;
    if (text && selectedStars) {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${selectedStars}⭐</strong> - ${text}`;
        reviewList.appendChild(li);
        document.getElementById("review-text").value = "";
        stars.forEach((s) => s.classList.remove("selected"));
        selectedStars = 0;
    } else {
        alert("Completa todos los campos");
    }
});



/////////////////////////////////////////

//Mensaje de mostrar la notificacion
function showNotification(message, duration = 3000) {
    const notification = document.getElementById("notification");
    notification.textContent = message;
    notification.classList.remove("hidden");
    notification.classList.add("visible");

    // Ocultar la notificación después del tiempo especificado
    setTimeout(() => {
        notification.classList.remove("visible");
        notification.classList.add("hidden");
    }, duration);
}

// Uso al autenticar
authForm.addEventListener("submit", (e) => {
    e.preventDefault();
    showNotification("Usuario autenticado con éxito");
    authForm.style.display = "none";
    reviewForm.style.display = "block";
});
