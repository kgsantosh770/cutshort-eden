import { useEffect } from 'react';
import TickIcon from '../assets/images/tick.png';
import { useOnboardContext } from '../context/OnboardContext';

export default function Success() {
    const { userInfo, setOnboardStage } = useOnboardContext();

    useEffect(() => {
        setOnboardStage(4);
    }, [])

    return (
        <div className='w-max mx-auto'>
            <div className="rounded-full bg-primary w-max p-3 mx-auto mb-9 mt-20">
                <img src={TickIcon} alt="tick" />
            </div>
            <p className="text-center text-3xl font-semibold mb-3">Congratulations, {userInfo.displayname}!</p>
            <p className="text-center text-gray-400">
                You have completed onboarding, you can start using the Eden!
            </p>
            <button
                className="rounded-md bg-primary w-9/12 block mx-auto mt-8 py-3 text-white"
            >
                Launch Eden
            </button>
        </div>
    )
}
