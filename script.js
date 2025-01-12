
//download cv button 
const magneto = document.querySelector('.magneto')
const magnetoText = document.querySelector('.magneto .text')
const dbgr = document.querySelector('#debugger')

const activateMagneto = (event) =>{
let boundBox = magneto.getBoundingClientRect()
const magnetoStrength = 90
const magnetotextStrength = 70
const newX = ((event.clientX - boundBox.left)/magneto.offsetWidth) - 0.5
const newY = ((event.clientY - boundBox.top)/magneto.offsetHeight) - 0.5

dbgr.innerHTML = 'cursorX:' +event.clientX +'<br>boxLeft: ' +Math.ceil(boundBox.left)+
'<br>cursorInsideButton: ' +Math.ceil(event.clientX - boundBox.left) + '<br>relativeToTotalWidth: ' +((event.clientX - boundBox.left)/magneto.offsetWidth).toFixed(2)
+'<br>shifted: ' + ((event.clientX - boundBox.left)/magneto.offsetWidth-0.5).toFixed(2)

gsap.to(magneto,{
  duration: 1 , 
  x:newX * magnetoStrength,
  y:newY * magnetoStrength,
  ease:Power4.easeOut
})
gsap.to(magnetoText,{
  duration: 1 , 
  x:newX * magnetotextStrength,
  y:newY * magnetotextStrength,
  ease:Power4.easeOut
})

}

const resetMagneto =(event) =>{
  gsap.to(magneto,{
    duration: 1 , 
    x:0 ,
    y:0 ,
    ease:Elastic.easeOut
  })
  
  gsap.to(magnetoText,{
    duration: 1 , 
    x:0 ,
    y:0 ,
    ease:Elastic.easeOut
  })
  
}

magneto.addEventListener('mousemove',activateMagneto)
magneto.addEventListener('mouseleave',resetMagneto  )


