import { getJson } from 'serpapi'
import fs from 'fs'

function formatGames(games) {
	const formatedGames = []
	games.forEach((game) => {
		//Get Current month and Year
		const currYear = new Date().getFullYear()
		const currMonth = new Date().getMonth()

		//Create Datetime with Date And Time in String
		const dateTime = new Date(
			`${game.date} ${game.time !== 'TBD' ? game.time : ''}`
		)

		//Get dateTime month
		const dateTimeMonth = dateTime.getMonth()

		//Set year depends on the de month
		if (dateTimeMonth > currMonth && dateTime.getFullYear() === 2001)
			dateTime.setFullYear(currYear)

		//Create JSON format
		let newGame = {
			tournament: game.tournament
				.replace('CONMEBOL', '')
				.replace('-', '')
				.trim(),
			estadio: game.stadium ?? 'TBD',
			dateTime,
			timeStamp: dateTime.getTime(),
			date: game.date,
			time: game.time,
			teams: game.teams.map((team) => {
				return { name: team.name, image: `${team.name.toLowerCase()}.webp` }
			}),
		}
		formatedGames.push(newGame)
	})
	return formatedGames
}
//Get info from SERAPI
getJson(
	{
		engine: 'google',
		q: 'Cuando juega argentina',
		location_requested: 'Buenos Aires Province, Argentina',
		location_used: 'Buenos Aires Province,Argentina',
		google_domain: 'google.com.ar',
		hl: 'en',
		lr: 'lang_es',
		gl: 'ar',
		device: 'desktop',
		api_key: process.env.API_KEY,
	},
	(json) => {
		const games = formatGames(json['sports_results'].games)
		console.log(games)

		fs.writeFileSync('./public/matches.json', JSON.stringify(games), 'utf8')

		console.log('JSON file has been written successfully.')
	}
)
