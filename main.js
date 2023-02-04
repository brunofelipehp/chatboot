const messages = document.querySelector("#messages");
const inputMessage = document.querySelector("#input-message input");
const formMessage = document.querySelector("#input-message form");

messages.lastElementChild.scrollIntoView();

function sendMessages(event) {
  event.preventDefault();
  const msg = inputMessage.value;
  if (msg.trim() !== "") {
    let messageText = document.createElement("p");
    messageText.textContent = msg;
    let bodyMessage = document.createElement("div");
    bodyMessage.appendChild(messageText);
    bodyMessage.setAttribute("class", "send-message");

    messages.appendChild(bodyMessage);
    messages.lastElementChild.scrollIntoView();
    const date = dayjs().format("HH:mm");
    const dateLast = dayjs().isAfter(date).toString();

    console.log(date);
    console.log(dateLast);
    if (dateLast === date) {
    }
  }
}

addEventListener("submit", sendMessages);
