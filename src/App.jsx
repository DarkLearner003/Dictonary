import {Route, Routes} from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './components/Home';
import Search from './components/Search';
import Random from './components/Random';

function App() {
  return (
    <>
      <NavBar />
      <div className="text-center h-[70%]">
        <Routes>
          <Route path="/" element={<Home abc="abc" />} />
          <Route path="/search" element={<Search />} />
          <Route path="/random" element={<Random />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
