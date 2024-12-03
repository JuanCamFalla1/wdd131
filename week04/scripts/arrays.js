const steps = ["one", "two", "three"];
const listTemplate = (step) => {
  return `<li>${step}</li>`;
}

const stepsHtml = steps.map(listTemplate);
document.querySelector("#myList").innerHTML = stepsHtml.join();


const grades = ["A", "B", "A"];
const listofgrades = (grade) => {
  return `${grade}`;
}
const number_grade = grades.map(listofgrades)