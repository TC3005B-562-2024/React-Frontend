import React, { useEffect, useState } from 'react';
import { Button, InformationBar, InsightDescription } from '../../components';
import { useNavigate, useParams } from 'react-router-dom';
import { getAlertById, postIgnoreAlert, postAcceptAlert } from '../../services';
import { PriorityType } from '../../components/InsightDescription/types';
import { IAlert } from '../../services/alerts/types';
import { IQueueInformation } from '../../services/queue/types';
import { getQueueInfo } from '../../services/queue/getQueueInfo';
import './Alert.css';

const Alert: React.FC = () => {
    const { id } = useParams();
    const numberId = Number(id);
    const navigate = useNavigate();
    const [alertInfo, setAlertInfo] = useState<IAlert | null>(null);
    const [queue, setQueue] = useState<IQueueInformation | null>(null);

    const goBack = () => {
        navigate(-1);
    };

    useEffect(() => {
        const fetchAlertData = async (alertId: number) => {
            try {
                const alertData = await getAlertById(alertId);
                console.log('Alert Data:', alertData); // Inspect the structure of alert data
                if (alertData !== null) {
                    setAlertInfo(alertData);
                    const queueArn = alertData.resource; // Use resource field to get queue ARN
                    if (queueArn) {
                        const queueId = queueArn.split('/').pop(); // Extract the queue ID from the ARN
                        if (queueId) {
                            const queueData = await getQueueInfo(queueId);
                            setQueue(queueData);
                        }
                    }
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
                        <InformationBar
                            title='Information'
                            elements={queue?.information.sections?.map((section) => ({
                                title: section.sectionTitle,
                                content: section.sectionValue || '',
                                color: (['black', 'red', 'green', 'yellow', 'gray'].includes(section.color) ? section.color : 'black') as 'black' | 'red' | 'green' | 'yellow' | 'gray'
                            })) || []}
                        />
                        <InformationBar
                            title='Metrics'
                            elements={[
                                {
                                    title: 'Service Level',
                                    content: 'Element',
                                    color: 'yellow'
                                },
                                {
                                    title: 'ACR',
                                    content: 'Element',
                                    color: 'red'
                                },
                                {
                                    title: 'ASA',
                                    content: 'Element',
                                    color: 'green'
                                },
                                {
                                    title: 'FCR',
                                    content: 'Element',
                                    color: 'yellow'
                                },
                                {
                                    title: 'Adherence',
                                    content: 'Element',
                                    color: 'red'
                                }
                            ]}
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