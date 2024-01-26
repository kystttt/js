let S = (process.argv[2]);
let T = (process.argv[3]);
let result;

function Table(sample) { 
    const last = {}; // этот объект будет таблицей плохого символа
    const lensample = sample.length;
    for (let i = 0; i < lensample - 1; i++) {
        last[sample[i]] = lensample - 1 - i;
    }
    if (!last.hasOwnProperty(sample[lensample - 1])) { // добавляем последний символ в таблицу, если он не добавлен
        last[sample[lensample - 1]] = lensample;
    }

    return last;
}



function BMsearch(str, sample) { 
    const last = Table(sample); 
    const match = []; // В этот массив мы будет добавлять позиции вхождения шаблона Т в строку S
    let index1 = sample.length - 1; 

    while (index1 < str.length) {
        let index2 = 0; 
        // k и i - индексы символов в шаблоне T
        
        while (index2 < sample.length && sample[sample.length - 1 - index2] == str[index1 - index2]) { 
            index2++;
        }

        if (index2 === sample.length) {
            match.push(index1 - sample.length + 2);
            index1 += Math.max(1, index2 - last[str[index1]]);
        }


        else {
            index1 += Math.max(1, index2);
        }
    }

    return match; 
}



result = BMsearch(S, T);
if (result.length > 0) {
    console.log("The beginning of the match: " + result);
} else {
    console.log("There are no matches");
}
