function getPin() {
  const pin = Math.round(Math.random() * 10000);
  const pinString = pin + "";

  if (pinString.length == 4) {
    return pin;
  } else {
    return getPin();
  }
}

function generatePin() {
  const pin = getPin();
  document.getElementById("display-pin").value = pin;
}

function keyPad(event) {
  const number = event.target.innerText;
  const calcInput = document.getElementById("input");

  if (isNaN(number)) {
    if (number == "C") {
      calcInput.value = "";
    }
  } else {
    const prevNumber = calcInput.value;
    const newNumber = prevNumber + number;
    calcInput.value = newNumber;
  }
}

function submit() {
  const pin = document.getElementById("display-pin");
  const calcInput = document.getElementById("input");

  if (pin.value == calcInput.value) {
    document.getElementById('match').style.display = 'block';
    document.getElementById('no-match').style.display = 'none';
  }
  else {
    document.getElementById('no-match').style.display = 'block';
    document.getElementById('match').style.display = 'none';
  }
}
