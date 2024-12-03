// Паттерн - это архитектурное, готовое решение для типовых проблем\задач.
// Наблюдатель — это поведенческий паттерн проектирования, который создает механизм подписки, позволяющий одним объектам следить и реагировать на события, происходящие в других объектах.
// subscriber === handler === listener === watcher === observer

// // Примеры в которых используется данный паттерн
// store.subscribe(function subscriber() {}) // когда стор изменился
// button.addEventListener('click', function subscriber() {}) // кнопка была нажата
// setTimeout(function subscriber() {}, 1000) // прошла 1 секунда
// promises.then(function subscriber() {})

// // пример на бекенде:
// app.post('/users', function subscriber() {}) // роут был вызван
// fs.watch('text.tsx', function subscriber() {}) // файл был изменён
// websocket.on('message', function subscriber() {}) // сообщение было отправлено

// // ---------- Пример реализации паттерна наблюдателя в кнопке ----------
// //================================================================================================
// // var1
// const button = {
//     // когда кто-то вызовет addEventListener, мы должны найти это событие в обработчиках _subscribers и сохранить в наш массив обработчик
//     _subscribers: {
//         // так будут накапливаться наши коллбеки, когда будут подписываться на наш клик
//         // "click": [callback,callback,callback,callback],
//         "click": [],
//         "focus": []
//     },
//
//     click() {
//         this._subscribers["click"].forEach(subscriber => subscriber()) // rerender
//     },
//     focus() {
//         this._subscribers["focus"].forEach(subscriber => subscriber()) // rerender
//     },
//
//     addEventListener(eventName, callback) {
//         // Чтобы занести событие в обработчик нужно push в конкретное событие
//         this._subscribers[eventName].push(callback)
//     },
//     removeEventListener(eventName, callback) {
//         this._subscribers[eventName] = this._subscribers[eventName].filter(sub => sub !== callback)
//     }
// }
//
// const handler = () => { // вынесли, чтобы была 1 ссылка и могли отписаться от события
//     console.log('Кнопка была нажата')
// }
//
// button.addEventListener('click', handler)
// // button.addEventListener('click', function () {
// //     console.log('Второй хэндлер')
// // })
//
// button.click() // Вызовется один раз
//
// button.removeEventListener('click', handler)
//
// button.click() // Удаляем, отписываемся от события, дальнейшие клики не дадут результатов
// button.click()
// button.click()


// //================================================
// // var2 - Вариант функции отписки от события приходит, когда мы подписываемся на событие
// const button = {
//     _subscribers: {
//         "click": [],
//         "focus": []
//     },
//     // вынесли функцию из removeEventListener в отдельный приватный метод _unsubscribe чтобы переиспользовать
//     _unsubscribe(eventName, callback) {
//         this._subscribers[eventName] = this._subscribers[eventName].filter(sub => sub !== callback)
//     },
//
//     click() {
//         this._subscribers["click"].forEach(subscriber => subscriber()) // rerender
//     },
//     focus() {
//         this._subscribers["focus"].forEach(subscriber => subscriber()) // rerender
//     },
//
//     addEventListener(eventName, callback) {
//         this._subscribers[eventName].push(callback)
//
//         return () => {
//             this._unsubscribe(eventName, callback)
//         }
//     },
//     removeEventListener(eventName, callback) {
//         this._unsubscribe(eventName, callback)
//     }
// }
//
// const handler = () => {
//     console.log('Кнопка была нажата')
// }
//
// button.addEventListener('click', handler)
// button.click() // подписались
//
// button.removeEventListener('click', handler)
// button.click() // отписались
//
// // () => { this._unsubscribe(eventName, callback) } // Вот этот callback хранится в переменной buttonClickUnsubscribe
// const buttonClickUnsubscribe = button.addEventListener('click', () => {
//     console.log('Кнопка была нажата!!!')
// })
// button.click() // подписались
// buttonClickUnsubscribe() // отписались // И когда вызовем этот callback произойдёт отписка
// button.click() // это уже не сработает
// // console ->
// // Кнопка была нажата
// // Кнопка была нажата!!!



