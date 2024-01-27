import './../../../css/skills.scss'

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
