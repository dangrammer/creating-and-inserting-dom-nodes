let element = document.createElement('div')
let ul = document.createElement('ul')

element.innerHTML = 'Hello, DOM!'
element.style.backgroundColor = '#f9f9f9'
element.style.textAlign = 'center'

ul.style.textAlign = 'left'

for (let i = 0; i < 3; i++) {
  let li = document.createElement('li')

  li.innerHTML = (i + 1).toString()
  ul.appendChild(li)
}

element.appendChild(ul)
document.body.appendChild(element)

// ul.removeChild(ul.querySelector('li:nth-child(2)'))
// ul.remove()
