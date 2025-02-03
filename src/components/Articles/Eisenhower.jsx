
import React, { useState, useEffect } from "react";
import { Navbar } from "../exports";
import "../Articles/Articles.css";
import html2canvas from "html2canvas";
import { FloatingWhatsApp } from "react-floating-whatsapp";


import Footer from "../Footer/Footer";


function Eisenhower() {
  const [task, setTask] = useState("");
  const [quadrant1, setQuadrant1] = useState([]); // Urgent & Important
  const [quadrant2, setQuadrant2] = useState([]); // Not Urgent but Important
  const [quadrant3, setQuadrant3] = useState([]); // Urgent but Not Important
  const [quadrant4, setQuadrant4] = useState([]); // Not Urgent & Not Important
  const [isListening, setIsListening] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("en-US"); // اللغة الافتراضية: الإنجليزية

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

  // 🎤 تسجيل الصوت
  const startListening = () => {
    if (!("webkitSpeechRecognition" in window)) {
      alert("متصفحك لا يدعم ميزة التعرف على الصوت!");
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = selectedLanguage; // استخدام اللغة المختارة من القائمة
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);

    recognition.onresult = (event) => {
      const speechToText = event.results[0][0].transcript;
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

<>
    <div className="App" style={{ background: "#F2EFE7" }}>
      <Navbar />
      <h1  style={{ fontSize: "4rem" }}>The Eisenhower Matrix</h1>

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
        <div>
          {/* 🌍 قائمة اختيار اللغة (أصغر حجمًا) */}
          <select
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
            style={{
              width: "120px", // ✅ تصغير العرض
              padding: "4px", // ✅ تقليل التباعد الداخلي
              fontSize: "14px", // ✅ تصغير حجم الخط
              border: "1px solid #ccc",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            <option value="en-US">🇺🇸 English</option>
            <option value="ar-SA">🇸🇦 العربية</option>
            <option value="fr-FR">🇫🇷 Français</option>
            <option value="de-DE">🇩🇪 Deutsch</option>
            <option value="es-ES">🇪🇸 Español</option>
            <option value="it-IT">🇮🇹 Italiano</option>
            <option value="tr-TR">🇹🇷 Türkçe</option>
            <option value="ru-RU">🇷🇺 Русский</option>
            <option value="zh-CN">🇨🇳 中文 (الصينية)</option>
          </select>

          {/* 🎤 زر تسجيل الصوت */}
          <button
            onClick={startListening}
            style={{
              backgroundColor: isListening ? "red" : "green",
              color: "white",
              padding: "6px 12px", // ✅ تصغير الزر قليلاً
              fontSize: "14px", // ✅ تصغير النص داخل الزر
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            {isListening ? "Listening..." : `🎤 Record`}
          </button>
        </div>

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
      
    </div>
    <Footer/>
    </>

  );
}


export default Eisenhower;