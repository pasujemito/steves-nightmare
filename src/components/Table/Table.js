import './Table.css';
import Restaurant from '../Restaurant/Restaurant';

const Table = ({foodPreference}) => {

    const guests = Restaurant.guests;
    return (
        <>
            <div className="table">
                <p>{foodPreference}</p>
                {guests.map(guest => {
                    return (
                        <div className="guest">
                            <p>{guest.first_name}</p>
                        </div>
                    )
                })
                }
            </div>
        </>
    )
}

export default Table;