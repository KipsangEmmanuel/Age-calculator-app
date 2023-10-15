//get the input values
let monthInput = document.getElementById('month');
let dayInput = document.getElementById('day');
let yearInput = document.getElementById('year');

let monthInputValue = null;
let dayInputValue = null;
let yearInputValue = null;

let inputDate = {
    fullDate: new Date(),
    month: null,
    day: null,
    year: null
};

const calButton = document.getElementById('btnt');

function calculateTimePassed(){
    clearErrors(['month', 'day', 'year']);
    validateInputDate();
}

function validateInputDate() {
    //collect input from HTML form  and convert into date format
    monthInputValue = +monthInput.value;
    dayInputValue = +dayInput.value;
    yearInputValue = +yearInput.value;

    inputDate = {
        fullDate: new Date(`${yearInputValue}, ${monthInputValue}, ${dayInputValue}`),
        month: monthInputValue,
        day: dayInputValue,
        year: yearInputValue,
    };

    const {month, day, year} = inputDate;

    //validate input
    let validMonth = true;
    let validDay = true;
    let validYear = true;

    //update month for leap year
    (!(year % 4) && year % 100) || !(year % 400) ? (daysPerMonth[1] = 29) : (daysPerMonth[1] = 28);

    //validate day of month is within range
    if(!dayInputValue) {
        validDay = false;
        showError('day-input-error', 'day-error', 'This field is required');
    }else if(
        day > daysPerMonth[month - 1] ||
        day > 31 ||
        day < 1 ||
        (day > new Date().getDate() && month === new Date().getMonth() + 1 && year === new Date().getFullYear())
    ){
        validDay = false;
        showError('day-input-error', 'day-error', 'Must be a valid day')
    }
    // console.log(validDay)

    //validate month
    if(!monthInputValue) {
        validMonth = false;
        showError('month-input-error', 'month-error', 'This field is required')
    }else if(
        (month > new Date().getMonth() + 1 && year === new Date().getFullYear()) || month < 1 || month > 12 || (day > new Date().getDate() && month === new Date().getMonth() + 1 && year === new Date().getFullYear())
    ){
        validMonth = false;
        showError('month-input-error', 'month-error', 'Must be a valid month');
    }
    // console.log(validMonth)

      /* Validate Year */
    if (!yearInputValue) {
        validYear = false;
        showError('year-input-error', 'year-error', 'This field is required');
    } else if (year > new Date().getFullYear() || year < 1000) {
        validYear = false;
        showError('year-input-error', 'year-error', 'Must be in the past');
    }








}