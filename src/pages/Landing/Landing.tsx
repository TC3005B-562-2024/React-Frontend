import React, { useEffect } from "react";
import { AgentInfo, Filters, Pill, SearchBar, InfoLoader } from "../../components";
import './Landing.css';
import { getAllAgents, getAllQueuesMin } from "../../services";
import { IAgentCardDTO } from "../../services/agents/types";
import { IMultiselectOptions } from "../../components/MultiselectOptions/types";
import { IQueueMin } from "../../services/queue/types";


const Landing: React.FC = () => {
  const [agents, setAgents] = React.useState<IAgentCardDTO[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [queueMin, setQueueMin] = React.useState<IQueueMin[]>([]);
  const [displayedData, setDisplayedData] = React.useState<IAgentCardDTO[]>(agents); // Start by showing all data
  const [uniqueQueues, setUniqueQueues] = React.useState<string[]>([]);
  const [, setSelectedFilters] = React.useState<string[]>([]);
  const skillColors = ['blue', 'red', 'green', 'yellow', 'orange', 'gray'];

  const getTopPills = async(id: string | undefined) => {
    await getAllQueuesMin(id)
    .then((res) => {
      if (res !== null) setQueueMin(res);
    })
    .catch((err) => {
      console.error(err);
    });
  }

  useEffect(() => {
    getTopPills(undefined); 
  }, []);

  React.useEffect(() => {
    getAllAgents().then((data) => {
      if (data) {
        setAgents(data);
        setDisplayedData(data);
        const newUniqueQueues = Array.from(
          new Set(data.flatMap((agent) => agent.queues.map(queue => queue.name)))
        );
        setUniqueQueues(newUniqueQueues);
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

  const handleFilterChange = (newOptions: IMultiselectOptions[]) => {
    const newSelectedFilters = newOptions
      .filter(option => option.isSelected)
      .map(option => option.label);
  
    setSelectedFilters(newSelectedFilters);
    filterDisplayedData(newSelectedFilters);
  };

  const filterDisplayedData = (queueFilters: string[]) => {
    if (queueFilters.length === 0) {
      // No filters, show all agents
      setDisplayedData(agents);
    } else {
      const filteredData = agents.filter(agent =>
        agent.queues.some(queue => queueFilters.includes(queue.name))
      );
      setDisplayedData(filteredData);
    }
  };

  const filterOptions: IMultiselectOptions[] = uniqueQueues.map((queue) => ({
    label: queue,
    isSelected: false,
    onChange: () => { 
      console.log(`Queue ${queue} selection changed`);
     }
  }));

  return (
    <>
      <div className='search-bar_container'>
        <SearchBar onSearch={(value) => handleSearch(new RegExp(value, 'i'))} />
        <Filters options={filterOptions} onFilterChange={handleFilterChange} />
      </div>
      <div className="pill-container"> 
      {loading ? (
        <InfoLoader></InfoLoader>
      ) : (
        !loading && queueMin && queueMin.length > 0 ? (
          queueMin.map((queue, index) => (
            <Pill
              key={queue.name}
              text={queue.name}
              color={skillColors[index % skillColors.length] as 'green' | 'yellow' | 'blue' | 'red' | 'orange' | 'gray'} // Assign color based on skill
              className="agent-info__content__skills__pill"
              id={queue.id}
            />
          ))
        ) : null
      )}
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
              queues={agent.queues.map(queue => queue.name)}
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
