window.addEventListener('DOMContentLoaded', function () {
    const headerMenu = document.querySelector('.header');
if (!!headerMenu) {
    (function burgerAnimation() {
        const burger = document.querySelector('.header__burger');
        const menu = document.querySelector('.header');
        const body = document.querySelector('body');
        const mobBtns = document.querySelector('.mobile-menu-btns');
        burger.onclick = () => {
            addClass(burger, 'active')
            addClass(menu, 'active')
            addClass(body, 'body-lock')
            addClass(mobBtns, 'active')
        }
        function addClass(obj, classname) {
            obj.classList.toggle(classname)
        }
    }());

    (function callSub() {
        let elementsLink = document.querySelectorAll('.trigger');
        elementsLink.forEach(link => link.addEventListener('click', function () {
            let attr = this.getAttribute('data-attr');
            const menu = document.querySelector('.header');
            let subWindow = document.getElementById(attr);
            subWindow.classList.add('active');
            menu.classList.add('active-sub');
        }))
    }());

    (function closeSub() {
        let subClose = document.querySelectorAll('.sub-close');
        subClose.forEach(close => close.addEventListener('click', function () {
            let attr = this.getAttribute('data-close');
            const menu = document.querySelector('.header');
            let subMenu = document.getElementById(attr);
            subMenu.classList.remove('active');
            menu.classList.remove('active-sub');
        }))
    })();
}

(function swiperComments() {
    new Swiper('.swiper-integration__swiper', {
        navigation: {
            nextEl: '.swiper__next',
            prevEl: '.swiper__prev'
        },
        pagination: {
            el: ".swiper-integration__pagination",
            clickable: true
        },
        grabCursor: true,
        effect: "creative",
        creativeEffect: {
            prev: {
                translate: ["-120%", 0, -1],
            },
            next: {
                translate: ["120%", 0, 0],
            },
        },
        speed: 500,
        spaceBetween: 30,
        slidesPerView: 1,
        slidesPerGroup: 1,
    });
}());

(function lazyLoad() {
    const images = document.querySelectorAll('img[data-src]');
    const sources = document.querySelectorAll('source[data-srcset]');

    for (let i = 0; i < images.length; i++) {
        let dataSrc = images[i].getAttribute('data-src');
        images[i].setAttribute('src', dataSrc);
        images[i].removeAttribute('data-src');
    }

    for (let i = 0; i < sources.length; i++) {
        let dataSrcSet = sources[i].getAttribute('data-srcset');
        sources[i].setAttribute('srcset', dataSrcSet);
        sources[i].removeAttribute('data-srcset');
    }


}());
    const blog = document.querySelector('.blog');
if (!!blog) {
    (function showMore() {
        const itemSpan = document.querySelector('.author__content-side > span');
        const item = document.querySelector('.author__content-side');
        if (!!item && !!itemSpan) {
            itemSpan.onclick = () => {
                showCase(item, 'active')
            }
        }
        function showCase(obj, classname) {
            obj.classList.toggle(classname)
        }
    })();

    (function swiperTop() {
        new Swiper('.slider-top__swiper', {
            navigation: {
                nextEl: '.slider-top__next',
                prevEl: '.slider-top__prev'
            },
            pagination: {
                el: '.swiper__pagination',
                clickable: true
            },
            grabCursor: true,
            effect: "creative",
            creativeEffect: {
                prev: {
                    translate: ["-120%", 0, -1],
                },
                next: {
                    translate: ["120%", 0, 0],
                },
            },
            speed: 500,
            slidesPerView: 1,
            slidesPerGroup: 1,
            loop: true,
            spaceBetween: 30,
            speed: 300,
            preloadImages: true,
            lazy: {
                loadOnTransitionStart: true,
                loadPrevNext: true,
            },
        });
    })();

    (function swiperCard() {
        new Swiper('.popular__slider', {
            slidesPerView: 3,
            slidesPerGroup: 1,
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 24,
                },
                768: {
                    spaceBetween: 65,
                    slidesPerView: 2,
                },
                1024: {
                    spaceBetween: 65,
                    slidesPerView: 3,
                    loop: true,
                },
            },
            grabCursor: true,
            preloadImages: true,
            lazy: {
                loadOnTransitionStart: true,
                loadPrevNext: true,
            },
        });
    })();

    (function relativeBlog() {
        const blogTitles = document.querySelectorAll('.editor__content > h2');
        const blogTitlesArray = Array.from(blogTitles);
        if (blogTitlesArray.length) {
            blogTitlesArray.forEach(title => {
                let yPosition = title.offsetTop;
                let id = title.id;
                const relativeBlog = document.querySelector(`[data-target='${id}']`);
                if (!!relativeBlog) {
                    relativeBlog.style.top = yPosition + "px";
                }
            })
        }
    })();
}

    const mainPage = document.querySelector('.main-page');
