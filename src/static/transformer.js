// import * as csvToJson from "convert-csv-to-json/src/csvToJson";

const DataTransformation = (data) => {

    // let json = csvToJson.getJsonFromCsv(data);

    let json = data

    const object = {
        "steak": {
            "remote": [],
            "office": []
        },
        "vegan": {
            "remote": [],
            "office": []
        }
    }

    json.forEach(person => {
        if (person.meal === 'Steak' || person.meal === 'Turkey') {
            person.remote ? object.steak.remote.push(person) : object.steak.office.push(person)
        } else {
            person.remote ? object.vegan.remote.push(person) : object.vegan.office.push(person)
        }
    });

    return object

}

export default DataTransformation;