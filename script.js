const projects = [
  { title: "Heart Disease Detection Using SVM", description: "Clinical decision support system for early heart disease risk detection using SVM-RBF.", tags: ["Python", "Streamlit", "Scikit-learn", "Pandas", "NumPy", "Joblib"], images: ["images/Heart Disease Project1.png", "images/Heart Disease Project2.png"], github: "https://github.com/Alb138/heart-disease-detection-ml", demo: "https://drive.google.com/file/d/1uHlkDhq2jFR8gBvE561K1Xx5UbsMxRoo/view?usp=sharing" },
  { title: "Face Attendance System using Computer Vision and Flask", description: "Face Attendance System using Computer Vision and Flask. The system performs face registration, face recognition, and attendance tracking using OpenCV (LBPH Face Recognizer), Flask backend, SQLite database, and webcam integration.", tags: ["Python", "Flask", "OpenCV", "NumPy", "SQLite", "React", "SQLAlchemy"], images: ["images/Computer Vision Project1.png", "images/Computer Vision Project2.png", "images/Computer Vision Project3.png", "images/Computer Vision Project4.png"], github: "https://github.com/stephaniee06/attendance-face-recognition.git", demo: "https://drive.google.com/file/d/1yIAH4NULWNdoLlD8ft3EfRnmaJjDx99n/view?usp=sharing" },
  { title: "RiverGuard: Object Detection AI For Plastic Waste Detection", description: "An object detection AI project focused on identifying plastic waste.", tags: ["Python", "YOLO11", "OpenCV", "NumPy", "PyTorch"], images: ["images/AOLAI1.png", "images/AOLAI2.png"], github: "", demo: "https://drive.google.com/file/d/1r0bpVrC-Xd80xNsgBMa694MyauwvBOxU/view?usp=sharing" },
];

const journey = [
  {
    organization: "BINUS Student Learning Community",
    roles: [
      {
        date: "December 2025 — Present",
        title: "IT Support",
        description: "Designed the student organization's website in Figma, shaping its layout and visual structure before development. I also managed day-to-day website content and features, helping keep information organized and functioning, and supported the team in publishing and maintaining updates online.",
      },
      {
        date: "May 2026 — July 2026",
        title: "Design Division Committee",
        event: "Pengabdian Kepada Masyarakat BSLC 2026",
        description: "Designed the event poster as a central visual for promoting Pengabdian Kepada Masyarakat BSLC 2026. I also created Instagram feed graphics in Canva to share event information on social media and documented the activities for the organization's records and future reference.",
      },
      {
        date: "June 2026 — November 2026",
        title: "Event Division Committee",
        event: "Study2Challenge BSLC 2026",
        description: "Prepared a media partner proposal that outlined the event concept, benefits, and partnership opportunity to support outreach. I also arranged the technical meeting rundown so participants could follow the session timing and responsibilities, and assisted with online meetings to support coordination and smooth-running sessions.",
      },
      {
        date: "May 2026 — July 2026",
        title: "Publication Division Committee",
        event: "Career Preparation BSLC 2026",
        description: "Contacted and coordinated with media partners to help extend the event's publication reach. I also wrote the official event article, summarizing its purpose, activities, and key takeaways, and worked with the publication team to keep communications consistent and ready for release.",
      },
      {
        date: "June 2026 — September 2026",
        title: "Design Division Committee",
        event: "Welcoming Party BSLC 2026",
        description: "Designed a reusable Instagram Story template to give the event's social media promotion a consistent format. I also created Canva certificates to recognize organizers and speakers, keeping the designs aligned with the Welcoming Party's event theme.",
      },
    ],
  },
  {
    organization: "Data Science Club BINUS University",
    roles: [
      {
        date: "December 2025 — Present",
        title: "Human Capital",
        description: "Managed the student member database, keeping member information organized and accessible to the Human Capital division. I used the database to organize birthday greetings that support engagement and a sense of community, and collaborated with the division to maintain accurate, up-to-date records.",
      },
    ],
  },
];

const stack = {
  Languages: ["Python", "SQL", "Java", "C"],
  "AI / ML Frameworks": ["TensorFlow", "PyTorch", "Scikit-learn", "HuggingFace"],
  "Data & Visualization": ["Pandas", "NumPy", "Matplotlib"],
  Tools: ["Git", "Jupyter", "Figma"],
};

