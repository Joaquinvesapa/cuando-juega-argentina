import { chromium } from 'playwright'
import crypto from 'crypto'
import fs from 'fs'
import util from 'util'
const browser = await chromium.launch({ headless: true })

const page = await browser.newPage()

await page.goto('https://www.espn.com/soccer/team/fixtures/_/id/202/arg')

const partidos = await page.$$eval('.Table__fixtures', (results) =>
	results.map((table) => {
		//Extract mont
		const month = table.querySelector('.Table__Title')?.innerText

		let matches = []
		//Extract year
		const year = month.match(/\d{4}/)

		//Extract match date
		table.querySelectorAll('.Table__TBODY tr').forEach((match) => {
			//Set Hour
			const hour = match.querySelector('.Table__TD:nth-child(5) a').innerText

			//Create dateString with hour if is define
			let dateString = new Date(
				match.querySelector('.matchTeams')?.innerText +
					` ${year} ` +
					`${hour !== 'TBD' ? hour : '12:00 AM'}`
			)
				.toLocaleString()
				.replaceAll('/', '-')

			//Extract versus
			const versus =
				match.querySelector('.away').innerText === 'Argentina'
					? match.querySelector('.local').innerText
					: match.querySelector('.away').innerText

			//Format date
			console.log(hour)
			let date = new Date(
				match.querySelector('.matchTeams')?.innerText + ` ${year}`
			).toLocaleDateString('es-ES', {
				year: 'numeric',
				weekday: 'long',
				month: 'long',
				day: 'numeric',
			})
			date = date.charAt(0).toUpperCase() + date.slice(1)

			//Extract competition name
			const competition = match.querySelector(
				'.Table__TD:nth-child(6) span'
			).innerText

			const generateId = (competition, date, versus) => {
				return `${competition}${date}${versus}`
					.replaceAll('-', '')
					.replaceAll(' ', '')
					.replaceAll(',', '')
					.toLowerCase()
			}

			matches.push({
				id: generateId(competition, date, versus),
				date,
				dateString,
				hour,
				versus,
				competition,
			})
		})

		return { month, matches }
	})
)

console.log(
	util.inspect(partidos, { showHidden: false, depth: null, colors: true })
)
fs.writeFileSync('./public/matches.json', JSON.stringify(partidos), 'utf8')

console.log('JSON file has been written successfully.')

await browser.close()
