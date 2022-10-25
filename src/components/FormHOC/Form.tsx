interface Props {
    title: string,
    subtitle?: string,
    buttonText?: string,
    children?: React.ReactNode,
}

export default function Form(props: Props) {
    return (
        <div className="mx-auto">
            <p className="text-center text-3xl font-semibold mb-3">{props.title}</p>
            {props.subtitle && <p className="text-center text-gray-400">{props.subtitle}</p>}
            <div className="px-7 mt-12 mx-auto max-w-md">
                {props.children}
                {props.buttonText &&
                    <button
                        className="rounded-md bg-primary w-full mt-8 py-3 text-white"
                    >
                        {props.buttonText}
                    </button>
                }
            </div>
        </div>
    )
}