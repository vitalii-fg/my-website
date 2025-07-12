document.addEventListener("DOMContentLoaded", function () {
  fetch("https://script.googleusercontent.com/macros/echo?user_content_key=AehSKLgTXs25DZb0g3noITCp4uCZOBD_8Oi-UfSIKd2Xwv0J7eSjFz21ApusGxZ5S03JGuhz7QZ7ryd7LxY2-I65DixfMLInCi_Vt2501bk57_64S4tMvtooNaVLlIJ8HzaMbyn9mYKjy7HYosc_dXUTZ21kbQPv9bNcBTAJN2HxRNndfsCWCrQuf_9sWcjbZsVpeHqGbPguCTYdz1qzR0YHIaK-LB5zUCT9t9NEoUCj8ezHtL4XF6eprBOPSnwHfb6wFO4r80KqnP6o5x8s5NgGD2fPT4mMeoUhYUG9ohIQ&lib=MAi68jI3_N5W-8rpMGDlkeHxQT15vIdWb")
    .then(res => res.json())
    .then(reviews => {
      const container = document.getElementById("google-reviews");
      if (!Array.isArray(reviews)) {
        container.innerHTML = "<p>Brak opinii do wyświetlenia.</p>";
        return;
      }

      reviews.slice(0, 5).forEach(r => {
        const div = document.createElement("div");
        div.classList.add("review");
        div.innerHTML = `
          <strong>${r.author}</strong> (${r.rating} ★)
          <p>${r.text}</p>
        `;
        container.appendChild(div);
      });
    })
    .catch(err => {
      console.error("Błąd podczas pobierania opinii:", err);
      document.getElementById("google-reviews").innerHTML =
        "<p>Nie udało się załadować opinii.</p>";
    });
});
