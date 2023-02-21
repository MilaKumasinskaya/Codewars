function reverseNumber(num) {
    // Преобразуем число в строку и разбиваем ее на отдельные символы
    const numArray = Math.abs(num).toString().split('');

    // Реверсируем массив символов
    const reversedArray = numArray.reverse();

    // Соединяем символы обратно в строку и преобразуем ее в число
    const reversedNum = parseInt(reversedArray.join(''));

    // Возвращаем число с сохранением знака
    return num < 0 ? -reversedNum : reversedNum;
}