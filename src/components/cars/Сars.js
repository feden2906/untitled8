

export default function Cars({item}) {

    return (
        <div className="Cars">
            <h3>id {item.id}****Car is {item.model}****Price{item.price}****Year{item.year}</h3>
        </div>
    );
}