/* styles.css */

@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;700&display=swap');

body {
    margin: 0;
    padding: 0;
    background-color: #1a1a1a;
    font-family: 'Roboto Slab', serif;
    color: #f0f0f0;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    /* Удаляем фоновые изображения */
}

.container {
    text-align: center;
    padding: 20px;
    background: rgba(26, 26, 26, 0.85);
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0,0,0,0.5);
}

h1 {
    font-size: 2.5em;
    margin-bottom: 10px;
    color: #ff6f61;
}

h2 {
    font-size: 1.2em;
    margin-bottom: 40px;
    color: #ffffff;
}

.gauges {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
}

.gauge-container {
    position: relative;
    width: 200px;
    height: 220px; /* Увеличено для размещения меток и значений */
}

.gauge-container canvas {
    width: 100% !important;
    height: auto !important;
}

.gauge-label {
    position: absolute;
    top: 170px;
    width: 100%;
    text-align: center;
    font-size: 1em;
    color: #f0f0f0;
}

.gauge-value {
    position: absolute;
    top: 190px;
    width: 100%;
    text-align: center;
    font-size: 1.2em;
    color: #f0f0f0;
}

.gauge-label br {
    display: none; /* Скрываем перенос строки для лучшего отображения */
}

@media (max-width: 768px) {
    .gauge-container {
        width: 150px;
        height: 180px;
    }

    .gauge-label {
        top: 130px;
        font-size: 0.9em;
    }

    .gauge-value {
        top: 150px;
        font-size: 1em;
    }

    h1 {
        font-size: 2em;
    }

    h2 {
        font-size: 1.2em;
    }
}

@media (max-width: 480px) {
    .gauges {
        gap: 20px;
    }

    .gauge-container {
        width: 120px;
        height: 160px;
    }

    .gauge-label {
        top: 100px;
        font-size: 0.8em;
    }

    .gauge-value {
        top: 120px;
        font-size: 0.8em;
    }

    h1 {
        font-size: 1.8em;
    }

    h2 {
        font-size: 1em;
    }
}
