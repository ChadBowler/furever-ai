// pages/PetQuestionnaire.js
'use client';
import { useState } from 'react';
import questions from '../api/data.json';
import Button from '../components/Button';
import styles from './PersonalityProfile.module.scss';

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
    <div className={styles.questionnaireContainer}>
    <h1 className={styles.questionnaireHeader}>Personality Profile</h1>
    <form className={styles.form}>
      {questions.map((q) => (
        <div key={q.question} className={`${styles.question} question`}>
          <label className={styles.label} htmlFor={q.question}>
            {q.question}
          </label>
          <br />
          {/* Apply the appropriate styles to your form elements */}
          {q.question === 'How much time do you have to spend with a pet each day?' ? (
            <select className={styles.selectInput} name={q.question} onChange={handleInputChange} required>
             {timeOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
            </select>
          ) : q.question === 'What type of dwelling do you live in?' ? (
            <select className={styles.selectInput} name={q.question} onChange={handleInputChange} required>
             {dwellingOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
            </select>
          ) : q.type === 'open ended' ? (
            <textarea
              className={styles.textareaInput}
              id={q.question}
              name={q.question}
              rows="4"
              cols="50"
              onChange={handleInputChange}
              required
            />
          ) : (
            <div className={styles.radioGroup}>
              <div className={styles.radioGroupContainer}>
                <input
                  type="radio"
                  id={`${q.question}_yes`}
                  name={q.question}
                  value="yes"
                  onChange={handleInputChange}
                  required
                />
                <label htmlFor={`${q.question}_yes`}>Yes</label>
              </div>
             <div className={styles.radioGroupContainer}>
              <input
                  type="radio"
                  id={`${q.question}_no`}
                  name={q.question}
                  value="no"
                  onChange={handleInputChange}
                  required
                />
                <label htmlFor={`${q.question}_no`}>No</label>
             </div>
              
            </div>
          )}
        </div>
      ))}
      <div className={styles.buttonContainer}>
        <Button onClick={handleSaveAnswers} buttonName={'Save Answers'} />
        <Button onClick={handleSubmitAnswers} buttonName={'Submit Answers'} />
      </div>
    </form>
  </div>
  );
}

export default PetQuestionnaire;
