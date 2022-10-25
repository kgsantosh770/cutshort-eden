import Form from "../components/FormHOC/Form";
import InputField from "../components/InputField/InputField";

export default function GetProfile() {
    return (
        <Form
            title="Welcome! First things first..."
            subtitle="You can always change them later."
            buttonText="Create Workspace"
            nextPage="/workspaceinfo"
        >
            <InputField title="Full Name" placeholder="Steve Jobs" />
            <InputField title="Display Name" placeholder="Steve" />
        </Form>
    )
}
