import React, { useState, useEffect } from 'react';

import './App.css';

const box = [
  { id: 1, name: '1' },
  { id: 2, name: '2' },
  { id: 3, name: '3' },
  { id: 4, name: '4' },
  { id: 5, name: '5' },
  { id: 6, name: '6' },
  { id: 7, name: '7' },
  { id: 8, name: '8' },
];

function App() {
  const [startAnimation, setStartAnimation] = useState(false);
  const [showStartNotice, setShowStartNotice] = useState(false);
  const [showEndNotice, setShowEndNotice] = useState(false);
  const [notices, setNotices] = useState([]);

  const changeClassHandler = () => {
    setShowStartNotice(true);
    setStartAnimation(true);
  };

  const AnimationStartHandler = (event) => {
    setNotices([
      ...notices,
      `Cell ${event.target.innerText} animation start`,
    ]);
  };

  const AnimationEndHandler = (event) => {
    setNotices([
      ...notices,
      `Cell ${event.target.innerText} animation end`,
    ]);
  };

  useEffect(() => {
    if (notices.length === box.length * 2) {
      setShowEndNotice(true);
      alert('success');
    }
  }, [notices]);

  return (
    <>
      <div className='block-top'>
        <div className='block-top__inner'>
          {box.map((item, index) => (
            <div
              key={item.id}
              className={startAnimation ? 'box active' : 'box'}
              style={{ animationDelay: `${index * 300}ms` }}
              onAnimationStart={AnimationStartHandler}
              onAnimationEnd={AnimationEndHandler}
            >
              {item.name}
            </div>
          ))}
        </div>
      </div>

      <div className='block-bottom'>
        <div className='block-bottom__inner'>
          {showStartNotice && 'Progress Start'}

          {notices.map((notice, index) => (
            <div key={index}>{notice}</div>
          ))}

          {showEndNotice && 'Progress End'}
        </div>
      </div>

      <button onClick={changeClassHandler} className='btn-start'>
        {startAnimation ? 'In progress' : 'Start'}
      </button>
    </>
  );
}

export default App;
