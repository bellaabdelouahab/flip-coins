
document.querySelector('lottie-player ').addEventListener('click', function(e) {
    if(e.target.__currentState == 'playing') {
        return;
    }
    e.target.play();  
    e.target.classList.add('active');
    e.target.classList.remove('inactive');
    
    setTimeout(function() {
        e.target.classList.remove('active');
        e.target.classList.add('inactive');
        e.target.stop();
        // lunch click event
        setTimeout(function() {
        document.querySelector('lottie-player ').click()
        }, 100);
    }, 1300);
})