// // ---------- Пример реализации паттерна наблюдателя в бэкэнде ----------
// // ================================================================================================
// const Publisher = {
//     subscribers: {
//         // 'userCreated': [sendEmail, saveToDatabase]
//     },
//     subscribe(eventName, subscriber) {
//         if (!this.subscribers[eventName]) {
//             this.subscribers[eventName] = []; // Чтобы не хардкодить вставляем пустой массив - генерируем событие
//         }
//         this.subscribers[eventName].push(subscriber) // А уже дальше пушим нашего subscriber
//     },
//     unsubscribe(eventName, subscriber) {
//         if (!this.subscribers[eventName]) return;
//         this.subscribers[eventName] = this.subscribers[eventName].filter(sub => sub !== subscriber);
//     },
//     // метод публикации события. Опять же есть событие и передаём данные - payload, которые нужны обработчику
//     publish(eventName, data) {
//         if (!this.subscribers[eventName]) return;
//         this.subscribers[eventName].forEach(subscriber => subscriber(data)); // вызываем всех подписчиков
//     }
// }
//
// function sendEmail(user) {
//     console.log(`Отправляем email для пользователя: ${user.name}`);
// }
//
// function sendSms(userName, phoneNumber) {
//     console.log(`Отправляем смс для пользователя: ${userName} на номер ${phoneNumber}`);
// }
//
// // То есть если где-то вызвана функция createUser
// // Главный наш основной функционал по созданию юзера
// function createUser(name, phone) {
//     const user = {name, phone}; // Создаёт объект юзера
//     console.log('Пользователь создан!');
//     Publisher.publish('userCreated', user);
// }
//
// // Дополнительный функционал по отправке email
// Publisher.subscribe('userCreated', sendEmail)
// Publisher.subscribe('userCreated', (user) => {
//     sendSms(user.name, user.phone)
// })
//
// createUser('Dima', '12345')
//
//
// Publisher.subscribe('userUpdated', (name) => {
//     console.log(`Пользователь ${name} обновил имя`)
// })
//
// function updatedUser(name) {
//     console.log('Пользователь обновлен')
//     Publisher.publish('userUpdated', name);
// }
//
// updatedUser('Artem')
// // console
// // Пользователь создан!
// // Отправляем email для пользователя: Dima
// // Отправляем смс для пользователя: Dima на номер 12345
// // Пользователь обновлен
// // Пользователь Artem обновил имя


// СОБЫТИЯ БРАУЗЕРА
const small = document.querySelector('#small')
const medium = document.querySelector('#medium')
const big = document.querySelector('#big')
const buttonId = document.querySelector('#buttonId')
// const link = document.querySelector('#linkId')
// const body = document.querySelector('#body')

const handler = (event) => {
    event.stopPropagation()
    // свойство target равно тому какой элемент породил-создал событие (когда 1ый раз создаётся)
    console.log('target', event.target.id)
    // currentTarget равен всегда тому элементу, который вызвал событие
    console.log('currentTarget', event.currentTarget.id) 
    // target и currentTarget равен только в одном случае у элемента на котором произошёл клик.
    // А когда происходит всплытие, так как вызвался 2ой обработчик big элемента
}
//console - при клике на medium
// target medium
// currentTarget medium
// target medium
// currentTarget big

// Происходит всплытие:
// нажимаем на small, а срабатывают события на 3 div + body
small.addEventListener('click', handler)
medium.addEventListener('click', handler)
big.addEventListener('click', handler)
buttonId.addEventListener('click', handler)
// link.addEventListener('click', handler)
// body.addEventListener('click', handler)
//console
// div clicked
// PointerEvent{...}
// div clicked
// PointerEvent{...}
// div clicked
// PointerEvent{...}
// div clicked
// PointerEvent{...}

// Погружение не работает по умолчанию, надо передать 3ий параметр true
// small.addEventListener('click', handler, true)


// Так не используем:
// 1. потому что не можем отписаться, только костылём null
// 2. и не можем назначить много обработчиков
// small.onclick = handler;
// small.onclick = null;


// // ================================================================================================
// // event.stopPropagation()
// const handler = (event) => {
//     event.stopPropagation() // предотвращает всплытие
//     console.log('target', event.target.id)
//     console.log('currentTarget', event.currentTarget.id)
// }

// ================================================================================================
// event.preventDefault()
const link = document.querySelector('#linkId')

const linkHandler = (event) => {
    event.preventDefault()
    console.log('click link')
}

link.addEventListener('click', linkHandler)