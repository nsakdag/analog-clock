// get references to DOM elements

const body = document.querySelector("body");
const hourHand = document.querySelector(".hour");
const minuteHand = document.querySelector(".minute");
const secondHand = document.querySelector(".second");
const modeSwitch = document.querySelector(".mode-switch");

//check if the mode is already  given
if(localStorage.getItem('mode') === 'Dark Mode') {
    body.classList.add('dark')
    modeSwitch.textContent='Light Mode'
}



//add a click event listener to modeSwitch

modeSwitch.addEventListener('click', ()=>{
    body.classList.toggle('dark')
    //check if the dark class is currently present on the body element
    const isDarkMode = body.classList.contains('dark')
    //set modeswitch text based on dark class p;resence
    modeSwitch.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode'
    //ser locakStorage 'mode' item based o 'dark' class presence
    localStorage.setItem('mode' , isDarkMode ? 'Dark Mode' : ' Light Mode') 
   
})

const updateTime = () => {
  // get current time and calculate degrees for clock hands
  let date = new Date(),
    secToDeg = (date.getSeconds() / 60) * 360;
    minToDeg = (date.getMinutes() / 60) * 360;
    hrToDeg = (date.getHours() / 12) * 360;

    


  //Rotate the clock hands to the appropriate degree based on the curent time
  secondHand.style.transform = `rotate(${secToDeg}deg)`;
  minuteHand.style.transform = `rotate(${minToDeg}deg)`;
  hourHand.style.transform = `rotate(${hrToDeg}deg)`;
};

//call updatetime to set clock hands every second

setInterval(updateTime, 1000);

// call updataTime function on page load

updateTime();
