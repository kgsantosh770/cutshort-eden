import Logo from '../assets/images/logo.png';

export default function LogoTitle() {
    return (
        <div className='flex justify-center items-end mr-2'>
            <img src={Logo} alt="logo" className='inline w-8 aspect-square'/>
            <span className='text-2xl font-semibold leading-snug'>Eden</span>
        </div>
    )
}
