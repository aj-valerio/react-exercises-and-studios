import logo from './logo.svg';
import classes from './App.css?inline';
import MovieList from './components/MovieList.jsx';
import ChoresList from './components/ChoresList.jsx';
import BookList from './components/BookList.jsx';
import HobbyLinks from './components/HobbyLinks.jsx';

function App() {
  return (
    <div className="App">
      <ChoresList />
      <div class={classes.similarComponents}>
        <MovieList />
        <BookList />
        <HobbyLinks />
      </div>
    </div>
  );
}

export default App;
