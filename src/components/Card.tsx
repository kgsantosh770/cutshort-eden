interface CardProps {
    icon?: string,
    title: string,
    description?: string,
    active: boolean,
}

export default function Card(props: CardProps) {
    return (
        <div className="border border-gray-200 rounded-md w-[11.5rem] py-4 px-4">
            <img src={props.icon} alt="" className="mb-4"/>
            <div className="mb-3 font-semibold">{props.title}</div>
            {props.description && <div className="text-gray-500 mb-2">{props.description}</div>}
        </div>
    )
}

Card.defaultProps = {
    title: 'title',
    active: false,
}