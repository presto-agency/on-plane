window.addEventListener('DOMContentLoaded', function () {
    burgerAnimation();
    callSub();
    closeSub();
})

const burgerAnimation = () => {
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
}

const callSub = () => {
    let elementsLink = document.querySelectorAll('.trigger');
    elementsLink.forEach(link => link.addEventListener('click', function () {
        let attr = this.getAttribute('data-attr');
        const menu = document.querySelector('.header');
        let subWindow = document.getElementById(attr);
        subWindow.classList.add('active');
        menu.classList.add('active-sub');
    }))
}

const closeSub = () => {
    let subClose = document.querySelectorAll('.sub-close');
    subClose.forEach(close => close.addEventListener('click', function () {
        let attr = this.getAttribute('data-close');
        const menu = document.querySelector('.header');
        let subMenu = document.getElementById(attr);
        subMenu.classList.remove('active');
        menu.classList.remove('active-sub');
    }))
}
window.addEventListener('DOMContentLoaded', function () {
    swiperComments();
})

const swiperComments = () => {
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
        preloadImages: false,
        lazy: {
            loadOnTransitionStart: false,
            loadPrevNext: true,
        },
    });
}
window.addEventListener('DOMContentLoaded', function () {
    select();
})

const select = () => {
    let blockSort = document.getElementById("sort");
    if (blockSort) {
        let blockList = document.getElementById("sort-list");
        let elemItemSelect = document.querySelectorAll('.sort-select__item');
        let elemCurrent = document.getElementById('current-value');
        let active = document.querySelector('#sort-list li.active');
        let current = document.querySelector('#current-value');
        current.textContent = active.textContent;

        const hideSelectMenu = () => {
            blockList.classList.remove('show-menu');
            blockSort.classList.remove('turn-arrow');
            blockList.style.maxHeight = 0;
        };

        const showSelectMenu = () => {
            blockList.classList.add('show-menu');
            blockList.style.maxHeight = blockList.scrollHeight + 'px';
            blockSort.classList.add('turn-arrow');
        };

        const onMouseScroll = () => {
            if (!blockList.classList.contains('show-menu')) {
                return;
            };
            if (window.pageYOffset > 0) {
                hideSelectMenu();
            }
        };

        const onOutsideClick = (e) => {
            if (!blockList.classList.contains('show-menu')) {
                return;
            };

            if (!e.target.classList.contains('sort-select__item') && !e.target.classList.contains('sort-select__current')) {
                hideSelectMenu();
            };
        };

        const onSelectClick = () => {
            blockList.classList.contains('show-menu')
                ? hideSelectMenu()
                : showSelectMenu();
        };

        blockSort.addEventListener('click', onSelectClick);
        window.addEventListener('click', onOutsideClick);
        window.addEventListener('scroll', onMouseScroll);

        elemItemSelect.forEach(item => item.addEventListener('click', function () {
            let elemItemSelectActive = document.querySelectorAll('.sort-select__item.active');
            elemItemSelectActive.forEach(itemActive => itemActive.classList.remove('active'));
            item.classList.add('active');
            elemCurrent.textContent = item.textContent;
            elemCurrent.setAttribute('data-value', item.getAttribute('data-value'));
        }))
    }
};
window.addEventListener('DOMContentLoaded', function () {
    showMore();
    swiperTop();
    swiperCard();
    relativeBlog()
})

const showMore = () => {
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
}

const swiperTop = () => {
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
}

const swiperCard = () => {
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
}

const relativeBlog = () => {
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
}
window.addEventListener('DOMContentLoaded', function () {
    sliderLogo(),
        sliderLogoCenter()
})

const sliderLogo = () => {
    new Swiper('.slider-logo', {
        grabCursor: true,
        slidesPerView: 2,
        autoplay: {
            delay: 0,
        },
        initialSlide: 1,
        spaceBetween: 16,
        speed: 3000,
        loop: true,
    });
}
const sliderLogoCenter = () => {
    new Swiper('.slider-logo-center', {
        grabCursor: true,
        slidesPerView: 1,
        autoplay: {
            delay: 0,
        },
        initialSlide: 1,
        spaceBetween: 16,
        speed: 3000,
        loop: true,
    });
}
window.addEventListener('DOMContentLoaded', function () {
    anchorAnimation()
})

const anchorAnimation = () => {
    const anchors = document.querySelectorAll('a[href*="#"]');
    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault()
            const blockID = anchor.getAttribute('href').substr(1);
            const obj = document.getElementById(blockID);
            const yOffset = -100;
            const y = obj.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        })
    }
}

// const bg = () => {
//     document.querySelectorAll(".ibg").forEach(el => {
//         if (el.querySelector('img')) {
//             el.style.backgroundImage = 'url(' + el.querySelector('img').getAttribute('src') + ')';
//             el.querySelector('img').style.display = 'none';
//         }
//     });
// }

// const scrollPage = () => {
//     let scrollPosition;
//     const header = document.querySelector('.header');
//     const scrollChange = 1;

//     const addClass = () => header.classList.add("hide")
//     const removeClass = () => header.classList.remove("hide")

//     window.addEventListener('scroll', function () {
//         scrollPosition = window.scrollY;
//         if (scrollPosition >= scrollChange) { addClass() }
//         else { removeClass() }
//     })
// }





