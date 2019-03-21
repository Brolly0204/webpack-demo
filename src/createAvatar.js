import avatar from './vvv.png'
import style from './index.scss'

function createAvatar() {
  const img = new Image()
  img.src = avatar
  img.classList.add(style.avatar)
  document.body.appendChild(img)
}

export default createAvatar