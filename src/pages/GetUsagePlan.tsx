import { useEffect, useState, FormEvent } from "react";
import { useNavigate } from 'react-router-dom';

import Card from "../components/Card/Card";
import Form from "../components/FormHOC/Form";
import { useOnboardContext, WorkspacePlans } from "../context/OnboardContext";

export default function GetUsageType() {
  const { userInfo, setUserInfo, onboardStage, setOnboardStage } = useOnboardContext();
  const [activeWorkspaceId, setActiveWorkspaceId] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if(onboardStage < 2)
      navigate('/workspaceinfo');
    else{
      setOnboardStage(3);
      const workspacePlan = userInfo.workspacePlan;
      if(workspacePlan !== undefined && workspacePlan.id !== undefined){
        setActiveWorkspaceId(workspacePlan?.id);
      }
    }
  }, [])

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate('/success');
  }

  const onCardClick = (event: FormEvent<HTMLButtonElement>, workspaceId: number) => {
    event.preventDefault();
    setActiveWorkspaceId(workspaceId);
    const workspacePlan = WorkspacePlans.find(workspace => workspace.id === workspaceId);
    setUserInfo(prevData => {
      return {
        ...prevData,
        workspacePlan: workspacePlan,
      }
    })
  }

  // const CardDetails = [
  //   {
  //     icon: SinglePersonIcon,
  //     title: "For myself",
  //     description: "Write better. Think more clearly. Stay organized.",
  //   },
  //   {
  //     icon: TeamIcon,
  //     title: "With my team",
  //     description: "Wikis, docs, tasks & projects, all in one place.",
  //   }
  // ]

  const cards = WorkspacePlans.map((workspace) =>
    <Card
      key={workspace.id}
      icon={workspace.icon}
      title={workspace.planName}
      description={workspace.description}
      active={activeWorkspaceId === workspace.id ? true : false}
      onClick={(event)=>onCardClick(event, workspace.id)}
    />
  )

  return (
    <Form
      title="How are you planning to use Eden?"
      subtitle="We'll streamline your setup experience accordingly."
      buttonText="Create Workspace"
      handleSubmit={handleSubmit}
    >
      <div className="flex justify-between">
        {cards}
      </div>
    </Form>
  )
}
