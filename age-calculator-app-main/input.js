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

const calButton = document.getElementById('btnt')