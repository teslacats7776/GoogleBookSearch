import React, {Component} from "react";
import API from "../utils/API";
import Results from "../components/Result";

class Saved extends Component {

    //Initial state of saved book is an empty array
    state ={
        savedBooks: []
    }

    componentDidMount() {
        API.savedBooks()
        .then(savedBooks => this.setState({ savedBooks: savedBooks}))
        .catch(err => console.log(err))
    }

    render () {

        return(
            <div className="container">
                <h2>Saved Books</h2>
                <Results books ={this.state.savedBooks} />
            </div>
        )
    }

}

export default Saved;