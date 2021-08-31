class Employee {
    constructor(eName, eId, eDesignation, eDept, eHours) {
        this.employeeName = eName;
        this.employeeId = eId;
        this.designation = eDesignation;
        this.department = eDept;
        this.hoursSpent = eHours;
    }

    clockHours() {
        this.hoursSpent = (this.hoursSpent) * 5;
        console.log(`${this.employeeName} worked for ${this.hoursSpent} hours`);
        //console.log('the employee worked for ', numberOfhours, 'hours');

    }
}

var emp = new Employee('Himanshi',11,'Consultant','accounts',9);
console.log(emp);
emp.clockHours();
console.log(emp);
emp.clockHours();
console.log(emp);

emp.hoursSpent = Math.floor(100/3);

console.log(emp);


class Company {
    constructor(cName, numberOfEmp, cVerticals) {
        this.name = cName;
        this.employees = numberOfEmp;
        this.verticals = cVerticals;
        // how to make this array ?
    }
}
var comp = new Company('Adobe',1000,['Groceries', 'pantry', 'clothing', 'plants']);
console.log(comp);



console.log("Hellllloosfvd")