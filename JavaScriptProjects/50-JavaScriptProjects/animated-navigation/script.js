const toggle = document.getElementById('toggle')
const nav = document.getElementById('nav')

// Toggle navigation
toggle.addEventListener('click', () => nav.classList.toggle('active'))

// Scroll effect - shrink navbar on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        nav.classList.add('scrolled')
    } else {
        nav.classList.remove('scrolled')
    }
})

// Smooth scroll to sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()
        const target = document.querySelector(this.getAttribute('href'))
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        }
    })
})
