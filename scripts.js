// Function to change the button color when clicked
function changeColor() {
    const button = document.getElementById("colorButton");
    const colors = ["#0066cc", "#ff6600", "#28a745", "#dc3545", "#17a2b8"];
    
    // Get a random color from the array and apply it to the button
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    button.style.backgroundColor = randomColor;
}

// Function to show a greeting based on the current time
function showGreeting() {
    const currentHour = new Date().getHours();
    let greetingMessage;

    if (currentHour < 12) {
        greetingMessage = "Good Morning!";
    } else if (currentHour < 18) {
        greetingMessage = "Good Afternoon!";
    } else {
        greetingMessage = "Good Evening!";
    }

    alert(greetingMessage);
}

// Function to add two numbers and display the result
function addNumbers() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const result = num1 + num2;

    // Check if both values are numbers
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("result").innerText = "Please enter valid numbers!";
    } else {
        document.getElementById("result").innerText = "Result: " + result;
    }
}
