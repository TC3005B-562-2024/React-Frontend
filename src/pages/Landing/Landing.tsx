import React from "react";
import { AgentInfo, Filters, Pill, SearchBar, InfoLoader } from "../../components";
import './Landing.css';
import { getAllAgents } from "../../services";
import { IAgentCardDTO } from "../../services/agents/types";

const Landing: React.FC = () => {
  const [agents, setAgents] = React.useState<IAgentCardDTO[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [displayedData, setDisplayedData] = React.useState<IAgentCardDTO[]>(agents); // Start by showing all data

  
  React.useEffect(() => {
    getAllAgents().then((data) => {
      if (data) {
        setAgents(data);
        setDisplayedData(data);
        setLoading(false);
      } else {
         // TODO handle error
        console.error('Failed to fetch agents');
        setLoading(false);
      }
    }).catch(e => {
      // TODO handle error.
      console.error('Failed to fetch agents', e);
      setLoading(false);
    });
  }, []);
  const handleSearch = (searchRegex: RegExp) => {
    const filteredData = agents.filter(item => {
      return searchRegex.test(item.name); // Adjust properties as needed
    });
    setDisplayedData(filteredData); // Update the displayed data
  };

  return (
    <>
      <div className='search-bar_container'>
        <SearchBar onSearch={(value) => handleSearch(new RegExp(value, 'i'))}
        />
        <Filters options={
          [{
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
          }]
        }
        />
      </div>
      <div className='pill-container'>
        <Pill text='Support' color='blue' />
        <Pill text='Complaints' color='yellow' />
        <Pill text='Thefts' color='red' />
        <Pill text='Shoppings' color='green' />
      </div>
      {loading && 
        <div className="mt-5 -ml-1"><InfoLoader></InfoLoader></div>
      }
      <div className='cards-container'>
    
        {displayedData && displayedData.map((agent) => {
          return (
            <AgentInfo
              key={agent.id}
              id={agent.id}
              name={agent.name}
              sentiment={agent.sentiment}
              queues={agent.queues}
              status={agent.status}
              topPriorityAlert={agent.topPriorityAlert}
            />
          );
        })}
      </div>
    </>
  );
}

export default Landing;
