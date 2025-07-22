// what we do section js 
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".what-we-number");
  counters.forEach(counter => {
    const updateCount = () => {
      const target = parseFloat(counter.getAttribute("data-count"));
      const isDecimal = !Number.isInteger(target);
      const current = parseFloat(counter.innerText.replace(/[^0-9.]/g, '')) || 0;
      const speed = 40; // lower = faster

      const increment = (target / speed);

      if (current < target) {
        const newValue = current + increment;
        counter.innerText = isDecimal
          ? newValue.toFixed(3)
          : Math.ceil(newValue) + (counter.innerText.includes("%") ? "%" : "+");
        setTimeout(updateCount, 30);
      } else {
        counter.innerText = isDecimal
          ? target.toFixed(3)
          : target + (counter.innerText.includes("%") ? "%" : "+");
      }
    };
    updateCount();
  });
});



// home page our services js 
let scrollIndex = 0;
const carousel = document.getElementById('serviceCarousel');
const card = document.querySelector('.home-service-card');
const cardWidth = card.offsetWidth + 20; // include gap
const maxScroll = carousel.children.length - 4; // adjust if showing fewer/more

document.getElementById('nextService').addEventListener('click', () => {
  if (scrollIndex < maxScroll) {
    scrollIndex++;
    carousel.style.transform = `translateX(-${scrollIndex * cardWidth}px)`;
  }
});

document.getElementById('prevService').addEventListener('click', () => {
  if (scrollIndex > 0) {
    scrollIndex--;
    carousel.style.transform = `translateX(-${scrollIndex * cardWidth}px)`;
  }
});
