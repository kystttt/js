S = (process.argv[2]);
T = (process.argv[3]);
let results = new Array();
let m = T.length;
let alph = new Array();

//Определяем алфавит строки a
for (let i = 0; i < m; i++)
    alph[T.charAt(i)] = 0;

//В двумерном массиве del храним таблицу переходов
let del = new Array(m + 1);
for (let j = 0; j <= m; j++)
    del[j] = new Array();

//Инициализируем таблицу переходов
for (let i in alph) {
    del[0][i] = 0;
}

//Формируем таблицу переходов
for (let j = 0; j < m; j++) {
    let prev = del[j][T.charAt(j)]
    del[j][T.charAt(j)] = j + 1;
    for (let i in alph)
        del[j + 1][i] = del[prev][i]
}

//выводим таблицу переходов
for (let j = 0; j <= m; j++) {
    let deltaTable = '';
    for (let i in alph)
        deltaTable += del[j][i] + ' ';
    console.log(j + " " + deltaTable)

}
//ищем вхождения шаблона
let state = 0;
for (let i = 0; i < S.length; i++) {
    if (S.charAt(i) in alph)
        state = del[state][S.charAt(i)];
    else { 
        state = 0;
    }
    if (state == m) {
        results.push(i - m + 1);
    }
}
console.log('The beginning of the entry: ' + results);
