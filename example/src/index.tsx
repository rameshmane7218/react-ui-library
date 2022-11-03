import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Thing, Button, PinInputExample } from '../../src';

const App = () => {
  const btnRef = React.useRef<HTMLButtonElement | null>(null);
  const handleOnClick = () => {
    console.log(btnRef.current);
  };
  return (
    <div>
      <Thing />
      <Button
        ref={btnRef}
        size="lg"
        data-att="dataset"
        disabled={false}
        variant="secondary"
        onClick={handleOnClick}
        // onMouseLeave={() => console.log('mouse leave')}
      >
        click me!
      </Button>
      <button
        data-toggle="collapse"
        // onMouseEnter={() => console.log('mouse enter')}
        // onClick={handleOnClick}
        // onMouseLeave={() => console.log('mouse leave')}
      >
        button
      </button>
      <PinInputExample />
    </div>
  );
};
// const root = ReactDOM.createRoot(document.getElementById('root'));

ReactDOM.render(<App />, document.getElementById('root'));
