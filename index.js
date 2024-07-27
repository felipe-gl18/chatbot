import gettingAnswers from "./tensorflow/index.js";
const form = document.querySelector("form");
form.addEventListener("submit", async (data) => {
  data.preventDefault();
  const question = data["target"].querySelector("#question").value;
  const answers = await gettingAnswers(
    question,
    `the "Parada do lanche" company, has just 4 chicken pizzas left`
  );
  const higher_score_answer = answers[0]["text"];
  alert(higher_score_answer);
});
