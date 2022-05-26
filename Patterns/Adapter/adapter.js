// Допустим сервер возвращает это
const badResponse = {
    entries: [
            {
                user_name: "Jack",
                email_address: "jack@mail.com",
                PWD: "jackpasswd",
            },
            {
                user_name: "Ann",
                email_address: "ann@mail.com",
                PWD: "annpasswd",
            },
        ],
};
// Мы хотим получить это (camelCase ключей)
const trueResponse = [{
    userName: "Jack",
    email: "jack@mail.com",
    password: 'jackpasswd'
}, {
    userName: "Ann",
    email: "ann@mail.com",
    password: "annpasswd"
}]

// Пишем адаптер
function responseAdapter(response) {
    return response.entries.map((entry) => ({
        userName: entry.user_name,
        email: entry.email_address,
        password: entry.PWD,
    }));
}
// сравним желаемое с тем что возвращает адаптер
console.log(JSON.stringify(trueResponse) === JSON.stringify(responseAdapter(badResponse)))
// true