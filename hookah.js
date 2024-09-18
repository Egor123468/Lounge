const collapseElementList = document.querySelectorAll('.collapse')
const collapseList = [...collapseElementList].map(collapseEl => new bootstrap.Collapse(collapseEl))


const swiper = new Swiper('.swiper', {
    slidesPerView: "auto",
    spaceBetween: '2%',
    centeredSlides: false,
    autoHeight: true,
    initialSlide: 0
    // on: {
    //     slideChange: function () {
    //         if (window.innerWidth <= 768) {
    //             const slides = this.slides;
    //             slides.forEach((slide, index) => {
    //                 if (index === this.activeIndex) {
    //                     slide.style.opacity = '1';
    //                 } else {
    //                     slide.style.opacity = '0.4';
    //                 }
    //             });
    //         }
    //     },
    // },
});

// // Инициализация прозрачности слайдов
// swiper.on('init', function () {
//     if (window.innerWidth <= 768) {
//         const slides = this.slides;
//         slides.forEach((slide, index) => {
//             if (index === this.activeIndex) {
//                 slide.style.opacity = '1';
//             } else {
//                 slide.style.opacity = '0.4';
//             }
//         });
//     }
// });

// window.addEventListener('resize', function () {
//             swiper.update();
//             if (window.innerWidth <= 768) {
//                 const slides = swiper.slides;
//                 slides.forEach((slide, index) => {
//                     if (index === swiper.activeIndex) {
//                         slide.style.opacity = '1';
//                     } else {
//                         slide.style.opacity = '0.4';
//                     }
//                 });
//             } else {
//                 const slides = swiper.slides;
//                 slides.forEach((slide) => {
//                     slide.style.opacity = '1';
//                 });
//             }
//         });

        // Переинициализация слайдера при изменении размера окна
        // window.addEventListener('resize', function () {
        //     swiper.update();
        //     if (window.innerWidth <= 768) {
        //         const slides = swiper.slides;
        //         slides.forEach((slide, index) => {
        //             if (index === swiper.activeIndex) {
        //                 slide.style.opacity = '1';
        //             } else {
        //                 slide.style.opacity = '0.4';
        //             }
        //         });
        //     } else {
        //         const slides = swiper.slides;
        //         slides.forEach((slide) => {
        //             slide.style.opacity = '1';
        //         });
        //     }
        // });

        