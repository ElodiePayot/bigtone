
const customCursor = {

    "init": function(e) {
        const cursor = document.querySelector('.js-cursor');
        cursor.classList.remove('opacity-0');
        const hoverEl = document.querySelectorAll('.js-cursor-hover')
        const { clientX: posX, clientY: posY } = e;
        
        const runMouseOver = () => {
            cursor.style.transform = 'scale(3.5)';
        };

        hoverEl.forEach(hover => hover.addEventListener('mouseenter', runMouseOver));
        
        const runMouseLeave = () => {
            cursor.style.transform = '';
            cursor.style.background = '';
        };
        hoverEl.forEach(hover => hover.addEventListener('mouseleave', runMouseLeave));

        return (
            cursor.style.left = `${posX - 20}px`,
            cursor.style.top = `${posY - 20}px`  
        );
    },
    

}

export default customCursor;
 
  