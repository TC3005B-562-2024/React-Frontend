import React from "react";
import { HistoryAgent } from "../../components";
import './Logs.css';

const Logs: React.FC = () => {
    return (
        <div className='logs-container'>
        <HistoryAgent
            log='Intervene action'
            date={new Date()}
            icon={{ iconName: 'check' }}
            description='This is a description for Agent 1'
            color='green'
        />
        <HistoryAgent
            log='Transfer action'
            date={new Date()}
            icon={{ iconName: 'close' }}
            description='This is a description for Agent 2'
            color='red'
        />
        <HistoryAgent
            log='Training action'
            date={new Date()}
            icon={{ iconName: 'close' }}
            description='This is a description for Agent 3'
            color='red'
        />
        <HistoryAgent
            log='Training action'
            date={new Date()}
            icon={{ iconName: 'check' }}
            description='This is a description for Agent 4'
            color='green'
        />
        <HistoryAgent
            log='Trasfer action'
            date={new Date()}
            icon={{ iconName: 'check' }}
            description='This is a description for Agent 5'
            color='green'
        />
        </div>
    );
}   
  
export default Logs;
  
