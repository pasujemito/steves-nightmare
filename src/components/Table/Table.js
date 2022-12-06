import './Table.css';
import Guest from '../Guest/Guest';

const Table = ({foodPreference}) => {
    return (
        <>
            <div className="table">
                <p>{foodPreference}</p>
                <Guest name="Karlene Bahlmann"></Guest>
            </div>
        </>
    )
}

export default Table;