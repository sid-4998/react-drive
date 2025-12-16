export default function List() {
    const cars = [
        {id: 1, brand: 'Ford'},
        {id: 2, brand: 'BMW'},
        {id: 3, brand: 'Tesla'}
    ]

    return (
        <ul>
            {cars.map((car) => <li key={car.id}>{car.brand}</li>)}
        </ul>
    );
}

// Keys are important as they help react to track of elements
// Whenever an element gets updated or removed, only that element gets re-rendered
// instead of the entire list.
// Keys must be unique among sibling elements