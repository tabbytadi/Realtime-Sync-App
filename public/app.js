const socket = io();

const button = document.getElementById('syncButton');
button.addEventListener('click', () => {
  socket.emit('toggleButton');
});

socket.on('buttonState', (state) => {
  button.className = state;
  button.textContent = state === 'off' ? 'Off' : 'On';
});