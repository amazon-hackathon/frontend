import React, { useMemo, useState } from 'react'
import Layout from '@theme/Layout';




export default function TakeQuiz() {
  const QUESTIONS = [
    "How many tons of food is wasted every year?",
    "What is the percentage of the earths water does food waste represent?",
    "What is the anual value of the food waste each year?",
    "What are the two more wasted food group"
  ]
  const ANSWERS = [
    ["1 million", "100 million", "500 million", "1 billion"],
    ["1%", "50%", "10%", "25%"],
    ["$500 million", "$1 billion", "$500 billion", '$1 trillion'],
    ["fruit and vegetable", "fruit and meat", "vegetable and dairy", "meat and dairy"]
  ]
  useMemo(() => {
  }, [])
  const ANSWERS_SOLUTION = [
    3, 3, 3, 0
  ]
  const [question, setQuestion] = useState(0);
  const [questionColor, setQuestionColor] = useState("gray");
  return (
    <Layout>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "40vw" }}>
            <h1 style={{ width: "50px" }}>{question < 4 ? `${question + 1} )` : ""} </h1>
            <h1>{question < 4 ? QUESTIONS[question] :
              ""}</h1>
          </div>
          <div style={{ marginTop: "100px", display: "flex", flexDirection: "column", justifyContent: "space-between", height: "30vh" }}>
            {ANSWERS[question] != undefined ? ANSWERS[question].map((answer, index) => {
              return (
                <div style={{ backgroundColor: "grey", width: "30vw", display: "flex", alignItems: "center", justifyContent: "center", height: "6vh", borderRadius: "20px", cursor: "pointer" }} {...index === ANSWERS_SOLUTION[question] ? { style: { backgroundColor: questionColor, display: "flex", alignItems: "center", justifyContent: "center", height: "6vh", borderRadius: "20px", cursor: "pointer" } } : { backgroundColor: "grey", display: "flex", alignItems: "center", justifyContent: "center", height: "6vh", borderRadius: "20px", cursor: "pointer" }} onClick={() => {
                  if (index === ANSWERS_SOLUTION[question]) {
                    setQuestionColor("green");
                    setTimeout(() => {
                      setQuestion(question + 1);
                      setQuestionColor("gray")
                    }, 1500)
                  } else {
                    setQuestionColor("red");
                    setTimeout(() => {
                      setQuestion(question + 1);
                      setQuestionColor("gray")
                    }, 1500)
                  }
                }}>{index + 1}. {answer}</div>
              )
            }) : <div>
              <h1>Thank you for going through the quiz. Hope you learned a lot</h1>
              <button onClick={() => setQuestion(0)}>Try Again</button>
            </div>
            }</div>
        </div>
      </div>
    </Layout>
  )
}
