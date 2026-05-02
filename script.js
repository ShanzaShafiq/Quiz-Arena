
    // Quiz data
    const quizData = {
      html: [
        {
          question: "Which HTML tag is used for creating a hyperlink?",
          options: ["<a>", "<link>", "<href>", "<hyper>"],
          correctAnswer: "a"
        },
        {
          question: "What does HTML stand for?",
          options: [
            "Hyper Text Markup Language",
            "High Tech Modern Language",
            "Hyperlinks and Text Markup Language",
            "Home Tool Markup Language"
          ],
          correctAnswer: "a"
        },
        {
          question: "Which tag is used for inserting a line break?",
          options: ["br", "lb;", "break", "line"],
          correctAnswer: "a"
        },
        {
          question: "What is the correct HTML element for the largest heading?",
          options: ["h1;", "heading", "h6", "head"],
          correctAnswer: "a"
        },
        {
          question: "Which attribute is used to provide a unique name for an HTML element?",
          options: ["id", "class", "name", "element-id"],
          correctAnswer: "a"
        },
        {
          question: "Which HTML element defines the title of a document?",
          options: ["title", "meta&gt", "head&gt", "header"],
          correctAnswer: "a"
        },
        {
          question: "Which HTML attribute specifies an alternate text for an image?",
          options: ["alt", "title", "src", "longdesc"],
          correctAnswer: "a"
        },
        {
          question: "Which input type defines a slider control?",
          options: ["range", "slider", "number", "control"],
          correctAnswer: "a"
        },
        {
          question: "Which tag is used to define an unordered list?",
          options: ["ul", "ol", "list", "li"],
          correctAnswer: "a"
        },
        {
          question: "Which character is used to indicate an end tag?",
          options: ["/", ">", "!", "*"],
          correctAnswer: "a"
        }
      ],
      css: [
        {
          question: "What does CSS stand for?",
          options: [
            "Cascading Style Sheets",
            "Computer Style Sheets",
            "Creative Style System",
            "Colorful Style Sheets"
          ],
          correctAnswer: "a"
        },
        {
          question: "Which property is used to change the background color?",
          options: ["background-color", "bgcolor", "color", "background"],
          correctAnswer: "a"
        },
        {
          question: "How do you add a background image?",
          options: [
            "background-image: url('image.jpg');",
            "bg-image: url('image.jpg');",
            "image: url('image.jpg');",
            "background: url('image.jpg');"
          ],
          correctAnswer: "a"
        },
        {
          question: "Which property is used to change the font of an element?",
          options: ["font-family", "font-style", "font-weight", "text-font"],
          correctAnswer: "a"
        },
        {
          question: "How do you make text bold?",
          options: ["font-weight: bold;", "text: bold;", "style: bold;", "font: bold;"],
          correctAnswer: "a"
        },
        {
          question: "Which property controls the text size?",
          options: ["font-size", "text-size", "size", "font-style"],
          correctAnswer: "a"
        },
        {
          question: "How do you select an element with id 'demo'?",
          options: ["#demo", ".demo", "demo", "*demo"],
          correctAnswer: "a"
        },
        {
          question: "How do you select elements with class name 'test'?",
          options: [".test", "#test", "test", "*test"],
          correctAnswer: "a"
        },
        {
          question: "Which property is used to change the left margin?",
          options: ["margin-left", "padding-left", "indent", "left-margin"],
          correctAnswer: "a"
        },
        {
          question: "How do you make a list display horizontally?",
          options: [
            "display: inline;",
            "display: horizontal;",
            "list-style: horizontal;",
            "list-type: inline;"
          ],
          correctAnswer: "a"
        }
      ],
      js: [
        {
          question: "Inside which HTML element do we put the JavaScript?",
          options: ["script", "javascript", "scripting&gt", "js"],
          correctAnswer: "a"
        },
        {
          question: "How do you create a function in JavaScript?",
          options: [
            "function myFunction()",
            "function = myFunction()",
            "function:myFunction()",
            "create myFunction()"
          ],
          correctAnswer: "a"
        },
        {
          question: "How to write an IF statement in JavaScript?",
          options: ["if (i == 5)", "if i = 5", "if i == 5 then", "if i = 5 then"],
          correctAnswer: "a"
        },
        {
          question: "How does a WHILE loop start?",
          options: ["while (i <= 10)", "while i = 1 to 10", "while (i <= 10; i++)", "while i <= 10"],
          correctAnswer: "a"
        },
        {
          question: "How do you add a comment in JavaScript?",
          options: [
            "// This is a comment",
            "' This is a comment",
            "<!-- This is a comment -->",
            "# This is a comment"
          ],
          correctAnswer: "a"
        },
        {
          question: "What is the correct way to write a JavaScript array?",
          options: [
            "var colors = ['red', 'green', 'blue'];",
            "var colors = 'red', 'green', 'blue';",
            "var colors = (1:'red', 2:'green', 3:'blue');",
            "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue');"
          ],
          correctAnswer: "a"
        },
        {
          question: "Which operator is used to assign a value to a variable?",
          options: ["=", "*", "-", "x"],
          correctAnswer: "a"
        },
        {
          question: "What will the following code return: Boolean(10 > 9)?",
          options: ["true", "false", "NaN", "undefined"],
          correctAnswer: "a"
        },
        {
          question: "Which method removes the last element from an array?",
          options: ["pop()", "remove()", "delete()", "splice()"],
          correctAnswer: "a"
        },
        {
          question: "How do you round the number 7.25 to the nearest integer?",
          options: ["Math.round(7.25)", "Math.rnd(7.25)", "round(7.25)", "rnd(7.25)"],
          correctAnswer: "a"
        }
      ],
      cpp: [
        {
          question: "Which data type is used to create a variable that should store text?",
          options: ["string", "txt", "str", "text"],
          correctAnswer: "a"
        },
        {
          question: "How do you insert COMMENTS in C++ code?",
          options: [
            "// This is a comment",
            "/* This is a comment */",
            "# This is a comment",
            "Both A and B"
          ],
          correctAnswer: "d"
        },
        {
          question: "Which operator is used to add together two values?",
          options: ["+", "&", "*", "ADD"],
          correctAnswer: "a"
        },
        {
          question: "What is the correct way to create a variable in C++?",
          options: [
            "int myNum = 15;",
            "variable myNum = 15;",
            "int: myNum = 15;",
            "integer myNum = 15;"
          ],
          correctAnswer: "a"
        },
        {
          question: "Which header file lets us work with input and output objects?",
          options: ["#include &lt;iostream&gt;", "#include &lt;inputstr&gt;", "#include &lt;ios&gt;", "#include &lt;stream&gt;"],
          correctAnswer: "a"
        },
        {
          question: "How do you start writing an if statement in C++?",
          options: ["if (x > y)", "if x > y then", "if x > y:", "if (x > y) then"],
          correctAnswer: "a"
        },
        {
          question: "How do you create a function in C++?",
          options: [
            "void myFunction()",
            "function myFunction()",
            "create myFunction()",
            "def myFunction():"
          ],
          correctAnswer: "a"
        },
        {
          question: "Which keyword is used to create a class in C++?",
          options: ["class", "className", "classdef", "create class"],
          correctAnswer: "a"
        },
        {
          question: "What is the correct way to create an object of MyClass?",
          options: [
            "MyClass myObj;",
            "class MyClass myObj;",
            "new MyClass myObj;",
            "object myObj = MyClass();"
          ],
          correctAnswer: "a"
        },
        {
          question: "Which method can be used to find the length of a string?",
          options: ["length()", "len()", "getLength()", "size()"],
          correctAnswer: "a"
        }
      ]
    };

    // Initialize the app
    document.addEventListener('DOMContentLoaded', function() {
      // DOM elements
      const welcomeStage = document.getElementById('welcome');
      const categoryStage = document.querySelector('.stage-select');
      const quizStage = document.querySelector('.stage-quiz');
      const resultStage = document.querySelector('.stage-result');
      const aboutStage = document.querySelector('.stage-about');
      const contactStage = document.querySelector('.stage-contact'); 

      const enterBtn = document.getElementById('enter-btn');
      const nextBtn = document.getElementById('next-btn');
      const prevBtn = document.getElementById('prev-btn');
      const restartBtn = document.getElementById('restart-btn');
      const reviewBtn = document.getElementById('review-btn');
      const backFromAboutBtn = document.getElementById('back-from-about');
      const answerList = document.getElementById('answer-list');
      const questionEl = document.getElementById('question');
      const timerEl = document.getElementById('timer');
      const progressBar = document.getElementById('progress-bar');
      const scoreText = document.getElementById('score-text');
      const leaderboardList = document.getElementById('leaderboard-list');
      const scoreForm = document.getElementById('score-form');
      const usernameInput = document.getElementById('username');
// DARK MODE TOGGLE FUNCTIONALITY
const darkModeToggles = document.querySelectorAll('#theme-toggle');

// Load saved preference
const savedDarkMode = localStorage.getItem('dark-mode') === 'true';
if (savedDarkMode) {
  document.body.classList.add('dark-mode');
  darkModeToggles.forEach(t => t.checked = true);
}

darkModeToggles.forEach(toggle => {
  toggle.addEventListener('change', () => {
    const enable = toggle.checked;
    document.body.classList.toggle('dark-mode', enable);
    localStorage.setItem('dark-mode', enable);

    // sync all toggles
    darkModeToggles.forEach(other => {
      other.checked = enable;
    });
  });
});

      // Quiz state
      let currentCategory = null;
      let currentQuestionIndex = 0;
      let score = 0;
      let timeLeft = 60;
      let timerInterval;
      let userAnswers = [];
      
      // Leaderboard data
      let leaderboard = JSON.parse(localStorage.getItem('quizArenaLeaderboard')) || [
        { name: "Shanza", score: 10 },
        { name: "humira", score: 9 },
        { name: "Hassan", score: 8 },
        { name: "Zain", score: 7 },
        { name: "Fatima", score: 6 }
      ];
      // Update leaderboard display
      function updateLeaderboard() {
        leaderboardList.innerHTML = '';
        
        // Sort leaderboard by score
        leaderboard.sort((a, b) => b.score - a.score);
        
        // Display top 5
        leaderboard.slice(0, 5).forEach((entry, index) => {
          const li = document.createElement('li');
          li.innerHTML = `
            <div class="user-info">
              <div class="user-avatar">${entry.name.charAt(0)}</div>
              <span>
                ${index === 0 ? '<i class="fas fa-medal gold"></i>' : ''}
                ${index === 1 ? '<i class="fas fa-medal silver"></i>' : ''}
                ${index === 2 ? '<i class="fas fa-medal bronze"></i>' : ''}
                ${entry.name}
              </span>
            </div>
            <span>${entry.score}/10</span>
          `;
          leaderboardList.appendChild(li);
        });
      }
      const loginBtn = document.getElementById('login-modal-btn');
const signupBtn = document.getElementById('signup-modal-btn');
const loginModal = document.getElementById('login-modal');
const signupModal = document.getElementById('signup-modal');
const closeLoginBtn = document.getElementById('close-login');
const closeSignupBtn = document.getElementById('close-signup');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
document.addEventListener('DOMContentLoaded', () => {
  const stages = document.querySelectorAll('.stage');
  
  const showStage = (selector) => {
    stages.forEach(stage => stage.classList.add('hidden'));
    document.querySelector(selector).classList.remove('hidden');
  };

  // Navbar links
  document.getElementById('home-link').addEventListener('click', () => showStage('#welcome'));
  document.getElementById('about-link').addEventListener('click', () => showStage('.stage-about'));
  document.getElementById('contact-link').addEventListener('click', () => showStage('.stage-contact'));

  // Back buttons
  document.getElementById('back-from-about').addEventListener('click', () => showStage('#welcome'));
  document.getElementById('back-from-contact').addEventListener('click', () => showStage('#welcome'));
});

// Show modals
loginBtn.addEventListener('click', () => {
  loginModal.classList.remove('hidden');
});
signupBtn.addEventListener('click', () => {
  signupModal.classList.remove('hidden');
});

// Close modals
closeLoginBtn.addEventListener('click', () => {
  loginModal.classList.add('hidden');
});
closeSignupBtn.addEventListener('click', () => {
  signupModal.classList.add('hidden');
});

// Escape key closes modals
window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
    loginModal.classList.add('hidden');
    signupModal.classList.add('hidden');
  }
});

