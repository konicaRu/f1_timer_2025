// script.js

// Целевая дата
const targetDate = new Date('March 16, 2025 00:00:00').getTime();

// Функция для вычисления оставшегося времени
function getTimeRemaining() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
        return {
            months: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        };
    }

    const totalSeconds = Math.floor(distance / 1000);
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalHours = Math.floor(totalMinutes / 60);
    const totalDays = Math.floor(totalHours / 24);
    const months = Math.floor(totalDays / 30); // Приближенно
    const hours = totalHours % 24;
    const minutes = totalMinutes % 60;
    const seconds = totalSeconds % 60;

    return {
        months,
        hours,
        minutes,
        seconds
    };
}

// Инициализация графиков
const gauges = {
    months: null,
    hours: null,
    minutes: null,
    seconds: null
};

// Функция для создания спидометра
function createGauge(ctx, label, maxValue) {
    return new Chart(ctx, {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [0, maxValue],
                backgroundColor: ['#e74c3c', '#34495e'],
                borderWidth: 0
            }]
        },
        options: {
            rotation: -Math.PI,
            circumference: Math.PI,
            cutout: '70%',
            plugins: {
                doughnutlabel: {
                    labels: [
                        {
                            text: '0',
                            font: {
                                size: '30',
                                weight: 'bold'
                            },
                            color: '#ecf0f1'
                        },
                        {
                            text: label,
                            font: {
                                size: '14'
                            },
                            color: '#ecf0f1'
                        }
                    ]
                }
            }
        }
    });
}

// Создание всех спидометров
function initializeGauges() {
    const monthsCtx = document.getElementById('monthsGauge').getContext('2d');
    const hoursCtx = document.getElementById('hoursGauge').getContext('2d');
    const minutesCtx = document.getElementById('minutesGauge').getContext('2d');
    const secondsCtx = document.getElementById('secondsGauge').getContext('2d');

    gauges.months = createGauge(monthsCtx, 'Месяцев', 60); // Максимум 60 месяцев
    gauges.hours = createGauge(hoursCtx, 'Часов', 24);
    gauges.minutes = createGauge(minutesCtx, 'Минут', 60);
    gauges.seconds = createGauge(secondsCtx, 'Секунд', 60);
}

// Обновление графиков
function updateGauges() {
    const time = getTimeRemaining();

    updateGauge(gauges.months, time.months, 60); // Максимум 60 месяцев
    updateGauge(gauges.hours, time.hours, 24);
    updateGauge(gauges.minutes, time.minutes, 60);
    updateGauge(gauges.seconds, time.seconds, 60);
}

// Функция обновления отдельного графика
function updateGauge(gauge, value, max) {
    gauge.data.datasets[0].data[0] = value;
    gauge.data.datasets[0].data[1] = max - value;
    gauge.options.plugins.doughnutlabel.labels[0].text = value;
    gauge.update();
}

// Инициализация и запуск таймера
initializeGauges();
updateGauges();
setInterval(updateGauges, 1000);
