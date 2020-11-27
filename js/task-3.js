// Напиши скрипт имитирующий авторизацию администратора в панели управления.

// Есть переменная message в которую будет записано сообщение о результате.При загрузке страницы у посетителя запрашивается пароль через prompt:

// Если нажали Cancel, записать в message строку 'Отменено пользователем!'
// В протовном случае, если введен пароль который совпадает со значением константы ADMIN_PASSWORD, записать в message строку 'Добро пожаловать!'
// В противном случае, то есть если ни одно из предыдущих условий не выполнилось, записать в message строку 'Доступ запрещен, неверный пароль!'
// После всех проверок вывести в alert значение переменной message.
// const ADMIN_PASSWORD = 'jqueryismyjam';
// let message;
const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
const ABOLITION = 'Отменено пользователем!';
const ACCESS_IS_SETTLED = 'Добро пожаловать!';
const ACCESS_IS_FORBIDDEN = 'Доступ запрещен, неверный пароль!';
let input = prompt('Введите пароль:');
if (input === null) {
  message = ABOLITION;
} else if (input === ADMIN_PASSWORD) {
  message = ACCESS_IS_SETTLED;
} else {
  message = ACCESS_IS_FORBIDDEN;
}
alert(message);
