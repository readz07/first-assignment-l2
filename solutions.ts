type Value = number;
type Multiplier = number


const multiplyValue=(value:Value,multiplier?:Multiplier):number=>{
    if(multiplier !==undefined){
        return value * multiplier
    } else
        return value * 2
}

const test= multiplyValue(9,3)


type inputValue = number | string | boolean


const processInput=(value:inputValue): number | string=>{
    if(typeof value === "string" ){
        return value.trim().toLowerCase()
    }

    if(typeof value === "number" ){
        return value * 10
    }
    if(typeof value === "boolean" ){
        if(value === true){
            return "Active"
        } else {
            return "Inactive"
            }   
    }
    return ""
}

const testProcessedData = processInput( " LoveU ")



type LocationInfo= readonly [latitude:number, longitude:number, locationName:string] 

const formatCoordinate = (locationInfo:LocationInfo):string=>{
    const [latitude, longitude, locationName] = locationInfo
    return `Location: ${locationName} (${latitude}, ${longitude})`
}


const showLocationInfo = formatCoordinate([23.8693, 90.3927, "Dhaka"])



const concatenateArrays = <T> (...arrays:T[][]):T[]=>{
    let finalArr: T[]=[]
    for (let arr of arrays){
        finalArr.push(...arr)
    }
    return finalArr
};

const arrResult = concatenateArrays([2,5],[3,5],[4,5],[7,3])




type MinStudents= number

interface Course {
    title: string;
    students: number;
    isPublished: boolean;
}

const courses:Course[] = [
  { title: "TypeScript Mastery", students: 120, isPublished: true },
  { title: "Draft Course", students: 200, isPublished: false },
  { title: "Basic HTML", students: 45, isPublished: true },
  { title: "Next.js Pro", students: 85, isPublished: true }
];


const getPopularCourses = (courses:Course[], minStudents:MinStudents): Course[] =>{
    return courses.filter(course=>course.isPublished===true && course.students>=minStudents)
}

const filteredCourse = getPopularCourses(courses,90)





interface User {
    id: number;
    name: string;
    role: string;
}

const items:User[] = [
  { id: 1, name: "Monem", role: "Admin" },
  { id: 2, name: "Ann", role: "Moderator" },
  { id: 3, name: "Prince", role: "User" }
];
const pluckValues = <T, K extends keyof T>(items:T[], key:K):T[K][] =>{
    return items.map(item=>item[key])
}

const viewPluckValues = pluckValues(items,"role")




class Employee {
    protected name: string;
    private baseSalary: number;
    constructor(name: string, baseSalary: number){
        this.name=name;
        this.baseSalary=baseSalary
    }
    getDetails= ()=>{
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`
    }
}

class Manager extends Employee {
    private department:string
    constructor(name: string, baseSalary: number, department: string){
        super(name, baseSalary); 
        this.department = department
    }
    getRoleInfo = ()=>{
        return `Manager of ${this.department} : ${this.name}` 
    }
}


const manager = new Manager("Motin", 30000,"HR")

const managerInfo = manager.getDetails()
const managerRole = manager.getRoleInfo()






type Age = number

async function validateAgeAsync (age:Age): Promise<string>{
    
    return new Promise<string>((resolve)=>{
        if (age<18){
        throw new Error("Access Denied: Must be 18 or older")
    } else{
        setTimeout(() => {
            resolve("Access Granted")
        }, 1000);
    }
    })

}
async function permissionStatus() {
  try {
    const result = await validateAgeAsync(23);
  } catch (error) {
    if (error instanceof Error) {
    } else {
        
    }
  }
}

permissionStatus();




