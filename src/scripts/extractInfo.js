import { chromium } from 'playwright'
import fs from 'fs'
import util from 'util'
const browser = await chromium.launch({ headless: true })

const page = await browser.newPage()

await page.goto('https://www.espn.com/soccer/team/fixtures/_/id/202/arg')

function convertDate(dateString) {
	// const dateString = dateString;
	const date = new Date(dateString + ' 2023')
	return date
}
const partidos = await page.$$eval('.Table__fixtures', (results) =>
	results.map((table) => {
		const month = table.querySelector('.Table__Title')?.innerText

		let matches = []

		const year = month.match(/\d{4}/)

		table.querySelectorAll('.Table__TBODY tr').forEach((match) => {
			let date = new Date(
				match.querySelector('.matchTeams')?.innerText + ` ${year}`
			).toLocaleDateString('es-ES', {
				year: 'numeric',
				weekday: 'long',
				month: 'long',
				day: 'numeric',
			})

			const versus =
				match.querySelector('.away').innerText === 'Argentina'
					? match.querySelector('.local').innerText
					: match.querySelector('.away').innerText

			date = date.charAt(0).toUpperCase() + date.slice(1)

			const competition = match.querySelector(
				'.Table__TD:nth-child(6) span'
			).innerText
			matches.push({ date, versus, competition })
		})

		return { month, matches }
	})
)

// console.log(
// 	util.inspect(partidos, { showHidden: false, depth: null, colors: true })
// )
fs.writeFileSync('../../public/matches.json', JSON.stringify(partidos), 'utf8')

console.log('JSON file has been written successfully.')

await browser.close()
