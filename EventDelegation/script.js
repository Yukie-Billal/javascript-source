const buttonAddBox = document.querySelector('.event-container .event-button')
const boxes = document.querySelectorAll('.container .box')
const boxContainer = document.querySelector('.container')

const boxClickEventHandler = el => {
   el.classList.toggle("event")
}

const buttonAddEventHandler = () => {
   const box = document.createElement('div')
   box.classList.add('box')
   boxContainer.append(box)
}

document.addEventListener("click", e => {
   console.log(e.target);
   if (e.target.classList.contains('box')) {
      boxClickEventHandler(e.target)
   } else if (e.target.classList.contains('event-button')) {
      buttonAddEventHandler(e.target)
   }
})