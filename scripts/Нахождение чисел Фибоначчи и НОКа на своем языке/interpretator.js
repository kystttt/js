let fs = require('fs');

let mem = new Array();

inText = fs.readFileSync('fib.kst') // fib.kst - ищет значение числа при введенном номере

                                    // nok.kst - нахождение наименьшего общего кратного для двух введенных чиселок.
inText = inText.toString();

mem = inText.split(/ |\r\n/); 
mem.push('exit');

let error = 0;
let ip = 0;


function memAdrSearch(ip, letter){
    for (let i = ip; i < mem.length; i++)
        if (mem[i] == letter)
            return i
}

while (mem[ip] != 'exit') {
    switch (mem[ip]) {

        case 'mem':                                     // Бесполезная штука
            console.log('Haha- smeshno')
            ip += 1;
            break;




        case 'input':                                   // Ввод значений
            const readline = require('readline-sync');
            const znachenie = readline.question('');
            mem[mem[ip + 1]] = znachenie * 1;
            ip += 2;
            break;



        case 'set':                                     // Присваивание 
            mem[mem[ip + 1]] = parseInt(mem[ip + 2]);
            ip += 3;
            break;


        case 'ass':                                    // Оператор присваивания
            mem[mem[ip + 1]] = mem[mem[ip + 2]];
            ip += 3;
            break;
            



        case 'print':                                  // Вывод
            console.log(mem[mem[ip + 1]]);
            ip += 2;
            break;



        case 'add':                                    // Сложение
            mem[mem[ip + 3]] = mem[mem[ip + 1]] + mem[mem[ip + 2]];
            ip += 4;
            break;


                                                      
        case 'sub':                                    // Вычитание
            mem[mem[ip + 3]] = mem[mem[ip + 1]] - mem[ip + 2];
            ip += 4;
            break;



        case 'mul':                                    // Умножение
            mem[mem[ip + 3]] = mem[mem[ip + 1]] * mem[mem[ip + 2]];
            ip += 4;
            break;


        case 'delf':                                   // Деление с остатком (результат - число с плавающей запятой)


             if (mem[mem[ip + 2]] != 0) {
                mem[mem[ip + 3]] = mem[mem[ip + 1]] / mem[mem[ip + 2]];
                ip += 4;
                break;
            }
            else {
                 mem[mem[ip + 3]] = 'Delit na zero zapresheno'
                 ip += 4;
                 break;
            }



        case 'del':                                    // Целочисленное деление


            if (mem[mem[ip + 2]] != 0) {
                mem[mem[ip + 3]] = Math.floor(mem[mem[ip + 1]] / mem[mem[ip + 2]]);
                ip += 4;
                break;
            }
            else {
                mem[mem[ip + 3]] = 'Delit na zero zapresheno'
                ip += 4;
                break;
            }



        case 'ost':                                 // Нахождение остатка

            if (mem[mem[ip + 2]] != 0) {
                mem[mem[ip + 3]] = mem[mem[ip + 1]] % mem[mem[ip + 2]];
                ip += 4;
                break;
            }
            else {
                mem[mem[ip + 3]] = 'Delit na zero zapresheno'
                ip += 4;
                break;
            }

        case 'if':                                // Проверка на условие "a == b"   
            if (mem[mem[ip + 1]] == mem[mem[ip + 2]]) {
                ip += 4;
                break;
            }
            else {
                ip = memAdrSearch(ip + 4, mem[ip + 3]) + 1
                break;
            }


        case '-if':                               // Проверка на условие "a != b" 
            if (mem[mem[ip + 1]] != mem[mem[ip + 2]]) {
                ip += 4;
                break;
            }
            else {
                ip = memAdrSearch(ip + 4, mem[ip + 3]) + 1;
                break;
            }

      


        case 'while':
            mem[mem.length] = ip + 1;
            ip += 1;
            break;


        case 'move':
            ip = mem[mem.length-1] * 1;
            break;



        case 'addnum':
            mem[mem[ip + 1]] += parseInt(mem[ip + 2]);
            ip += 3;
            break;


    }

    error++                                     // Защита от бесконечного цикла
    if (error > 1000000 ) {
        console.log("Compilation error.")
        break
    }
}
console.log('programm is end')
