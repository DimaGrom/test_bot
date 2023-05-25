const TelegramBot = require('node-telegram-bot-api')
require('dotenv').config()
const debug = require('./helper.js')
const fs = require('fs')

console.log('\n  Бот успешьно запущен....\n')

const bot = new TelegramBot(process.env.BOT_TOKEN, {
	polling: {
		interval: 300,
		autoStart: true,
		params: {
			timeout: 10
		}
	}
})



// Урок 28 Получение токена  https://www.youtube.com/watch?v=WP8zay48ZmY&list=PLhgRAQ8BwWFaxlkNNtO0NDPmaVO9txRg8&index=28
// Урок 27 Отправка Создание и оплата товара
// https://www.youtube.com/watch?v=mnpSxC2R1Uc&list=PLhgRAQ8BwWFaxlkNNtO0NDPmaVO9txRg8&index=27
// Урок 26 Отправка Контактов
// https://www.youtube.com/watch?v=atIZuw5yqU0&list=PLhgRAQ8BwWFaxlkNNtO0NDPmaVO9txRg8&index=26
// Урок 25 Отправка Геолокации
// https://www.youtube.com/watch?v=VK_xn4vtUm4&list=PLhgRAQ8BwWFaxlkNNtO0NDPmaVO9txRg8&index=25
// Урок 24 Отправка Видео
// https://www.youtube.com/watch?v=roEsFoC14Dk&list=PLhgRAQ8BwWFaxlkNNtO0NDPmaVO9txRg8&index=25
// Урок 23 Отправка Стикера
// Урок 22 Отправка Файла
// Урок 21 Отправка Ауди
// Урок 20 Отправка Картинок


// Урок 22 Отправка Стикера
bot.onText(/\/s1/, msg => {
	bot.sendSticker(msg.chat.id, './sticer.webp')
})

bot.onText(/\/s2/, msg => {
	fs.readFile(__dirname + '/sticer.webp', (err, sticker) => {
		bot.sendSticker(msg.chat.id, './sticer.webp')
	})
})

bot.onText(/\/w/, msg => {
	bot.sendMessage(msg.chat.id, `Привет, ${msg.chat.id}`)
})

/////////////////////////////////////////////////////////////////

// Урок 22 Отправка Файла
// bot.onText(/\/doc1/, msg => {
// 	bot.sendDocument(msg.chat.id, './test.xlsx')
// })

// bot.onText(/\/doc2/, msg => {
// 	bot.sendMessage(msg.chat.id, 'Идёт загрузка файла')

// 	fs.readFile(__dirname + '/test.xlsx', (err, file) => {
// 		bot.sendDocument(msg.chat.id, file, {
// 			caption: 'Таблица'
// 		})
// 			.then(() => {
// 				bot.sendMessage(msg.chat.id, 'Загрузка файла завершена')
// 			})
// 	})
// })

////////////////////////////////////////////////////

// Урок 21 Отправка Ауди
// bot.onText(/\/audio/, msg => {

// 	bot.sendAudio(msg.chat.id, './bytysov.mp3', {
// 		title: 'В.Бутусов ПЕСНЯ ИДУЩЕГО ДОМОЙ'
// 	})

// })

// bot.onText(/\/audio2/, msg => {

// 	bot.sendMessage(msg.chat.id, 'Загрузка песи...')

// 	fs.readFile(__dirname + '/bytysov.mp3', (err, data) => {
// 		bot.sendAudio(msg.chat.id, data, {
// 			caption: 'ПЕСНЯ ИДУЩЕГО ДОМОЙ',
// 			title: 'В.Бутусов',
// 			performer: 'Бутсов'
// 		})
// 			.then(() => {
// 				bot.sendMessage(msg.chat.id, 'Песня успешно загружена')
// 			})
// 	})

// })



// Урок 20 Отправка Картинок
// bot.onText(/\/pic/, msg => {
// 	bot.sendPhoto(msg.chat.id, fs.readFileSync(__dirname + '/img/кросс.jpg'))
// })

// bot.onText(/\/pict/, msg => {
// 	bot.sendPhoto(msg.chat.id, './img/shelf.jpg', {
// 		caption: 'Это кроссовок или что-то типа того'
// 	})
// })



// Урок 16
// const inline_keyboard = [
// 	[
// 		{
//       text: 'Forvard',
//       callback_data: 'forvard'			
// 		},
// 		{
//       text: 'Reply',
//       callback_data: 'reply'
// 		}
// 	], [
// 		{
//       text: 'Edit',
//       callback_data: 'edit'
// 		},
// 		{
//       text: 'Delete',
//       callback_data: 'delete'			
// 		}
// 	]
// ]

// bot.onText(/test/, ctx => {
// 	console.log(ctx)
// })

