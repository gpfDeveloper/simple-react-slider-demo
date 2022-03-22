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

import { useReducer } from 'react';

const initState = {
  marginTop: 0,
  marginLeft: 0,
  showTopBtn: true,
  showBottomBtn: true,
  showLeftBtn: true,
  showRightBtn: true,
};

const handlerClickTop = (state) => {
  const marginTop = state.marginTop - 400;
  let showTopBtn = true;
  if (state.marginTop <= -1200) {
    showTopBtn = false;
  }
  return { ...state, marginTop, showTopBtn, showBottomBtn: true };
};

const handlerClickBottom = (state) => {
  const marginTop = state.marginTop + 400;
  let showBottomBtn = true;
  if (state.marginTop >= 1200) {
    showBottomBtn = false;
  }
  return { ...state, marginTop, showBottomBtn, showTopBtn: true };
};

const handlerClickLeft = (state) => {
  const marginLeft = state.marginLeft + 400;
  let showLeftBtn = true;
  if (state.marginLeft >= 1200) {
    showLeftBtn = false;
  }
  return { ...state, marginLeft, showLeftBtn, showRightBtn: true };
};

const handlerClickRight = (state) => {
  const marginLeft = state.marginLeft - 400;
  let showRightBtn = true;
  if (state.marginLeft <= -1200) {
    showRightBtn = false;
  }
  return { ...state, marginLeft, showRightBtn, showLeftBtn: true };
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'clickTop':
      return handlerClickTop(state);
    case 'clickBottom':
      return handlerClickBottom(state);
    case 'clickLeft':
      return handlerClickLeft(state);
    case 'clickRight':
      return handlerClickRight(state);
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initState);

  const controlTopHandler = () => {
    dispatch({ type: 'clickTop' });
  };
  const controlBottomHandler = () => {
    dispatch({ type: 'clickBottom' });
  };
  const controlLeftHandler = () => {
    dispatch({ type: 'clickLeft' });
  };
  const controlRightHandler = () => {
    dispatch({ type: 'clickRight' });
  };
  return (
    <div className="App">
      <div className="watches">
        <div className="watch-bands" style={{ marginLeft: state.marginLeft }}>
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
        <div className="watch-cases" style={{ marginTop: state.marginTop }}>
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
      {state.showTopBtn && (
        <button
          className="watch-control watch-control--top "
          onClick={controlTopHandler}
        >
          <i className="fas fa-angle-up"></i>
        </button>
      )}
      {state.showBottomBtn && (
        <button
          className="watch-control watch-control--bottom "
          onClick={controlBottomHandler}
        >
          <i className="fas fa-angle-down"></i>
        </button>
      )}
      {state.showLeftBtn && (
        <button
          className="watch-control watch-control--left "
          onClick={controlLeftHandler}
        >
          <i className="fas fa-angle-left"></i>
        </button>
      )}
      {state.showRightBtn && (
        <button
          className="watch-control watch-control--right "
          onClick={controlRightHandler}
        >
          <i className="fas fa-angle-right"></i>
        </button>
      )}

      <footer>
        Simple React Slide Animation Demo developed by{' '}
        <a href="https://www.pengfeidevelopment.com">Pengfei Gao</a>
      </footer>
    </div>
  );
}

export default App;
