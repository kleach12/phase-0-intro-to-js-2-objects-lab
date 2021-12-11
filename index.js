const employee = {
    name: "Kale",
    streetAddress: "1234 Address",
}

function updateEmployeeWithKeyAndValue( employee, key, value) {
    const newEmployee1 = {...employee};

    newEmployee1[key] = value;

    return newEmployee1;
}

const newGuy = updateEmployeeWithKeyAndValue(
    employee, "name","Sam",
    employee, "streetAddress", "11 Broadway");

newGuy;

function  destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] =value;

    return employee;
}

const permNewGuy = destructivelyUpdateEmployeeWithKeyAndValue(
    employee, "name", "Sam",
    employee, "streetAddress", "12 Broadway");

function deleteFromEmployeeByKey( employee, key, value) {
        const newestEmployee = {...employee};
    
        newestEmployee[key] = value;
    
        return newestEmployee;
    } 

let newEmployee = deleteFromEmployeeByKey(
    delete employee.name);

function destructivelyDeleteFromEmployeeByKey(employee, key, value) {
    employee[key] = value;

    return employee;
}

let newestEmployee = destructivelyDeleteFromEmployeeByKey(
    delete employee.name);