const projectGrid = document.querySelector("#project-grid");
projects.forEach((project) => {
  const projectImage = project.images && project.images.length > 1
    ? `<div class="project-carousel" role="region" aria-label="${project.title} screenshots"><div class="project-carousel-track" tabindex="0">${project.images.map((image, index) => `<img src="${image}" alt="${project.title} screenshot ${index + 1} of ${project.images.length}" loading="lazy">`).join("")}</div><button class="project-carousel-control previous" type="button" aria-label="Previous image">‹</button><button class="project-carousel-control next" type="button" aria-label="Next image">›</button></div>`
    : project.image
      ? `<img src="${project.image}" alt="${project.title} project screenshot" loading="lazy">`
      : `<div class="project-image-placeholder" role="img" aria-label="Image placeholder for ${project.title}">Project image</div>`;
  const projectLinks = [
    ["GitHub repo", project.github],
    ["Live demo", project.demo],
  ].map((entry) => entry[1]
    ? `<a href="${entry[1]}" target="_blank" rel="noopener noreferrer">${entry[0]} ↗</a>`
    : `<span class="project-link-placeholder">${entry[0]} ↗</span>`)
    .join("");
  projectGrid.insertAdjacentHTML("beforeend", `<article class="project-card glass-card reveal"><span class="card-number">0${projects.indexOf(project) + 1}</span><figure class="project-media">${projectImage}</figure><h3>${project.title}</h3><p>${project.description}</p><div class="tags">${project.tags.map((tag) => `<span>${tag}</span>`).join("")}</div><div class="project-links">${projectLinks}</div></article>`);
});

document.querySelectorAll(".project-carousel").forEach((carousel) => {
  const track = carousel.querySelector(".project-carousel-track");
  const previous = carousel.querySelector(".previous");
  const next = carousel.querySelector(".next");
  let currentImage = 0;
  const updateControls = () => {
    const maxScroll = track.scrollWidth - track.clientWidth;
    previous.hidden = track.scrollLeft <= 1;
    next.hidden = track.scrollLeft >= maxScroll - 1;
  };
  const showImage = (index) => {
    const images = track.querySelectorAll("img");
    currentImage = Math.max(0, Math.min(images.length - 1, index));
    track.scrollTo({
      left: currentImage * track.clientWidth,
      behavior: reduceMotion ? "instant" : "smooth",
    });
  };
  previous.addEventListener("click", () => showImage(currentImage - 1));
  next.addEventListener("click", () => showImage(currentImage + 1));
  track.addEventListener("scroll", () => {
    currentImage = Math.round(track.scrollLeft / track.clientWidth);
    updateControls();
  }, { passive: true });
  window.addEventListener("resize", updateControls);
  updateControls();
});

const timeline = document.querySelector("#timeline");
const experienceSections = journey.map((section) => {
  const roles = section.roles.map((role) => {
    const event = role.event ? `<p class="experience-event">${role.event}</p>` : "";
    return `<article class="experience-role"><time>${role.date}</time><h3>${role.title}</h3>${event}<p>${role.description}</p></article>`;
  }).join("");
  return `<section class="experience-section"><div class="experience-organization"><h3>${section.organization}</h3></div><div class="experience-roles">${roles}</div></section>`;
});
timeline.classList.add("experience-layout", "reveal");
timeline.insertAdjacentHTML("beforeend", experienceSections.join(""));

const stackGrid = document.querySelector("#stack-grid");
Object.entries(stack).forEach((entry) => {
  const category = entry[0];
  const skills = entry[1];
  stackGrid.insertAdjacentHTML("beforeend", `<article class="stack-card glass-card reveal"><h3>${category}</h3><ul class="skill-list">${skills.map((name) => `<li>${name}</li>`).join("")}</ul></article>`);
});

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const revealObserver = new IntersectionObserver((entries) => entries.forEach((entry) => {
  if (!entry.isIntersecting) {
    entry.target.classList.remove("is-visible");
    return;
  }
  entry.target.classList.add("is-visible");
  if (entry.target.dataset.revealed) return;
  entry.target.dataset.revealed = "true";
}), { threshold: .14 });
document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

document.querySelectorAll(".project-card").forEach((card) => card.addEventListener("pointermove", (event) => {
  const rect = card.getBoundingClientRect();
  card.style.setProperty("--mx", `${event.clientX - rect.left}px`);
  card.style.setProperty("--my", `${event.clientY - rect.top}px`);
}));

const progress = document.querySelector(".scroll-progress");
const hero = document.querySelector(".hero");
let ticking = false;
window.addEventListener("scroll", () => {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = `${max ? (window.scrollY / max) * 100 : 0}%`;
    if (!reduceMotion) {
      const fadeDistance = window.innerHeight * 0.8;
      const opacity = Math.max(0, 1 - window.scrollY / fadeDistance);
      hero.style.setProperty("--hero-opacity", String(opacity));
    }
    ticking = false;
  });
}, { passive: true });

const canvas = document.querySelector("#neural-canvas");
const context = canvas.getContext("2d");
const pointer = { mx: -9999, my: -9999 };
const nodes = [];
let width = 0;
let height = 0;
let pixelRatio = 1;
let lastFrame = performance.now();

