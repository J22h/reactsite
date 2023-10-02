import React from "react";
import "./Flightselector.css";

export default function Flightselector() {
  return (
    <div>
      <form>
        <label for="cars">Destination:</label>
        <select id="cars" name="cars">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="fiat">Fiat</option>
          <option value="audi">Audi</option>
        </select>
        <input type="submit" />
        <label for="cars">Flight Time:</label>
        <select id="cars" name="cars">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="fiat">Fiat</option>
          <option value="audi">Audi</option>
        </select>
        <input type="submit" />
      </form>
    </div>
  );
}
