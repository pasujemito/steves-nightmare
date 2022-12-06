import './Guest.css';

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