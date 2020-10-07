const canvas = document.querySelector('canvas') ;
let ctx = canvas.getContext('2d') ;
canvas.width = window.innerWidth - 200;
canvas.height = window.innerHeight ;
let paint = false ;
let colorPicker = document.getElementById('colorPicker') ;
let color = colorPicker.value ;
let penWidth = 10;
let myRange = document.querySelector('.myRange') ;
let showValue  = document.querySelector('.showValue') ;
let artboardColor = document.querySelectorAll('.artboardColor span') ;
// events
artboardColor.forEach(span => {
    span.addEventListener('click', () => {
        canvas.style.background = span.getAttribute('data-color')
    })
})
colorPicker.addEventListener('change' , () => {
    color = colorPicker.value;
})
myRange.addEventListener('change' , () => {
    penWidth = myRange.value;
    showValue.textContent = myRange.value ;
    
})
canvas.addEventListener('mousedown',(e)=>{
    paint = true ;
    draw(e) ;
}) ;
canvas.addEventListener('mouseup',()=>{
    paint = false ;
    ctx.beginPath() ;
}) ;
canvas.addEventListener('mousemove',(e)=>{
    draw(e) ;
}) ;


function draw(e) {
  if(!paint) return ;
  ctx.lineWidth = penWidth ;
  ctx.lineCap = 'round' ;
  ctx.strokeStyle = color ;
  ctx.lineTo(e.x,e.y) ;
  ctx.stroke() ;
}






