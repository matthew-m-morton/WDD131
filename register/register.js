// import functions
import { participantTemplate, summaryTemplate } from "./templates.js";

// variables
var numberofparticipants = 1;

// Get references
// participants
const participantsFieldset = document.querySelector('.participants');
const addButton = participantsFieldset.querySelector('#add');
// submit
const form = document.getElementById('registrationform');
const summary = document.getElementById('summary');



// add Participant function
function addParticipantSection() {
    numberofparticipants++;

    const newParticipantSection = document.createElement('section');
    newParticipantSection.classList.add(`participant${numberofparticipants}`);
    newParticipantSection.innerHTML = participantTemplate(numberofparticipants);

    // Insert the new section before the Add Participant button
    participantsFieldset.insertBefore(newParticipantSection, addButton);
}

// calculate fees function
function totalFees() {
    // the selector below lets us grab any element that has an id that begins with "fee"
    let feeElements = document.querySelectorAll("[id^=fee]");
    console.log(feeElements);
    // querySelectorAll returns a NodeList. It's like an Array, but not exactly the same.
    // The line below is an easy way to convert something that is list-like to an actual Array so we can use all of the helpful Array methods...like reduce
    // The "..." is called the spread operator. It "spreads" apart the list, then the [] we wrapped it in inserts those list items into a new Array.
    feeElements = [...feeElements];
    // sum up all of the fees. Something like Array.reduce() could be very helpful here :) Or you could use a Array.forEach() as well.
    // Remember that the text that was entered into the input element will be found in the .value of the element.
    let total =0;
    feeElements.forEach(fee => {
        total += Number(fee.value);
    });
    // once you have your total make sure to return it!
    return total;
    }

// submit function
function submitForm(event) {
    event.preventDefault();

    form.classList.add('hide');

    const adultNameInput = document.querySelector('#adult_name');
    const adultName = adultNameInput.value;
    
    summary.innerHTML = summaryTemplate(adultName, numberofparticipants, totalFees());
    console.log(adultName)    
};


// Event listeners
addButton.addEventListener('click', addParticipantSection);
form.addEventListener('submit', submitForm);