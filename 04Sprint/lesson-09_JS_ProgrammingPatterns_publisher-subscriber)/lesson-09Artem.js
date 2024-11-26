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

//================================================
const button = {
    // когда кто-то вызовет addEventListener, мы должны найти это событие в обработчиках _subscribers и сохранить в наш массив обработчик
    _subscribers: {
        "click": [],
        "focus": []
    },

    click() {
        this._subscribers["click"].forEach(subscriber => subscriber()) // rerender
    },

    focus() {
        this._subscribers["focus"].forEach(subscriber => subscriber()) // rerender
    },

    addEventListener(eventName, callback) {
        // Чтобы занести событие в обработчик нужно push в конкретное событие
        this._subscribers[eventName].push(callback)
    },
    removeEventListener(eventName, callback) {
        this._subscribers[eventName] = this._subscribers[eventName].filter(sub => sub !== callback)
    }
}

const handler = () => { // вынесли, чтобы была 1 ссылка и могли отписаться от события
    console.log('Кнопка была нажата')
}

button.addEventListener('click', handler)
// button.addEventListener('click', function () {
//     console.log('Второй хэндлер')
// })

button.click() // Вызовется один раз

button.removeEventListener('click', handler)

button.click() // Удаляем, отписываемся от события, дальнейшие клики не дадут результатов
button.click()
button.click()
