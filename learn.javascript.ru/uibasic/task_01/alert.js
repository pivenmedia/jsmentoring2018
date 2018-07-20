// Script for task #1 from https://learn.javascript.ru/uibasic
var userName = "";
function getName() {
  return prompt("Ваше имя?", "");
}
userName = getName();
console.log("userName: " + userName);
document.getElementById("userNamePlaceHolder").innerHTML = "<h1>Здравствуйте " + userName + "!</h1>";
