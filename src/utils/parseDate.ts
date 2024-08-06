export default function parseDate(dateStr: string, timeStr: string): number {
	// Divide la fecha y la hora
	const [day, month] = dateStr.split('/').map(Number) // Cambia el orden aquí
	const [time, period] = timeStr.split(' ')

	let [hours, minutes] = time.split(':').map(Number)
	if (period === 'p. m.' && hours < 12) {
		hours += 12
	} else if (period === 'a. m.' && hours === 12) {
		hours = 0
	}

	// Construye la fecha completa
	const now = new Date()
	const currentYear = now.getFullYear() // Usa el año actual o ajusta según necesites
	const dateTimeStr = `${currentYear}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}T${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:00`
	console.log(dateTimeStr)
	return new Date(dateTimeStr).getTime() // Obtiene el timestamp en milisegundos
}

// Ejemplo de uso
// const jsonData = {
//   tournament: 'Clasificación de la CONMEBOL para la Copa Mundial de Fútbol',
//   estadio: 'Estadio Mâs Monumental',
//   estadio_kgmid: '/m/05fd38',
//   date: '5/9',
//   time: '9:00 p. m.',
//   teams: [ /* [Object], [Object] */ ]
// };

// const timestamp = parseDate(jsonData.date, jsonData.time);
// console.log(timestamp); // Muestra el timestamp en milisegundos
