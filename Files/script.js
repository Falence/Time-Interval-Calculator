
// global variables
let form, startTime, endTime, interval, fieldName, hour,         minutes, meridian, fieldId, intervalValue;

// for storing the gotten time input
let start = {time: 0 , amPm: "am"};
let end = {time: 0, amPm: "am"};

let tempStart = start;
let tempEnd = end;

let result = [];
let finalResults = [];

// for storing the computed time interval
let computedStartTime = {hour: 0, minutes: 0, amPm: "am"}


form = document.getElementById("form");
startTime = document.getElementById("startTime");
endTime = document.getElementById("endTime");
interval = document.getElementById("interval");

// when field is onfocus
startTime.addEventListener("blur", validateField);
endTime.addEventListener("blur", validateField);
interval.addEventListener("blur", intervalField);


form.addEventListener("submit", printInterval);

// when submit button is clicked
function printInterval(value){
    value.preventDefault();
    
    console.log(start);
    console.log(intervalValue);
}


// FUNCTIONS

// to calculated time intervals to be printed
function computeResult(){
    
}

// compute for each interval
function fieldValueSetter(fieldId){
    if(fieldId == "startTime"){
        start.time = (hour*60) + minutes;
        start.amPm = meridian;
        if(start.amPm === "pm") start.time += (12*60);
    } else if(fieldId == "endTime"){
        end.time = (hour*60) + minutes;
        end.amPm = meridian;
        if(end.amPm === "pm") end.time += (12*60);
    } 
}



//  validate start time field
function validateField(field){
    fieldName = field.target;
    let fieldValue = fieldName.value;

    return fieldGetter(fieldValue, fieldName);

}

// fieldGetter
function fieldGetter(fieldValue, fieldName){
    string = fieldValue.split(" ").join("");

    let newString = string.split(":");

    hour = Number(newString[0]);
    let temp = String(newString[1]);
    
    minutes = Number(temp.slice(0, 2));
    
    meridian = String(temp.slice(2));

    fieldId = fieldName.id;
    
    return colorValidate(hour, minutes, meridian, fieldName);
}

// color validate
function colorValidate(hour, minutes, meridian, field){
    if(!isNaN(hour) && !isNaN(minutes) && (hour >= 0 && hour <13) && (minutes >= 0 && minutes <60) && (meridian == 'am' || meridian == 'pm')){
        fieldValueSetter(fieldId);
        console.log(end);
        return fieldName.style.borderColor = "green";

    }  else{
        return fieldName.style.borderColor = "red";

    }
}

function intervalField(field){
    intervalValue = field.target.value;
    return interval.style.borderColor = "green";
}