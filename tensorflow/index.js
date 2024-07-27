export default async function gettingAnswers(question, passage) {
  const model = await qna.load();
  console.log("model loaded");
  const answers = await model.findAnswers(question, passage);
  return answers;
}
