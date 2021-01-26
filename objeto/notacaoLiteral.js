// mostrando as formas de notacao para instanciacao de objetos

const a = 1
const b = 2
const c = 3

const obj1 = { a: a, b: b, c: c } // nessa sintaxe dá para alterar o valor da variavel
const obj2 = { a, b, c }
console.log(obj1, obj2)

const nomeAttr = 'nota'
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3);

const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4)

const obj5 = {
    funcao1: function() {
        // ... funcao anonima
    },
    funcao2() {
        // forma mais reduzida de definir uma funcao dentro de um objeto
    }
}

console.log(obj5);