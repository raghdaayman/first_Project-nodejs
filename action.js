const fs = require("fs");

// read data from json file and convert it to object to add item
const loadData = () => {
    try {
        const JsonData = fs.readFileSync("DataFileJson.json").toString();
        return JSON.parse(JsonData);
    } catch {
        return [];
    }
};


// save data in json file
const saveData = (Data) => {
    const saveJson = JSON.stringify(Data);
    fs.writeFileSync("DataFileJson.json", saveJson);
};

//add items
const addPersons = (id, fname, lname, age, city, degree, grades) => {
    const Data = loadData();

    // dont doubleicate
    const doubleicate = Data.filter((item) => {
        return item.id === id;
    });
    console.log(doubleicate);

    if (doubleicate.length == 0) {
        const total = grades.reduce((acc, curr) => acc + curr);
        const avg = total / grades.length;
        
        Data.push({
            id: id,
            fname: fname,
            lname: lname,
            age: age,
            city: city,
            degree: degree,
            avg: avg,
        });

        saveData(Data);
    } else {
        console.log("Oops!! the person is doubleicate");
    }
};


//delete item
const deletePersons = (id) => {
    const Data = loadData();
    const DataAfterDelet = Data.filter((item) => {
        return item.id !== id;
    });
    console.log(DataAfterDelet);
    saveData(DataAfterDelet);
};


// read data of item based on id
const ReadOneItem = (id) => {
    const Data = loadData();
    const FindData = Data.find((item) => {
        return item.id === id;
    });
    console.log(FindData);
};


//  list of data
const list = () => {
    const Data = loadData();
    Data.map((item) => {
        console.log(item.fname, item.age, item.city);
    });
};


//  getAllData
const getAllData1 = () => {
    const Data = loadData();
    Data.map((item) => {
        console.log(item.id, item.fname, item.lname, item.city, item.age, item.degree, item.avg);
    });
};


// exports functions
module.exports = {
    getAllData1,
    addPersons,
    deletePersons,
    list,
    ReadOneItem,
};
