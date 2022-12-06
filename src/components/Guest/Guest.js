import './Guest.css';
import '../Restaurant/Restaurant';

const Guest = ({name}) => {
    
    return (
        <>
            <div className="guest">
                <p>{name}</p>
            </div>
        </>
    )
}

export default Guest;