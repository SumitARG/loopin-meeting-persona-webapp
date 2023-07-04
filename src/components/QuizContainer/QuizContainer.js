import QuizComponent from "../QuizComponent/QuizComponent";
import "./QuizContainer.scss";

const QuizContainer = () => {
  let questionsList = {
    question1: {
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
      questionId: 1,
    },
    question2: {
      question:
        "Question 2: How do you prepare for a meeting and share the agenda?",
      options: [
        {
          optionContent:
            "a) I meticulously plan and share a detailed agenda well in advance. 📅",
          optionId: 1,
        },
        {
          optionContent:
            "b) I prepare a creative and visually appealing agenda to grab everyone's attention. 🎨",
          optionId: 2,
        },
        {
          optionContent:
            "c) I prefer an impromptu approach & surprise everyone with a mystery agenda during the meeting. 🎩",
          optionId: 3,
        },
      ],
      questionId: 2,
    },
    question3: {
      question:
        "Question 3: How do you handle conflict resolution during meetings?",
      options: [
        {
          optionContent:
            "a) I actively mediate and find common ground between conflicting parties. 🤝",
          optionId: 1,
        },
        {
          optionContent:
            "b) I encourage open and respectful discussion to address conflicts. 💬",
          optionId: 2,
        },
        {
          optionContent:
            "c) I diffuse tension with humor and bring a lighthearted perspective to resolve conflicts. 😄",
          optionId: 3,
        },
      ],
      questionId: 3,
    },
    question4: {
      question: "Question 4: How do you follow up on meeting outcomes?",
      options: [
        {
          optionContent:
            "a) I send detailed action item lists and deadlines to ensure progress. ✉️",
          optionId: 1,
        },
        {
          optionContent:
            "b) I organize a virtual celebration to acknowledge achievements and milestones. 🎉",
          optionId: 2,
        },
        {
          optionContent:
            "c) I create personalized memes or GIFs to summarize the meeting outcomes and share them. 🎭",
          optionId: 3,
        },
      ],
      questionId: 4,
    },
    question5: {
      question: "Question 5: What's your preferred meeting style?",
      options: [
        {
          optionContent: "a) I aim for maximum efficiency and results. ⏱️",
          optionId: 1,
        },
        {
          optionContent:
            "b) I love thinking outside the box and bringing fresh ideas. 💡",
          optionId: 2,
        },
        {
          optionContent:
            "c) I believe in fostering a relaxed and stress-free meeting environment. 😌",
          optionId: 3,
        },
      ],
      questionId: 5,
    },
    question6: {
      question:
        "Question 6: If meetings were a canvas for creativity, which meeting background would be your Picasso?",
      options: [
        {
          optionContent:
            "a) None - I embrace the simplicity and let the meeting take center stage. 🖼️",
          optionId: 1,
        },
        {
          optionContent:
            "b) Blur - I cloak my surroundings in a veil of mystery, hiding any potential chaos. 🌫️",
          optionId: 2,
        },
        {
          optionContent:
            "c) Random frames - I paint my meetings with playful strokes, adding a touch of fun to the conversation. 🎨",
          optionId: 3,
        },
      ],
      questionId: 6,
    },
  };

  return (
    <div className="quiz-container">
      <QuizComponent
        questionNumber={1}
        questionDetails={questionsList.question1}
      />
      <QuizComponent
        questionNumber={2}
        questionDetails={questionsList.question2}
      />
      <QuizComponent
        questionNumber={3}
        questionDetails={questionsList.question3}
      />
      <QuizComponent
        questionNumber={4}
        questionDetails={questionsList.question4}
      />
      <QuizComponent
        questionNumber={5}
        questionDetails={questionsList.question5}
      />
      <QuizComponent
        questionNumber={6}
        questionDetails={questionsList.question6}
      />
    </div>
  );
};

export default QuizContainer;
