let spaceObjects_cont;

let spaceObjects;

let Hero_H1_1;
let Hero_H1_2;

let MovableImage;

window.addEventListener('load',()=>{
     spaceObjects_cont= document.getElementById("spaceObjects_cont");
     spaceObjects= document.getElementById("spaceObjects");
     
     Hero_H1_1 =  document.getElementById("Hero_H1_1");
     Hero_H1_2 =  document.getElementById("Hero_H1_2");

     MovableImage= document.getElementById("DefaultBar");
})

window.addEventListener('wheel', function(event) {
    event.preventDefault();

    const scrollStep = event.deltaY * 10; // scale scroll speed

    smoothScrollBy(scrollStep);
}, { passive: false });

let isScrolling = false;

function smoothScrollBy(amount) {
    if (isScrolling) return;

    const totalSteps = 20;
    let currentStep = 0;
    const stepAmount = amount / totalSteps;

    isScrolling = true;

    function step() {
        if (currentStep < totalSteps) {
            window.scrollBy(0, stepAmount);
            currentStep++;
            requestAnimationFrame(step);
        } else {
            isScrolling = false;
        }
    }

    step();
}

window.addEventListener('scroll', (e) => {
    const Ypx = window.scrollY
      spaceObjects_cont.style.top= Ypx+"px"
    const oscl = Math.sin(Ypx / 1200) * 1000;
  
    spaceObjects.style.left = `calc(-120% - ${oscl}px)`;
    
    // spaceObjects.style.height = `calc(120% - ${oscl}px)`;
    // 1200
    
    moveableImage(Ypx)

    const angle = Ypx / 5; 

    if (angle < 100) {
        Hero_H1_1.style.transform = `rotate(${-angle}deg) translateY(-${angle}px)`;
        Hero_H1_2.style.transform = `rotate(${angle}deg) translateY(-${angle}px)`;
    }

})



function moveableImage(Ypx){
     const angle = Math.sin(Ypx / 180) * 30; 
     MovableImage.style.transform = `rotate(${angle}deg)`;
    
    MovableImage.style.top= `calc(20% + ${Ypx}px)`;
    MovableImage.style.left = `calc(30% + ${Ypx/2.2}px)`;
}






// window.addEventListener('wheel', (e) => {
//   // Vertical scroll amount: positive = scroll down, negative = scroll up
//   console.log('deltaY:', e.deltaY);

//   // Horizontal scroll amount: positive = scroll right, negative = scroll left
//   console.log('deltaX:', e.deltaX);

//   // Whether the Ctrl key was pressed during the scroll
//   console.log('ctrlKey:', e.ctrlKey);

//   // Whether the Shift key was pressed during the scroll
//   console.log('shiftKey:', e.shiftKey);

//   // Whether the Alt key was pressed during the scroll
//   console.log('altKey:', e.altKey);

//   // Whether the Meta key (Cmd on Mac, Windows key on Win) was pressed
//   console.log('metaKey:', e.metaKey);

//   // The DOM element where the scroll event originated
//   console.log('target:', e.target);

//   // Timestamp of when the event occurred (in milliseconds)
//   console.log('timeStamp:', e.timeStamp);
// });






window.addEventListener('scroll', (e) => {
  // Current vertical scroll position of the window
  console.log('scrollTop (vertical scroll position):', window.scrollY);

  // Current horizontal scroll position of the window
  console.log('scrollLeft (horizontal scroll position):', window.scrollX);

  // The DOM element where the scroll event originated (usually window or a scroll container)
  console.log('target:', e.target);

  // Timestamp of when the event occurred (in milliseconds)
  console.log('timeStamp:', e.timeStamp);
});