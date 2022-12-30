

import React from 'react';

const QuestionsAnswers = () => {

  const questions = [
    {
      question: "What is your company's mission?",
      answer: 'Our mission is to empower job seekers to confidently present their skills and experiences through a user-friendly resume building platform that helps them stand out in the job market.',
    },
    {
      question: 'What types of features does your platform offer?',
      answer:
        'Our platform offers a variety of features, including a messaging system, a job board, a resume builder tool, and a personal profile page.',
    },
    {
      question: 'How do you protect the privacy of your users?',
      answer:
        'We take the privacy of our users very seriously and have implemented appropriate measures to protect their personal information. For more information, please see our privacy policy.',
    },
    {
      question: 'What is your process for handling customer support inquiries?',
      answer:
        'We have a dedicated customer support team that is available to assist with any questions or issues you may have. You can contact us through the help center on our platform or by emailing support@ourcompany.com.',
    },
  ];

  return (
    <div className='mx-12 xl:mx-48 lg:mx-48 md:mx-32 sm:mx-16'>
      <h1 className='text-center text-2xl bold my-10 text-teal-600'>Questions and Answers</h1>
      {questions.map((question) => (
        <div key={question.question}>
          <h3 className='bold mt-5 text-lg'>{question.question}</h3>
          <p>{question.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default QuestionsAnswers;
