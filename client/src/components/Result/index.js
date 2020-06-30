import React, { Component } from "react";
import API from "../../utils/API";

class Results extends Component {

    //Initial state
    state = {
        savedBooks: [], //Savedbook is empty 
        status : ""
    }

    //When we start the web browser, update the state of the savedBooks array
    componentDidMount () {
        API.getAllSavedBooks()
        .then(savedBooks => this.setState({ savedBooks : savedBooks}))
        .catch(err => console.log(err))
    }

    handleSave = (book) => {
        console.log("result",book)
        const bookData = {
            title: book.title,
            author: book.authors,
            synopsis: book.description,
            image: book.image,
            link: book.link
        }
        console.log(this.state.status)
        if(this.state.savedBooks.map(book => book._id).includes(book._id)) {
            API.deleteBook(book._id)
            .then(deleteBook => this.setState({ savedBooks: this.state.savedBooks.filter(book => book._id !== deleteBook._id)}))
            .catch(err => console.log(err));

        } else {

            API.saveBook(bookData)
            .then(savedBook => this.setState({ savedBooks: this.state.savedBooks.concat([savedBook])}))
            .catch(err => console.log(err))
         }
    }

    render () {

        return(

            <div>
                {!this.props.books.length ? (
                    <h1 className="text-center">No results to display</h1>
                ) : (
                    <div>
                        {this.props.books.map(result => (
                            <div className="card mb-3" key={result._id}>
                                <div className="row">
                                    <div className="col-md-2">
                                        <img atl={result.title} className="img-fluid" src={result.image} />
                                    </div>

                                    <div className="col-md-10">
                                        <div className="card-body">
                                            <h5 className="card-title"> {result.title} - BY - {result.authors}</h5>
                                            <p className="card-text"> {result.description}</p>

                                            <div>
                                                <a href= {result.link} className="btn badge-pill btn-outline-dark mt-3" >View</a>

                                                <button 
                                                    className="btn badge-pill btn-outline-warning mt-3 ml-3" 
                                                    onClick={ () => this.handleSave(result) }
                                                >
                                                    {this.state.savedBooks.map(
                                                        book => book._id
                                                    ).includes(result._id) ? "Unsave" : "Save"
                                                    }

                                                    {/* {this.state.savedBooks.map(
                                                        book => book._id
                                                    ).includes(result._id) ? this.setState({status: "unsaved"}) : this.setState({status: "Saved"})
                                                    }    */}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        )
    }
}

export default Results;