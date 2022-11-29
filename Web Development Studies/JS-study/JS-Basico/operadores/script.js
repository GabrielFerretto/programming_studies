// Atribuição Simples

var a = 5 + 3
console.log(a)

var b = a % 5
console.log(b)

var c = 5 * b ** 2
console.log(c)

var d = 10 - a / 2
console.log(d)

var e = 6 * 2 / d
console.log(e)

var f = b % e + 4 / e
console.log(f)


// Auto-atribuição

var n = 3
n = n + 4
n = n - 5
n = n * 4
n = n / 2
n = n ** 2
n = n % 5
console.log(n)

var n = 2
n += 4 // apenas se a variavel for a mesma n = n -> n += 4 
n -= 5
n *= 4
n /= 2
n **= 2
n %= 5
console.log(n)

// Incremento
var x = 5
// incremento de um em 1
x++ // 1
x++ // 1
x++ // 1
--x // -1
console.log(x)