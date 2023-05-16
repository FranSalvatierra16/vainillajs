import "./style.css";

window.onload = () => {
  let randomNumber = Math.random() * 10;
  document.querySelector("#the-excuse").innerHTML = generateExcuse();
};
let generateExcuse = () => {
  let pronoun = ["A", "The"];
  let subject = ["jogger", "racoon", "dog", "driver", "comedion", "pincone"];
  let action = ["homework", "toe", "car", "shoe"];
  let possetion = ["took my", "threw my", "yelled at my", "stole my", "bit my"];
  let where = ["on the street", "in my house", "in my driveway"];

  let proIndx = Math.floor(Math.random() * pronoun.length);
  let subIndx = Math.floor(Math.random() * subject.length);
  let actionIndx = Math.floor(Math.random() * action.length);
  let possIndx = Math.floor(Math.random() * possetion.length);
  let whereIndx = Math.floor(Math.random() * where.length);

  return (
    pronoun[proIndx] +
    " " +
    subject[subIndx] +
    " " +
    action[actionIndx] +
    " " +
    possetion[possIndx] +
    " " +
    where[whereIndx] +
    " "
  );
};
