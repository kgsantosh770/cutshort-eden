import {Link} from 'react-router-dom';

interface Props {
    title: string,
    subtitle?: string,
    buttonText?: string,
    nextPage: string,
    children?: React.ReactNode,
}

export default function Form(props: Props) {
    return (
        <div className="mx-auto">
            <p className="text-center text-3xl font-semibold mb-3">{props.title}</p>
            {props.subtitle && <p className="text-center text-gray-400">{props.subtitle}</p>}
            <div className="px-7 mt-10 mx-auto max-w-md">
                {props.children}
                {props.buttonText &&
                    <Link to={props.nextPage}
                        className="rounded-md bg-primary block text-center w-full mt-8 py-3 text-white"
                    >
                        {props.buttonText}
                    </Link>
                }
            </div>
        </div>
    )
}