function calculateBMI() {
    const weight = document.querySelector(".input__weight").value;
    const height = document.querySelector(".input__height").value;
    const result = document.querySelector('#result');
    const height2 = (Math.pow(height, 2)) / 10000;
    const imt = weight / height2;
    const calculate = (imt).toFixed(2);
    console.log(calculate);

    if (height === "" || isNaN(height))
        result.innerHTML = "Укажите свой вес!";

    if (weight === "" || isNaN(weight))
        result.innerHTML = "Укажите свой рост!";

    else {
        if (calculate < 18.5) result.innerHTML =
            `Ваш ИМТ : ${calculate}. Недостаточный вес. Это может указывать на недостаточное питание или другие проблемы со здоровьем.`;

        else if (calculate >= 18.5 && calculate <= 24.9)
            result.innerHTML =
                `Ваш ИМТ : ${calculate}. Нормальный вес. В этом диапазоне считается, что вес находится в здоровых пределах.`;

        else if (calculate >= 25.0 && calculate <= 29.9)
            result.innerHTML =
                `Ваш ИМТ : ${calculate}. Избыточный вес. В этой категории есть некоторый риск развития связанных с ожирением заболеваний.`;

        else if (calculate >= 30.0 && calculate <= 34.9)
            result.innerHTML =
                `Ваш ИМТ : ${calculate}. Ожирение I степени. Риск развития заболеваний, связанных с ожирением, значительно повышен.`;

        else if (calculate >= 35.0 && calculate <= 39.9)
            result.innerHTML =
                `Ваш ИМТ : ${calculate}. Ожирение I степени. Риск развития заболеваний, связанных с ожирением, значительно повышен.`;

        if (calculate > 40.0)
            result.innerHTML = `Ваш ИМТ : ${calculate}. Тяжелое ожирение (ожирение III степени). Высокий риск развития серьезных заболеваний и осложнений.`;
    }
}

const button = document.querySelector('#button__result');
button.addEventListener('click', calculateBMI)