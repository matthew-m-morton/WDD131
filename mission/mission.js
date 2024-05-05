const themeSelector = document.getElementById('themeSelect')
function changeTheme() {
//check to see what the current value of our select is. The current value is conveniently found in themeSelector.value!
    const selection = themeSelector.value
// if the value is dark then:
// add the dark class to the body
// change the source of the logo to point to the white logo.
    if (selection === 'dark') { 
    document.body.classList.add('dark');
    document.getElementById('logo').src = "byui-logo_white.png";
// otherwise
// remove the dark class
// make sure the logo src is the blue logo.
    } else {
    document.body.classList.remove('dark');
    document.getElementById('logo').src = "byui-logo_blue.webp";
    }
}
// add eventlistener to the themeSelector element here. Use the changeTheme function as the event handler function.
themeSelector.addEventListener('change', changeTheme);