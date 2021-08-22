import Cars from "./components/cars/Сars";
import {useEffect, useState} from "react";
import {getCars} from "./service/sevice.car";
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Link,
} from "react-router-dom";
import Creation from "./components/create-car/Creation";
import Update from "./components/update/Update";

export default function App() {
    let [cars, setCars] = useState([]);

    useEffect(() => {
        getCars().then(value => setCars(value));
    })
    return (
        <Router>
            <div className="App">
                <Link to={`/cars`}>Show cars</Link> <br/>
                <Link to={`/create-cars`}>Create car</Link> <br/>
                <Link to={`/update`}>Update car</Link> <br/>

                <Route path={'/update'}> <Update/></Route>

                <Route path={'/create-cars'}><Creation/></Route>

                <Route path={'/cars'} render={() => {

                    return cars.map(userItem => <Cars key={userItem.id} item={userItem}/>)
                }}/>


            </div>
        </Router>
    );
}

