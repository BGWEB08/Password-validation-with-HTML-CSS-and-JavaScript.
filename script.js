let isVisible = false;

function see() {
  const input = document.getElementById("password");
  const seeButton = document.getElementById("see");

  if (isVisible) {
    input.type = "password";
    isVisible = false;
    seeButton.style.color = "gray";
  } else {
    input.type = "text";
    isVisible = true;
    seeButton.style.color = "#262626";
  }
}

function check() {
  const inputElement = document.getElementById("password");
  let input = inputElement.value.trim();
  inputElement.value = input;

  const countElement = document.getElementById("count");
  countElement.innerText = "Length: " + input.length;

  const checkShortElement = document.getElementById("check-short");
  const checkLongElement = document.getElementById("check-long");
  const checkNumberElement = document.getElementById("check-number");
  const checkSpecialElement = document.getElementById("check-special");

  if (input.length <= 10) {
    checkShortElement.style.color = "green";
} else {
    checkShortElement.style.color = "red";
}

if (input.length >= 5) {
    checkLongElement.style.color = "green";
} else {
    checkLongElement.style.color = "red";
}

  if (input.match(/[0-9]/)) {
    checkNumberElement.style.color = "green";
  } else {
    checkNumberElement.style.color = "red";
  }

  if (input.match(/[^A-Za-z0-9-' ']/)) {
    checkSpecialElement.style.color = "green";
  } else {
    checkSpecialElement.style.color = "red";
  }
}
