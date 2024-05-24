export interface ITrainingsForAResponse {
    id:      number;
    results: ResultTA[];
}

export interface ResultTA {
    label:      string;
    isComplete: boolean;
}