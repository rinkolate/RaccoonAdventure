document.addEventListener('DOMContentLoaded', function () {
    // Получаем имя енота из параметров URL
    const urlParams = new URLSearchParams(window.location.search);
    const enotName = urlParams.get('name');

    // Выводим имя енота на странице
    document.getElementById('enotText').textContent = `Енот ${enotName}`;
});

// Функция для обновления прогресс-баров
document.addEventListener('DOMContentLoaded', function () {
    const hungerBar = document.getElementById('hungerBar');
    const moodBar = document.getElementById('moodBar');
    const energyBar=document.getElementById('energyBar');

    // Обработчик события для кнопки "Кормить"
    document.getElementById('feedButton').addEventListener('click', function () {
        // Получаем текущее значение ширины прогресс-баров
        let currentHungerWidth = parseInt(hungerBar.style.width) || 0;
        let currentMoodWidth = parseInt(moodBar.style.width) || 0;
        let currentEnergyWidth = parseInt(energyBar.style.width) || 0;

        // Увеличиваем ширину прогресс-баров на 10% (1 деление из 10)
        currentHungerWidth += 20;
        currentMoodWidth += 10;

        // Ограничиваем значение ширины до максимального значения (100%)
        currentHungerWidth = Math.min(currentHungerWidth, 100);
        currentMoodWidth = Math.min(currentMoodWidth, 100);

        // Присваиваем новые значения ширине прогресс-баров
        hungerBar.style.width = currentHungerWidth + '%';
        moodBar.style.width = currentMoodWidth + '%';

        // Изменяем цвет прогресс-бара "настроение" при заполнении 1 деления
        if (currentMoodWidth >= 10) {
            moodBar.style.backgroundColor = '#8b4513'; // Кофейный цвет
            hungerBar.style.backgroundColor = '#8b4513'
        }
        // Проверяем, если все прогресс-бары заполнены
        if ( currentHungerWidth>= 100 && currentMoodWidth >= 100 && currentEnergyWidth >= 100) {
            // Меняем изображение енота
            enotImage.src = 'img/raccoon.gif';
            restartButton.style.display = 'block';
            feedButton.style.display='none';
            petButton.style.display='none';
            sleepButton.style.display='none';
            playButton.style.display='none';

        }
    });

    // Обработчик события для кнопки гладить
    document.getElementById('petButton').addEventListener('click', function()
    {
        //Получаем текущее значение ширины прогресс-баров
        let currentMoodWidth = parseInt(moodBar.style.width) || 0;
        let currentEnergyWidth = parseInt(energyBar.style.width) || 0;
        let currentHungerWidth = parseInt(hungerBar.style.width) || 0;

        // Увеличиваем ширину прогресс-баров на 10% (1 деление из 10)
        currentMoodWidth += 10;
        // Присваиваем новые значения ширине прогресс-баров
        moodBar.style.width = currentMoodWidth + '%';
        // Изменяем цвет прогресс-бара "настроение" при заполнении 1 деления
        if (currentMoodWidth >= 10) {
            moodBar.style.backgroundColor = '#8b4513'; // Кофейный цвет
        }
         // Проверяем, если все прогресс-бары заполнены
        if ( currentHungerWidth>= 100 && currentMoodWidth >= 100 && currentEnergyWidth >= 100) {
            // Меняем изображение енота
            enotImage.src = 'img/raccoon.gif';
            restartButton.style.display = 'block';
            feedButton.style.display='none';
            petButton.style.display='none';
            sleepButton.style.display='none';
            playButton.style.display='none';

        }
    });

    //Обработчик события для кнопки спать
    document.getElementById('sleepButton').addEventListener('click', function()
    {
        //Получаем текущее значение ширины прогресс-баров
        let currentEnergyWidth = parseInt(energyBar.style.width) || 0;
        let currentHungerWidth = parseInt(hungerBar.style.width) || 0;
        let currentMoodWidth = parseInt(moodBar.style.width) || 0;
        // Увеличиваем ширину прогресс-баров на 10% (1 деление из 10)
        currentEnergyWidth += 50;
        currentHungerWidth -= 20;
        // Присваиваем новые значения ширине прогресс-баров
        energyBar.style.width = currentEnergyWidth + '%';
        hungerBar.style.width = currentHungerWidth + '%';
        // Изменяем цвет прогресс-бара "настроение" при заполнении 1 деления
        if (currentEnergyWidth >= 50) {
            energyBar.style.backgroundColor = '#8b4513'; // Кофейный цвет
            hungerBar.style.backgroundColor = '#8b4513'
        }
         // Проверяем, если все прогресс-бары заполнены
        if ( currentHungerWidth>= 100 && currentMoodWidth >= 100 && currentEnergyWidth >= 100) {
            // Меняем изображение енота
            enotImage.src = 'img/raccoon.gif';
            restartButton.style.display = 'block';
            feedButton.style.display='none';
            petButton.style.display='none';
            sleepButton.style.display='none';
            playButton.style.display='none';

        }
    });

        //Обработчик события для кнопки играть
    document.getElementById('playButton').addEventListener('click', function()
    {
        //Получаем текущее значение ширины прогресс-баров
        let currentEnergyWidth = parseInt(energyBar.style.width) || 0;
        let currentHungerWidth = parseInt(hungerBar.style.width) || 0;
        let currentMoodWidth = parseInt(moodBar.style.width) || 0;
        // Увеличиваем ширину прогресс-баров на 10% (1 деление из 10)
        currentEnergyWidth -= 10;
        currentHungerWidth -= 10;
        currentMoodWidth += 20;
        // Присваиваем новые значения ширине прогресс-баров
        energyBar.style.width = currentEnergyWidth + '%';
        hungerBar.style.width = currentHungerWidth + '%';
        moodBar.style.width = currentMoodWidth + '%';
        // Изменяем цвет прогресс-бара "настроение" при заполнении 1 деления
        if (currentEnergyWidth >= 50) {
            energyBar.style.backgroundColor = '#8b4513'; // Кофейный цвет
            hungerBar.style.backgroundColor = '#8b4513';
            moodBar.style.backgroundColor = '#8b4513'; 
        }
         // Проверяем, если все прогресс-бары заполнены
        if ( currentHungerWidth>= 100 && currentMoodWidth >= 100 && currentEnergyWidth >= 100) {
            // Меняем изображение енота
            enotImage.src = 'img/raccoon.gif';
            restartButton.style.display = 'block';
            feedButton.style.display='none';
            petButton.style.display='none';
            sleepButton.style.display='none';
            playButton.style.display='none';

        }
    });

    // Обработчик события для кнопки "Начать сначала"
    restartButton.addEventListener('click', function () {
        // Перенаправляем на первую страницу
        window.location.href = 'index.html'; // Замените 'index.html' на адрес вашей первой страницы
    });

  });