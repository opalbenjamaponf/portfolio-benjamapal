// แก้ไขรายการผลงานได้ที่นี่
const works = [
  { title: "Project One", desc: "คำอธิบายผลงานสั้น ๆ", tags: ["Design", "Web"], link: "#" },
  { title: "Project Two", desc: "คำอธิบายผลงานสั้น ๆ", tags: ["Branding"], link: "#" },
  { title: "Project Three", desc: "คำอธิบายผลงานสั้น ๆ", tags: ["UI/UX"], link: "#" },
];

const grid = document.getElementById("works-grid");
grid.innerHTML = works.map(w => `
  <a class="card" href="${w.link}" style="text-decoration:none">
    <div class="thumb"></div>
    <div class="body">
      <h3>${w.title}</h3>
      <p>${w.desc}</p>
      <div class="tags">${w.tags.map(t => `<span>${t}</span>`).join("")}</div>
    </div>
  </a>`).join("");

document.getElementById("year").textContent = new Date().getFullYear();
