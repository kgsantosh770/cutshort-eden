import { useEffect } from "react";
import Form from "../components/FormHOC/Form";
import InputField from "../components/InputField/InputField";
import { useOnboardContext } from "../context/OnboardContext";

export default function GetWorkspace() {
  const { userInfo, handleInputChange, setOnboardStage } = useOnboardContext();

  useEffect(() => {
      setOnboardStage(2);
  }, [])
  

  return (
    <Form
      title="Let's set up a home for all your work"
      subtitle="You can always create another workspace later."
      buttonText="Create Workspace"
      nextPage="/planinfo"
    >
      <InputField
        title="Workspace Name"
        name="workspace"
        value={userInfo.workspace}
        placeholder="Eden"
        onChange={handleInputChange}
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
