// Пользователь может оформить доставку товара к себе в страну, указав ее при посещении страницы в prompt.Учти,
//пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.

// Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну.Обязательно используй switch.
//Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'.

// Но доставка есть не везде, если указанной страны нет в списке, то выводи в alert сообщение 'В вашей стране доставка не доступна'.

// Ниже приведен список стран и стоимость доставки.

// Китай - 100 кредитов
// Чили - 250 кредитов
// Австралия - 170 кредитов
// Индия - 80 кредитов
// Ямайка - 120 кредитов
let country = prompt('Укажите страну доставки:');
const ABOLITION = 'Отменено пользователем!';
let message;
const price1 = 100;
const price2 = 250;
const price3 = 170;
const price4 = 80;
const price5 = 120;

const country1 = 'Китай';
const country2 = 'Чили';
const country3 = 'Австралия';
const country4 = 'Индия';
const country5 = 'Ямайка';
const country1Normalize = country1.toLowerCase();
const country2Normalize = country2.toLowerCase();
const country3Normalize = country3.toLowerCase();
const country4Normalize = country4.toLowerCase();
const country5Normalize = country5.toLowerCase();

if (country === null) {
  message = ABOLITION;
} else {
  const countryNormalize = country.toLowerCase();
  switch (countryNormalize) {
    case country1Normalize:
      message = `Доставка в ${country1} будет стоить ${price1} кредитов`;
      break;

    case country2Normalize:
      message = `Доставка в ${country2} будет стоить ${price2} кредитов`;
      break;

    case country3Normalize:
      message = `Доставка в ${country3} будет стоить ${price3} кредитов`;
      break;

    case country4Normalize:
      message = `Доставка в ${country4} будет стоить ${price4} кредитов`;
      break;

    case country5Normalize:
      message = `Доставка в ${country5} будет стоить ${price5} кредитов`;
      break;

    default:
      message = 'В вашей стране доставка не доступна';
  }
}
alert(message);
