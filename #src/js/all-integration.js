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

    // (function addClassToBtn() {
    //     const relativeBtns = document.querySelectorAll('.all-integration-menu__bottom-link, .content__bottom-link');
    //     function addColor(btns) {
    //         btns.forEach(btn => btn.addEventListener('click', function () {
    //             const activeBtns = allIntegration.querySelectorAll('.active-color');
    //             const attr = this.querySelector('a').getAttribute("href");
    //             let els = document.querySelectorAll(`a[href='${attr}']`);
    //             if (!!activeBtns) {
    //                 changeClass(activeBtns, els)
    //             }
    //             else {
    //                 els.forEach(el => {
    //                     el.parentNode.classList.add('active-color')
    //                 });
    //             }
    //         }))
    //     }
    //     addColor(relativeBtns)
    // }());

    (function scrollColor() {
        let isScrolling = false;
        window.addEventListener("scroll", throttleScroll, false);
        function throttleScroll() {
            if (isScrolling == false) {
                window.requestAnimationFrame(function () {
                    scrolling();
                    isScrolling = false;
                });
            }
            isScrolling = true;
        }

        const elementsPage = document.querySelectorAll('.accounting-system__block-integration, .exports');
        function isFullyVisible(el) {
            let topOfElements = el.getBoundingClientRect().top;
            let topValue = + topOfElements;
            return ((topValue <= 200) && (topValue > 0));
        }
        function scrolling() {
            elementsPage.forEach(el => {
                if (isFullyVisible(el)) {
                    let idEl = el.id;
                    const activeBtns = allIntegration.querySelectorAll('.active-color');
                    let btns = document.querySelectorAll(`a[href='#${idEl}']`);
                    changeClass(activeBtns, btns)
                }
            });
        }
        scrolling();
    }());

    const changeClass = (activeBtns, els) => {
        activeBtns.forEach(aBtn => {
            aBtn.classList.remove('active-color')
        });
        els.forEach(el => {
            el.parentNode.classList.add('active-color')
        });
    }
}

