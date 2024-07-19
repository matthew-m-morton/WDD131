import bosses from "./bosses.mjs";
import weapons from "./weapons.mjs"
import arrows from "./arrows.mjs";
import createRadioButtons from "./fuctions.mjs";


createRadioButtons('boss-radio-buttons', bosses, 'boss_name', 'boss-choice', (choice) => console.log(choice));
createRadioButtons('type-radio-buttons', weapons, 'type', 'weapon-type', (type) => nameRadioButtons(type));

function nameRadioButtons(weapon_type) {
    const container = document.getElementById('weapons');
    container.classList.remove('hidden'); // reveal weapon container
    const heading = document.getElementById('weapon-head');
    heading.innerHTML = ''; // Clear heading
    heading.innerHTML = weapon_type.toUpperCase();
    const nameRadioButtonsDiv = document.getElementById('name-radio-buttons');
    nameRadioButtonsDiv.innerHTML = ''; // Clear existing radio buttons
    
    console.log(weapon_type);

    

    const filteredWeapons = weapons.filter(weapon => weapon.type === weapon_type) 
    createRadioButtons('name-radio-buttons', filteredWeapons, 'name', 'weapon-name', (choice) => console.log(choice));


    if (weapon_type === "Bows"){
        const arrowContainer = document.getElementById('arrows');
        arrowContainer.classList.remove('hidden'); // reveal arrow section
        const arrowRadioButtonsDiv = document.getElementById('arrow-radio-buttons');
        arrowRadioButtonsDiv.innerHTML = ''; // Clear existing radio buttons
        createRadioButtons('arrow-radio-buttons', arrows, 'arrow_name', 'arrow-choice', (choice) => console.log(choice))
    } else {
        const arrowContainer = document.getElementById('arrows');
        arrowContainer.classList.add('hidden');
    } 
};

