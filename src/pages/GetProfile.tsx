import { FormEvent } from "react";
import Form from "../components/FormHOC/Form";
import InputField from "../components/InputField/InputField";
import { useOnboardContext } from "../context/OnboardContext";

export default function GetProfile() {
    const { userInfo, handleInputChange } = useOnboardContext();

    return (
        <Form
            title="Welcome! First things first..."
            subtitle="You can always change them later."
            buttonText="Create Workspace"
            nextPage="/workspaceinfo"
        >
            <InputField
                title="Full Name"
                name="fullname"
                placeholder="Steve Jobs"
                value={userInfo.fullname}
                onChange={handleInputChange}
            />
            <InputField
                title="Display Name"
                name="displayname"
                placeholder="Steve"
                value={userInfo.displayname}
                onChange={handleInputChange}
            />
        </Form>
    )
}
