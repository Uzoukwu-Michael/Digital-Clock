function updateClock(){
  let now = new Date()
  
  let hours = now.getHours()
  let minutes = now.getMinutes()
  let seconds = now.getSeconds()
  
  let timeString = formatTime(hours) + " " +  formatTime(minutes) + " " +
  formatTime(seconds)
  
  let clockElement = document.getElementById('clock')
  clockElement.textContent = timeString
  }
  
  function formatTime(time){
    return time < 10 ? '0' + time : time 
  }
  updateClock()
  setInterval(updateClock, 1000)