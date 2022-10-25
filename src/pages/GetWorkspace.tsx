import Form from "../components/FormHOC/Form";
import InputField from "../components/InputField/InputField";

export default function GetWorkspace() {
  return (
    <Form
            title="Let's set up a home for all your work"
            subtitle="You can always create another workspace later."
            buttonText="Create Workspace"
            nextPage="/planinfo"
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
