import { ITrainingCardToggle } from './types';
import { CompleteButton } from '../CompleteButton';
const TrainingCardToggle: React.FC<ITrainingCardToggle> = ({
    label,
    isComplete,
}) => {
    return (
        <div data-testid="training-card-toggle" className='bg-white box-content rounded-md' data-label={label} data-is-complete={isComplete}>
            <div className='flex'>
                <div className='flex-1  mx-4 my-4'>
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
