class Response {
    constructor(employeeId, firstName, lastName, companyId, name){
        this.employeeId = employeeId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.companyId = companyId;
        this.name = name;
    }

    getEmployeeId(){
        return this.employeeId;
    }

    setEmployeeId(employeeId){
        this.employeeId = employeeId;
    }

    getFirstName(){
        return this.firstName;
    }

    setFirstName(firstName){
        this.firstName = firstName;
    }

    getLastName(){
        return this.lastName;
    }

    setLastName(lastName){
        this.lastName = lastName;
    }

    getCompanyId(){
        return this.companyId;
    }

    setCompanyId(companyId){
        this.companyId = companyId;
    }

    getName(){
        return this.name;
    }

    setName(name){
        this.name = name;
    }
}