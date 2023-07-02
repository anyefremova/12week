const text = "у лукоморья клён зелёный; златая цепь на клён том; и днём и ночью кот учёный; всё ходит по цепи кругом; идёт направо — песнь заводит; налево — сказку говорит; там чудеса: там леший бродит; русалка на ветвях сидит; там на неведомых дорожках; следы невиданных зверей; избушка там на курьих ножках; стоит без окон, без дверей; там лес и дол видений полны; там о заре прихлынут волны; на брег песчаный и пустой; и тридцать витязей прекрасных; чредой из вод выходят ясных; и с ними дядька их морской; там королевич мимоходом; пленяет грозного царя; там в облаках перед народом; через леса, через моря; колдун несёт богатыря; в темнице там царевна тужит; а бурый волк ей верно служит; там ступа с бабою ягой; идёт, бредёт сама собой; там царь кащей над златом чахнет; там русский дух… там русью пахнет!; и там я был, и мёд я пил; у моря видел клён зелёный; под ним сидел, и кот учёный; свои мне сказки говорил."

//Выведите в консоль количество символов в тексте.
const length = text.length;
console.log(length);

//Добавьте перенос строки после каждого символа ; и сохраните результат в переменную result.
const result = text.replaceAll(';', '\n');
console.log(result);

//Удалите все пробелы в переменной result и сохраните результат в переменную substring.
const substring = result.replace(/\s/g, '');
console.log(substring);

//Извлеките подстроку из переменной result, начиная с 28-го символа и до 50-го символа (не включая), из текста и сохраните в переменную newText.
const newText = result.slice(28, 50);
console.log(newText);

//Замените в извлеченной подстроке (newText) все вхождения слова клён на дубе и сохраните результат в переменную replacedText.
const replacedText = newText.replace(/клён/g, "дубе");
console.log(replacedText);

//Приведите текст в переменной result к верхнему регистру и сохраните результат в переменную replacedText2.
const replacedText2 = result.toUpperCase();
console.log(replacedText2);

//Замените все вхождения слова клён на дуб в переменной result и сохраните результат в переменную replacedText3.
const replacedText3 = result.replace(/клён/g, "дуб");
console.log(replacedText3);

//Найдите индекс первого вхождения слова моря в тексте и сохраните в переменную index.
const index = text.indexOf('моря');
console.log(index);

//Измените только первую букву в переменной replacedText на заглавную без использования регулярных выражений и сохраните результат в переменную modifiedText.
const modifiedText = replacedText.charAt(0).toUpperCase() + replacedText.slice(1);
console.log(modifiedText);

//Выведите значения всех полученных переменных на экран.
console.log(`1. Количество символов в тексте: ${text.length}`);
console.log(`2. Текст с переносами строк: \n ${result}`);
console.log(`3. Текст с удалёнными пробелами: ${substring}`);
console.log(`4. Извлечение подстроки: ${newText}`);
console.log(`5. Замена "клён" на "дубе": ${replacedText}`);
console.log(`6. Строка result в верхнем регистре: ${replacedText2}`);
console.log(`7. Замена "клён" на "дуб" (все вхождения) в переменной result: ${replacedText3}`);
console.log(`8. Индекс первого вхождения "моря": ${index}`);
console.log(`9. Строка с измененной первой буквой: ${modifiedText}`);