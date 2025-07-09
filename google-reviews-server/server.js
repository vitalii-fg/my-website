// Пример структуры для отображения отзывов (временно вручную)
const reviews = [
  {
    name: "Katarzyna W.",
    text: "Bardzo profesjonalna usługa, kanapa wygląda jak nowa!",
    rating: 5
  },
  {
    name: "Tomasz P.",
    text: "Szybko i skutecznie, polecam!",
    rating: 4
  }
];

function renderReviews() {
  const container = document.getElementById('google-reviews');
  reviews.forEach(review => {
    const div = document.createElement('div');
    div.classList.add('review');
    div.innerHTML = `
      <strong>${review.name}</strong><br/>
      <span>${'⭐'.repeat(review.rating)}</span><br/>
      <p>${review.text}</p>
      <hr/>
    `;
    container.appendChild(div);
  });
}

document.addEventListener('DOMContentLoaded', renderReviews);
