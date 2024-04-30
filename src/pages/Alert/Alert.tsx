import React from 'react';
import { Button, InformationBar, InsightDescription} from '../../components';
import { useParams } from 'react-router-dom';



const Alert: React.FC = () => {
    const { id } = useParams();
    const numberId = Number(id);
    return(
        <div >
            <InsightDescription priority={'transfer'} alertId={numberId} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dapibus bibendum sodales. Mauris vel elit quis diam varius tincidunt. Nunc sit amet neque metus. Phasellus mi turpis, consectetur at tortor sit amet, iaculis lobortis lacus. Ut vitae turpis augue. Maecenas et porttitor tortor. Vivamus mauris nisi, pretium a vestibulum id, dapibus at mauris. Aliquam erat volutpat. Nunc quis purus eleifend, molestie lacus at, congue tortor. Praesent mauris orci, rutrum eleifend magna ac, hendrerit fringilla nisl. Cras arcu felis, euismod id finibus vitae, hendrerit interdum orci. Donec consequat tempor ipsum sed rhoncus. Ut libero velit, laoreet sit amet tellus non, dapibus mattis lacus. Fusce bibendum sapien nunc, at maximus enim vestibulum eu.'} />
            <div className=' '>
                <span className='text-banner font-bold pb-3'>
                    Name: 
                </span>
                <InformationBar title={'Information'} elements={[{
                    title: 'Elemento 1',
                    content: 'Valor 1',
                    color: 'red'
                }, {
                    title: 'Elemento 2',
                    content: 'Valor 2',
                    color: 'green',
                }, {
                    title: 'Elemento 3',
                    content: 'Valor 3',
                    color: 'yellow',
                }]} />

                <InformationBar title={'Metrics'} elements = {[{
                    title: 'Metric 1',
                    content: 'Value 1',
                    color: 'red'
                }, {
                    title: 'Metric 2',
                    content: 'Value 2',
                    color: 'green',
                }, {
                    title: 'Metric 3',
                    content: 'Value 3',
                    color: 'yellow',
                }]} />

                <div className=' pt-10 flex flex-row float-right space-x-10'>
                    <Button text={'Go Back'} size='title' color='orange' type='button' icon={{
                        iconName: 'arrow_back',
                    }} onClick={function (): void {
                        throw new Error('Function not implemented.');
                    } }/>
                    <Button text={'Ignore'} size='title' color='red' type='button' icon={{
                        iconName: 'cancel',
                    }} onClick={function (): void {
                        throw new Error('Function not implemented.');
                    } }/>
                    <Button text={'Accept'} size='title' color='green' type='button' icon={{
                        iconName: 'check_circle',
                    }} onClick={function (): void {
                        throw new Error('Function not implemented.');
                    } }/>
                </div>
            </div>
        </div>
    )
}

export default Alert;