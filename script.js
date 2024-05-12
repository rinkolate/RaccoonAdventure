document.addEventListener('DOMContentLoaded', function() {
    // Приветствие
    document.getElementById('greeting').innerText = 'Hola!';
    
    // Показываем Енота
    document.getElementById('enot').style.display = 'block';

    // Скрываем элементы анимации через 5 секунд
    setTimeout(function() {
        document.getElementById('greeting').style.display='none';
        document.getElementById('loaderContainer').style.display = 'none';
        document.getElementById('enot').style.display = 'none';
        
        // Показываем поле ввода и кнопки
        document.getElementById('nameInputContainer').style.display = 'block';
    }, 5000);
    
    // Обработчик события для кнопки "Продолжить"
    document.getElementById('continueButton').addEventListener('click', function() {
        var enotName = document.getElementById('nameInput').value;
        if (enotName.trim() !== '') {
             // Перенаправляем пользователя на новую страницу и передаем имя енота в URL
            window.location.href = `index2.html?name=${encodeURIComponent(enotName)}`;
        } else {
            alert('Пожалуйста, введите имя енота.');
        }
    });
    
    // Обработчик события для кнопки "Выйти"
    document.getElementById('exitButton').addEventListener('click', function() {
        alert('До свидания! 🦝');
    });
});

