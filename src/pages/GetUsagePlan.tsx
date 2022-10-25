import Card from "../components/Card";
import Form from "../components/FormHOC/Form";
import SinglePersonIcon from "../assets/images/person.png";
import TeamIcon from "../assets/images/team.png";
import { useState } from "react";

export default function GetUsageType() {
  const [activeCardId, setActiveCardId] = useState(0);

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
    onClick={()=>setActiveCardId(index)}
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
