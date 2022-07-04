// Your code here
function createEmployeeRecord(array){
    return {
        'firstName': array[0],
        'familyName': array[1],
        'title': array[2],
        'payPerHour': array[3],
        'timeInEvents': [],
        'timeOutEvents': []
    }
}

function createEmployeeRecords(arrays){
    let newArray = []
    for(let array of arrays){
        newArray.push(createEmployeeRecord(array))
    }
    return newArray
}

function createTimeInEvent(employeeRecord, dateStamp){
    
    employeeRecord.timeInEvents.push(
       { 
        hour: parseInt(dateStamp.split(' ')[1]),
        date: dateStamp.split(' ')[0],
        type: "TimeIn"
    })

    return employeeRecord
}

function createTimeOutEvent(employeeRecord, dateStamp){
        
    employeeRecord.timeOutEvents.push(
        { 
         hour: parseInt(dateStamp.split(' ')[1]),
         date: dateStamp.split(' ')[0],
         type: "TimeOut"
     })
 
     return employeeRecord
 }

 function hoursWorkedOnDate(employeeRecord, date){
    //given a date, find the number of hours elapsed between that data's timeInEvent and timeOutEvent
    //Use date to find timeIn hour 
    const timeIn = employeeRecord.timeInEvents.find(timeEventObj => timeEventObj.date === date )
    const timeOut = employeeRecord.timeOutEvents.find(timeEventObj => timeEventObj.date === date )

    //Use date to find timeOut hour

    return (timeOut.hour - timeIn.hour)/100
    //subtract the two and return result
    
 }

 function wagesEarnedOnDate(employeeRecord, date){
    return hoursWorkedOnDate(employeeRecord, date) * employeeRecord.payPerHour
 }

function allWagesFor(employeeRecord){
    let allWages = 0
    employeeRecord.timeOutEvents.forEach(timeOutObj =>{
        employeeRecord.timeInEvents.forEach(timeInObj =>{
            if(timeOutObj.date === timeInObj.date){
                allWages += (timeOutObj.hour - timeInObj.hour)/100
                console.log(allWages)
            }
        })
    })
    return allWages * employeeRecord.payPerHour
}

function calculatePayroll(arrayOfRecords){
    let totalWagesForAll = 0
    arrayOfRecords.forEach(record =>{
        totalWagesForAll += allWagesFor(record)
    })
    return totalWagesForAll
}

 let me = ["luis","vasquez", "Sir", 100]
 let myRecord = createEmployeeRecord(me)
 createTimeInEvent(myRecord, "2022-06-23 1200")
 createTimeOutEvent(myRecord, "2022-06-23 1500")