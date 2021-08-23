import {
    BrowserRouter as Router,


} from "react-router-dom";
import {useEffect, useState} from "react";
import {changeCars, getCars} from "../../service/sevice.car";
export default function Update() {

    let [cars, setCars] = useState([]);
    let [formState, setFormState] = useState({model: '', price: '', year: ''})

    useEffect(() => {
        getCars().then(value => setCars(value));
    })
    let onFormInputChange = (e) => {
        setFormState({...formState, [e.target.name]: e.target.value})

    }

    const onChangeSelect = (e) => {
        const carForEdit = cars.find(car => car.id === +e.target.value)
        setFormState(carForEdit);
    }

    let save = (e) => {
        e.preventDefault();
        changeCars(formState);
        setFormState({model: '', price: '', year: ''});
    }

    return (
        <Router>
        <div className="Update">
            <select onChange={onChangeSelect}>
                {
                   cars.map(CarsItem=> <option key={CarsItem.id} value={CarsItem.id} >{CarsItem.model}</option>)
                }
            </select>
            <form onSubmit={save}>
                <input type="text" name={'model'} value={formState.model} onChange={onFormInputChange}/>
                <input type="text" name={'price'} value={formState.price} onChange={onFormInputChange}/>
                <input type="text" name={'year'} value={formState.year} onChange={onFormInputChange}/>
                <button>Save</button>
            </form>

        </div>
</Router>
    );
}
