import './ProgressBar.css';

interface Props {
    stageCount: number,
    currentStage: number,
}

export default function ProgressBar(props: Props) {

    const stages = []

    for (let index = 1; index <= props.stageCount; index++) {
        const element =
            <div
                key={index}
                className={`progress-bar relative rounded-full w-10 aspect-square border 
                border-gray-300 ml-12 first:ml-0 
                inline-flex justify-center items-center
                ${index <= props.currentStage ? 'bg-primary border-0 text-white' : ''}`}
            >
                <p
                    className={`after:w-[1.5rem] lg:after:w-[1.6rem] before:w-[1.51rem] lg:before:w-[1.6rem] before:right-full after:left-full
                    ${index <= props.currentStage ? 
                        'after:bg-primary before:bg-primary' : 
                        'after:bg-gray-300 before:bg-gray-300'
                    }`}
                >
                    {index}
                </p>
            </div>;
        stages.push(element)
    };

    return (
        <div className="w-max mx-auto my-10 relative">
            {stages}
        </div>
    )
}
