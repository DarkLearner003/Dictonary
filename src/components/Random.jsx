import {generate} from 'random-words';
import Result from './Result';
const Random = () => {
  return (
    <div className="result flex flex-col justify-center">
      <Result word={generate()} />
    </div>
  );
};

export default Random;
