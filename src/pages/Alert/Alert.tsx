import React, { useEffect, useState } from 'react';
import { Button, InformationBar, InsightDescription } from '../../components';
import { useNavigate, useParams } from 'react-router-dom';
import { getAlertById, postIgnoreAlert, postAcceptAlert } from '../../services';
import { PriorityType } from '../../components/InsightDescription/types';
import { IAlert } from '../../services/alerts/types';
import { IQueueInformation } from '../../services/queue/types';
import { getQueueInfo } from '../../services/queue/getQueueInfo';
//import { getAgentById } from '../../services/alerts/getAlertById';
import { ISkillById } from '../../services/skills/types';
import { getSkillById } from '../../services/skills/getSkillById';
import {getAgentById} from '../../services/agents/getAgentById';
import './Alert.css';
import { IAgentInformation } from '../../services/agents/types';

const Alert: React.FC = () => {
    const { id } = useParams();
    const numberId = Number(id);
    const navigate = useNavigate();
    const [alertInfo, setAlertInfo] = useState<IAlert | null>(null);
    const [queue, setQueue] = useState<IQueueInformation | null>(null);
    const [skill, setSkill] = useState<ISkillById>();
    const [agent, setAgent] = useState<IAgentInformation>();
    

    const goBack = () => {
        navigate(-1);
    };

    useEffect(() => {
        const fetchAlertData = async (alertId: number) => {
            try {
                const alertData = await getAlertById(alertId);
                if (alertData !== null) {
                    setAlertInfo(alertData);
                    const resourceArn = alertData.resource; // Use resource field to get queue ARN
    
                    if (resourceArn) {
                        const resourceId = resourceArn.split('/').pop();
    
                        if (resourceId) {
                            if (resourceArn.includes('routing-profile')) {
                                const skillData = await getSkillById(resourceId);
                                if (skillData !== null) {
                                    setSkill(skillData);
                                }
                            } else if (resourceArn.includes('queue')) {
                                const queueData = await getQueueInfo(resourceId);
                                if (queueData !== null) {
                                    setQueue(queueData);
                                }
                            } else if (resourceArn.includes('agent')) {
                                
                                const agentData = await getAgentById(resourceId);
                                if (agentData !== null) {
                                     setAgent(agentData);
                                     console.log(agentData)
                                 }
                            }
                        }
                    }
    
                    /* const skillArn = alertData.resource;
                    if (skillArn) {
                        const skillId = skillArn.split('/').pop(); // Extract the skill ID from the ARN
                        if (skillId) {
                            const skillData = await getSkillById(skillId);
                            if (skillData) {
                                setSkill(skillData);
                            }
                        }
                    } */
    
                    // Uncomment and modify this section as needed
                    /* const agentArn = alertData.resource; 
                    if (agentArn) {
                        const agentsId = agentArn.split('/').pop(); // Extract the agents ID from the ARN
                        if (agentsId) {
                            const agentsData = await getAgentById(alertId);
                            setAgent(agentsData);
                        }
                    } */
                }
            } catch (err) {
                console.error('Error fetching data:', err);
            }
        };
    
        fetchAlertData(numberId);
    }, [numberId]);
    
    

    return (
        <div>
            {alertInfo && (
                <>
                    <InsightDescription priority={alertInfo.insight.category.denomination as PriorityType} alertId={numberId} description={alertInfo.insight.description} />
                    <div>
                        <span className='text-banner font-bold pb-3'>
                            {alertInfo.resource}
                        </span>
                        {queue && (
                            <InformationBar
                                title='Information'
                                elements={queue?.information.sections?.map((section) => ({
                                    title: section.sectionTitle,
                                    content: section.sectionValue || '',
                                    color: (['black', 'red', 'green', 'yellow', 'gray'].includes(section.color) ? section.color : 'black') as 'black' | 'red' | 'green' | 'yellow' | 'gray'
                                })) || []}
                            />
                        )}
                        <InformationBar
                                title='Information'
                                elements={skill?.skillsInformationDTO.sections.map((section) => ({
                                    title: section.sectionTitle,
                                    content: section.sectionValue || '',
                                    color: section.color || 'black'
                                })) || []}
                                />


                                <InformationBar
                                title='Information'
                                elements={agent?.information.sections.map((section) => ({
                                    title: section.sectionTitle,
                                    content: section.sectionValue || '',
                                    color: (['black', 'red', 'green', 'yellow', 'gray'].includes(section.color) ? section.color : 'black') as 'black' | 'red' | 'green' | 'yellow' | 'gray'
                                })) || []}
                                />
                                
                        
                        <div className='button_container'>
                            <Button text={'Go Back'} size='title' color='orange' type='button' icon={{ iconName: 'arrow_back' }} onClick={goBack} />
                            <Button text={'Ignore'} size='title' color='red' type='button' icon={{ iconName: 'cancel' }} onClick={() => postIgnoreAlert(numberId)} />
                            <Button text={'Accept'} size='title' color='green' type='button' icon={{ iconName: 'check_circle' }} onClick={() => postAcceptAlert(numberId)} />
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Alert;