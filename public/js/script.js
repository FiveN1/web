
// https://stackoverflow.com/questions/33163202/how-to-include-simple-javascript-within-hugo

console.log("Hello World!!!");

function copyEmail() {
  var email = "tomas.verheyen.personal@gmail.com";
  navigator.clipboard.writeText(email);
  alert("Copied to clipboard: " + email);
}