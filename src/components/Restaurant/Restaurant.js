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

    // const steakTableCount = denomination(steak.office, steak.remote)
    // const veganTableCount = denomination(vegan.office, vegan.remote)

    const createTable = (group) => {
        let tableCount = denomination(group.office, group.remote);
        let remote = group.remote.slice(group.remote.length / tableCount);
        let office = group.office.slice(group.office.length / tableCount);
        const merge = (first, second) => {
            for (let i = 0; i < second.length; i++) {
                first.push(second[i]);
            }
            return first;
        }
        
        return merge(remote, office);
    }

    const guestsBatch1 = createTable(steak);
    const guestsBatch2 = createTable(vegan);

    // const arr1 = steak.office.slice(steak.office.length / steakTableCount);
    // const arr2 = steak.remote.slice(steak.remote.length / steakTableCount);
    
    // const merge = (first, second) => {
    //     for (let i = 0; i < second.length; i++) {
    //         first.push(second[i]);
    //     }
    //     return first;
    // }

    // const guests = merge(arr1, arr2);


    // console.log(arr1);
    // console.log(arr2);
    // console.log(merge(arr1, arr2));

    return (
        <>
            <div className="restaurant">
                <div className="table">
                    <p>Steak</p>
                    {guestsBatch1.map(guest => {
                        return (
                            <div className="guest">
                                <p>{guest.first_name}</p>
                            </div>
                        )
                    })
                    }
                </div>
                <div className="table">
                    <p>Vegan</p>
                    {guestsBatch2.map(guest => {
                        return (
                            <div className="guest">
                                <p>{guest.first_name}</p>
                            </div>
                        )
                    })
                    }
                </div>
            </div>
        </>
    )
}

export default Restaurant;