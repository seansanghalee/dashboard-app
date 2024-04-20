const login = document.querySelector(".greeting__login");
const loginForm = document.querySelector(".greeting__login-form");
const loginInput = document.querySelector(".greeting__login-form input");
const greetingText = document.querySelector(".greeting__text");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function paintGreetings(username) {
  greetingText.classList.remove(HIDDEN_CLASSNAME);
  greetingText.innerText = `Welcome home, ${username}!`;
}

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  login.classList.add(HIDDEN_CLASSNAME);
  paintGreetings(username);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  login.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
