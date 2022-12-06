import './Restaurant.css';
import Table from '../Table/Table';

const Restaurant = ({ steak, vegan }) => {


    // console.log(steak.office.length);
    // console.log(steak.remote.length);

    console.log(steak)
    console.log(vegan)

    const denomination = (remoteGuests, officeGuests) => {
        let denominator;
        for (let i = 1; i <= remoteGuests.length && i <= officeGuests.length; i++) {
            if (remoteGuests.length % i === 0 && officeGuests.length % i === 0) {
                denominator = i
            }
        }

        return denominator
    }

    const steakTableCount = denomination(steak.office, steak.remote)
    const veganTableCount = denomination(vegan.office, vegan.remote)

    // const arr = steak.office.slice(steak.office.length / steakTableCount)


    // console.log(arr);



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