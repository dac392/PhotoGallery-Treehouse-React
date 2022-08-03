import {React, Component} from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom"
import axios from 'axios';
import apiKey from "../config";

//components
import Header from './Header'
import ImageList from './ImageList'

class App extends Component{
    constructor() {
        super();
        this.state = {
            images: [],
            loading: true
        };
    } 

    componentDidMount(){
        this.performSearch();
    }

    performSearch = (query="cat")=>{
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&format=json&nojsoncallback=1&per_page=24`)
        .then(response=>{
            this.setState({images: response.data.photos.photo, loading: false});
        })
        .catch(error=>console.log('Error fetching and parsing data', error))
    }

    render(){
        return (
            <BrowserRouter>
                <div className="container">
                    <Header />
                    {
                        (this.state.loading)
                        ? <p>Loading...</p>
                        : <ImageList data={this.state.images} />
                    }
                    {/* <Routes>
                        <Route path="/" element={ <Home /> } />
                    </Routes> */}
                </div>
            </BrowserRouter>
        );
    }
}

export default App;