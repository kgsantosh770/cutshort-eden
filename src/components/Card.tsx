interface CardProps {
    icon?: string,
    title: string,
    description?: string,
    active: boolean,
    onClick: React.MouseEventHandler<HTMLButtonElement>,
}

export default function Card(props: CardProps) {
    return (
        <button 
            className={`border rounded-md w-[11.5rem] py-4 px-4 text-left ${props.active ? 'border-primary' : 'border-gray-200 grayscale'}`}
            onClick={props.onClick}
        >
            <img src={props.icon} alt="" className="mb-4"/>
            <div className="mb-3 font-semibold">{props.title}</div>
            {props.description && <div className="text-gray-500 mb-2">{props.description}</div>}
        </button>
    )
}

Card.defaultProps = {
    title: 'title',
    active: false,
}