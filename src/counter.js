function counter() {
  const div = document.createElement('div')
  div.innerHTML = 1
  div.onclick = function() {
    div.innerHTML++
  }
  document.body.appendChild(div)
}

export default counter