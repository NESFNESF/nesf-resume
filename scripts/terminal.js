const output = document.getElementById('output');
const input = document.getElementById('input');

function printOutput(text) {
  output.innerText += `\n${text}`;
  output.scrollTop = output.scrollHeight;
}

input.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    const cmd = input.value.trim();
    printOutput(`> ${cmd}`);
    if (commands[cmd]) {
      printOutput(commands[cmd]);
    } else if (cmd) {
      printOutput(`Commande inconnue : ${cmd}`);
    }
    input.value = '';
  }
});
