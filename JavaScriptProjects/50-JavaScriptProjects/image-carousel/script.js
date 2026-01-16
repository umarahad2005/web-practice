const imgs = document.getElementById('imgs')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')
const pauseBtn = document.getElementById('pause')
const dots = document.querySelectorAll('.dot')

const img = document.querySelectorAll('#imgs img')

let idx = 0
let isPaused = false
let interval = setInterval(run, 3000)

function run() {
    idx++
    changeImage()
}

function changeImage() {
    if (idx > img.length - 1) {
        idx = 0
    } else if (idx < 0) {
        idx = img.length - 1
    }

    imgs.style.transform = `translateX(${-idx * 500}px)`
    updateDots()
}

function updateDots() {
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === idx)
    })
}

function resetInterval() {
    if (!isPaused) {
        clearInterval(interval)
        interval = setInterval(run, 3000)
    }
}

// Button controls
rightBtn.addEventListener('click', () => {
    idx++
    changeImage()
    resetInterval()
})

leftBtn.addEventListener('click', () => {
    idx--
    changeImage()
    resetInterval()
})

// Pause/Play button
pauseBtn.addEventListener('click', () => {
    isPaused = !isPaused
    if (isPaused) {
        clearInterval(interval)
        pauseBtn.textContent = '▶ Play'
        pauseBtn.classList.add('playing')
    } else {
        interval = setInterval(run, 3000)
        pauseBtn.textContent = '⏸ Pause'
        pauseBtn.classList.remove('playing')
    }
})

// Dot navigation
dots.forEach(dot => {
    dot.addEventListener('click', () => {
        idx = parseInt(dot.dataset.index)
        changeImage()
        resetInterval()
    })
})

// Pause on hover
imgs.addEventListener('mouseenter', () => {
    if (!isPaused) {
        clearInterval(interval)
    }
})

imgs.addEventListener('mouseleave', () => {
    if (!isPaused) {
        interval = setInterval(run, 3000)
    }
})

// Initialize dots
updateDots()