function resizeCanvas() {
  pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width * pixelRatio;
  canvas.height = height * pixelRatio;
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  context.setTransform(1, 0, 0, 1, 0, 0);
  width = canvas.width;
  height = canvas.height;
}

function seedNodes() {
  nodes.length = 0;
  const viewportArea = (width * height) / (pixelRatio * pixelRatio);
  const count = Math.max(30, Math.min(95, Math.round(viewportArea / 14000)));
  for (let index = 0; index < count; index += 1) {
    nodes.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.18 * pixelRatio,
      vy: (Math.random() - 0.5) * 0.18 * pixelRatio,
      radius: (Math.random() * 1 + 2) * pixelRatio,
      cursorDistance: Infinity,
    });
  }
}

function drawNetwork(now) {
  const delta = Math.min((now - lastFrame) / 16.67, 2);
  lastFrame = now;
  context.clearRect(0, 0, width, height);
  const cursorRadius = 100 * pixelRatio;
  nodes.forEach((node) => {
    const dx = pointer.mx - node.x;
    const dy = pointer.my - node.y;
    const distance = Math.hypot(dx, dy);
    node.cursorDistance = distance;
    if (!reduceMotion) {
      node.x += node.vx * delta;
      node.y += node.vy * delta;
      if (node.x <= node.radius || node.x >= width - node.radius) {
        node.vx *= -1;
        node.x = Math.max(node.radius, Math.min(width - node.radius, node.x));
      }
      if (node.y <= node.radius || node.y >= height - node.radius) {
        node.vy *= -1;
        node.y = Math.max(node.radius, Math.min(height - node.radius, node.y));
      }
    }
  });
  const activeNodes = nodes.filter((node) => node.cursorDistance < cursorRadius);
  if (!reduceMotion) {
    activeNodes.forEach((node, index) => {
      for (let next = index + 1; next < activeNodes.length; next += 1) {
        const other = activeNodes[next];
        const distance = Math.hypot(node.x - other.x, node.y - other.y);
        const linkRadius = 145 * pixelRatio;
        if (distance < linkRadius) {
          context.strokeStyle = `rgba(238,242,247,${(1 - distance / linkRadius) * 0.55})`;
          context.lineWidth = 0.8 * pixelRatio;
          context.beginPath();
          context.moveTo(node.x, node.y);
          context.lineTo(other.x, other.y);
          context.stroke();
        }
      }
    });
  }
  nodes.forEach((node) => {
    const cursorDistance = node.cursorDistance;
    const active = cursorDistance < cursorRadius;
    if (active && !reduceMotion) {
      context.strokeStyle = `rgba(255,255,255,${(1 - cursorDistance / cursorRadius) * 0.6})`;
      context.lineWidth = 0.7 * pixelRatio;
      context.beginPath();
      context.moveTo(node.x, node.y);
      context.lineTo(pointer.mx, pointer.my);
      context.stroke();
    }
    context.fillStyle = active ? "rgba(238,242,247,.7)" : "rgba(238,242,247,.5)";
    context.shadowBlur = active && !reduceMotion ? 4 * pixelRatio : 0;
    context.shadowColor = active && !reduceMotion
      ? (cursorDistance < cursorRadius * 0.55 ? "rgba(255,255,255,.35)" : "rgba(238,242,247,.3)")
      : "transparent";
    context.beginPath();
    context.arc(node.x, node.y, active ? node.radius + 1.2 * pixelRatio : node.radius, 0, Math.PI * 2);
    context.fill();
    context.shadowBlur = 0;
    context.shadowColor = "transparent";
  });
  if (!reduceMotion) requestAnimationFrame(drawNetwork);
}

window.addEventListener("resize", () => {
  resizeCanvas();
  seedNodes();
  if (reduceMotion) drawNetwork(performance.now());
});
function updatePointerPosition(event) {
  const bounds = canvas.getBoundingClientRect();
  pointer.mx = (event.clientX - bounds.left) * pixelRatio;
  pointer.my = (event.clientY - bounds.top) * pixelRatio;
}

function clearPointerPosition() {
  pointer.mx = -9999;
  pointer.my = -9999;
}

window.addEventListener("pointermove", (event) => {
  if (event.pointerType === "mouse") updatePointerPosition(event);
}, { passive: true });
window.addEventListener("pointerdown", (event) => {
  if (event.pointerType === "touch") updatePointerPosition(event);
}, { passive: true });
window.addEventListener("pointermove", (event) => {
  if (event.pointerType === "touch" && event.buttons) updatePointerPosition(event);
}, { passive: true });
window.addEventListener("pointerup", (event) => {
  if (event.pointerType === "touch") clearPointerPosition();
});
window.addEventListener("pointercancel", (event) => {
  if (event.pointerType === "touch") clearPointerPosition();
});
window.addEventListener("mouseleave", clearPointerPosition);
resizeCanvas();
seedNodes();
requestAnimationFrame(drawNetwork);
