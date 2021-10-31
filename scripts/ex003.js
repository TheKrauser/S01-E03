function listaNumericaImperativo(values) {
    var maior, menor, medio = 0;
    for (var i = 0; i < values.length; i++) {
        if (values.some(isNaN)) {
            console.log("ERRO: Um dos valores não é um número.");
            return;
        }
        else {
            if (values[i] > maior || maior == null) {
                maior = values[i];
            }
            if (values[i] < menor || menor == null) {
                menor = values[i];
            }
            medio += values[i];
        }
    }
    medio /= values.length;
    var newList = [maior, menor, medio];
    console.log(maior);
    console.log(menor);
    console.log(medio);
    return [maior, menor, medio];
}
listaNumericaImperativo([5, 19, 22, 12, 3, 5, 3]);
function listaNumericaFuncional(values) {
    if (values.some(isNaN)) {
        console.log("ERRO: Um dos valores não é um número.");
        return;
    }
    var maior = Math.max.apply(null, values);
    var menor = Math.min.apply(null, values);
    var total = values.reduce(function (soma, atual) {
        return soma + atual;
    }, 0);
    var medio = total / values.length;
    console.log(maior);
    console.log(menor);
    console.log(medio);
    return [maior, menor, medio];
}
listaNumericaFuncional([3, 5, 2, 1, 10, 23, 33, 21]);
//# sourceMappingURL=ex003.js.map