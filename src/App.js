import { useEffect, useState } from "react";
import "./App.css";
import Cities from "./components/Cities";

import axios from "axios";

const options = [
  { city: "Austin, TX", value: "austin" },
  { city: "Reno, NV", value: "reno" },
  { city: "Tampa, FL", value: "tampa" },
  { city: "All", value: "all" },
];

const App = () => {
  const [data, setData] = useState([]);

  const [selectCity, setSelectCity] = useState();

  const [cityAustin, setCityAustin] = useState({
    city: "austin",
    state: false,
  });
  const [cityReno, setCityReno] = useState({ city: "reno", state: false });
  const [cityTampa, setCityTampa] = useState({ city: "tampa", state: false });

  const selectCitiesHandler = (e) => {
    const city = e.target.value;
    setSelectCity(city);

    if (city === cityAustin.city) {
      setCityAustin((prevState) => {
        return { ...prevState, state: !prevState.state };
      });
      setCityReno((prevState) => {
        return { ...prevState, state: false };
      });
      setCityTampa((prevState) => {
        return { ...prevState, state: false };
      });
    } else if (city === cityReno.city) {
      setCityAustin((prevState) => {
        return { ...prevState, state: false };
      });
      setCityReno((prevState) => {
        return { ...prevState, state: !prevState.state };
      });
      setCityTampa((prevState) => {
        return { ...prevState, state: false };
      });
    } else if (city === cityTampa.city) {
      setCityAustin((prevState) => {
        return { ...prevState, state: false };
      });
      setCityReno((prevState) => {
        return { ...prevState, state: false };
      });
      setCityTampa((prevState) => {
        return { ...prevState, state: !prevState.state };
      });
    } else {
      setCityAustin((prevState) => {
        return { ...prevState, state: true };
      });
      setCityReno((prevState) => {
        return { ...prevState, state: true };
      });
      setCityTampa((prevState) => {
        return { ...prevState, state: true };
      });
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `localhost:5197/WeatherForecast/${selectCity}`
      );
      setData(response.data);
    };
    fetchData();
  }, [selectCity]);

  return (
    <div className="app">
      <select name="cities" onChange={selectCitiesHandler} className="dropdown">
        <option>Select Location</option>
        {options.map((option, index) => {
          return (
            <option key={index} value={option.value}>
              {option.city}
            </option>
          );
        })}
        {/* <option value="austin">Austin, TX</option>
        <option value="reno">Reno, NV</option>
        <option value="tampa">Tampa, FL</option> */}
      </select>

      <div className="cities">
        {cityAustin.state ? <Cities data={data} /> : <div></div>}
        {cityReno.state ? <Cities data={data} /> : <div></div>}
        {cityTampa.state ? <Cities data={data} /> : <div></div>}
      </div>
    </div>
  );
};

export default App;
