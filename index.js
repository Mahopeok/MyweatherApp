function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector(".search-input");

  let h1 = document.querySelector("h1");
  h1.innerHTML = `${searchInput.value}`;

  let now = new Date();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[now.getDay()];
  let currentDate = document.querySelector("#current-date");
  currentDate.innerHTML = `${day} ${hour}:${minute}`;
}
let form = document.querySelector("form");
form.addEventListener("submit", search);
