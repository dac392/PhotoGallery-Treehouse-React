import {React, Component} from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom"

class Counter extends Component{

    render(){
        return (
            <BrowserRouter>
                <div className="container">
                    <Header />
                    <Routes>
                        <Route path="/" element={ <Home /> } />
                    </Routes>
                </div>
            </BrowserRouter>
        );
    }
}