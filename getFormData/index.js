function getFormData(formSelector) {
  const formEl = document.querySelector(formSelector)
  const inputEl = formEl.querySelectorAll('input')
  let result = {}
  inputEl.forEach(el => {
    result = {...result, [el.getAttribute('name')]: el.value}
  })
  return result
}
