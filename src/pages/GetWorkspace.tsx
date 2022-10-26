import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

import Form from "../components/FormHOC/Form";
import InputField from "../components/InputField/InputField";
import { useOnboardContext } from "../context/OnboardContext";

export default function GetWorkspace() {
  const { userInfo, handleInputChange, onboardStage, setOnboardStage } = useOnboardContext();
  const navigate = useNavigate();

  useEffect(() => {
    if(onboardStage < 1)
      navigate('/profileinfo');
    else
      setOnboardStage(2);
  }, [])

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const workspace = userInfo.workspace;
    setWorkspaceError(undefined);

    if (workspace === '' || workspace === null) {
      setWorkspaceError('Workspace name cannot be empty');
    }
    else {
      navigate('/planinfo');
    }
  }

  const [workspaceError, setWorkspaceError] = useState<string | undefined>(undefined);

  return (
    <Form
      title="Let's set up a home for all your work"
      subtitle="You can always create another workspace later."
      buttonText="Create Workspace"
      handleSubmit={handleSubmit}
    >
      <InputField
        title="Workspace Name"
        name="workspace"
        value={userInfo.workspace}
        placeholder="Eden"
        onChange={handleInputChange}
        errorText={workspaceError}
      />
      <InputField
        title="Workspace URL"
        name="workspaceUrl"
        value={userInfo.workspaceUrl}
        optional={true}
        placeholder="Example"
        preText="www.eden.com/"
        onChange={handleInputChange}
      />
    </Form>
  )
}
