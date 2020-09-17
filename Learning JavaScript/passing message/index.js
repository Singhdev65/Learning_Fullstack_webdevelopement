const sendBtn = document.querySelector('#sendBtn');
const messageIn = document.querySelector('#messageIn');
const messageOut = document.querySelector('#messageOut');


sendBtn.addEventListener('click', sendMsg)


function sendMsg (){
  let content = messageIn.value;

if(content == ''){
  alert('Please Enter a Valid Value. Current value is Empty')
}

else{
  messageOut.innerHTML = content;
  messageIn.value = '';
}

}
