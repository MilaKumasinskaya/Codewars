function findOdd(arr) {
    // Создаем объект, который будет использоваться для подсчета количества вхождений каждого числа
    const counts = {};

    // Проходим по всем элементам массива и увеличиваем счетчик для каждого числа
    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        if (num in counts) {
            counts[num]++;
        } else {
            counts[num] = 1;
        }
    }

    // Проходим по всем ключам объекта и находим число, которое встречается нечетное количество раз
    for (const num in counts) {
        if (counts[num] % 2 !== 0) {
            return parseInt(num);
        }
    }
}