document.addEventListener('DOMContentLoaded', function () {
    let toTopBtn = document.getElementById('to-top');

    document.addEventListener('scroll', function () {
        if (pageYOffset > 1000) {
            toTopBtn.classList.add('to-top__show');
        } else {
            toTopBtn.classList.remove('to-top__show');
        }
    });

    toTopBtn.addEventListener('click', function() {
        toTop();
    });

    function toTop() {
        if (pageYOffset > 0) {
            setTimeout(function () {
                scrollTo(0, pageYOffset - 50);
                toTop();
            }, 10);
        }
    }
});
