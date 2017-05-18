import React from 'react';
import Chart from './chart';
import Timer from './timer';
import Counter from './counter_mapping';

const App = () => {
  return (
      <div className='react--main'>
        <Counter/>
        <Chart/>
        <Timer/>
      </div>
  );
};

export default App;
