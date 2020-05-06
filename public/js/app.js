console.log("Client side JavaScript file is loaded");

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const messageOne = document.querySelector(".messageOne");
const messageTwo = document.querySelector(".messageTwo");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const location = search.value;
  messageOne.textContent = "Loading...";
  messageTwo.textContent = "";

  fetch(`http://localhost:3000/weather?address=${location}`).then(
    (response) => {
      response.json().then((data) => {
        if (data.error) {
          messageOne.textContent =
            "Opps. It looks like there has been an error.";
        } else {
          messageOne.textContent = `Location: ${data.location}`;
          messageTwo.textContent = `Forecast: ${data.forecast}`;
        }
      });
    }
  );
});
