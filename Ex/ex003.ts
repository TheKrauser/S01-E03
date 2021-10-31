function listaNumericaImperativo(values : number[])
{
    //Declaração das Variáveis
    let maior, menor, medio = 0;

    //For circulando por toda o Array de valores
    for (let i = 0; i < values.length; i++)
    {
        //Função que retorna true se TODOS os elementos forem números
        if (!values.some(isNaN))
        {
            //Caso seja negativa manda mensagem de erro
            console.log("ERRO: Um dos valores não é um número.")
            return;
        }

        //Se for true (um array realmente só de números), executa:
        else
        {
            //Se o indice atual for maior que o valor atual da variavel maior ou se a variavel maior for nula  
            if (values[i] > maior || maior == null)
            {
                //Atribui o elemento atual na variavel maior
                maior = values[i];
                //Com isso no fim do loop teremos o maior valor do array atribuido nessa variavel
            }

            //O mesmo calculo que a de cima
            if (values[i] < menor || menor == null)
            {
                menor = values[i];
                //Com isso no fim do loop teremos o menor valor do array atribuido nessa variavel
            }

            //Para cada loop entre os elementos do array, incrementa ele na variavel médio
            medio += values[i];
        }
    }

    //Por fim divide o total da variavel médio (que é a soma de todos os elementos) pelo número de elementos no total
    medio /= values.length;

    //Imprime na tela
    console.log(maior);
    console.log(menor);
    console.log(medio + "\n");

    //Retorna um array contendo os três elementos (maior, menor e médio)
    return [maior, menor, medio];
}

listaNumericaImperativo([5, 19, 22, 12, 3, 5, 3]);

function listaNumericaFuncional(values : number[])
{
    //Mesma função da última vez, verifica se são numeros no array
    if (values.some(isNaN))
    {
        console.log("ERRO: Um dos valores não é um número.")
        return;
    }

    //Usando a função Math.max.apply para circular pela array e retornar o maior número
    const maior = Math.max.apply(null, values);
    const menor = Math.min.apply(null, values);

    //Função reduce para circular fazendo a soma de todos os elementos
    const total = values.reduce(function(soma, atual) {
        return soma + atual
    }, 0);

    //Ao fazer a soma divide o total pelo número de elementos e atribui o valor médio
    const medio = total / values.length;

    //Imprime na tela
    console.log(maior);
    console.log(menor);
    console.log(medio + "\n");

    //Retorna um array contendo os três elementos (maior, menor e médio)
    return [maior, menor, medio];
}

listaNumericaFuncional([3, 5, 2, 1, 10, 23, 33, 21]);