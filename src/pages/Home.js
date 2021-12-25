import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  DatePicker, Spin, notification,
} from 'antd';
import moment from 'moment';
import {
  setCovidCases,
  setTotalStatistics,
  setFilterDate,
} from '../redux/covid/covid-cases-actions';
import fetchCovidCases from '../services/covidCasesService';
import './Home.css';

const Home = () => {
  const dispatch = useDispatch();
  const allCountriesCovidCases = useSelector(
    (state) => state.covidCases.allCountriesCovidCases,
  );
  const totalStatistics = useSelector(
    (state) => state.covidCases.totalStatistics,
  );
  const date = useSelector((state) => state.covidCases.filterByDate);
  const [loading, setLoading] = useState(false);
  const dateFormat = 'YYYY-MM-DD';
  const loadData = async () => {
    try {
      setLoading(true);
      const res = await fetchCovidCases(date);
      const allCountryCovidCases = [];
      const { countries } = res.data.dates[date];
      const totalStatistics = res.data.total;
      Object.keys(countries).forEach((key) => allCountryCovidCases.push(countries[key]));
      dispatch(setCovidCases(allCountryCovidCases));
      dispatch(setTotalStatistics(totalStatistics));
    } catch (ex) {
      notification.error({
        message: 'An error occured',
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, [date]);

  const handleSelectDate = (date) => {
    const newDate = moment(date).format(dateFormat);
    dispatch(setFilterDate(newDate));
  };

  return (
    <div className="Home">
      <header className="Home__header flex-row justify-between align-center">
        <DatePicker
          defaultValue={moment(date, dateFormat)}
          format={dateFormat}
          onChange={handleSelectDate}
        />
      </header>
      <div className="Home__card-head">
        <div className="Home__card-head-left">
          COVID-19
          <br />
          GLOBAL STAT
        </div>
        <div className="Home__card-head-right">
          New Cases
          <br />
          {totalStatistics?.today_open_cases}
        </div>
      </div>
      <div className="Home__card-head">
        <div className="Home__card-head-left">
          Total Deaths
          <br />
          {totalStatistics?.today_deaths}
        </div>
        <div className="flex-row align-center Home__card-head-right">
          Recovered
          <br />
          {totalStatistics?.today_recovered}
        </div>
      </div>
      <div className="Home__stat">COVID STAT BY COUNTRY</div>
      <div className="flex-row flex-wrap wrapper">
        {loading ? (
          <div className="spinner-container">
            <Spin className="spinner" />
          </div>
        ) : (
          allCountriesCovidCases?.length
            && allCountriesCovidCases?.map((covidCases) => (
              <Link
                key={covidCases.id}
                className="flex-row flex-end align-center Home__card-sub"
                to={`country/${covidCases?.date}/${covidCases?.id}`}
              >
                {covidCases.name}
                <br />
                {covidCases.today_confirmed}
              </Link>
            ))
        )}
      </div>
    </div>
  );
};

export default Home;
