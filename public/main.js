const socket = io()

const chat = document.querySelector('#nickname__form')
const Input = document.querySelector('#nickname__input')

chat.addEventListener('submit', event => {
  event.preventDefault()
  socket.emit('chat__form', Input.value)
  Input.value = ''
})

$(function () {
  $('#chat__form').on('submit', function(e) {
    e.preventDefault();
    var myDate = new Date() // your date object;
    myDate.setHours(myDate.getHours() + 24);
    console.log(myDate);
    var message = $('#text-message').val();
    let today = new Date();
    let [hour, minute, second] = new Date().toLocaleTimeString("en-US").split(/:| /);
    let timestamp = myDate.getHours() + ":" + ("0"+myDate.getMinutes()).substr(-2); 
    $('#text-message').val('');
    $('#Messages').append('<div class="package">' + '<div class="mine">' + message + '<em class="message-time" id="showDate">' + timestamp + '</em>' + '</div></div>')
  })
});

$(function hei () {
  $('#nickname__form').on('submit', function hei(e) {
    e.preventDefault();
    var myDate = new Date() // your date object;
    myDate.setHours(myDate.getHours() + 24);
    console.log(myDate);
    var message = $('#text-message').val();
    let today = new Date();
    let [hour, minute, second] = new Date().toLocaleTimeString("en-US").split(/:| /);
    let timestamp = myDate.getHours() + ":" + ("0"+myDate.getMinutes()).substr(-2); 
    $('#text-message').val('');
    $('#Messages').append('<div class="package">' + '<div class="mine">' + message + '<em class="message-time" id="showDate">' + timestamp + '</em>' + '</div></div>')
  })
});

console.log(moment());
console.log('Eywa gg bro')