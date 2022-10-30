import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Thing } from '../.';
import { Button } from '../src/Button';

const App = () => {
  return (
    <div>
      <Thing />
      <Button>click me!</Button>
      {/* <button onClick={()=>console.log("hii")}>original button</button> */}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
