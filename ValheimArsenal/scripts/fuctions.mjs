// This holds all of the reusable funtions
function createRadioButtons(containerId, array, key, radioName, onChangeHandler) {
    const uniqueValues = [...new Set(array.map(item => item[key]))];
    const container = document.getElementById(containerId);

    uniqueValues.forEach(value => {
        const radioGroupDiv = document.createElement('div');
        radioGroupDiv.className = 'radiogroup';

        const radioInput = document.createElement('input');
        radioInput.type = 'radio';
        radioInput.name = radioName;
        radioInput.value = value;
        radioInput.id = value;
        radioInput.addEventListener('change', () => onChangeHandler(value));

        const radioLabel = document.createElement('label');
        radioLabel.htmlFor = value;
        radioLabel.textContent = value.toUpperCase();

        radioGroupDiv.appendChild(radioInput);
        radioGroupDiv.appendChild(radioLabel);
        container.appendChild(radioGroupDiv);
    });
}
export default createRadioButtons

