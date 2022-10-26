interface ICardProps {
    icon?: string,
    title: string,
    description?: string,
    active: boolean,
    onClick: React.MouseEventHandler<HTMLButtonElement>,
}

Card.defaultProps = {
    active: false,
}

export default function Card(props: ICardProps) {
    return (
        <button
            data-testid="cardButton"
            className={`border rounded-md mr-3 lg:w-[11.5rem] py-4 px-3 lg:px-4 text-left ${props.active ? 'border-primary' : 'border-gray-200 grayscale'}`}
            onClick={props.onClick}
        >
            {props.icon && <img src={props.icon} alt="" className="mb-4" />}
            <div className="mb-3 font-semibold">{props.title}</div>
            {props.description && <div className="text-gray-500 mb-2">{props.description}</div>}
        </button>
    )
}