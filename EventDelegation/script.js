const buttonAddBox = document.querySelector('.event-container .event-button')
const boxes = document.querySelectorAll('.container .box')
const boxContainer = document.querySelector('.container')

addGlobalEventListener = (event, selector, callback, parent = document) => {
   parent.addEventListener(event, e => {
      if (e.target.matches(selector)) {
         callback(e)
      }
   })
}

addGlobalEventListener("click", ".event-button", () => {
   const box = document.createElement('div')
   box.classList.add('box')
   boxContainer.append(box)
})

addGlobalEventListener("click", ".box", e => e.target.classList.toggle("event"), boxContainer)