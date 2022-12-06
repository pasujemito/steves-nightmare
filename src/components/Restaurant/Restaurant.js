import './Restaurant.css';
import Table from '../Table/Table';
import '../Guest/Guest.css'

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

    const createTable2 = (group) => {
        let tableCount = denomination(group.office, group.remote);
        const middleIndex = Math.ceil(group.length / 2);
        let remote = group.remote.slice().splice(-middleIndex);
        let office = group.office.slice().splice(-middleIndex);
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
    const guestsBatch3 = createTable2(steak);
    const guestsBatch4 = createTable2(vegan);

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
                                <p>{guest.first_name} {guest.last_name}</p>
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
                                <p>{guest.first_name} {guest.last_name}</p>
                            </div>
                        )
                    })
                    }
                </div>
                <div className="table">
                    <p>Steak</p>
                    {guestsBatch3.map(guest => {
                        return (
                            <div className="guest">
                                <p>{guest.first_name} {guest.last_name}</p>
                            </div>
                        )
                    })
                    }
                </div>
                <div className="table">
                    <p>Vegan</p>
                    {guestsBatch4.map(guest => {
                        return (
                            <div className="guest">
                                <p>{guest.first_name} {guest.last_name}</p>
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