// Dummy form handlers
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert("✅ Logged in successfully!");
  loginModal.classList.add('hidden');
});

signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert("🎉 Account created!");
  signupModal.classList.add('hidden');
});

function setActiveNavLink(linkId) {
  document.querySelectorAll('nav a').forEach(link => {
    link.classList.remove('active');
  });
  document.getElementById(linkId).classList.add('active');
}

setActiveNavLink('home-link');
setActiveNavLink('categories-link'); 

      // Start the quiz
      function startQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        timeLeft = 60;
        userAnswers = [];
        updateTimerDisplay();
        loadQuestion();
        
        // Start timer
        clearInterval(timerInterval);
        timerInterval = setInterval(() => {
          timeLeft--;
          updateTimerDisplay();
          
          if (timeLeft <= 0) {
            clearInterval(timerInterval);
            finishQuiz();
          }
        }, 1000);
      }
      
      // Load a question
      function loadQuestion() {
        const questions = quizData[currentCategory];
        const question = questions[currentQuestionIndex];
        
        questionEl.textContent = question.question;
        answerList.innerHTML = '';
        
        question.options.forEach((option, index) => {
          const li = document.createElement('li');
          li.textContent = option;
          li.dataset.answer = String.fromCharCode(97 + index);
          
          // Add click event to each answer option
          li.addEventListener('click', function() {
            // Remove any existing selected class
            document.querySelectorAll('#answer-list li').forEach(item => {
              item.classList.remove('selected');
            });
            
            // Add selected class to clicked option
            this.classList.add('selected');
            
            // Enable the next button
            nextBtn.disabled = false;
          });
          
          answerList.appendChild(li);
        });
        
        // Update progress
        const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
        progressBar.value = progress;
        
        // Update prev button state
        prevBtn.disabled = currentQuestionIndex === 0;
        
        // Disable next button until an answer is selected
        nextBtn.disabled = true;
      }
      
      // Next question
      function nextQuestion() {
        const selected = document.querySelector('#answer-list li.selected');
        if (!selected) return;
        
        const questions = quizData[currentCategory];
        const question = questions[currentQuestionIndex];
        const selectedAnswer = selected.dataset.answer;
        const isCorrect = selectedAnswer === question.correctAnswer;
        
        // Store user answer
        userAnswers.push({
          question: question.question,
          selected: selected.textContent,
          correct: question.options[question.correctAnswer.charCodeAt(0) - 97],
          isCorrect: isCorrect
        });
        
        // Update score if correct
        if (isCorrect) {
          score++;
          selected.classList.add('correct');
        } else {
          selected.classList.add('incorrect');
          // Highlight correct answer
          document.querySelectorAll('#answer-list li').forEach(li => {
            if (li.dataset.answer === question.correctAnswer) {
              li.classList.add('correct');
            }
          });
        }
        
        nextBtn.disabled = true;
        
        // Remove the timeout and move immediately
        currentQuestionIndex++;
          
        if (currentQuestionIndex < questions.length) {
          setTimeout(() => loadQuestion(), 500); // Small delay for transition
        } else {
          clearInterval(timerInterval);
          finishQuiz();
        }
      }
      
      // Previous question
      function prevQuestion() {
        if (currentQuestionIndex > 0) {
          currentQuestionIndex--;
          userAnswers.pop(); // Remove last answer
          loadQuestion();
        }
      }
      
      // Finish quiz
      function finishQuiz() {
        quizStage.classList.add('hidden');
        resultStage.classList.remove('hidden');
        
        const totalQuestions = quizData[currentCategory].length;
        scoreText.textContent = `Your Score: ${score}/${totalQuestions}`;
        
        // Show confetti if score is high
        if (score >= totalQuestions * 0.8) {
          confetti({
            particleCount: 300,
            spread: 100,
            origin: { y: 0.6 }
          });
        }
        
        // Create chart
        createScoreChart(totalQuestions);
        
        // Update leaderboard
        updateLeaderboard();
      }
      
      // Create score chart
      function createScoreChart(totalQuestions) {
        const ctx = document.getElementById('stats-chart').getContext('2d');
        
        new Chart(ctx, {
          type: 'doughnut',
          data: {
            labels: ['Correct', 'Incorrect'],
            datasets: [{
              data: [score, totalQuestions - score],
              backgroundColor: ['#00b894', '#ff7675'],
              borderWidth: 0
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: 'bottom',
                labels: {
                  color: '#2d3436',
                  font: {
                    size: 14
                  }
                }
              }
            }
          }
        });
      }
      
      // Update timer display
      function updateTimerDisplay() {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerEl.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
      }
      
      // Restart quiz
      function restartQuiz() {
        resultStage.classList.add('hidden');
        categoryStage.classList.remove('hidden');
         setActiveNavLink('categories-link'); 
      }
      
      // Save score to leaderboard
      function saveScore(username) {
        leaderboard.push({
          name: username,
          score: score
        });
        
        // Sort by score (descending)
        leaderboard.sort((a, b) => b.score - a.score);
        
        // Keep only top 10
        leaderboard = leaderboard.slice(0, 10);
        
        // Save to localStorage
        localStorage.setItem('quizArenaLeaderboard', JSON.stringify(leaderboard));
        
        // Update leaderboard display
        updateLeaderboard();
        
        // Show success message
        alert(`Score saved successfully! ${username} is now on the leaderboard!`);
      }
      
      // Event listeners
      enterBtn.addEventListener('click', () => {
        welcomeStage.classList.add('hidden');
        categoryStage.classList.remove('hidden');
        setActiveNavLink('categories');
      });
      
      // Category selection
      document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', () => {
          currentCategory = card.dataset.category;
          categoryStage.classList.add('hidden');
          quizStage.classList.remove('hidden');
          startQuiz();
        });
      });
      
      nextBtn.addEventListener('click', nextQuestion);
      prevBtn.addEventListener('click', prevQuestion);
      restartBtn.addEventListener('click', restartQuiz);
      
      backFromAboutBtn.addEventListener('click', () => {
        aboutStage.classList.add('hidden');
        welcomeStage.classList.remove('hidden');
        setActiveNavLink('home');
      });
      
      // Save score form submission
      scoreForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = usernameInput.value.trim();
        if (username) {
          saveScore(username);
        }
      });
      
      // Navigation links
      document.getElementById('home-link').addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelectorAll('.stage').forEach(stage => stage.classList.add('hidden'));
        welcomeStage.classList.remove('hidden');
        setActiveNavLink('home');
      });
      
      document.getElementById('categories-link').addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelectorAll('.stage').forEach(stage => stage.classList.add('hidden'));
        categoryStage.classList.remove('hidden');
        setActiveNavLink('categories');
      });
      
      document.getElementById('leaderboard-link').addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelectorAll('.stage').forEach(stage => stage.classList.add('hidden'));
        resultStage.classList.remove('hidden');
        updateLeaderboard();
        setActiveNavLink('leaderboard');
      });
      
      document.getElementById('about-link').addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelectorAll('.stage').forEach(stage => stage.classList.add('hidden'));
        aboutStage.classList.remove('hidden');
        setActiveNavLink('about');
      });
      
     document.getElementById('contact-link').addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelectorAll('.stage').forEach(stage => stage.classList.add('hidden'));
  contactStage.classList.remove('hidden'); 
  setActiveNavLink('contact');
});

  // Review button functionality
  reviewBtn.addEventListener('click', showReview);

  function showReview() {
    resultStage.classList.add('hidden');
    const reviewStage = document.querySelector('.stage-review');
    reviewStage.classList.remove('hidden');
    
    const reviewList = document.getElementById('review-list');
    reviewList.innerHTML = '';
    
    userAnswers.forEach((answer, index) => {
      const reviewItem = document.createElement('div');
      reviewItem.className = `review-item ${answer.isCorrect ? 'correct' : 'incorrect'}`;
      
      reviewItem.innerHTML = `
        <h3>Question ${index + 1}</h3>
        <p><strong>Question:</strong> ${answer.question}</p>
        <p class="user-answer"><strong>Your Answer:</strong> ${answer.selected}</p>
        <p class="correct-answer"><strong>Correct Answer:</strong> ${answer.correct}</p>
        <p><strong>Status:</strong> ${answer.isCorrect ? '✅ Correct' : '❌ Incorrect'}</p>
      `;
      
      reviewList.appendChild(reviewItem);
    });
  }

  // Back button from review screen
  document.getElementById('back-from-review').addEventListener('click', () => {
    document.querySelector('.stage-review').classList.add('hidden');
    resultStage.classList.remove('hidden');
  });

      // Initialize leaderboard
      updateLeaderboard();
    });
    