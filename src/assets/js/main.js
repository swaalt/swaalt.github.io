import './../../../css/skills.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
const scrollers = document.querySelectorAll('.skills-section');

function addAnimation(){
    scrollers.forEach((scroller) =>{


        scroller.setAttribute("data-animated",true);
        const scrollerInner = scroller.querySelector(".skills-section-inner");
        const scrollerInnerContent = Array.from(scrollerInner.children);

        scrollerInnerContent.forEach(item =>{
            const duplicatedItem = item.cloneNode(true)

            duplicatedItem.setAttribute('aria-hidden', true)

            scrollerInner.appendChild(duplicatedItem)

        })
    })
}
addAnimation()
