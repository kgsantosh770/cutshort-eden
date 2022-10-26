import { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
    title: string,
    subtitle?: string,
    buttonText?: string,
    children?: React.ReactNode,
    handleSubmit: (event: FormEvent<HTMLFormElement>)=>void,
}

export default function Form(props: Props) {
    return (
        <form className="mx-auto" onSubmit={props.handleSubmit}>
            <p className="text-center text-3xl font-semibold mb-3">{props.title}</p>
            {props.subtitle && <p className="text-center text-gray-400">{props.subtitle}</p>}
            <div className="lg:px-7 mt-10 mx-auto max-w-md">
                {props.children}
                {props.buttonText &&
                    <button
                        data-testid="formButton"
                        type="submit"
                        className="rounded-md bg-primary w-full mt-8 py-3 text-white"
                    >
                        {props.buttonText}
                    </button>
                }
            </div>
        </form>
    )
}