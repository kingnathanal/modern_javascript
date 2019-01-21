const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

//click
//clearBtn.addEventListener('click',runEvent);
// double click
//clearBtn.addEventListener('dblclick',runEvent);
// mousedown
//clearBtn.addEventListener('mousedown',runEvent);
// mouseup
//clearBtn.addEventListener('mouseup',runEvent);
// mouse enter
//card.addEventListener('mouseenter',runEvent);
// mouse leave
//card.addEventListener('mouseleave',runEvent);
// mouse over
//card.addEventListener('mouseover',runEvent);
// mouse out
//card.addEventListener('mouseout',runEvent);
// mouse move
card.addEventListener('mousemove',runEvent);

// event handler
function runEvent(e) {
    console.log(`EVENT TYPE: ${e.type}`);

    heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

    document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},40)`;
}