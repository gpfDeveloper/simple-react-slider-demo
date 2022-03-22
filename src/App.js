import './App.css';

import watchBand1 from './images/watch-band-1.jpg';
import watchBand2 from './images/watch-band-2.jpg';
import watchBand3 from './images/watch-band-3.jpg';
import watchBand4 from './images/watch-band-4.jpg';
import watchBand5 from './images/watch-band-5.jpg';
import watchBand6 from './images/watch-band-6.jpg';
import watchBand7 from './images/watch-band-7.jpg';
import watchBand8 from './images/watch-band-8.jpg';
import watchBand9 from './images/watch-band-9.jpg';

import watchCase1 from './images/watch-case-1.png';
import watchCase2 from './images/watch-case-2.png';
import watchCase3 from './images/watch-case-3.png';
import watchCase4 from './images/watch-case-4.png';
import watchCase5 from './images/watch-case-5.png';
import watchCase6 from './images/watch-case-6.png';
import watchCase7 from './images/watch-case-7.png';
import watchCase8 from './images/watch-case-8.png';
import watchCase9 from './images/watch-case-9.png';

import { useState } from 'react';

function App() {
  const [marginTop, setMarginTop] = useState(0);
  const [marginLeft, setMarginLeft] = useState(0);
  // const [showTopButton, setShowTopButton] = useState(true);
  // const [showBottomButton, setShowBottomButton] = useState(true);
  // const [showLeftButton, setShowLeftButton] = useState(true);
  // const [showRightButton, setShowRightButton] = useState(true);
  // console.log(marginTop);
  // const controlBtnDisplay = () => {
  //   if (marginTop < -1200) {
  //     setShowTopButton(false);
  //   } else {
  //     setShowTopButton(true);
  //   }
  //   if (marginTop > 1200) {
  //     setShowBottomButton(false);
  //   } else {
  //     setShowBottomButton(true);
  //   }
  //   if (marginLeft < -1200) {
  //     setShowRightButton(false);
  //   } else {
  //     setShowRightButton(true);
  //   }
  //   if (marginLeft > 1200) {
  //     setShowLeftButton(false);
  //   } else {
  //     setShowLeftButton(true);
  //   }
  // };
  const controlTopHandler = () => {
    setMarginTop((pre) => pre - 400);
    // controlBtnDisplay();
  };
  const controlBottomHandler = () => {
    setMarginTop((pre) => pre + 400);
    // controlBtnDisplay();
  };
  const controlLeftHandler = () => {
    setMarginLeft((pre) => pre + 400);
    // controlBtnDisplay();
  };
  const controlRightHandler = () => {
    setMarginLeft((pre) => pre - 400);
    // controlBtnDisplay();
  };
  return (
    <div className="App">
      <div className="watches">
        <div className="watch-bands" style={{ marginLeft: marginLeft }}>
          <img src={watchBand1} alt="watch-band" />
          <img src={watchBand2} alt="watch-band" />
          <img src={watchBand3} alt="watch-band" />
          <img src={watchBand4} alt="watch-band" />
          <img src={watchBand5} alt="watch-band" />
          <img src={watchBand6} alt="watch-band" />
          <img src={watchBand7} alt="watch-band" />
          <img src={watchBand8} alt="watch-band" />
          <img src={watchBand9} alt="watch-band" />
        </div>
        <div className="watch-cases" style={{ marginTop: marginTop }}>
          <img src={watchCase1} alt="watch-case" />
          <img src={watchCase2} alt="watch-case" />
          <img src={watchCase3} alt="watch-case" />
          <img src={watchCase4} alt="watch-case" />
          <img src={watchCase5} alt="watch-case" />
          <img src={watchCase6} alt="watch-case" />
          <img src={watchCase7} alt="watch-case" />
          <img src={watchCase8} alt="watch-case" />
          <img src={watchCase9} alt="watch-case" />
        </div>
      </div>
      {/* {showTopButton && (
        <button
          className="watch-control watch-control--top "
          onClick={controlTopHandler}
        >
          <i className="fas fa-angle-up"></i>
        </button>
      )}
      {showBottomButton && (
        <button
          className="watch-control watch-control--bottom "
          onClick={controlBottomHandler}
        >
          <i className="fas fa-angle-down"></i>
        </button>
      )}
      {showLeftButton && (
        <button
          className="watch-control watch-control--left "
          onClick={controlLeftHandler}
        >
          <i className="fas fa-angle-left"></i>
        </button>
      )}
      {showRightButton && (
        <button
          className="watch-control watch-control--right "
          onClick={controlRightHandler}
        >
          <i className="fas fa-angle-right"></i>
        </button>
      )} */}

      <button
        className="watch-control watch-control--top "
        onClick={controlTopHandler}
      >
        <i className="fas fa-angle-up"></i>
      </button>

      <button
        className="watch-control watch-control--bottom "
        onClick={controlBottomHandler}
      >
        <i className="fas fa-angle-down"></i>
      </button>

      <button
        className="watch-control watch-control--left "
        onClick={controlLeftHandler}
      >
        <i className="fas fa-angle-left"></i>
      </button>

      <button
        className="watch-control watch-control--right "
        onClick={controlRightHandler}
      >
        <i className="fas fa-angle-right"></i>
      </button>
      <footer>
        Simple React Slide Animation Demo developed by{' '}
        <a href="https://www.pengfeidevelopment.com">Pengfei Gao</a>
      </footer>
    </div>
  );
}

export default App;
