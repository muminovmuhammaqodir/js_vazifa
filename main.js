// 1-chi topshiriq

var a = 10;
var b = 5;

console.log(a + b);

// 2-chi topshiriq

var a = 25;
var b = 15;

var result = a - b;

console.log(result);

// 3-chi topshiriq

var a = 10;
var b = 5;

var c = a - b;
var d = 7;

var result = d - c;

console.log(result);

// 4-chi topshiriq

var a = 10;
var b = 3;

console.log(a % b);

// 5-chi topshiriq

var a = 2 ** 10;

console.log(a);

//  vazifa 6-chi topshiriq

var passage = 500; //dollor
var room = 250; //dollor
var muzey = 120; //yevro

// 1  alisherning summasi

var alisher = prompt("Hozirdagi pulingizni kiriting ?");

console.log(`Alisherda ${alisher} so'm pul bor !`);

// xarajatlar dollordan sumga otkazilishi

var dollor = (500 + 250) * 10650.34; //$1 = 10650.34 so’m
var yevro = 120 * 10650.03; //1 yevro = 10650.03 so’m

// umumiy harajatlarni hisoblaymiz

var xarajatlar = dollor + yevro;

console.log(`Umimiy xajatingiz:  ${xarajatlar} `);

// Yakuniy natijalar

if (alisher > xarajatlar) {
	var money = alisher - xarajatlar;
	console.log(`Sizda ${money} cha pul ortiqcha. Sizning pulingiz yetadi !`);
} else {
	var nMoney = xarajatlar - alisher;
	console.log(
		`sizda ${nMoney}cha pul yetishmayapti. Sizning pulingiz yetmaydi !`
	);
}
