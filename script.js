const input_num = document.getElementById('input-num');
const convert_btn = document.getElementById('convert-btn');
let meterEl = document.getElementById('meter');
let feetEl = document.getElementById('feet');
let literEl = document.getElementById('liter');
let gallonsEl = document.getElementById('gallons');
let kilosEl = document.getElementById('kilos');
let poundsEl = document.getElementById('pounds');
let isConversion = false;

convert_btn.addEventListener('click', convertUnits)

if (isConversion === true) {
    convertUnits();
} else {
    meterEl.innerHTML = "1 meter = 3.281 feet"
    feetEl.innerHTML = "1 foot = 0.305 meters"
    literEl.innerHTML = "1 liter = 0.264 gallons"
    gallonsEl.innerHTML = "1 gallon = 3.785 liters"
    kilosEl.innerHTML = "1 kilo = 2.204 pounds"
    poundsEl.innerHTML = "1 pound = 1.054 kilos"
}

function convertUnits() {
    if (input_num.value == "") {
        isConversion = false;
        alert("Please enter a number!");
    } else {
        // meter conversion
        let meter = input_num.value * 3.281;
        meter = meter.toFixed(3);
        meterEl.innerHTML = `${input_num.value} meters = ${meter} feet`;

        // feet conversion
        let feet = input_num.value / 3.281;
        feet = feet.toFixed(3);
        feetEl.innerHTML = `${input_num.value} feet = ${feet} meters`;

        // liter conversion
        let liter = input_num.value * 0.264;
        liter = liter.toFixed(3);
        literEl.innerHTML = `${input_num.value} liters = ${liter} gallons`;

        // gallon conversion
        let gallon = input_num.value / 0.264;
        gallon = gallon.toFixed(3);
        gallonsEl.innerHTML = `${input_num.value} gallons = ${gallon} liters`;

        // kilos conversion
        let kilo = input_num.value * 2.204;
        kilo = kilo.toFixed(3);
        kilosEl.innerHTML = `${input_num.value} kilos = ${kilo} pounds`;

        // pound conversion
        let pound = input_num.value / 2.204;
        pound = pound.toFixed(3);
        poundsEl.innerHTML = `${input_num.value} pounds = ${pound} kilos`;
    }
}