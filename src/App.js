
import './App.css';
import { Books } from './Books';
import { BooksEnd } from './BooksEnd';
import books from './books.jpg';


function App() {
  return (
    <div className="App">
      <div>
        <h1>Книги для чтения в феврале</h1>
      </div>
      <div className='listOfBooks'>
        <h2>Прочитать обязательно</h2>
        <Books />
      </div>
      <div className='listOfBooks'>
        <h2>Прочитать дополнительно</h2>
        <BooksEnd />
      </div>
      <div className='capture'>
        <img src={ books } alt="books" width="70%" />
      </div>
    </div>
  )
}

export default App;
