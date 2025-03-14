const races = [
    { date: "2025-03-16", name: "Гран При Австралии", location: "Мельбурн", track: "5278 м" },
    { date: "2025-03-23", name: "Гран При Китая", location: "Шанхай", track: "5451 м" },
    { date: "2025-04-06", name: "Гран При Японии", location: "Сузука", track: "5807 м" },
    { date: "2025-04-13", name: "Гран При Бахрейна", location: "Сахир", track: "5412 м" },
    { date: "2025-04-20", name: "Гран При Саудовской Аравии", location: "Джидда", track: "6174 м" },
    { date: "2025-05-04", name: "Гран При США", location: "Майами", track: "5412 м" },
    { date: "2025-05-18", name: "Гран При Эмилия-Романьи", location: "Имола", track: "4909 м" },
    { date: "2025-05-25", name: "Гран При Монако", location: "Монако", track: "3337 м" },
    { date: "2025-06-01", name: "Гран При Испании", location: "Барселона", track: "4657 м" },
    { date: "2025-06-15", name: "Гран При Канады", location: "Монреаль", track: "4361 м" },
    { date: "2025-06-29", name: "Гран При Австрии", location: "Шпильберг", track: "4318 м" },
    { date: "2025-07-06", name: "Гран При Великобритании", location: "Сильверстоун", track: "5891 м" },
    { date: "2025-07-27", name: "Гран При Бельгии", location: "Спа", track: "7004 м" },
    { date: "2025-08-03", name: "Гран При Венгрии", location: "Хунгароринг", track: "4381 м" },
    { date: "2025-08-31", name: "Гран При Нидерландов", location: "Зандфорт", track: "4259 м" },
    { date: "2025-09-07", name: "Гран При Италии", location: "Монца", track: "5793 м" },
    { date: "2025-09-21", name: "Гран При Азербайджана", location: "Баку", track: "6003 м" },
    { date: "2025-10-05", name: "Гран При Сингапура", location: "Марина-Бэй", track: "4940 м" },
    { date: "2025-10-19", name: "Гран При США", location: "Остин", track: "5513 м" },
    { date: "2025-10-26", name: "Гран При Мексики", location: "Мехико", track: "4304 м" },
    { date: "2025-11-09", name: "Гран При Бразилии", location: "Сан-Паулу", track: "4309 м" },
    { date: "2025-11-22", name: "Гран При Лас-Вегаса", location: "Лас-Вегас", track: "6201 м" },
    { date: "2025-11-30", name: "Гран При Катара", location: "Лосаил", track: "5419 м" },
    { date: "2025-12-07", name: "Гран При Абу-Даби", location: "Яс-Марина", track: "5281 м" }
];

function getNextRace() {
    const today = new Date();
    for (let race of races) {
        let raceDate = new Date(race.date);
        if (raceDate >= today) {
            let daysLeft = Math.ceil((raceDate - today) / (1000 * 60 * 60 * 24));
            document.getElementById("race-name").textContent = race.name;
            document.getElementById("days-left").textContent = daysLeft;
            document.getElementById("race-info").textContent = `📍 Место: ${race.location}, 🏁 Длина трассы: ${race.track}`;
            return;
        }
    }
}

getNextRace();
