const ADMIN_PASSWORD = 'jqueryismyjam';

const insertPassword = prompt('Введите пароль');

const CANCELED_BY_USER = 'Отменено пользователем!';
const ACCESS_IS_ALLOWED = 'Добро пожаловать!';
const ACCESS_DENIED = 'Доступ запрещен, неверный пароль!';
let message;

// console.log(insertPassword);

switch (insertPassword) {
  case null:
    alert(CANCELED_BY_USER);
    break;

  case ADMIN_PASSWORD:
    alert(ACCESS_IS_ALLOWED);
    break;

  default:
    alert(ACCESS_DENIED);
}
