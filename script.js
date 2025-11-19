const observer = new IntersectionObserver((entries, observer)=>{
    entries.forEach(entry =>{
        if (entry.isIntersecting){
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
});


document.querySelectorAll('.project_card').forEach(el => observer.observe(el));
document.querySelectorAll('.picture-style').forEach(el => observer.observe(el));
document.querySelectorAll('.about-me-text').forEach(el => observer.observe(el));
document.querySelectorAll('.timeline-info').forEach(el => observer.observe(el));
