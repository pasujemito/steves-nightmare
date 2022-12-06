import './Restaurant.css';
import Table from '../Table/Table';

const Restaurant = () => {
    return (
        <>
            <div className="restaurant">
                <Table foodPreference="Vegan"></Table>
                <Table foodPreference="Steak"></Table>
            </div>
        </>
    )
}

export default Restaurant;