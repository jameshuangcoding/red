import LeftContainer from './containers/LeftContainer';
import MiddleContainer from './containers/MiddleContainer';
import RightContainer from './containers/RightContainer';
import './style.css';

const App = () => {
  return (
    <main id='dashboard' className='min-h-screen max-w-screen flex'>
      <LeftContainer />
      <MiddleContainer />
      <RightContainer />
    </main>
  );
};

export default App;
