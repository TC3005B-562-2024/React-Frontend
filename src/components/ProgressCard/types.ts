export interface IJointTrainingExpansionPanel {
    
    progress: number;
    color : 'green' | 'yellow' | 'red';
    label : string;
    agentName : string;
    trainings : string[];

    
}