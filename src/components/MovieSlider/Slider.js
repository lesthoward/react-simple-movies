document.addEventListener('DOMContentLoaded', () => {
    let slider; 
    setTimeout(function() {
        slider = new Slider()
    }, 1000);
    document.addEventListener('click', () => {
        slider.moveNext()
    })
})

class Slider {
    constructor() {
        this.iMovie = 0
        this.movieLength = 19
        this.currentMovie = {}
        this.translated = 0
        this.eachTime = 1000
        this.gettingMoving()
        this.moveNext()
    }
    gettingMoving() {
        const moviesWrapper = document.querySelector('.movies__wrapper');
        const moviesChildren = [...moviesWrapper.children]
        moviesChildren.map(movie => moviesWrapper.appendChild(movie.cloneNode(true)))
        setInterval(() => {
            this.moveNext()
        }, this.eachTime);

    }

    moveNext() {
        const moviesWrapper = document.querySelector('.movies__wrapper');
        const moviesArr = document.querySelectorAll('.movie');
        const movieWidth = document.querySelector('.movie').offsetWidth
        this.iMovie++
        this.translated = this.iMovie * movieWidth
        
        
        if(this.iMovie > this.movieLength + 1){
            moviesWrapper.style.transition = 'none'
            moviesWrapper.style.transform = `translate(0px)`
            this.translated = 0
            this.iMovie = 0
            this.moveNext()
        } else {
            moviesWrapper.style.transition = 'all .3s ease'
        }
        moviesWrapper.style.transform = `translate(-${this.translated}px)`

    }
}
