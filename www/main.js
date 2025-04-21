let watch = document.querySelector('#watch')
let play = document.querySelector('#play')
let pause = document.querySelector('#pause')
let reset = document.querySelector('#reset')

let [hours,minutes,seconds]=[0,0,0]

let timer

function settime() {
  seconds++
  if (seconds == 60) {
    minutes++
    seconds = 0
    if (minutes == 60) {
       hours++
       minutes = 0
    }
  } 
  let h = hours < 10 ? '0' + hours : hours
  let m = minutes < 10 ? '0' + minutes : minutes
  let s = seconds < 10 ? '0' + seconds:seconds
  
  watch.innerHTML = h+':'+m+':'+s
}
function run() {
  timer  = setInterval(settime,1000)
}



pause.addEventListener('click',()=>{
  clearInterval(timer)
})

reset.addEventListener('click',()=>{
  [hours,minutes,seconds]=[0,0,0]
  watch.innerHTML = '00:00:00'
  clearInterval(timer)
  }
)