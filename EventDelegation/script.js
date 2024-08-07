const buttonAddBox = document.querySelector('.event-container button')
const boxes = document.querySelectorAll('.container .box')
const boxContainer = document.querySelector('.container')

buttonAddBox.addEventListener("click", () => {
   const box = document.createElement('div')
   box.classList.add('box')
   boxContainer.append(box)
})

boxes.forEach((box) => {
   box.addEventListener("click", e => {
      box.classList.toggle("event")
   })
})