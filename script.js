const sections = document.querySelectorAll(
'.hero, .image-section, .text-section'
);

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity='1';
entry.target.style.transform='translateY(0)';

}

});

},{threshold:0.15});

sections.forEach(section=>{

section.style.opacity='0';
section.style.transform='translateY(50px)';
section.style.transition='all 1.1s ease';

observer.observe(section);

});
