const logoImg = document.querySelector('nav img')
const btnMission = document.querySelector('#mission-btn')
const mission = document.querySelector('#mission-content')
const btnServices = document.querySelector('#services-btn')
const services = document.querySelector('#services-content')
const mainForm = document.querySelector('#mainForm')
const mainFormBtn = document.querySelector('#mainForm button')

logoImg.addEventListener('click', function() {
console.log("clicked on logo");
})
btnMission.addEventListener('click',function(event){
  event.preventDefault()
  mission.classList.toggle('mission-content')
})
btnServices.addEventListener('click',function(event){
  event.preventDefault()
  services.classList.toggle('services-content')
})



  mainForm.addEventListener('submit', function(){
    event.preventDefault()
    $.ajax({
      url:'http://fvi-grad.com:4004/fakeform',
      method: 'POST',
      data: $(mainForm).serialize(),
      success: function(){
      mainForm.reset()
      mainFormBtn.textContent='Message Sent!'
    },
    error: function(){
      mainForm.reset()
      mainFormBtn.textContent='Error sending message'
    }
    })

  })
