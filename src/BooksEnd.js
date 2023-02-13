import { Component } from 'react';
import booksicon from './booksicon.jpg';

export class BooksEnd extends Component {
    state = {
        userInput: "",
        booksEnd: []
    }

    nameOfBookEnd(e) {
        this.setState({userInput: e});
        console.log(e)
    }

    addItems(addEndBook) {
        if(addEndBook === '') {
            alert ("Пожалуйста, введите название книги");
        }
        else {
            let listEndBooks = this.state.booksEnd;
            listEndBooks.push(addEndBook);
            this.setState ({booksEnd: listEndBooks, userInput: ' '});
            console.log(listEndBooks);
        }
    }

    deleteBooks() {
        let listEndBooks = this.state.booksEnd;
        listEndBooks.length = 0;
        this.setState({booksEnd: listEndBooks});
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
                    onChange = {(e) => {this.nameOfBookEnd(e.target.value)}} 
                    value = {this.state.userInput} />
                </div>
                <div>
                    <button onClick = {() => this.addItems (this.state.userInput)} className="btn">Добавить</button>
                </div>
                <ul>
                    {this.state.booksEnd.map((unit, index) => (
                        <li onClick = {this.cross} key = {index}>
                        <img src = {booksicon} alt="booksicon" width="30px"/>  
                        {unit}</li>
                    ))}
                </ul>
                <div>
                    <button onClick = {() => this.deleteBooks (this.state.userInput)} className="btnDelete">Удалить</button>
                </div>
                </form>
            </div>
        )
    }
}