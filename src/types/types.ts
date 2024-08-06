export interface Match {
	tournament: string
	estadio: string
	dateTime: Date
	timeStamp: number
	date: string
	time: string
	teams: Team[]
}

export interface Team {
	name: string
	image: string
}