// bot.on('callback_query', query => {
// 	console.log(query.data)

// 	const { chat, message_id, text } = query.message

// 	switch (query.data) {
// 		case 'forvard':
// 			// console.log(query)
// 			// куда, откуда, что
// 			bot.forwardMessage(chat.id, chat.id, message_id)
// 			break
// 		case 'reply':
// 			bot.sendMessage(chat.id, 'Отвечаем на сообщение')
// 			break
// 		case 'edit':
// 			bot.editMessageText(`${text} (edited)`, {
// 				reply_markup: { inline_keyboard }
// 			})
// 			break
// 		case 'delete':
// 			bot.deleteMessage(chat.id, message_id)
// 			break
// 	}

// 	bot.answerCallbackQuery({
// 		callback_query_id: query.id
// 	})

// })

// bot.onText(/\/start/, (msg, [source, match]) => {

// 	bot.sendMessage(msg.chat.id, 'Keyboard', {
// 		reply_markup: {
// 			inline_keyboard
// 		}
// 	})
// })


// Урок 15 Не получилось 
// bot.on('callback_query',  (query) => {

// 	console.log(query)

// 	for (let i = 0; i < 5; i++) {
// 		results.push({
// 			type: 'article',
// 			id: i.toString(),
// 			title: 'title',
// 			input_message_content: {
// 				message_text: `Article #${i + 1}`
// 			}
// 		})
// 	}

// 	query.answerCallbackQuery(query.id, 'results')

// })




// Урок 14
// bot.on('message', msg => {
// 	bot.sendMessage(msg.chat.id, 'Инлайн клавиатура', {
// 		reply_markup: {
// 			inline_keyboard: [
// 				[
// 					{
// 						text: 'Зетфликс',
// 						url: 'https://dating.ru/'
// 					}
// 				], [
// 					{
// 						text: 'Первый',
// 						callback_data: 'Первый'
// 					},
// 					{
// 						text: 'Второй',
// 						callback_data: 'Второй'
// 					},
// 					{
// 						text: 'Третий',
// 						callback_data: 'Третий'
// 					},
// 				]
// 			]
// 		}
// 	})
// })

// bot.on('callback_query', query => {
// 	console.log(query)
// 	bot.answerCallbackQuery(query.id, `${query.data}`)
// })


// Урок 13  Клавиатура, удаление клавиатуры
// bot.on('message', msg => {

// 	if(msg.text === 'Закрыть') {
// 		return bot.sendMessage(msg.chat.id, 'Закрываю клавиатуру', {
// 			reply_markup: {
// 				remove_keyboard: true
// 			}
// 		})
// 	}

// 	if(msg.text === 'Ответить') {
// 		return bot.sendMessage(msg.chat.id, 'Отвечаю', {
// 			reply_markup: {
// 				force_reply: true
// 			}
// 		})
// 	}

// 	bot.sendMessage(msg.chat.id, 'Клавиатура', {
// 		reply_markup: {
// 			keyboard: [
// 				[{
// 					text: 'Отправить местоположения',
// 					request_location: true
// 				}],
// 				['Ответить', 'Закрыть'],
// 				[{
// 					text: 'Отправить контакт',
// 					request_contact: true
// 				}],
// 				['Просто так']
// 			],
// 			// Позволят отключить клавиатуру сразу после выполения одной из команд
// 			one_time_keyboard: true
// 		}
// 	})
// 		.then(() => console.log('  Сообщение отправлено'))
// 		.catch(error => console.log('  Ошибка отправки'))
// })


// // Урок 12
// bot.onText(/an/, msg => {
// 	setTimeout(() => {
// 		bot.sendMessage(msg.chat.id, 'https://wooordhunt.ru/', {
// 			//  Отключает приью веб страницы
// 			disable_web_page_preview: true,
// 			//  Отлкючает оповещение пользователя
// 			disable_notification: true
// 		})
// 	}, 4000)		
// })


// bot.on('message', msg => {

// 	const {id} = msg.chat

// 	const html = `
// 		<strong>Привет</strong>
// 	`
// 	bot.sendMessage(id, html,  {
// 		parse_mode: 'HTML'
// 	})
// })

// bot.onText(/\/start/, msg => {
// 	const { id } = msg.chat

// 	bot.sendMessage(id, debug(msg))
// })


// bot.onText(/\/help(.+)/, (msg, [source, match]) => {
// 	const { id } = msg.chat

// 	bot.sendMessage(id, debug(match))
// })


// bot.onText(/\/test (.+)/, (msg, [source, match]) => {
// 	const { id } = msg.chat

// 	bot.sendMessage(id, debug(match))
// })


// отлавливаем ошибки
// bot.on("polling_error", err => console.log(err))