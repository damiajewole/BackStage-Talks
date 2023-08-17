let anchorlinks = document.querySelectorAll('a[href^="#"]')

for (let item of anchorlinks) { 
    item.addEventListener('click', (e)=> {
        let hashval = item.getAttribute('href')
        let target = document.querySelector(hashval)
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}


function changeBackgroundColor() {
    const elementIsVisibleInViewport = (el) => {
        const { top, bottom } = el.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        return top + el.offsetHeight * 0.5 <= viewportHeight && bottom >= viewportHeight * 0.5;
    };

    const sections = document.querySelectorAll('.content--main');
    const htmlElement = document.body;

    let mostVisibleElement = null;
    let mostVisiblePercentage = 0;

    sections.forEach((element) => {
        const isVisible = elementIsVisibleInViewport(element);
        if (isVisible) {
            const visiblePercentage = (window.innerHeight - element.getBoundingClientRect().top) / element.offsetHeight;
            if (visiblePercentage > mostVisiblePercentage) {
                mostVisiblePercentage = visiblePercentage;
                mostVisibleElement = element;
            }
        }
    });

    function getColorForElement(elementId) {
        switch (elementId) {
            case 'C1':
                return '#E30512';
            case 'C2':
                return '#1939BE';
            case 'C3':
                return '#FFBE00';
            case 'C4':
                return '#FD7230';
            case 'C5':
                return '#00C2B6';
            case 'C6':
                return '#FFFFFF';
            case 'C7':
                return '#FF608C';
            default:
                return '#E30512'; 
        }
    }

    if (mostVisibleElement) {
        const color = getColorForElement(mostVisibleElement.id);

        if (htmlElement.style.backgroundColor !== color) {
            htmlElement.style.backgroundColor = color;
            htmlElement.style.transition = 'background-color 0.7s ease-in-out';
        }
    }
}

changeBackgroundColor();
window.addEventListener('scroll', changeBackgroundColor);




function screenSizeChanged(mq) {
    if (mq.matches) {
        function changeBackgroundColor() {
            const elementIsVisibleInViewport = (el) => {
                const { top, bottom } = el.getBoundingClientRect();
                const viewportHeight = window.innerHeight;
                return top + el.offsetHeight * 0.5 <= viewportHeight && bottom >= viewportHeight * 0.5;
            };
        
            const sections = document.querySelectorAll('.content--main');
            const htmlElement = document.body;
        
            let mostVisibleElement = null;
            let mostVisiblePercentage = 0;
        
            sections.forEach((element) => {
                const isVisible = elementIsVisibleInViewport(element);
                if (isVisible) {
                    const visiblePercentage = (window.innerHeight - element.getBoundingClientRect().top) / element.offsetHeight;
                    if (visiblePercentage > mostVisiblePercentage) {
                        mostVisiblePercentage = visiblePercentage;
                        mostVisibleElement = element;
                    }
                }
            });

            function getColorForElement(elementId) {
                switch (elementId) {
                    case 'C1':
                        return '#E30512';
                    case 'C2':
                        return '#1939BE';
                    case 'C3':
                        return '#FFBE00';
                    case 'C4':
                        return '#FD7230';
                    case 'C5':
                        return '#00C2B6';
                    case 'C6':
                        return '#FFFFFF';
                    case 'C7':
                        return '#FF608C';
                    default:
                        return '#E30512'; // Default color
                }
            }
        
            if (mostVisibleElement) {
                const color = getColorForElement(mostVisibleElement.id);
        
                if (htmlElement.style.backgroundColor !== color) {
                    htmlElement.style.backgroundColor = color;
                    htmlElement.style.transition = 'background-color 0.7s ease-in-out';
                }
            }
        }
        changeBackgroundColor();
        window.addEventListener('scroll', changeBackgroundColor);
    }
  }
  
const mediaQuery = window.matchMedia('(max-width: 990px)');
screenSizeChanged(mediaQuery);

mediaQuery.addListener(screenSizeChanged);





