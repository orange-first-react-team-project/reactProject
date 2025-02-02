import React, { useState, useEffect } from "react";
import axios from "axios";
import { Navbar } from "../exports";
import "../Articles/Articles.css";
import Footer from '../Footer/Footer'


import html2canvas from "html2canvas";
import { FloatingWhatsApp } from "react-floating-whatsapp";

function Articles() {
  const [task, setTask] = useState("");
  const [quadrant1, setQuadrant1] = useState([]); // Urgent & Important
  const [quadrant2, setQuadrant2] = useState([]); // Not Urgent but Important
  const [quadrant3, setQuadrant3] = useState([]); // Urgent but Not Important
  const [quadrant4, setQuadrant4] = useState([]); // Not Urgent & Not Important
  const [isListening, setIsListening] = useState(false);

  // add task to box
  const addTask = (quadrant) => {
    if (task.trim()) {
      switch (quadrant) {
        case 1:
          setQuadrant1([...quadrant1, task]);
          break;
        case 2:
          setQuadrant2([...quadrant2, task]);
          break;
        case 3:
          setQuadrant3([...quadrant3, task]);
          break;
        case 4:
          setQuadrant4([...quadrant4, task]);
          break;
        default:
          break;
      }
      setTask(""); // clear box after add
    }
  };

  // Recording button
  const startListening = () => {
    if (!("webkitSpeechRecognition" in window)) {
      //This checks whether webkitSpeechRecognition is supported in the browser.
      alert("Your browser does not support speech recognition!");
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => setIsListening(true); //When speech recognition starts,
    // the setIsListening(true)
    // function updates the state to indicate the microphone is active.
    recognition.onend = () => setIsListening(false);

    recognition.onresult = (event) => {
      const speechToText = event.results[0][0].transcript; //transcript extracts spoken words as text from the recognition event.
      setTask(speechToText);
    };

    recognition.start();
  };

  // screenshot
  const captureScreenshot = () => {
    const taskSection = document.getElementById("quadrantt");
    if (taskSection) {
      html2canvas(taskSection).then((canvas) => {
        //html2canvas(taskSection) takes a screenshot of the selected element and converts it into a canvas (an HTML element used for drawing).
        const link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = "task_screenshot.png";
        link.click();
      });
    }
  };

  /********************************************************************/

  return (
    <div className="App">
      <Navbar />
      <h1 style={{ fontSize: "4rem" }}>Article Page</h1>

      <div
        style={{ background: "#F2EFE7" }}
        className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6"
      >
        {/* Left Content */}
        <div className="font-light text-gray-500 sm:text-lg dark:text-black mb-10">
          <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 dark:text-black">
            The Eisenhower Matrix: How to prioritize your to-do list
          </h2>
          <p className="mb-4">
            The Eisenhower Matrix is a task management tool that helps you
            organize and prioritize tasks based on urgency and importance.
          </p>
          <p className="mb-4">
            Using this tool, you’ll divide your tasks into four categories:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>
              <strong>Urgent & Important:</strong> Tasks you need to do
              immediately.
            </li>
            <li>
              <strong>Important but Not Urgent:</strong> Tasks you schedule for
              later.
            </li>
            <li>
              <strong>Urgent but Not Important:</strong> Tasks you delegate.
            </li>
            <li>
              <strong>Neither Urgent nor Important:</strong> Tasks you
              eliminate.
            </li>
          </ul>
          <p>
            In this guide, we’ll explain how to set up an Eisenhower Matrix and
            share tips for effective task prioritization.
          </p>
        </div>

        {/* Right Image */}
        <div>
          <img
            style={{ width: "500px", height: "400px" }}
            className="w-full rounded-lg"
            src="https://luxafor.com/wp-content/uploads/2023/02/The-Eisenhower-Decision-Matrix-png.png"
            alt="The Eisenhower Matrix"
          />
        </div>
      </div>

      <h1 style={{ fontSize: "3.2rem", margin: "50px" }}>
        Try to apply The Eisenhower Matrix on your tasks
      </h1>

      {/* 📝 قسم إدخال المهام مع الأزرار */}
      <div className="task-input" id="task-box">
        <input
          style={{ border: "#333 solid 2px", color: "red" }}
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter task"
        />
        <button
          onClick={startListening}
          style={{
            backgroundColor: isListening ? "red" : "green",
            color: "white",
          }}
        >
          {isListening ? "Listening..." : "Record 🎤"}
        </button>
        <button
          style={{ background: "#48A6A7", color: "black", fontWeight: "bold" }}
          onClick={() => addTask(1)}
        >
          Add to Quadrant 1
        </button>
        <button
          style={{ background: "#48A6A7", color: "black", fontWeight: "bold" }}
          onClick={() => addTask(2)}
        >
          Add to Quadrant 2
        </button>
        <button
          style={{ background: "#48A6A7", color: "black", fontWeight: "bold" }}
          onClick={() => addTask(3)}
        >
          Add to Quadrant 3
        </button>
        <button
          style={{ background: "#48A6A7", color: "black", fontWeight: "bold" }}
          onClick={() => addTask(4)}
        >
          Add to Quadrant 4
        </button>
        <button
          onClick={captureScreenshot}
          style={{
            backgroundColor: "blue",
            color: "white",
            fontWeight: "bold",
          }}
        >
          📸 Take Screenshot
        </button>
      </div>

      {/* matrix */}
      <div className="matrix" id="quadrantt">
        <div className="quadrant">
          <h2>Quadrant 1 (Urgent & Important)</h2>
          <ul style={{ fontWeight: "bold" }}>
            {quadrant1.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
        </div>
        <div className="quadrant">
          <h2>Quadrant 2 (Not Urgent but Important)</h2>
          <ul style={{ fontWeight: "bold" }}>
            {quadrant2.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
        </div>
        <div className="quadrant">
          <h2>Quadrant 3 (Urgent but Not Important)</h2>
          <ul style={{ fontWeight: "bold" }}>
            {quadrant3.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
        </div>
        <div className="quadrant">
          <h2>Quadrant 4 (Not Urgent & Not Important)</h2>
          <ul style={{ fontWeight: "bold" }}>
            {quadrant4.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      {/************************************************************************************ */}

      <section
        style={{ background: "#9ACBD0" }}
        className="bg-white dark:bg-gray-900"
      >
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          {/* Left Content */}
          <div className="font-light text-gray-500 sm:text-lg dark:text-black">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-black">
              What Is the 80-20 Rule?
            </h2>
            <p className="mb-4">
              The 80-20 rule, also known as the Pareto Principle, is a familiar
              saying that asserts that 80% of outcomes (or outputs) result from
              20% of all causes (or inputs) for any given event. In business, a
              goal of the 80-20 rule is to identify inputs that are potentially
              the most productive and make them the priority. For instance, once
              managers identify factors that are critical to their company's
              success, they should give those factors the most focus.
            </p>
          </div>

          {/* Right Images */}
          <div className="">
            <img
              className="w-full rounded-lg"
              src="https://i.pinimg.com/736x/7d/1a/7d/7d1a7d5010a9e06a416a97b13e5fd8c8.jpg"
              alt="office content 1"
            />
          </div>
        </div>
      </section>
      <br />
      <br />

      {/***************************************************************************************/}

      <Quiz />
      <br />
      <br />
      <hr className="hrr" />
      <br />
      <br />
      <ContactForm />

      <FloatingWhatsApp
        phoneNumber="962785956180"
        accountName="Rami Abdelhamid"
        avatar="https://i.ibb.co/G4ps8zxW/Screenshot-2025-01-31-212827.png"
        statusMessage="Online"
        chatMessage="Hello! How can we assist you?"
        allowClickAway={true}
        darkMode={true}
        notification={true}
        notificationSound={true}
        messageDelay={1}
      />
      <BackToTop />
    </div>
  );
}

// help form
function ContactForm() {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [isListening, setIsListening] = useState(false);

  // Function to handle voice recognition for the message box
  const startListening = () => {
    if (!("webkitSpeechRecognition" in window)) {
      alert("Your browser does not support speech recognition.");
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);

    recognition.onresult = (event) => {
      const speechToText = event.results[0][0].transcript;
      setMessage(speechToText);
    };

    recognition.start();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Use axios to send data to Firebase
      await axios.post(
        "https://react-team-project-e3fab-default-rtdb.firebaseio.com/messages.json",
        {
          email: email,
          message: message,
        }
      );

      alert("Message sent successfully!✅");

      // Clear the form after sending the message
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("An error occurred while sending❌", error);
    }
  };

  return (
    <div className="formcontainer">
      <div style={{ background: "#F2EFE7" }} className="contact-form">
        <h1 style={{ fontSize: "2rem" }}>Need More help ?</h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label>Your Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label>Message:</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              placeholder="Write your message here"
            />
          </div>
          <div>
            <button
              type="button"
              onClick={startListening}
              style={{
                backgroundColor: isListening ? "red" : "green",
                color: "white",
              }}
            >
              🎤 {isListening ? "Listening..." : "Record Message"}
            </button>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

/********************************************************/
// back to top arrow
const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  // تابع لمراقبة التمرير
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // دالة للتمرير للأعلى بسلاسة
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`back-to-top ${visible ? "show" : ""}`}
      aria-label="Back to Top"
    >
      ⬆️
    </button>
  );
};
/**************************************************************************************** */
// quiz box
const Quiz = () => {
  const questions = [
    {
      question: "What is the best time to organize your daily tasks?",
      options: ["Early morning", "Midday", "Before bed", "Any time"],
      answer: "Early morning",
    },
    {
      question: "What is the best way to manage large tasks?",
      options: [
        "Break them into smaller tasks",
        "Postpone them for later",
        "Do them all at once",
        "Don't plan for them",
      ],
      answer: "Break them into smaller tasks",
    },
    {
      question: "What do you do when you feel overwhelmed by too many tasks?",
      options: [
        "Take a short break",
        "Keep working",
        "Give up",
        "Switch to another task",
      ],
      answer: "Take a short break",
    },
    {
      question: "What is the most effective way to achieve work-life balance?",
      options: [
        "Pre-planning",
        "Neglect personal life",
        "Work non-stop",
        "No boundaries between work and home",
      ],
      answer: "Pre-planning",
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerSelection = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestionIndex(nextQuestion);
    } else {
      setShowResult(true);
    }
    setSelectedAnswer("");
  };

  return (
    <>
      <div className="quiz-container">
        <h1>Time Management Quiz</h1>

        {showResult ? (
          <div className="result">
            <h2>
              Your Score: {score} out of {questions.length}
            </h2>
          </div>
        ) : (
          <div className="question-container">
            <h2>{questions[currentQuestionIndex].question}</h2>
            <div className="options-container">
              {questions[currentQuestionIndex].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelection(option)}
                  className={`option-btn ${selectedAnswer === option ? "selected" : ""
                    }`}
                >
                  {option}
                </button>
              ))}
            </div>
            <button onClick={handleSubmitAnswer} className="submit-btn">
              Next
            </button>
          </div>
        )}

      </div>

    </>

  );
};

export default Articles;
