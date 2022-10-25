import TickIcon from '../assets/images/tick.png';

export default function Success() {
    return (
        <div className='w-max mx-auto'>
            <div className="rounded-full bg-primary w-max p-3 mx-auto mb-9">
                <img src={TickIcon} alt="tick" />
            </div>
            <p className="text-center text-3xl font-semibold mb-3">Congratulations, Eren!</p>
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
