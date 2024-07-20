
import bosses from "./bosses.mjs";
import weapons from "./weapons.mjs"
import arrows from "./arrows.mjs";
import {createRadioButtons, handleSelections} from "./fuctions.mjs";


createRadioButtons('boss-radio-buttons', bosses, 'boss_name', 'boss-choice', handleSelections);
createRadioButtons('type-radio-buttons', weapons, 'type', 'weapon-type', nameRadioButtons);

function nameRadioButtons() {
    const container = document.getElementById('weapons');
    container.classList.remove('hidden'); // reveal weapon container
    const heading = document.getElementById('weapon-head');
    heading.innerHTML = ''; // Clear heading
    heading.innerHTML = document.querySelector('input[name="weapon-type"]:checked').value.toUpperCase();
    const nameRadioButtonsDiv = document.getElementById('name-radio-buttons');
    nameRadioButtonsDiv.innerHTML = ''; // Clear existing radio buttons

    const filteredWeapons = weapons.filter(weapon => weapon.type === document.querySelector('input[name="weapon-type"]:checked').value) 
    createRadioButtons('name-radio-buttons', filteredWeapons, 'name', 'weapon-name',handleSelections);

    if (document.querySelector('input[name="weapon-type"]:checked').value === "Bows"){
        const arrowContainer = document.getElementById('arrows');
        arrowContainer.classList.remove('hidden'); // reveal arrow section
        const arrowRadioButtonsDiv = document.getElementById('arrow-radio-buttons');
        arrowRadioButtonsDiv.innerHTML = ''; // Clear existing radio buttons
        createRadioButtons('arrow-radio-buttons', arrows, 'arrow_name', 'arrow-choice', handleSelections)
    } else {
        const arrowContainer = document.getElementById('arrows');
        arrowContainer.classList.add('hidden');
    } 
};





