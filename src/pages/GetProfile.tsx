import Form from "../components/FormHOC/Form";
import InputField from "../components/InputField/InputField";

export default function GetProfile() {
    return (
        <Form
            title="Welcome! First things first..."
            subtitle="You can always change them later."
            buttonText="Create Workspace"
        >
            <InputField title="Workspace Name" placeholder="Eden" />
            <InputField
                title="Workspace URL"
                optional={true}
                placeholder="Example"
                preText="www.eden.com/" />
        </Form>
    )
}
