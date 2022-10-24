import Logo from '../assets/images/logo.png';

export default function LogoTitle() {
    return (
        <div className='flex justify-center items-center'>
            <img src={Logo} alt="logo" className='inline w-8 aspect-square mr-0.5'/>
            <span className='text-xl font-semibold'>Eden</span>
        </div>
    )
}
