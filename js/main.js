$(document).ready(
    function () {
        $('.owl-carousel').owlCarousel({
            dots: false,
            loop: true,
            items: 3,
            responsive: {
                0: {
                    items: 1,
                    margin: 32,
                    // stagePadding: 90,
                },
                601: {
                    items: 3,
                },
                1001: {
                    items: 3,
                    margin: 48,
                }
            }
        }); // Находим на странице все элементы с классом owl-carousel и вызываем плагин owlCarousel()
    }
);


const videoBtn = document.querySelector('#video-btn');
const videoPicture = document.querySelector('.video__picture');
const videoWrapper = document.querySelector('.video');
const video = document.querySelector('#video-file');

videoWrapper.addEventListener('click', function () {
    if (video.paused) {
        videoPicture.classList.add('hidden');
        videoWrapper.classList.remove('video-overlay');
        videoBtn.classList.add('none');

        video.play();
    } else {
        // videoPicture.classList.remove('none');
        videoWrapper.classList.add('video-overlay');
        videoBtn.classList.remove('none');

        video.pause();
    }
});