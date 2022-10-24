interface Props {
    title: string,
    subtitle?: string,
    buttonText?: string,
    children?: React.ReactNode,
}

export default function Form(props: Props) {
    return (
        <div className="w-max mx-auto">
            <p className="text-center text-3xl font-semibold mb-3">{props.title}</p>
            {props.subtitle && <p className="text-center text-gray-400">{props.subtitle}</p>}
            <div className="px-5 mt-12">
                {props.children}
                {props.buttonText &&
                    <button
                        className="rounded-md bg-primary w-full mt-6 py-3 text-white"
                    >
                        {props.buttonText}
                    </button>
                }
            </div>
        </div>
    )
}