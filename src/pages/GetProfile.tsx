import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

import Form from "../components/FormHOC/Form";
import InputField from "../components/InputField/InputField";
import { useOnboardContext } from "../context/OnboardContext";

export default function GetProfile() {
    const { userInfo, handleInputChange, setOnboardStage} = useOnboardContext();

    useEffect(() => {
        setOnboardStage(1);
    }, [])

    const navigate = useNavigate();

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const fullName = userInfo.fullname;
        const displayName = userInfo.displayname;
        setFullNameError(undefined);
        setDisplayNameError(undefined);

        if (fullName === '' || fullName === undefined || fullName === null){
            setFullNameError('Full name cannot be empty');
        }
        else if (displayName === '' || displayName === undefined || displayName === null){
            setDisplayNameError('Display name cannot be empty');
        } 
        else {
            navigate('/workspaceinfo');
        }
    }

    const [fullNameError, setFullNameError] = useState<string | undefined>(undefined);
    const [displayNameError, setDisplayNameError] = useState<string | undefined>(undefined);

    return (
        <Form
            title="Welcome! First things first..."
            subtitle="You can always change them later."
            buttonText="Create Workspace"
            handleSubmit={handleSubmit}
        >
            <InputField
                title="Full Name"
                name="fullname"
                placeholder="Steve Jobs"
                value={userInfo.fullname}
                onChange={handleInputChange}
                errorText={fullNameError}
            />
            <InputField
                title="Display Name"
                name="displayname"
                placeholder="Steve"
                value={userInfo.displayname}
                onChange={handleInputChange}
                errorText={displayNameError}
            />
        </Form>
    )
}
