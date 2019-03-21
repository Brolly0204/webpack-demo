import counter from './counter'
import number from './number'
// import './style.css'

counter()
number()

// const btn = document.createElement('button')
// btn.innerHTML = '新增'

// btn.onclick = function() {
//   const div = document.createElement('div')
//   div.innerHTML = 'item'
//   document.body.appendChild(div)
// }

// document.body.appendChild(btn)

if (module.hot) {
  module.hot.accept()
}