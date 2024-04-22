import { ITrainingCardToggle } from './types';
import { CompleteButton } from '../CompleteButton';
const TrainingCardToggle: React.FC<ITrainingCardToggle> = ({
    label,
    isComplete,
}) => {
    return (
        <div className='bg-white box-content rounded-md'>
            <div className='flex'>
                <div className='flex-1 grow mx-4 my-4'>
                    {label}
                    </div>
                <div className='flex items-center my-4 mr-4'>
                    <CompleteButton
                        isComplete={isComplete}
                        color='green'
                    />
                </div>
            </div>  
        </div>
    );
};

export default TrainingCardToggle;
