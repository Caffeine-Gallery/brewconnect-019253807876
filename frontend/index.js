import { backend } from 'declarations/backend';

async function loadResources() {
  const resources = await backend.getCoffeeBrewingResources();
  const resourceList = document.getElementById('resourceList');
  resources.forEach(([title, url]) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = url;
    a.textContent = title;
    a.target = '_blank';
    li.appendChild(a);
    resourceList.appendChild(li);
  });
}

async function loadRecommendations() {
  const recommendations = await backend.getBestCoffeeRecommendations();
  const recommendationList = document.getElementById('recommendationList');
  recommendations.forEach(([name, description]) => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${name}</strong>: ${description}`;
    recommendationList.appendChild(li);
  });
}

async function loadChatMessages() {
  const messages = await backend.getChatMessages();
  const chatMessages = document.getElementById('chatMessages');
  chatMessages.innerHTML = '';
  messages.forEach(({ username, message, timestamp }) => {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message';
    const date = new Date(Number(timestamp) / 1000000);
    messageDiv.innerHTML = `
      <span class="username">${username}</span>
      <span class="timestamp">${date.toLocaleString()}</span>
      <p>${message}</p>
    `;
    chatMessages.appendChild(messageDiv);
  });
}

document.getElementById('chatForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const message = document.getElementById('message').value;
  await backend.addChatMessage(username, message);
  document.getElementById('message').value = '';
  loadChatMessages();
});

window.addEventListener('load', () => {
  loadResources();
  loadRecommendations();
  loadChatMessages();
  setInterval(loadChatMessages, 5000);
});
