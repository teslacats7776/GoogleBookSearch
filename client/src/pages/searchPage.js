import React from "react";
import Form from "../components/Form";
import Results from "../components/Result";
import API from "../utils/API"


class Search extends Component {

    state ={
        value: "",
        books: []
    };

    // Invoke searchBook function immediately when components are rendered to DOM
    componentDidMount() {
        this.searchBooks();
    }

    makeBook = bookData => {
        return {
            _id: bookData.id,
            title: bookData.volumeInfo.title,
            authors: bookData.volumeInfo.authors,
            description: bookData.volumeInfo.description,
            image: bookData.volumeInfo.imageLinks.thumbnail,
            link: bookData.volumeInfo.previewLink
        }          
    }

    // Query API 
    searchBooks = query => {
        API.getBook(query)
        .then(res => this.setState({
                books: res.data.items.map(bookData => this.makeBook(bookData)) 
            }))
            .catch(err => console.log(err))
    }

    handleInputChange = event => { //Compare with Form
        const name = event.target.name;
        const value = event.target.value;
        this.setState( {
            [name]:value
        });
    };

    handleFormSubmit = event => { // Compare with Form
        event.preventDefault(); //prevent the page to reload after hit search btn 

        this.searchBooks(this.state.search)
    }


    render () {

        return(
            <div>
                <Form 
                    search = {this.state.search}
                    handleInputChange = {this.handleInputChange}
                    handleFormSubmit = {this.handleFormSubmit}
                />

                <div className="container">
                    <h2>Results</h2>
                    <Results 
                        books = {this.state.books}
                    />
                </div>
            </div>
        )
    }
}

export default Search;