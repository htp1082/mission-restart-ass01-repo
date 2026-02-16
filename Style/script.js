

const links = document.querySelectorAll('.nav-links');
links.forEach(link =>{
    link.addEventListener( 'click', function(e){
        e.preventDefault()
        links.forEach(li => li.classList.remove('active'))
        this.classList.add("active")
    })
})