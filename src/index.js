import './style.css'
import './style2.less'
import logo from './img/6d44fbddacee13b8f2f926e3804dccc8.png'

// var a = b
const div = document.createElement('div')
div.innerHTML = `<h1 class='red'> 测试webpack</h1 > 
 <img src='${logo}'>`
document.body.append(div) 