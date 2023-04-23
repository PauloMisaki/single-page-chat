const pauloSelectorBtn = document.querySelector('#paulo-selector');
const pedroSelectorBtn = document.querySelector('#pedro-selector');
const chatHeader = document.querySelector('.chat-header');
const chatMessages = document.querySelector('.chat-messages');
const chatInputForm = document.querySelector('.chat-input-form');
const chatInput = document.querySelector('.chat-input');
const clearChatBtn = document.querySelector('.clear-chat-button');

const chatMessageEl = (message) => `
  <div class="message ${message.sender === 'Paulo' ? 'blue-bg' : 'gray-bg'}">
    <div class="nessage-sender">${message.sender}</div>
    <div class="nessage-text">${message.text}</div>
    <div class="nessage-timestamp">${message.timestamp}</div>
  </div>
`

let messageSender = 'Paulo'

const updateMessageSender = (name) => {
  messageSender = name;
  chatHeader.innerText = `Olá ${messageSender}, bem vindo ao chat.`
  chatInput.placeholder = `Digite sua mensagem, ${messageSender}`
}

pauloSelectorBtn.onclick = () => updateMessageSender('Paulo');
// pauloSelectorBtn.addEventListener("click", updateMessageSender("Paulo"));
pedroSelectorBtn.onclick = () => updateMessageSender('Pedro');
// pedroSelectorBtn.addEventListener("click", updateMessageSender("Pedro"));

const sendMessage = (event) => {
  event.preventDefault();
  const timestamp = new Date()
  const timestampInfo = `${timestamp.getHours()}:${timestamp.getMinutes()}`
  const message = {
    sender: messageSender,
    text: chatInput.value,
    timestampInfo
  }
}