import React, { useEffect, useState } from 'react';
import { Button, InformationBar, InsightDescription } from '../../components';
import { useNavigate, useParams } from 'react-router-dom';
import { getFake_info } from '../../services';
import './Alert.css';



const Alert: React.FC = () => {
    const { id } = useParams();
    const numberId = Number(id);
    const navigate = useNavigate();
    const [informationDetails, setInformationDetails] = useState<any>([]);

    const goBack = () => {
        navigate(-1);
    }

    useEffect(() => {
        const interval = setInterval(async () => {
            const response = await getFake_info(numberId);
            setInformationDetails(response);
        }, 1000);

        // Cleanup function to clear the interval when the component unmounts or when moving to another page
        return () => clearInterval(interval);
    }, [numberId]);

    return (
        <div >
            <InsightDescription priority={'intervene'} alertId={numberId} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dapibus bibendum sodales. Mauris vel elit quis diam varius tincidunt. Nunc sit amet neque metus. Phasellus mi turpis, consectetur at tortor sit amet, iaculis lobortis lacus. Ut vitae turpis augue. Maecenas et porttitor tortor. Vivamus mauris nisi, pretium a vestibulum id, dapibus at mauris. Aliquam erat volutpat. Nunc quis purus eleifend, molestie lacus at, congue tortor. Praesent mauris orci, rutrum eleifend magna ac, hendrerit fringilla nisl. Cras arcu felis, euismod id finibus vitae, hendrerit interdum orci. Donec consequat tempor ipsum sed rhoncus. Ut libero velit, laoreet sit amet tellus non, dapibus mattis lacus. Fusce bibendum sapien nunc, at maximus enim vestibulum eu.'} />
            <div className=' '>
                <span className='text-banner font-bold pb-3'>
                    Name:
                </span>
                {informationDetails &&
                    <div>
                        {informationDetails.map((info: any, index: number) => (
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
                    }} onClick={function (): void {
                        throw new Error('Function not implemented.');
                    }} />
                    <Button text={'Accept'} size='title' color='green' type='button' icon={{
                        iconName: 'check_circle',
                    }} onClick={function (): void {
                        throw new Error('Function not implemented.');
                    }} />
                </div>
            </div>
        </div>
    )
}

export default Alert