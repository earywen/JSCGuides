import { quizData } from './quiz-data.js';

let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let selectedBoss = 'all';
let selectedRole = 'all';
let currentLang = document.documentElement.lang || 'fr';

const DOM = {
    setupView: document.getElementById('quiz-setup'),
    activeView: document.getElementById('quiz-active'),
    resultsView: document.getElementById('quiz-results'),
    bossBtns: document.querySelectorAll('.quiz-boss-btn'),
    roleBtns: document.querySelectorAll('.quiz-role-selector .diff-btn'),
    startBtn: document.getElementById('start-quiz-btn'),
    questionText: document.getElementById('quiz-question-text'),
    answersGrid: document.getElementById('quiz-answers'),
    progressText: document.getElementById('quiz-progress-text'),
    progressFill: document.getElementById('quiz-progress-fill'),
    bossBadge: document.getElementById('quiz-boss-badge'),
    diffBadge: document.getElementById('quiz-difficulty-badge'),
    feedback: document.getElementById('quiz-feedback'),
    feedbackTitle: document.getElementById('quiz-feedback-title'),
    feedbackText: document.getElementById('quiz-feedback-text'),
    nextBtn: document.getElementById('next-question-btn'),
    scoreNumber: document.getElementById('quiz-score-number'),
    scorePoints: document.getElementById('quiz-score-points'),
    grade: document.getElementById('quiz-grade'),
    retryBtn: document.getElementById('retry-quiz-btn'),
    homeBtn: document.getElementById('back-home-btn'),
    gallery: document.querySelector('.quiz-gallery'),
    prevBtn: document.querySelector('.gallery-prev'),
    nextBtn: document.querySelector('.gallery-next')
};

function initQuiz() {
    if (!DOM.setupView) return; // Not on quiz page

    // Update language tracking
    document.addEventListener('languageChanged', (e) => {
        currentLang = e.detail;
        if (DOM.activeView.style.display !== 'none') {
            renderQuestion(); // Re-render in new lang
        }
    });

    // Boss Selection
    DOM.bossBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            DOM.bossBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            selectedBoss = btn.dataset.boss;
        });
    });

    // Role Selection
    DOM.roleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            DOM.roleBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            selectedRole = btn.dataset.role;
        });
    });

    // Start Quiz
    DOM.startBtn.addEventListener('click', startQuiz);
    DOM.nextBtn.addEventListener('click', handleNextQuestion);
    DOM.retryBtn.addEventListener('click', resetQuiz);
    DOM.homeBtn.addEventListener('click', () => window.location.href = 'index.html');

    initGalleryInteractions();
}

function initGalleryInteractions() {
    if (!DOM.gallery) return;

    // Arrow Navigation
    if (DOM.prevBtn) {
        DOM.prevBtn.addEventListener('click', () => {
            DOM.gallery.scrollBy({ left: -300, behavior: 'smooth' });
        });
    }
    
    if (DOM.nextBtn) {
        DOM.nextBtn.addEventListener('click', () => {
            DOM.gallery.scrollBy({ left: 300, behavior: 'smooth' });
        });
    }

    // Mouse Drag Scrolling
    let isDown = false;
    let startX;
    let scrollLeft;

    DOM.gallery.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - DOM.gallery.offsetLeft;
        scrollLeft = DOM.gallery.scrollLeft;
        // Temporarily disable scroll-snap during drag for smoother sliding
        DOM.gallery.style.scrollSnapType = 'none';
        
        // Prevent default to avoid text selection during drag
        e.preventDefault();
    });

    DOM.gallery.addEventListener('mouseleave', () => {
        isDown = false;
        DOM.gallery.style.scrollSnapType = 'x mandatory';
    });

    DOM.gallery.addEventListener('mouseup', () => {
        isDown = false;
        DOM.gallery.style.scrollSnapType = 'x mandatory';
    });

    DOM.gallery.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - DOM.gallery.offsetLeft;
        const walk = (x - startX) * 2; // Scroll-fast multiplier
        DOM.gallery.scrollLeft = scrollLeft - walk;
    });
}

function startQuiz() {
    // Filter questions
    let pool = quizData.filter(q => {
        const matchBoss = selectedBoss === 'all' || q.boss === selectedBoss;
        const matchRole = selectedRole === 'all' || q.roles.includes('all') || q.roles.includes(selectedRole);
        return matchBoss && matchRole;
    });

    if (pool.length === 0) {
        alert(currentLang === 'fr' ? "Aucune question trouvée pour ces filtres." : "No questions found for these filters.");
        return;
    }

    // Shuffle and pick up to 10
    currentQuestions = shuffleArray([...pool]).slice(0, 10);
    currentQuestionIndex = 0;
    score = 0;

    DOM.setupView.style.display = 'none';
    DOM.resultsView.style.display = 'none';
    DOM.activeView.style.display = 'block';

    renderQuestion();
}

