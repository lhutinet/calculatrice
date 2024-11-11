// const --- = document.querySelector("---");
// const --- = document.getElementById("---");
// window.addEventListener("---", () => {----});

// test
// window.addEventListener("click", (e) => {
//   console.log(e);
// });
// partie a supprimée

let result = document.querySelector(".resultat").textContent;
let preResult = "";
const btn = document.querySelectorAll("button");
const enter = document.getElementById("enter");
// const

btn.forEach((button) => {
  button.addEventListener("click", (event) => {
    const texteBoutonClique = event.target.textContent;

    preResult += texteBoutonClique;
    let resultFinal = "";

    resultFinal = eval(preResult);
    result.textContent = preResult;
    enter.addEventListener("click", (event) => {
      event.preventDefault();

      document.querySelector(".resultat").textContent = resultFinal;
      resultFinal = "";
    });
  });
});
