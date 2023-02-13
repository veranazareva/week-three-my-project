import { Component } from 'react';
import bookicon from './bookicon.jpg';

export class Books extends Component {
    state = {
        userInput: "",
        books: []
    }

    nameOfBook(e) {
        this.setState({ userInput: e});
        console.log(e)
    }

    addItem(addBook) {
        if (addBook === '') {
            alert("Пожалуйста, введите название книги");
        }
        else {
            let listMainBooks = this.state.books;
            listMainBooks.push(addBook);
            this.setState({books: listMainBooks, userInput:' '});
            console.log(listMainBooks);
        }
    }

    deleteBook() {
        let listMainBooks = this.state.books;
        listMainBooks = [];
        this.setState({books: listMainBooks});
    }

    cross(event) {
        const li = event.target;
        li.classList.toggle('cross');
    }
    
    formSubmit(e) {
        e.preventDefault();
    }

    render() {
        return( 
            <div>
                <form onSubmit = {this.formSubmit}>
                <div>
                    <input type="text"
                    placeholder='Название книги'
                    onChange = {(e) => {this.nameOfBook (e.target.value)}} 
                    value = {this.state.userInput} />
                </div>
                <div>
                    <button onClick = {() => this.addItem (this.state.userInput)} className="btn">Добавить</button>
                </div>
                <ul>
                    {this.state.books.map((unit, index) => (
                        <li onClick = {this.cross} key = {index}>
                        <img src = {bookicon} alt="bookicon" width="30px"/> 
                        {unit}</li>
                    ))}
                </ul>
                <div>
                    <button onClick = {() => this.deleteBook (this.state.userInput)} className="btnDelete">Удалить</button>
                </div>
                </form>
            </div>
        )
    }
}