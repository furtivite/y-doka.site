let element = document.querySelector(".element")
let itemsArr = Array.from(document.querySelector(".style-list").children)

itemsArr.forEach((el) => {
  el.addEventListener("click", (e) => {
    element.style.borderStyle =
      e.target.tagName !== "label"
        ? e.target.parentNode.textContent.trim()
        : e.target.textContent.trim()
  })
})
