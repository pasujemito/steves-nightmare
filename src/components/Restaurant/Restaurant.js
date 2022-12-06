import './Restaurant.css';
import Table from '../Table/Table';
import '../Guest/Guest.css'

const Restaurant = ({ steak, vegan }) => {

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
        const middleIndex = Math.ceil(group.length / tableCount);
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

    return (
        <>
            <div className="restaurant">
                <div className="table">
                    <p>Steak</p>
                    <div className="guests">
                    {guestsBatch1.map(guest => {
                        return (
                            <div className={"guest  " + (guest.remote ? 'gold' : 'silver')}>
                                <p>{guest.first_name} {guest.last_name}</p>
                                <p>{guest.remote ? "Remote" : "Office"}</p>
                            </div>
                        )
                    })
                    }
                    </div>
                </div>
                <div className="table">
                    <p>Vegan</p>
                    <div className="guests">
                    {guestsBatch2.map(guest => {
                        return (
                            <div className={"guest  " + (guest.remote ? 'gold' : 'silver')}>
                                <p>{guest.first_name} {guest.last_name}</p>
                                <p>{guest.remote ? "Remote" : "Office"}</p>
                            </div>
                        )
                    })
                    }
                    </div>
                </div>
                <div className="table">
                    <p>Steak</p>
                    <div className="guests">
                    {guestsBatch3.map(guest => {
                        return (
                            <div className={"guest  " + (guest.remote ? 'gold' : 'silver')}>
                                <p>{guest.first_name} {guest.last_name}</p>
                                <p>{guest.remote ? "Remote" : "Office"}</p>
                            </div>
                        )
                    })
                    }
                    </div>
                </div>
                <div className="table">
                    <p>Vegan</p>
                    <div className="guests">
                    {guestsBatch4.map(guest => {
                        return (
                            <div className={"guest  " + (guest.remote ? 'gold' : 'silver')}>
                                <p>{guest.first_name} {guest.last_name}</p>
                                <p>{guest.remote ? "Remote" : "Office"}</p>
                            </div>
                        )
                    })
                    }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Restaurant;