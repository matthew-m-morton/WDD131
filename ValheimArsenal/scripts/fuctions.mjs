// This holds all of the reusable funtions
import bosses from "./bosses.mjs";
import weapons from "./weapons.mjs"
import arrows from "./arrows.mjs";


export function createRadioButtons(containerId, array, key, radioName, onChangeHandler) {
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
        radioInput.addEventListener('change', onChangeHandler);

        const radioLabel = document.createElement('label');
        radioLabel.htmlFor = value;
        radioLabel.textContent = value.toUpperCase();

        radioGroupDiv.appendChild(radioInput);
        radioGroupDiv.appendChild(radioLabel);
        container.appendChild(radioGroupDiv);
    });
}





export function handleSelections() {
    // let selectedBoss = null;
    // let selectedWeapon = null;
    let selectedType = document.querySelector('input[name="weapon-type"]:checked').value;
    if (selectedType === "Bows"){
        let selectedBoss = document.querySelector('input[name="boss-choice"]:checked').value;
        let selectedWeapon = document.querySelector('input[name="weapon-name"]:checked').value;
        let selectedArrow = document.querySelector('input[name="arrow-choice"]:checked').value;
        if(selectedBoss && selectedWeapon && selectedArrow){ 
            // retrieves selected object from objects list
            const boss = bosses.find(obj => obj.boss_name === selectedBoss);
            const weapon = weapons.find(obj => obj.name === selectedWeapon);
            const arrow = arrows.find(obj => obj.arrow_name === selectedArrow);

            // calculates damage per damage type after accounting for boss resistances
            const blunt = boss.blunt * weapon.blunt;
            const pierce = boss.pierce * (weapon.pierce + arrow.pierce);
            const slash = boss.slash * weapon.slash;
            const frost = boss.frost * (weapon.frost + arrow.frost);
            const fire = boss.fire * (weapon.fire + arrow.fire);
            const poison = boss.poison * (weapon.poison+ arrow.poison);
            const spirit = boss.spirit * (weapon.spirit+ arrow.spirit);

            // Adds all damage types
            const totalDamage = blunt + pierce + slash + frost + fire + poison + spirit;

            const hitsToKill = boss.hit_points/totalDamage
            
            showresults(hitsToKill,boss)
            

        }

    } else{


        let selectedBoss = document.querySelector('input[name="boss-choice"]:checked').value;
        let selectedWeapon = document.querySelector('input[name="weapon-name"]:checked').value;

        if (selectedBoss && selectedWeapon) {
            // retrieves selected object from objects list
            const boss = bosses.find(obj => obj.boss_name === selectedBoss);
            const weapon = weapons.find(obj => obj.name === selectedWeapon);

            // calculates damage per damage type after accounting for boss resistances
            const blunt = boss.blunt * weapon.blunt;
            const pierce = boss.pierce * weapon.pierce;
            const slash = boss.slash * weapon.slash;
            const frost = boss.frost * weapon.frost;
            const fire = boss.fire * weapon.fire;
            const poison = boss.poison * weapon.poison;
            const spirit = boss.spirit * weapon.spirit;

            // Adds all damage types
            const totalDamage = blunt + pierce + slash + frost + fire + poison + spirit;


            const hitsToKill = boss.hit_points/totalDamage

            showresults(hitsToKill,boss)


        }
    }
}

export function showresults(hits, boss) {
    const resultcontainer = document.getElementById('results');

    resultcontainer.classList.remove('hidden')

    resultcontainer.innerHTML= `
    <h2>RESULTS</h2>
        <div id="resultDetails">
            <p>You can defeat ${boss.boss_name.toUpperCase()} in only</p>
            <h3>${Math.ceil(hits)} Hits</h3>
            <p>Good Luck</p>
        </div>
        <img src="./images/${boss.boss_name}.webp" alt="boss image">
        <div id="restart"><a href="bosscalc.html">TRY AGAIN</a></div>
            `

}

