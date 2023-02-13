
import './App.css';
import { Books } from './Books';
import books from './books.jpg';
import { BooksEnd } from './BooksEnd';
import booksTwo from './booksTwo.jpg';

function App() {
  return (
    <div className="App">
      
      <div>
        <h1>Книги для чтения в феврале</h1>
      </div>

      <div className='listOfBooks'>
        <div>
          <h2>Прочитать обязательно</h2>
          <Books />
        </div>
        <div className='capture'>
          <img src={ books } alt="books" width="400px" />
        </div>
      </div>

      <div className='listOfBooks'>
        <div className='capture'>
          <img src={ booksTwo } alt="booksTwo" width="400px" />
        </div>
        <div>
          <h2>Прочитать дополнительно</h2>
          <BooksEnd />
        </div>
      </div>

    </div>
  );
}

export default App;
