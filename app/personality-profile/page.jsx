// pages/PetQuestionnaire.js
'use client';
import { useState } from 'react';
import questions from '../api/data.json';
import Button from '../components/Button';

const timeOptions = [
  '0 hours',
  '1-3 hours',
  '4-6 hours',
  '7-9 hours',
  '10-12 hours',
  '13-15 hours',
  '16-18 hours',
];

const dwellingOptions = [
  'Apartment',
  'House',
  'Farmhouse',
  'Condo',
  'Townhouse',
  'Other',
];

function PetQuestionnaire() {
  const [answers, setAnswers] = useState({});

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSaveAnswers = () => {
    // Code to save answers to user's profile in a user database goes here
    alert('Answers saved successfully!');
  };

  const handleSubmitAnswers = () => {
    // Code to collect answers and form a prompt for LLM goes here
    // You can use the 'answers' state to construct the prompt
    alert('Answers submitted successfully!');
  };

  return (
    <div>
      <h1>Pet Adoption Questionnaire</h1>
      <form>
        {questions.map((q) => (
          <div key={q.question} className="question">
            <label htmlFor={q.question}>{q.question}</label>
            <br />
            {q.question === 'How much time do you have to spend with a pet each day?' ? (
              <select name={q.question} onChange={handleInputChange} required>
                {timeOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : q.question === 'What type of dwelling do you live in?' ? (
              <select name={q.question} onChange={handleInputChange} required>
                {dwellingOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : q.type === 'open ended' ? (
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
        <Button onClick={handleSaveAnswers} buttonName={'Save Answers'} />
        <Button onClick={handleSubmitAnswers} buttonName={'Submit Answers'} />
      </form>
    </div>
  );
}

export default PetQuestionnaire;
