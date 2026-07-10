function convertTemperature() {

    let temp = parseFloat(document.getElementById("temperature").value);
    let unit = document.getElementById("unit").value;
    let output = document.getElementById("output");

    if (isNaN(temp)) {
        output.innerHTML = "Please enter a valid temperature.";
        return;
    }

    let celsius, fahrenheit, kelvin;

    if (unit === "celsius") {

        celsius = temp;
        fahrenheit = (temp * 9 / 5) + 32;
        kelvin = temp + 273.15;

    }
    else if (unit === "fahrenheit") {

        fahrenheit = temp;
        celsius = (temp - 32) * 5 / 9;
        kelvin = celsius + 273.15;

    }
    else {

        kelvin = temp;
        celsius = temp - 273.15;
        fahrenheit = (celsius * 9 / 5) + 32;

    }

    output.innerHTML = `
        <strong>Celsius:</strong> ${celsius.toFixed(2)} °C <br><br>
        <strong>Fahrenheit:</strong> ${fahrenheit.toFixed(2)} °F <br><br>
        <strong>Kelvin:</strong> ${kelvin.toFixed(2)} K
    `;
}