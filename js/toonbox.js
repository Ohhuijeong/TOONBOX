/* Initialize Swiper */
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

/* genre filter */
const genreTabs = document.querySelectorAll('.genre-list li');
const genreRanks = document.querySelectorAll('.genre-rank');

genreTabs.forEach((tab) => {
    tab.addEventListener('click', (e) => {
        e.preventDefault();

        genreTabs.forEach((item) => {
            item.classList.remove('on');
        })

        tab.classList.add('on');

        const genre = tab.dataset.genre;

        genreRanks.forEach((genreRank) => {
            if (genreRank.dataset.genre === genre) {
                genreRank.classList.add('show')
            } else {
                genreRank.classList.remove('show')
            }
        })
    })
})