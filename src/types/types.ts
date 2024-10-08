export interface Match {
  tournament: string;
  estadio: string;
  dateTime: string;
  timeStamp: number;
  date: string;
  time: string;
  teams: Team[];
}

export interface Team {
  name: string;
  image: string;
}
