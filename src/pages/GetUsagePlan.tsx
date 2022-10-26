import { useEffect, useState, FormEvent } from "react";
import { useNavigate } from 'react-router-dom';

import Card from "../components/Card/Card";
import Form from "../components/FormHOC/Form";
import SinglePersonIcon from "../assets/images/person.png";
import TeamIcon from "../assets/images/team.png";
import { useOnboardContext } from "../context/OnboardContext";

export default function GetUsageType() {
  const { setUserInfo, onboardStage, setOnboardStage } = useOnboardContext();

  const [activeCardId, setActiveCardId] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    if(onboardStage < 2)
      navigate('/workspaceinfo');
    else
      setOnboardStage(3);
  }, [])

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate('/success');
  }

  useEffect(() => {
    // by default set to single user plan
    setUserInfo(prevData => {
      return {
        ...prevData,
        workspacePlan: "For myself"
      }
    })

  }, [activeCardId])

  const onCardClick = (event: FormEvent<HTMLButtonElement> ,cardId: number, workspacePlan: string) => {
    event.preventDefault();
    setActiveCardId(cardId);
    setUserInfo(prevData => {
      return {
        ...prevData,
        workspacePlan: workspacePlan
      }
    })
  }

  const CardDetails = [
    {
      icon: SinglePersonIcon,
      title: "For myself",
      description: "Write better. Think more clearly. Stay organized.",
    },
    {
      icon: TeamIcon,
      title: "With my team",
      description: "Wikis, docs, tasks & projects, all in one place.",
    }
  ]

  const cards = CardDetails.map((card, index) =>
    <Card
      key={index}
      icon={card.icon}
      title={card.title}
      description={card.description}
      active={activeCardId === index ? true : false}
      onClick={(event)=>onCardClick(event, index, card.title)}
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
