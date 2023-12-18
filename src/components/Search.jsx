// import axios from 'axios';
import {useState} from 'react';
import Result from './Result';
// import Error from './Error';
import '../index.css';
// import React from 'react';

const Search = () => {
  const [value, setValue] = useState('');
  const [data, setData] = useState('');

  const handle = (e) => {
    e.preventDefault();

    setData(value);
  };
  return (
    <>
      <div className="container bg-slate-500">
        <form className="search-box" onSubmit={handle}>
          <input
            type="text"
            placeholder="Type the word here.."
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
        <div className="result">
          <Result word={data} />
        </div>
      </div>
    </>
  );
};

export default Search;
