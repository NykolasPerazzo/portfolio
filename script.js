const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
},{
  threshold: 0.2
});

document.querySelectorAll(
  '.skill-card, .project-card, .about-stat, .stat-item'
).forEach(el => observer.observe(el));