import { useState } from 'react';
import Form from './Form';

function Burger(props) {
  const [btn, setBtn] = useState(false);

  return props.push ? (
    <div className="flex flex-col justify-center items-stretch">
      <div className="p-3 basis-1/5 flex-grow font-comforta bg-white text-black hover:bg-yellow-400 hover:text-white border-t-2 border-black md:border-t-0">
        <a href="#profile">Profile</a>
      </div>
      <div className="p-3 basis-1/5 flex-grow font-comforta bg-white text-black hover:bg-yellow-400 hover:text-white ">
        <a href="#experiences">Experiences</a>
      </div>
      <div className="p-3 basis-1/5 flex-grow font-comforta bg-white text-black hover:bg-yellow-400 hover:text-white ">
        <a href="#article">Article</a>
      </div>
      <div className="p-3 basis-1/5 flex-grow font-comforta bg-white text-black hover:bg-yellow-400 hover:text-white ">
        <button onClick={() => setBtn(true)}>Contact</button>
      </div>
      <div className="basis 1/5 flex justify-center items-stretch">
        <button
          className="py-2 w-full flex justify-center bg-blue-700"
          onClick={() => props.setPush(false)}
        >
          <img src="./down.png" alt="arrow" className="rotate-180" />
        </button>
      </div>
      <Form pop={btn} setPop={setBtn} />
    </div>
  ) : (
    ''
  );
}

export default Burger;
