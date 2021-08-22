import {useState} from "react";
import {postCars} from "../../service/sevice.car";

export default function Creation() {
    let [formState, setFormState] = useState({model: '', price: '', year: ''})

    let onFormInputChange = (e) => {
        setFormState({...formState, [e.target.name]: e.target.value})
    }
    let save = (e) => {
        e.preventDefault();
        postCars(formState);
        setFormState({model: '', price: '', year: ''});
    }

    return (
        <div className="Creation">
            <form onSubmit={save}>
                <input type="text" name={'model'} value={formState.model} onChange={onFormInputChange}/>
                <input type="text" name={'price'} value={formState.price} onChange={onFormInputChange}/>
                <input type="text" name={'year'} value={formState.year} onChange={onFormInputChange}/>
                <button>Save</button>
            </form>
        </div>
    );
}