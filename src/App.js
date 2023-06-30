import './App.scss';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import LandingPageComponent from './components/LandingPageComponent/LandingPageComponent';
import QuizComponent from './components/QuizComponent/QuizComponent';

function App() {

  let question1 = {
    question:
      "Question 1: How do you prefer to take notes and share meeting summaries?",
    options: [
      {
        optionContent:
          "a) I record the meeting and share the audio/video for reference.",
        optionId: 1,
      },
      {
        optionContent:
          "b) I take notes during the meeting and share a detailed summary afterward.",
        optionId: 2,
      },
      {
        optionContent:
          "c) I create fun and engaging comics or memes to capture the meeting highlights.",
        optionId: 3,
      },
    ],
  }

  return (
    <div className="App">
      <HeaderComponent/>
      <LandingPageComponent/>
      <QuizComponent questionNumber={1} questionDetails={question1}/>
      <QuizComponent questionNumber={2} questionDetails={question1}/>
      <QuizComponent questionNumber={3} questionDetails={question1}/>
      <QuizComponent questionNumber={4} questionDetails={question1}/>
      <QuizComponent questionNumber={5} questionDetails={question1}/>
      <QuizComponent questionNumber={6} questionDetails={question1}/>
    </div>
  );
}

export default App;
