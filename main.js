const messages = document.querySelector("#messages");
const inputMessage = document.querySelector("#input-message input");
const formMessage = document.querySelector("#input-message form");
const hourTitle = document.querySelector(".hour-title span");

const messagesContainer = [
  "Tive uma ideia incrivel para um projeto!",
  "E se a gente fizesse um chat moderno e responsivo em apenas uma semana?",
];

const dateTitle = dayjs().format("HH:mm");
hourTitle.textContent = dateTitle;

if (messages.children.length === 0) {
  chatMessage(messagesContainer[0]);
}

if (messages.children.length > 0) {
  messages.lastElementChild.scrollIntoView();
}

function sendMessages(event) {
  event.preventDefault();

  const msg = inputMessage.value;

  if (msg.trim() !== "") {
    const date = dayjs().format("HH:mm");

    let hourMessage = document.createElement("span");
    hourMessage.textContent = `Você - ${date}`;

    let messageText = document.createElement("p");
    messageText.textContent = msg;

    let bodyMessage = document.createElement("div");
    bodyMessage.appendChild(hourMessage);
    bodyMessage.appendChild(messageText);
    bodyMessage.setAttribute("class", "send-message");

    messages.appendChild(bodyMessage);
    messages.lastElementChild.scrollIntoView();
    inputMessage.value = "";
  }

  if (messages.children.length === 2) {
    chatMessage(messagesContainer[1]);
  }
}

function chatMessage(msg) {
  setTimeout(function () {
    const date = dayjs().format("HH:mm");

    let hourMessage = document.createElement("span");
    hourMessage.textContent = `Mayk Brito - ${date}`;

    let messageText = document.createElement("p");
    messageText.textContent = msg;

    let bodyMessage = document.createElement("div");
    bodyMessage.appendChild(hourMessage);
    bodyMessage.appendChild(messageText);
    bodyMessage.setAttribute("class", "message");

    messages.appendChild(bodyMessage);
  }, 3000);
}

addEventListener("submit", sendMessages);
