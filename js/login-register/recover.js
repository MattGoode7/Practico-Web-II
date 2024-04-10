document.getElementById("email").addEventListener("input", function () {
  var emailInput = this.value.trim();
  var submitButton = document.getElementById("submitButton");

  if (emailInput.indexOf("@") !== -1) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
});
