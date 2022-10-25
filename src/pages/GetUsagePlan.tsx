import Card from "../components/Card";
import Form from "../components/FormHOC/Form";
import SinglePersonIcon from "../assets/images/person.png";
import TeamIcon from "../assets/images/team.png";
import { useEffect, useState } from "react";
import { useOnboardContext } from "../context/OnboardContext";

export default function GetUsageType() {
  const { setUserInfo, setOnboardStage } = useOnboardContext();

  const [activeCardId, setActiveCardId] = useState(0);

  useEffect(() => {
    setUserInfo(prevData => {
      return {
        ...prevData,
        workspacePlan: 'For myself'
      }
    })
    setOnboardStage(3);
  }, [])

  const onCardClick = (cardId: number, workspacePlan: string) => {
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
      onClick={() => onCardClick(index, card.title)}
    />
  )

  return (
    <Form
      title="How are you planning to use Eden?"
      subtitle="We'll streamline your setup experience accordingly."
      buttonText="Create Workspace"
      nextPage="/success"
    >
      <div className="flex justify-between">
        {cards}
      </div>
    </Form>
  )
}
