let subMenu = document.getElementById('subMenu')
let fullPageMenu = document.getElementById('fullPageMenu')
subMenu.addEventListener('click',function(){
  if(subMenu.className === 'menuClicked') {
    subMenu.className = ""
    setTimeout(function(){fullPageMenu.className = "visually-hidden"},200)
  }else{
    subMenu.className = 'menuClicked'
    fullPageMenu.className = "slideRight"
  }
})