export class CompetitionDetails {

    constructor(
        public id: number,
        public code: string,
        public date: Date,
        public startTime: Date,
        public endTime: Date,
        public numberOfParticipants: number,
        public location: string,
        public amount: number,
        public status: string,
    ) { }
}