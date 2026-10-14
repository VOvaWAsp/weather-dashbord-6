
console.log("script.js підключено");

// Дані прогнозу погоди на 7 днів
const forecast = [
  { day: "Пн", temp: 5 },
  { day: "Вт", temp: -2 },
  { day: "Ср", temp: 3 },
  { day: "Чт", temp: -5 },
  { day: "Пт", temp: 8 },
  { day: "Сб", temp: 12 },
  { day: "Нд", temp: 0 },
];

// Переводимо температуру з градусів Цельсія у Фаренгейти
const toFahrenheit = (c) => (c * 9) / 5 + 32;

// Виводимо прогноз і визначаємо дні з морозом
function showForecast() {
  for (const item of forecast) {
    const status = item.temp < 0 ? "морозно" : "без морозу";
    const fahrenheit = toFahrenheit(item.temp);

    console.log(
      `${item.day}: ${item.temp}°C, ${fahrenheit}°F — ${status}`,
    );
  }
}

// Викликаємо функцію для обробки прогнозу
showForecast();

// Виводимо кількість днів у прогнозі
console.log("Кількість днів:", forecast.length);
