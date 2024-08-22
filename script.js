document.getElementById('entryForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращает отправку формы

    // Получаем значения полей формы
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Здесь можно добавить код для обработки данных, например, отправить их на сервер

    // Отображаем сообщение об успешном участии
    document.getElementById('result').classList.remove('hidden');
    document.getElementById('entryForm').reset(); // Очищаем форму
});
