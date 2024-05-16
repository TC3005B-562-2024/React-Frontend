import React, { useEffect, useState } from 'react';
import { IInformationBar } from '../../components/InformationBar/types';
import { Button, InformationBar, InsightDescription } from '../../components';
import { useNavigate, useParams } from 'react-router-dom';
import { getFake_info, getAlertById, postIgnoreAlert, postAcceptAlert } from '../../services';
import { PriorityType } from '../../components/InsightDescription/types';
import { IAlert } from '../../services/alerts/types';
import './Alert.css';

const Alert: React.FC = () => {
    const { id } = useParams();
    const numberId = Number(id);
    const navigate = useNavigate();
    const [informationDetails, setInformationDetails] = useState<IInformationBar[] | null>(null);
    const [alertInfo, setAlertInfo] = useState<IAlert | null>(null);

    const goBack = () => {
        navigate(-1);
    }

    useEffect(() => {
        const getAlertInfo = async (alertId: number) => {
            const response = await getAlertById(alertId);
            if (response === null) return;
            setAlertInfo(response);

            const otherResponse = await getFake_info(numberId, response.resource, response.solved);
            setInformationDetails(otherResponse);
        }

        const interval = setInterval(async () => {
            getAlertInfo(numberId)
        }, 1000);

        return () => clearInterval(interval);
    }, [numberId]);

    return (
        <div >
            {alertInfo && (
                <>
                    <InsightDescription priority={alertInfo.insight.category.denomination as PriorityType} alertId={numberId} description={alertInfo.insight.description} />
                    <div className=' '>
                        <span className='text-banner font-bold pb-3'>
                            {alertInfo.resource}
                        </span>
                        {informationDetails &&
                            <div>
                                {informationDetails.map((info: IInformationBar, index: number) => (
                                    <InformationBar key={index} title={info.title} elements={info.elements} />
                                ))}
                            </div>
                        }

                        <div className=' button_container '>
                            <Button text={'Go Back'} size='title' color='orange' type='button' icon={{
                                iconName: 'arrow_back',
                            }} onClick={function (): void {
                                goBack();
                            }} />
                            <Button text={'Ignore'} size='title' color='red' type='button' icon={{
                                iconName: 'cancel',
                            }} onClick={() => {
                                postIgnoreAlert(numberId);
                            }} />
                            <Button text={'Accept'} size='title' color='green' type='button' icon={{
                                iconName: 'check_circle',
                            }} onClick={() => {
                                postAcceptAlert(numberId);
                            }} />
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default Alert