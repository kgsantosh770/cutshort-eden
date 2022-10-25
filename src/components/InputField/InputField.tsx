interface Props {
    title: string,
    type?: string,
    placeholder?: string,
    optional?: boolean,
    preText?: string,
}

export default function InputField(props: Props) {
    return (
        <>
            <div className="mt-7">
                <span className="font-medium">{props.title}</span>
                {props.optional && <span className="text-gray-400 ml-1.5 font-light">(optional)</span>}
            </div>
            <div className="flex">
                {
                    props.preText &&
                    <span className="bg-gray-100 py-3 px-4 rounded-l-md mt-3 text-gray-400 border border-gray-200">
                        {props.preText}
                    </span>
                }
                <input
                    type="text"
                    placeholder={props.placeholder}
                    className=
                    {`w-full inline mt-3 border border-gray-200 outline-none py-3 px-4 placeholder:text-gray-400
                    ${props.optional ? 'rounded-r-md border-l-0' : 'rounded-md'}`}
                    required={props.optional ? false : true}
                />
            </div>
        </>
    )
}

InputField.defaultProps = {
    type: 'text',
    optional: false,
}