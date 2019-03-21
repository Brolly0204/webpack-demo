import Header from './header'
import Content from './content'
import Slide from './Slide'
import createAvatar from './createAvatar'
import avatar from './vvv.png'
import style from './index.scss'

new Header()
new Content()
new Slide()

const img = new Image()
img.src = avatar
img.classList.add(style.avatar)

document.body.appendChild(img)

createAvatar()
