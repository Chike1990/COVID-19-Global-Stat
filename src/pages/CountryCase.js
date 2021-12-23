import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import leftArrow from "../assets/left-arrow.svg";

import "./CountryCase.css";

const CountryCase = () => {
  const allCountriesCovidCases = useSelector(
    (state) => state.covidCases.allCountriesCovidCases
  );
  const { id } = useParams();
  const [country, setCountry] = useState({});

  useEffect(() => {
    const countryCase = allCountriesCovidCases?.find(
      (country) => country?.id === id
    );
    setCountry(countryCase);
    console.log(countryCase);
  }, []);
  return (
    <div>
      <div className="Home__card-head">
        <div className="Home__card-head-left" id="left-arrow-wrapper">
          <Link to="/">
            <img src={leftArrow} className="left-icon" />
          </Link>
        </div>
        <div className="Home__card-head-right">
          {country?.name} <br />
          STATISTICS
        </div>
      </div>
      <div className="Highlight">
        <div>
          <span>Todays Confirmed Cases</span>
          <span>{country?.today_confirmed}</span>
        </div>
        <div>
          <span>Today Deaths</span>
          <span>{country?.today_deaths}</span>
        </div>
        <div>
          <span>Todays New Open Cases</span>
          <span>{country?.today_new_open_cases}</span>
        </div>
        <div>
          <span>Today Recovered</span>
          <span>{country?.today_recovered}</span>
        </div>
      </div>
    </div>
  );
};

export default CountryCase;
