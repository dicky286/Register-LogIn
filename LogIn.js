let logInButton = () => {
  let mySavedEmail = window.localStorage.getItem("myEmail");
  let mySavedPassword = window.localStorage.getItem("myPassword");
  if (
    document.getElementById("emailInput").value === mySavedEmail &&
    document.getElementById("passwordInput").value === mySavedPassword
  ) {
    document.getElementById("submitButton").setAttribute("type", "submit");
    document.getElementById("form").action = "./Tictactoe.html";
  } else {
    document.getElementById("submitButton").setAttribute("type", "reset");
    document.getElementById("emailInput").classList.add("is-invalid");
    document.getElementById("passwordInput").classList.add("is-invalid");
    document.getElementById("emailInvalidFeedback").innerText =
      "The email is wrote wrong";
  }
};
