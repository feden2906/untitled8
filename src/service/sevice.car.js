
const basicConfig=(url,obj = {})=>{
return fetch('http://91.201.233.14/api/v1/cars' + url,{
    method:"GET",
    headers:{
        'Content-type':'application/json; charset=UTF-8',
    },
    ...obj
})
}

const getCars = ()=>{
    return basicConfig('')
        .then(response => response.json())
}

const postCars =(car)=>{
    return basicConfig('', {
        method: 'POST',
        body: JSON.stringify(car)
    })
        .then(response => response.json())

}

const changeCars = (obj) => {
    return basicConfig('/' + obj.id, {
        method: 'PATCH',
        body: JSON.stringify(obj),
    })
        .then(response => response.json())
}

export {getCars,postCars,changeCars}