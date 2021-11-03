const carouselButtons = document.getElementsByClassName('carousel-buttons')[0].children;
const testimonialsSpan = document.getElementsByClassName('photo-testimonial')[0].children;

function changeCarouselContent() {
    [...carouselButtons].forEach(el => el.addEventListener('click', changeContent));
}

function changeContent(e) {
    if (e.target.className !== 'active') {
        [...carouselButtons].forEach(el => el.className = '');
        e.target.className = 'active';

        [...testimonialsSpan].forEach((el) => {
            if (el.id === 'first-span' && e.target.id === 'first-page') {
                [...testimonialsSpan].forEach(e => e.className = '');
                el.className = 'active-img';
            } else if (el.id === 'second-span' && e.target.id === 'second-page') {
                [...testimonialsSpan].forEach(e => e.className = '');
                el.className = 'active-img';
            } else if (el.id === 'third-span' && e.target.id === 'third-page') {
                [...testimonialsSpan].forEach(e => e.className = '');
                el.className = 'active-img';
            } else if (el.id === 'fourth-span' && e.target.id === 'fourth-page') {
                [...testimonialsSpan].forEach(e => e.className = '');
                el.className = 'active-img';       
            }
        });

        if (e.target.id === 'first-page') {
            document.getElementsByClassName('testimonial-text')[0].children[0].textContent = `
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus laudantium.`;
            document.getElementsByClassName('testimonial-text')[0].children[1].textContent = `SUSAN SIMS, INTERACTION DESIGNER AT XYZ`;
        } else if (e.target.id === 'second-page') {
            document.getElementsByClassName('testimonial-text')[0].children[0].textContent = `"The computer was born to solve problems that did not exist before." `;
            document.getElementsByClassName('testimonial-text')[0].children[1].textContent = `BILL GATES`;
        } else if (e.target.id === 'third-page') {
            document.getElementsByClassName('testimonial-text')[0].children[0].textContent = `“Your time is limited, so don’t waste it living someone else’s life.”`;
            document.getElementsByClassName('testimonial-text')[0].children[1].textContent = `STEVE JOBS`;
        } else if (e.target.id === 'fourth-page') {
            document.getElementsByClassName('testimonial-text')[0].children[0].textContent = `"Persistence is very important. You should not give up unless you are forced to give up."`;
            document.getElementsByClassName('testimonial-text')[0].children[1].textContent = `ELON MUSK`;
        }
    }
}
