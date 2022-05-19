const header = document.querySelector('header')

const observer = new IntersectionObserver((entries, observer) => {
    for(let entry of entries){
        if(!entry.isIntersecting){
            header.classList.add('active')
            observer.unobserve(entry.target)
        }
    }
})

observer.observe(header)