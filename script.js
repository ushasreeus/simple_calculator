 // Variables to track the current input and previous operations
let display = document.getElementById('calc-display');
let currentInput = '';

function appendValue(value) {
  currentInput += value;
  display.value = currentInput;
}

function clearDisplay() {
  currentInput = '';
  display.value = '';
}

function calculate() {
  try {
    // Evaluate the expression using JavaScript's eval
    const result = eval(currentInput);
    if (!isFinite(result)) throw new Error("Math Error");
    display.value = result;
    currentInput = result.toString();
  } catch (error) {
    display.value = "Error";
    currentInput = '';
  }
}
function sqrt() {
    try {
      const result = Math.sqrt(eval(currentInput));
      display.value = result;
      currentInput = result.toString();
    } catch {
      display.value = "Error";
    }
  }
  function percentage() {
    try {
      const result = eval(currentInput) / 100;
      display.value = result;
      currentInput = result.toString();
    } catch {
      display.value = "Error";
    }
  }
  
  
