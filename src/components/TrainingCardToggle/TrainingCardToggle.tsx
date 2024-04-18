import { ITrainingCardToggle } from './types';
import { CompleteButton } from '../CompleteButton';
const TrainingCardToggle: React.FC<ITrainingCardToggle> = ({
    label,
    color = 'green',
}) => {
    return (
        <div className='bg-white box-content rounded-md shadow-md'>
            <div className='flex'>
                <div className='flex-1 grow mx-4 my-4'>{label}</div>
                <div className='flex-none w-5 my-4 mr-4'><CompleteButton isComplete color={color}/></div>
            </div>  
        </div>
    );
};

export default TrainingCardToggle;
