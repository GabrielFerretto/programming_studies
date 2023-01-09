var data = new Date(); // pegando a data atual
console.log(data);

console.log(data.getHours()); // pegando a hora atual o primeiro digito -> 14:30 ira aparecer 14

console.log(data.getMinutes()); // pegando os minus das horas -> 14:30 ira aparecer 30

console.log(data.getSeconds()); // pegando os segundos

console.log(data.getMilliseconds()); // pegando os mile segundos

// Criando data Personalizada
var datanova = new Date("March 10, 2023");
console.log(datanova);

console.log(datanova.getDate()); // pegando o dia atual

console.log(datanova.getMonth()); // pegando o dia do mês

console.log(datanova.getDay()); // pegando o dia da semana

console.log(datanova.getFullYear()); // pegando o ano

// Dia da semana com o nome
var dias = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado"];
console.log(dias[datanova.getDay()]);