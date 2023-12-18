import axios from "axios";
import { useEffect, useState } from "react";
import Error from "./Error";

const Result = ({word}) => {
  const [data, setData] = useState(null);
  const [err, setErr] = useState(null);
  const [audio,setAudio]=useState("");
  // let api="a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5";
  // let urlAudio=`https://api.wordnik.com/v4/word.json/${word}/audio?useCanonical=false&limit=50&api_key=${api}`;
  // let urlDefination=`https://api.wordnik.com/v4/word.json/${word}/definitions?limit=200&includeRelated=false&useCanonical=false&includeTags=false&api_key=${api}`;
  // let urlExample=`https://api.wordnik.com/v4/word.json/${word}/examples?includeDuplicates=false&useCanonical=false&limit=5&api_key=${api}`
  // let urlPro=`https://api.wordnik.com/v4/word.json/${word}/pronunciations?useCanonical=false&limit=50&api_key=${api}`
  
  const handle = async () => {
    // e.preventDefault();
    const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/';
    try {
      const res = await axios.get(`${url}${word}`);
      setData(res.data);
      setErr(null);
    } catch (error) {
      setData(null);
      setErr(1);
    }
  };
  function play() {
    try {
      let audio = new Audio(data[0].phonetics[0].audio);
      audio.play();
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    handle()
  }, [word])
  
  return (
    <>
      {data ? (
        <>
          <div className="word ">
            <h3>{word}</h3>
            <button onClick={play}>
              <i className="fas fa-volume-up"></i>
            </button>
          </div>
          <div className="details">
            <p>{data[0].meanings[0].partOfSpeech}</p>
            <p>/{data[0].phonetic}/</p>
          </div>
          <p className="word-meaning">
            {data[0].meanings[0].definitions[0].definition}
          </p>
          <p className="word-example">
            {data[0].meanings[0].definitions[0].example || ''}
          </p>
        </>
      ) : null}
      
      {err ? <Error/>: null}
    </>
  );
};

export default Result;
