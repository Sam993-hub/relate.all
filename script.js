
document.addEventListener("DOMContentLoaded", function() {
  const bubbles = document.querySelectorAll(".bubble");
  const desc = document.getElementById("bubble-desc");

  bubbles.forEach(bubble => {
    bubble.addEventListener("click", () => {
      desc.textContent = bubble.dataset.desc;
    });
  });
});
