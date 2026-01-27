# Task 7 - Health Vitals Dashboard


Vital: Heart Rate (BPM) only

Sensor: Pulse Sensor

Update rate: ⏱️ Every 2 seconds

Graph window: 📈 30 seconds (15 points)

Responsive: 📱 Mobile + 💻 Desktop

Dynamic: Real-time updates


UI / UX

🌈 3-color health gradient theme

🌗 Dark / Light theme toggle

❤️ BPM numeric card

📊 Live line graph

🟢 Connection status indicator

ESP32-ready (mock data now, real data later)



---

📁 Folder Structure

Create this exactly:

health-dashboard/
│
├── index.html
├── css/
│   └── style.css
└── js/
    └── app.js


---

🧱 index.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Health Vitals Dashboard</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Chart.js -->
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

    <!-- Styles -->
    <link rel="stylesheet" href="css/style.css">
</head>
<body>

<div class="app">

    <!-- Header -->
    <header class="header">
        <h1>🫀 Health Vitals Dashboard</h1>
        <button id="themeToggle">🌗 Toggle Theme</button>
    </header>

    <!-- Status -->
    <div class="status">
        <span class="dot"></span>
        <span id="statusText">Connected</span>
    </div>

    <!-- BPM Card -->
    <div class="card">
        <h2>Heart Rate</h2>
        <p class="bpm"><span id="bpmValue">--</span> BPM</p>
    </div>

    <!-- Graph -->
    <div class="chart-container">
        <canvas id="bpmChart"></canvas>
    </div>

</div>

<script src="js/app.js"></script>
</body>
</html>


---

🎨 css/style.css

:root {
    --bg-gradient: linear-gradient(135deg, #1d2671, #c33764, #00c6ff);
    --card-bg: rgba(255, 255, 255, 0.15);
    --text-color: #ffffff;
}

body.light {
    --bg-gradient: linear-gradient(135deg, #fdfbfb, #ebedee, #d7e1ec);
    --card-bg: #ffffff;
    --text-color: #111111;
}

body {
    margin: 0;
    font-family: 'Segoe UI', sans-serif;
    background: var(--bg-gradient);
    color: var(--text-color);
    min-height: 100vh;
}

.app {
    max-width: 900px;
    margin: auto;
    padding: 20px;
}

/* Header */
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.header h1 {
    margin: 0;
}

button {
    padding: 8px 14px;
    border: none;
    border-radius: 20px;
    cursor: pointer;
}

/* Status */
.status {
    display: flex;
    align-items: center;
    margin: 15px 0;
}

.dot {
    width: 12px;
    height: 12px;
    background: #00ff99;
    border-radius: 50%;
    margin-right: 8px;
}

/* Card */
.card {
    background: var(--card-bg);
    backdrop-filter: blur(10px);
    border-radius: 16px;
    padding: 20px;
    text-align: center;
    margin-bottom: 20px;
}

.bpm {
    font-size: 3rem;
    font-weight: bold;
}

/* Chart */
.chart-container {
    background: var(--card-bg);
    backdrop-filter: blur(10px);
    padding: 20px;
    border-radius: 16px;
}

/* Responsive */
@media (max-width: 600px) {
    .bpm {
        font-size: 2.2rem;
    }
}


---

⚙️ js/app.js

const bpmValue = document.getElementById("bpmValue");
const themeToggle = document.getElementById("themeToggle");

let labels = [];
let dataPoints = [];

// Chart setup
const ctx = document.getElementById("bpmChart").getContext("2d");

const bpmChart = new Chart(ctx, {
    type: "line",
    data: {
        labels: labels,
        datasets: [{
            label: "Heart Rate (BPM)",
            data: dataPoints,
            borderWidth: 2,
            tension: 0.4,
            fill: false
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                min: 40,
                max: 180
            }
        }
    }
});

// Theme toggle
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light");
});

// Mock BPM generator (replace later with ESP32 fetch)
function getMockBPM() {
    return Math.floor(65 + Math.random() * 15);
}

// Update loop (2 seconds)
setInterval(() => {
    const bpm = getMockBPM();
    const time = new Date().toLocaleTimeString();

    bpmValue.textContent = bpm;

    labels.push(time);
    dataPoints.push(bpm);

    // Keep last 15 points = 30 sec window
    if (labels.length > 15) {
        labels.shift();
        dataPoints.shift();
    }

    bpmChart.update();
}, 2000);


---

🔌 How ESP32 Will Connect Later (Important)

Later, you will only change this part:

function getMockBPM() {
    return Math.floor(65 + Math.random() * 15);
}

⬇️ Replace with:

async function getBPMFromESP32() {
    const res = await fetch("/data");
    const json = await res.json();
    return json.bpm;
}

✅ NO UI or graph logic changes needed


---

🧪 How to Run Now

1. Open index.html in browser


2. Dashboard runs with simulated BPM


3. Resize window → responsive behavior


4. Toggle theme → works



