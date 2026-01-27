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