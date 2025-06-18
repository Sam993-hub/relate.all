const bubbles = [
  { icon: "💍", title: "Arranged Marriage", desc: "Traditional family-arranged partner match." },
  { icon: "🏠", title: "Live-in Relationship", desc: "Partners living together without marriage." },
  { icon: "🔥", title: "Casual Relationship", desc: "Low-commitment fun and chemistry." },
  { icon: "🎭", title: "Situationship", desc: "Not quite a relationship, but more than a fling." },
  { icon: "💼", title: "Work Romance", desc: "Sparks that fly in the workplace." },
  { icon: "🌍", title: "Living Apart Together", desc: "Romance without sharing a home." },
  { icon: "🪑", title: "Benching", desc: "Keeping someone interested without commitment." },
  { icon: "😚", title: "Cushioning", desc: "Flirting with backups just in case." },
  { icon: "❤️", title: "Crush Zone", desc: "You adore them... secretly or not." },
  { icon: "⏳", title: "Long-Term Dating", desc: "Stable, deep, and lasting love." },
  { icon: "👥", title: "Blind Dating", desc: "Matched by friends or admins. Mystery meets spark!" },
  { icon: "🧑‍🤝‍🧑", title: "Friend Setup", desc: "Let your besties find your match." },
  { icon: "🎉", title: "Group Dating", desc: "Social mixers and fun group hangouts." },
  { icon: "💃", title: "Part-time Girlfriend", desc: "Paid romantic companionship by the hour." },
  { icon: "🕺", title: "Part-time Boyfriend", desc: "Want to be or hire one? Your choice!" },
  { icon: "✈️", title: "Travel Partner", desc: "Someone to explore the world with." },
];

const container = document.getElementById("relationship-bubbles");
const tooltip = document.getElementById("tooltip");

bubbles.forEach(bubble => {
  const div = document.createElement("div");
  div.classList.add("bubble");
  div.textContent = bubble.icon;
  div.title = bubble.title;

  div.addEventListener("mouseenter", (e) => {
    tooltip.innerHTML = `<strong>${bubble.title}</strong><br/>${bubble.desc}`;
    tooltip.style.left = `${e.pageX + 10}px`;
    tooltip.style.top = `${e.pageY - 40}px`;
    tooltip.style.display = "block";
  });

  div.addEventListener("mouseleave", () => {
    tooltip.style.display = "none";
  });

  container.appendChild(div);
});