function renderQuestion() {
    DOM.feedback.style.display = 'none';
    DOM.answersGrid.innerHTML = '';

    const count = currentQuestions.length;
    DOM.progressText.textContent = `Question ${currentQuestionIndex + 1} / ${count}`;
    DOM.progressFill.style.width = `${((currentQuestionIndex + 1) / count) * 100}%`;

    const q = currentQuestions[currentQuestionIndex];

    DOM.questionText.textContent = currentLang === 'fr' ? q.question_fr : q.question_en;

    // Formatting boss name
    const bossNames = {
        'averzian': 'Imperator Averzian',
        'vorasius': 'Vorasius',
        'salhadaar': 'Salhadaar',
        'vaelgor': 'Vaelgor & Ezzorak',
        'lightblinded': 'Lightblinded Vanguard',
        'chimaerus': 'Chimaerus',
        'beloren': "Belo'ren"
    };
    DOM.bossBadge.textContent = bossNames[q.boss] || q.boss;

    DOM.diffBadge.textContent = q.difficulty === 'heroic' ? (currentLang === 'fr' ? 'Héroïque' : 'Heroic') :
        (q.difficulty === 'mythic' ? (currentLang === 'fr' ? 'Mythique' : 'Mythic') : 'Normal');

    DOM.diffBadge.className = `badge diff-${q.difficulty}`;

    // Shuffle answers but keep track of correct index
    const answers = currentLang === 'fr' ? q.answers_fr : q.answers_en;
    const answerObjects = answers.map((text, index) => ({ text, isCorrect: index === q.correct }));
    const shuffledAnswers = shuffleArray([...answerObjects]);

    shuffledAnswers.forEach((ans) => {
        const btn = document.createElement('button');
        btn.className = 'quiz-answer-btn phase-block';
        btn.textContent = ans.text;
        btn.addEventListener('click', () => handleAnswer(btn, ans.isCorrect, shuffledAnswers));
        DOM.answersGrid.appendChild(btn);
    });
}

function handleAnswer(selectedBtn, isCorrect, allAnswers) {
    // Disable all buttons
    const allBtns = DOM.answersGrid.querySelectorAll('button');
    allBtns.forEach(btn => {
        btn.disabled = true;
        btn.style.cursor = 'default';

        // Highlight correct answer
        const ansObj = allAnswers.find(a => a.text === btn.textContent);
        if (ansObj && ansObj.isCorrect) {
            btn.classList.add('correct');
        }
    });

    const q = currentQuestions[currentQuestionIndex];

    if (isCorrect) {
        score++;
        selectedBtn.classList.add('correct');
        DOM.feedbackTitle.textContent = currentLang === 'fr' ? "Correct !" : "Correct!";
        DOM.feedbackTitle.style.color = 'var(--success)';
    } else {
        selectedBtn.classList.add('wrong');
        DOM.feedbackTitle.textContent = currentLang === 'fr' ? "Faux !" : "Wrong!";
        DOM.feedbackTitle.style.color = 'var(--fire)';
    }

    DOM.feedbackText.textContent = currentLang === 'fr' ? q.explanation_fr : q.explanation_en;
    DOM.feedback.style.display = 'block';

    // Smooth scroll to feedback
    DOM.feedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function handleNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuestions.length) {
        renderQuestion();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        showResults();
    }
}

function showResults() {
    DOM.activeView.style.display = 'none';
    DOM.resultsView.style.display = 'block';

    const count = currentQuestions.length;
    const percentage = Math.round((score / count) * 100);

    document.getElementById('quiz-score-points').textContent = `${score}/${count}`;
    DOM.scoreNumber.textContent = `${percentage}%`;

    let grade = 'F';
    let color = 'var(--fire)';

    if (percentage >= 95) { grade = 'S'; color = '#fbbf24'; }
    else if (percentage >= 80) { grade = 'A'; color = 'var(--success)'; }
    else if (percentage >= 60) { grade = 'B'; color = 'var(--info)'; }
    else if (percentage >= 40) { grade = 'C'; color = 'var(--void)'; }

    DOM.grade.textContent = grade;
    DOM.grade.style.color = color;
    DOM.scoreNumber.style.color = color;

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function resetQuiz() {
    DOM.resultsView.style.display = 'none';
    DOM.setupView.style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Utility: Fisher-Yates array shuffle
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Initialize on DOM load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initQuiz);
} else {
    initQuiz();
}
