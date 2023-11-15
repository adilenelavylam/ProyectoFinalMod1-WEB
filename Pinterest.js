document.addEventListener('DOMContentLoaded', function() {
    var explorarDiv = document.getElementById('miexplorar');

    explorarDiv.addEventListener('click', function() {
        this.classList.toggle('clicked');
    });
});