if (!!mainPage) {
    (function callTabs() {
        let elementsLink = document.querySelectorAll('.trigger-obj');
        let tabsBtns = document.querySelectorAll('.tabs__item');
        const tabs = document.querySelector('.tabs__body');
        const menu = document.querySelector('.tabs__items');
        elementsLink.forEach(link => link.addEventListener('click', function () {
            let attr = this.getAttribute('data-attr');
            const activeBtn = tabs.querySelector('.active');
            let subWindow = document.getElementById(attr);
            activeBtn.classList.remove('active');
            subWindow.classList.add('active');
        }))
        tabsBtns.forEach(btn => btn.addEventListener('click', function () {
            const activeBtn = menu.querySelector('.active');
            if (!!activeBtn) {
                activeBtn.classList.remove('active')
                btn.classList.add('active')
            }
            else {
                btn.classList.add('active')
            }
        }))
    }());
}
    const allIntegration = document.querySelector('.all-integrtation');
if (!!allIntegration) {
    (function anchorAnimation() {
        const page = document.querySelector('.all-integrtation');
        if (!!page) {
            const anchors = document.querySelectorAll('a[href*="#"]');
            for (let anchor of anchors) {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault()
                    const blockID = anchor.getAttribute('href').substr(1);
                    const obj = document.getElementById(blockID);
                    const yOffset = -182;
                    const y = obj.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                })
            }
        }
    }());

    (function showAllIntegrationMenu() {
        let isScrolling = false;
        const menu = document.querySelector('.all-integration-menu');
        const btns = document.querySelector('.content__bottom-links');
        if (!!menu) {
            window.addEventListener("scroll", throttleScroll, false);
            function throttleScroll(e) {
                if (isScrolling == false) {
                    window.requestAnimationFrame(function () {
                        scrolling(e);
                        isScrolling = false;
                    });
                }
                isScrolling = true;
            }

            function isFullyVisible(el) {
                let elementBoundary = el.getBoundingClientRect();
                let top = elementBoundary.top;
                let bottom = elementBoundary.bottom;
                return ((top >= 0) && (bottom <= window.innerHeight));
            }

            function scrolling() {
                if (isFullyVisible(btns)) {
                    menu.classList.remove('active');
                }
                else {
                    menu.classList.add('active');
                }
            }
            scrolling();
        }
    }());

    (function addClassToBtn() {
        const relativeBtns = document.querySelectorAll('.all-integration-menu__bottom-link, .content__bottom-link');
        function addColor(btns) {
            btns.forEach(btn => btn.addEventListener('click', function () {
                const activeBtns = allIntegration.querySelectorAll('.active-color');
                const attr = this.querySelector('a').getAttribute("href");
                let els = document.querySelectorAll(`a[href='${attr}']`);
                if (!!activeBtns) {
                    activeBtns.forEach(aBtn => {
                        aBtn.classList.remove('active-color')
                    });
                    els.forEach(el => {
                        el.parentNode.classList.add('active-color')
                    });
                }
                else {
                    els.forEach(el => {
                        el.parentNode.classList.add('active-color')
                    });
                }
            }))
        }
        addColor(relativeBtns)
    }());

    // (function scrollColor() {
    //     let isScrolling = false;
    //     window.addEventListener("scroll", throttleScroll, false);
    //     function throttleScroll(e) {
    //         if (isScrolling == false) {
    //             window.requestAnimationFrame(function () {
    //                 scrolling(e);
    //                 isScrolling = false;
    //             });
    //         }
    //         isScrolling = true;
    //     }

    //     const elementsPage = document.querySelectorAll('.accounting-system__block-integration, .exports');
    //     function isFullyVisible(el) {
    //         let elementBoundary = el.getBoundingClientRect();
    //         let top = elementBoundary.top;
    //         let bottom = elementBoundary.bottom;
    //         return ((top >= 0) && (bottom <= window.innerHeight));
    //     }
    //     function scrolling() {
    //         elementsPage.forEach(el => {
    //             if (isFullyVisible(el)) {
    //                 let idEl = el.id;
    //                 let btnMenu = document.querySelector(`a[href='#${idEl}']`);
    //                 // btnMenu.classList.add('active-color');
    //                 console.log(btnMenu)
    //             }
    //             else {
    //                 // btnMenu.classList.remove('active-color');
    //             }
    //         });
    //     }
    //     scrolling();
    // }());
}


    const resourcesBlog = document.querySelector('.resources-blog');
if (!!resourcesBlog) {
    (function swiperResources() {
        new Swiper('.slider-resources', {
            navigation: {
                nextEl: '.slider-resources__next',
                prevEl: '.slider-resources__prev'
            },
            slidesPerView: 1,
            slidesPerGroup: 1,
            grabCursor: true,
            effect: "creative",
            creativeEffect: {
                prev: {
                    translate: ["-120%", 0, -1],
                },
                next: {
                    translate: ["120%", 0, 0],
                },
            },
            speed: 500,
            spaceBetween: 30,
            preloadImages: true,
            loop: true,
            lazy: {
                loadOnTransitionStart: true,
                loadPrevNext: true,
            },
        });
    }());
}

})






