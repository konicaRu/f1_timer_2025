// script.js

// Целевая дата: 16 марта 2025 года
const targetDate = new Date('March 16, 2025 00:00:00').getTime();

// Инициализация настроек для Gauge.js
const gaugeOptions = {
    angle: 0, // Начальный угол
    lineWidth: 0.3, // Толщина линии
    radiusScale: 1, // Масштаб радиуса
    pointer: {
        length: 0.6, // Длина стрелки
        strokeWidth: 0.035, // Толщина стрелки
        color: '#ff6f61' // Цвет стрелки
    },
    limitMax: false,     // Не ограничивать максимальное значение
    limitMin: false,     // Не ограничивать минимальное значение
    colorStart: '#ff6f61',   // Начальный цвет градиента
    colorStop: '#ff6f61',    // Конечный цвет градиента
    strokeColor: '#dddddd',  // Цвет границы
    generateGradient: true,
    highDpiSupport: true,     // Поддержка высоких DPI
    staticLabels: {
        font: "10px sans-serif",  // Шрифт меток
        labels: [0, 10, 20, 30, 40, 50, 60],  // Метки (будут обновлены динамически)
        color: "#ffffff",  // Цвет меток
        fractionDigits: 0
    },
    staticZones: [
        {strokeStyle: "#30B32D", min: 0, max: 60}, // Зеленый
        {strokeStyle: "#FFDD00", min: 60, max: 80}, // Желтый
        {strokeStyle: "#F03E3E", min: 80, max: 100}  // Красный
    ]
};

// Функция для создания спидометра
function createGaugeElement(elementId, maxValue) {
    const opts = Object.assign({}, gaugeOptions);
    opts.maxValue = maxValue;
    opts.staticLabels.labels = generateStaticLabels(maxValue);
    const target = document.getElementById(elementId);
    return new Gauge(target).setOptions(opts);
}

// Функция для генерации меток в зависимости от максимального значения
function generateStaticLabels(max) {
    const step = Math.ceil(max / 5);
    const labels = [];
    for (let i = 0; i <= max; i += step) {
        labels.push(i);
    }
    return labels;
}

// Создание спидометров
const gauges = {
    months: createGaugeElement('monthsGauge', 60), // Максимум 60 месяцев
    days: createGaugeElement('daysGauge', 365), // Максимум 365 дней
    hours: createGaugeElement('hoursGauge', 24), // Максимум 24 часов
    minutes: createGaugeElement('minutesGauge', 60), // Максимум 60 минут
    seconds: createGaugeElement('secondsGauge', 60)  // Максимум 60 секунд
};

// Установка начальных значений
Object.values(gauges).forEach(gauge => gauge.set(0));

// Функция для вычисления оставшегося времени
function getTimeRemaining() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
        return {
            months: 0,
            days: 0,
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
    const days = totalDays % 30;
    const hours = totalHours % 24;
    const minutes = totalMinutes % 60;
    const seconds = totalSeconds % 60;

    return {
        months,
        days,
        hours,
        minutes,
        seconds
    };
}

// Обновление спидометров
function updateGauges() {
    const time = getTimeRemaining();

    gauges.months.set(time.months);
    gauges.days.set(time.days);
    gauges.hours.set(time.hours);
    gauges.minutes.set(time.minutes);
    gauges.seconds.set(time.seconds);
}

// Инициализация и запуск таймера
updateGauges();
setInterval(updateGauges, 1000);
