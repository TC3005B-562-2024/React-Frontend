import React from "react";
import { AgentInfo, Filters, Pill, SearchBar } from "../../components";
import './Landing.css';

const Landing: React.FC = () => {
 
    return (
        <div>
            <div className='searchBar_container'>
                <SearchBar onSearch={function(value: string): void{
                    throw new Error('Function not implemented.');
                    }} />
                    
                
                <Filters options={[{
                    label: 'Option 1',
                    isSelected: false,
                },
                {
                    label: 'Option 2',
                    isSelected: false,
                },
                {
                    label: 'Option 3',
                    isSelected: false,
                }
                ]} />
            </div>  
            <div className='pill_container'>
                <Pill text='Support' color='blue'/>
                <Pill text='Complaints' color='yellow'/>
                <Pill text='Thefts' color='red'/>
                <Pill text='Shoppings' color='green'/>
            </div>
            <div className='cards_container'>
                <AgentInfo agentName='Agent Name' sentiment="NEGATIVE" skillArray={[
                    "Support", "Complaints", "Shoppings", "Thefts"
                ]} status='ONCALL' topPriorityAlert="LOW"/>

                <AgentInfo agentName='Agent Name' sentiment="POSITIVE" skillArray={[
                    "Support", "Complaints", "Shoppings"
                ]} status='AVAILABLE' topPriorityAlert="MEDIUM"/>

                <AgentInfo agentName='Agent Name' sentiment="NEGATIVE" skillArray={[
                    "Support", "Complaints", "Shoppings", 
                ]} status='ONCALL' topPriorityAlert="CRITICAL"/>

                <AgentInfo agentName='Agent Name' sentiment="POSITIVE" skillArray={[
                    "Support", "Complaints", "Shoppings", "Thefts"
                ]} status='DISCONNECTED' topPriorityAlert="MEDIUM"/>

                <AgentInfo agentName='Agent Name' sentiment="POSITIVE" skillArray={[
                    "Support", "Complaints", "Shoppings", "Thefts"
                ]} status='AVAILABLE' topPriorityAlert="MEDIUM"/>

                <AgentInfo agentName='Agent Name' sentiment="POSITIVE" skillArray={[
                    "Support", "Complaints", "Shoppings", "Thefts"
                ]} status='AVAILABLE' topPriorityAlert="MEDIUM"/>

                <AgentInfo agentName='Agent Name' sentiment="POSITIVE" skillArray={[
                    "Support", "Complaints", "Shoppings", "Thefts"
                ]} status='DISCONNECTED' topPriorityAlert="MEDIUM"/>
            </div>   
        </div>
    );
}

export default Landing;