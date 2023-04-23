const pauloSelectorBtn = document.querySelector('#paulo-selector');
const pedroSelectorBtn = document.querySelector('#pedro-selector');
const chatHeader = document.querySelector('.chat-header');
const chatMessages = document.querySelector('.chat-messages');
const chatInputForm = document.querySelector('.chat-input-form');
const chatInput = document.querySelector('.chat-input');
const clearChatBtn = document.querySelector('.clear-chat-button');

const messages = JSON.parse(localStorage.getItem('messages')) || [
  {sender: "Paulo", text: "Eae pedro, tudo certo?", timestamp: "12:30"},
  {sender: "Pedro", text: "Tudo mais ou menos, e com você?", timestamp: "12:32"}
];

const chatMessageEl = (message) => `
  <div class="message ${message.sender === 'Paulo' ? 'blue-bg' : 'gray-bg'}">
    <div class="message-sender">${message.sender}</div>
    <div class="message-text">${message.text}</div>
    <div class="message-timestamp">${message.timestamp}</div>
  </div>
`

window.onload = () => {
  messages.forEach((message) => {
    chatMessages.innerHTML += chatMessageEl(message)
  })
}

let messageSender = 'Paulo'

const updateMessageSender = (name) => {
  messageSender = name;
  chatInput.placeholder = `Digite sua mensagem, ${messageSender}`
  
  if (name === 'Paulo') {
    chatHeader.innerText = `${messageSender} - conversa privada com Pedro`
    pauloSelectorBtn.classList.add('active-person')
    pedroSelectorBtn.classList.remove('active-person')
  }
  if (name === 'Pedro') {
    chatHeader.innerText = `${messageSender} - conversa privada com Paulo`
    pedroSelectorBtn.classList.add('active-person')
    pauloSelectorBtn.classList.remove('active-person')
  }

  chatInput.focus()
}

pauloSelectorBtn.onclick = () => updateMessageSender('Paulo');
// pauloSelectorBtn.addEventListener("click", updateMessageSender("Paulo"));
pedroSelectorBtn.onclick = () => updateMessageSender('Pedro');
// pedroSelectorBtn.addEventListener("click", updateMessageSender("Pedro"));

const sendMessage = (event) => {
  event.preventDefault();
  const timestamp = new Date().toLocaleString('pt-BR', { hour: 'numeric', minute: 'numeric'})
  // const timestampInfo = `${timestamp.getHours()}:${timestamp.getMinutes()}`
  const message = {
    sender: messageSender,
    text: chatInput.value,
    timestamp,
  }

  messages.push(message)
  localStorage.setItem('chat-messages', JSON.stringify(messages))
  chatMessages.innerHTML += chatMessageEl(message)
  chatInputForm.reset()
  chatMessages.scrollTop = chatMessages.scrollHeight
}

chatInputForm.addEventListener('submit', sendMessage);

clearChatBtn.addEventListener('click', () => {
  localStorage.clear()
  chatMessages.innerHTML = ''
})