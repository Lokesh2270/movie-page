import './App.css';
import AppBar from './appbar';
import TemporaryDrawer from './drawer';
import MoviePage from './body';

function App() {
  return (
    <div>
      <AppBar/>
      <MoviePage/>
      <TemporaryDrawer/>
      </div>
  );
}

export default App;
