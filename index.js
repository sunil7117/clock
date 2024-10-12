let button = document.getElementById("button");
let globleHourFormat = true;
button.addEventListener("click", function () {
  if (button.value === "true") {
    globleHourFormat = false;
    button.value = false;
  } else {
    globleHourFormat = true;
    button.value = true;
  }
});
function updateClock() {
  let currentDate = new Date();
  const hours = String(currentDate.getHours()).padStart(2, "0");
  const minutes = String(currentDate.getMinutes()).padStart(2, "0");
  const seconds = String(currentDate.getSeconds()).padStart(2, "0");
  const period = hours >= 12 ? "PM" : "AM";
  const ampmTime = hours % 12 || 12;
  globleHourFormat
    ? (document.getElementById(
        "time"
      ).innerHTML = `${hours} : ${minutes} : ${seconds}`)
    : (document.getElementById("time").innerHTML = `${String(ampmTime).padStart(
        2,
        "0"
      )} : ${minutes} ${period}`);
}
setInterval(updateClock, 1000);
