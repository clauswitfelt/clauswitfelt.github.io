let userInput, terminalOutput;
let projAsk = false;
let lastCommands = [];

const COMMANDS = {
  help: `Help is avaliable. <p>Try the standard UNIX-commands: ls, format, dir, ren, pwd, login, cat, cd, del. <p>Please don't click the picture below<p> <h1 onclick="alert('the password is hotgoblin')"><img src="https://media.giphy.com/media/3o7bu0ZQQp2QQQQQQQ/giphy.gif" alt="" width=50px height=50px></h1>`,
  login: `LOGIN - Try to LOGIN with both a USERNAME and a PASSWORD `,
  ls: `LS lists a directory`,
  dir: `DIR - same as ls`,
  ls: `LS list the current directory. PWD has the same function `,
  format: `Please don't format the harddisk `,
  debug: `No use here `,
  pwd: `You are in the home directory `,
  info: `Type help, if you need help. Login if you want to login`,
  login: `This login is for employees. Use login_customer as a customer, login_private for private logins `,
  login_private: `Succes. Now try to list directory and find the password to the managers bankaccount , type enter when you have both`,
  cat: `List of content. BTW, our manager loves long list of integer-numbers, like 123456 or 87654321, tangrams and palindromes`,
  login_customer: `You can now login as a customer `,
  hack: `You can do better than that `,
  cat: `CAT reads a document. Do remember the argument. The managers account number could be 43961864 or 41961812 `,
  cd: `CD changes the directory  `,
  del: `DEL deletes a file. <p>The manager uses Malune Rititsa Bank for his personal finances `,
  ren: `REN: renames a file or a directory. The managers name is Charlie and his mothers maiden name was Cathleen`,

};

const app = () => {
  userInput = document.getElementById("userInput");
  terminalOutput = document.getElementById("terminalOutput");
  document.getElementById("keyboard").focus();
};

const execute = function executeCommand(input) {
  input = input.toLowerCase();
  lastCommands.push(input);
  let output;
  if (input.length === 0) {
    return;
  }
  if (input.indexOf("sudo") >= 0) {
    input = "sudo";
  }

  if (input == "enter") {
    open("mrbank.html");
  } else if (input === "clear" || input === "cls") {
    clearScreen();
  } else if (input === "history") {
    showHist();
  } else if (input === "github") {
    open("https://github.com/terminal-js");
  } else {
    output = `<div class="terminal-line"><span class="success">➜</span> <span class="directory">~</span> ${input}</div>`;
    if (!COMMANDS.hasOwnProperty(input)) {
      output += `<div class="terminal-line">command not found: ${input}</div>`;
    } else {
      output += COMMANDS[input];
    }

    terminalOutput.innerHTML = `${terminalOutput.innerHTML}<br><div class="terminal-line">${output}<br></div>`;
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
  }
};

const key = (e) => {
  const input = userInput.innerHTML;

  if (e.key === "Enter") {
    execute(input);
    userInput.innerHTML = "";
    return;
  }

  userInput.innerHTML = input + e.key;
};

const backspace = (e) => {
  if (e.keyCode !== 8 && e.keyCode !== 46) {
    return;
  }
  userInput.innerHTML = userInput.innerHTML.slice(
    0,
    userInput.innerHTML.length - 1
  );
};

function showHist() {
  terminalOutput.innerHTML = `${
    terminalOutput.innerHTML
  }<div class="terminal-line">${lastCommands.join(", ")}</div>`;
}

let iter = 0;
const up = (e) => {
  if (e.key === "ArrowUp") {
    if (lastCommands.length > 0 && iter < lastCommands.length) {
      iter += 1;
      userInput.innerHTML = lastCommands[lastCommands.length - iter];
    }
  }

  if (e.key === "ArrowDown") {
    if (lastCommands.length > 0 && iter > 1) {
      iter -= 1;
      userInput.innerHTML = lastCommands[lastCommands.length - iter];
    }
  }
};

function clearScreen() {
  location.reload();
}
document.addEventListener("keydown", up);

document.addEventListener("keydown", backspace);
document.addEventListener("keypress", key);
document.addEventListener("DOMContentLoaded", app);


class Terminal extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="https://kit.fontawesome.com/3f2db6afb6.js" crossorigin="anonymous"></script>
    <div class="terminal_window" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"></div>
    <div class="fakeMenu">
      <div class="fakeButtons fakeClose"></div>
      <div class="fakeButtons fakeMinimize"></div>
      <div class="fakeButtons fakeZoom"></div>
    </div>
    <div class="fakeScreen">
      <div class="terminal-window primary-bg" onclick="document.getElementById('dummyKeyboard').focus();">
        <div class="terminal-output" id="terminalOutput">
          <div class="terminal-line">
            <span class="help-msg">Type <span class="help">info or help</span> to start</span>
              commands.<br>
          </div>
        </div>
        <div class="terminal-line">
          <span class="success">➜</span>
          <span class="directory">~</span>
          <span class="user-input" id="userInput"></span>
          <span class="line anim-typewriter"></span>
          <input type="text" id="keyboard" class="dummy-keyboard" />
        </div>
      </div>
    </div>
  </div>
  `
  }
}

customElements.define("terminal-js", Terminal);
