import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

// 1. Criando o Reducer com Estado Inicial
const INITIAL_STATE = {
  chats: {},
  activeChatId: null,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_CHAT':
      const { chatId, chatName } = action.payload;
      return {
        ...state,
        chats: {
          ...state.chats,
          [chatId]: {
            name: chatName,
            messages: [],
          },
        },
      };
    case 'SELECT_CHAT':
      const { selectId } = action.payload;
      return {
        ...state,
        activeChatId: selectId,
      };
    case 'SEND_MESSAGE':
      const { sender, text } = action.payload;
      const activeChat = state.chats[state.activeChatId];
      return {
        ...state,
        chats: {
          ...state.chats,
          [state.activeChatId]: {
            ...activeChat,
            messages: [
              ...activeChat.messages,
              { id: Date.now(), sender, text },
            ],
          },
        },
      };
    default:
      return state;
  }
};

// 2. Criando a Store já com Redux Devtools
const store = createStore(reducer, composeWithDevTools());

// 3. Criando a Action
const action = { type: 'SEND_MESSAGE' };

// 4. Disparando a Action
const sendMsgButton = document.querySelector('button');
sendMsgButton.addEventListener('click', () => store.dispatch(action));

// 5. Confirmando a mudança no estado global
store.subscribe(() => {
  console.log('Estado atualizado !');
});
