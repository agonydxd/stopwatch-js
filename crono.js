    var seconds = 00
    var tens = 00 
    var minutes = 00
    var hours = 00
    var appendTens = document.getElementById("tens")
    var appendSeconds = document.getElementById("seconds")
    var appendmin = document.getElementById('minutes')
    var appendhours = document.getElementById('hours')
    var buttonStart = document.getElementById('button-start')
    var buttonStop = document.getElementById('button-stop')
    var buttonReset = document.getElementById('button-reset')
    var Interval  
  
    function começar() {
       Interval = setInterval(startTimer, 10)
    }
    
      function parar() {
         clearInterval(Interval)
    }
    
  
    function resetar() {
       clearInterval(Interval)
        tens = '00'
        seconds = '00'
        minutes = '00'
        hours = '00'

      appendTens.innerHTML = tens
      appendSeconds.innerHTML = seconds
      appendmin.innerHTML = minutes
      appendhours.innerHTML = hours
    }
    
    function startTimer () {
      tens++
      if(tens <= 9){
        appendTens.innerHTML = '0' + tens
      }
      
      if (tens > 9){
        appendTens.innerHTML = tens
        
      } 
      
      if (tens > 99) {
        seconds++;
        appendSeconds.innerHTML = '0' + seconds
        tens = 0;
        appendTens.innerHTML = '0' + 0
      }
      
      if (seconds > 9){
        appendSeconds.innerHTML = seconds
      }

      if(seconds > 60){
        minutes++
        appendmin.innerHTML = '0' + minutes
        seconds = 0
        appendSeconds.innerHTML = '0' + 0
      }

      if(minutes > 9) {
        appendmin.innerHTML = minutes
      }

      if(minutes > 60) {
        hours++
        appendhours.innerHTML = '0' + hours
        minutes = 0
        appendmin.innerHTML = '0' + 0
      }
     if(hours > 9) {
      appendTens.innerHTML = hours
     }
    }
    
  
  