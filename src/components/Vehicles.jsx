import { useQuery } from '@apollo/client';

import { GET_VEHICLES } from '../queries/queries';

const Vehicles = () => {
    const { loading, error, data } = useQuery(GET_VEHICLES);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h2>Star Wars Vehicles:</h2>
            <ul>
                {data.allVehicles.vehicles.map((vehicle) => (
                    <li key={vehicle.id}>
                        <strong>{vehicle.name}</strong> - Model: {vehicle.model}, Class: {vehicle.vehicleClass}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Vehicles;
