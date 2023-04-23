const firstSelectorBtn = document.querySelector('#paulo-selector');
const secondSelectorBtn = document.querySelector('#pedro-selector');
// const chatHeader = document.querySelector('.chat-header');
// const chatMessages = document.querySelector('.chat-messages');
// const chatInputForm = document.querySelector('.chat-input-form');
// const chatInput = document.querySelector('.chat-input');
// const clearChatBtn = document.querySelector('.clear-chat-button');

const chatMessageEl = (message) => { `
  <div class="message ${message.sender === '1' ? 'blue-bg' : 'gray-bg'}">
    <div class="nessage-sender">${message.sender}</div>
    <div class="nessage-text">${message.text}</div>
    <div class="nessage-timestamp">${message.timestamp}</div>
  </div>
`
}