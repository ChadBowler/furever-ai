// pages/PetQuestionnaire.js
'use client';
import { useState } from 'react';
import questions from '../api/data.json'
import Button from '../components/Button';

function PetQuestionnaire() {

  const [answers, setAnswers] = useState({});
  
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSaveAnswers = () => {
    // Code to save answers to user's profile in a user database goes here
    alert("Answers saved successfully!");
  };

  const handleSubmitAnswers = () => {
    // Code to collect answers and form a prompt for LLM goes here
    // You can use the 'answers' state to construct the prompt
    alert("Answers submitted successfully!");
  };

  return (
    <div>
      <h1>Pet Adoption Questionnaire</h1>
      <form>
        {questions.map((q) => (
          <div key={q.question} className="question">
            <label htmlFor={q.question}>{q.question}</label><br />
            {q.type === "open ended" ? (
              <textarea
                id={q.question}
                name={q.question}
                rows="4"
                cols="50"
                onChange={handleInputChange}
                required
              />
            ) : (
              <>
                <input
                  type="radio"
                  id={`${q.question}_yes`}
                  name={q.question}
                  value="yes"
                  onChange={handleInputChange}
                  required
                />
                <label htmlFor={`${q.question}_yes`}>Yes</label>
                <input
                  type="radio"
                  id={`${q.question}_no`}
                  name={q.question}
                  value="no"
                  onChange={handleInputChange}
                  required
                />
                <label htmlFor={`${q.question}_no`}>No</label>
              </>
            )}
          </div>
        ))}
        <Button onClick={handleSaveAnswers} buttonName={'Save Answers'}></Button>
        <Button onClick={handleSubmitAnswers} buttonName={'Submit Answers'}></Button>
        {/* <button type="button" onClick={handleSaveAnswers}>Save Answers</button>
        <button type="button" onClick={handleSubmitAnswers}>Submit Answers</button> */}
      </form>
    </div>
  );
}

export default PetQuestionnaire;
