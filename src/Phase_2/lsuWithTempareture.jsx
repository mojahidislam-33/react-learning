import { useState } from "react";

function CelsiusInput({ temperature, onTemperatureChange }) {
  return (
    <div>
      <label>Celsius: </label>

      <input
        value={temperature}
        onChange={(event) =>
          onTemperatureChange(event.target.value)
        }
      />
    </div>
  );
}

function FahrenheitDisplay({ temperature }) {
  const fahrenheit =
    temperature === ""
      ? ""
      : (Number(temperature) * 9) / 5 + 32;

  return (
    <p>
      Fahrenheit: {fahrenheit}
    </p>
  );
}

function LiftingState() {
  const [temperature, setTemperature] = useState("");

  return (
    <div>
      <h1>Temperature Converter</h1>

      <CelsiusInput
        temperature={temperature}
        onTemperatureChange={setTemperature}
      />

      <FahrenheitDisplay
        temperature={temperature}
      />
    </div>
  );
}

export default LiftingState;