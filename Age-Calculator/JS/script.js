import { DateTime } from 'https://cdn.jsdelivr.net/npm/luxon@3.4.4/build/es6/luxon.min.js';

flatpickr("#birthdate", {
  dateFormat: "Y-m-d",
  maxDate: "today"
});

const form = document.getElementById("age-form");
const result = document.getElementById("result");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = document.getElementById("birthdate").value;

  if (!input) {
    result.textContent = "Please enter a valid date.";
    return;
  }

  const birthDate = DateTime.fromISO(input);
  const now = DateTime.now();

  if (birthDate > now) {
    result.textContent = "Birthdate can't be in the future!";
    return;
  }

  const diff = now.diff(birthDate, ["years", "months", "days"]).toObject();

  result.innerHTML = `You are <strong>${Math.floor(diff.years)} years</strong>, 
                      <strong>${Math.floor(diff.months)} months</strong>, and 
                      <strong>${Math.floor(diff.days)} days</strong> old.`;
});
