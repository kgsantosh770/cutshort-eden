interface ILogoTitleProps {
    icon?: string,
    title: string,
}

export default function LogoTitle(props: ILogoTitleProps) {
    return (
        <div className='flex justify-center items-end mr-2'>
            {props.icon && <img src={props.icon} alt="logo" className='inline w-8 aspect-square mr-0.5'/>}
            <span className='text-2xl font-semibold leading-[1.1]'>{props.title}</span>
        </div>
    )
}
