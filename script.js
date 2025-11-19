const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) { 
        if (entry.isIntersecting) { 
            if (entry.target.classList.contains('picture-style')) { 
                entry.target.classList.add('show'); 
                observer.unobserve(entry.target); 
            }
            if(entry.target.classList.contains('about-me-text')){
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
            if(entry.target.classList.contains('project_card')){
                entry.target.classList.add('show');

            }
            if(entry.target.classList.contains('timeline-info')){
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        }
    });
});

const projects = document.querySelectorAll('.project_card');
projects.forEach(project => observer.observe(project));
/*because it is used by 2 HTML files where one
only has project_card it is put before everything else
because after one null code won't continue - a 
very ugly way for code to work.. change it before final version*/

const picture = document.querySelector('.picture-style');
const about_me_text = document.querySelector('.about-me-text');
const time_info = document.querySelectorAll('.timeline-info');
observer.observe(picture);
observer.observe(about_me_text);
time_info.forEach(info => observer.observe(info));
