import { createContext, useContext, useState, ReactNode, FormEvent } from "react"

import SinglePersonIcon from "../assets/images/person.png";
import TeamIcon from "../assets/images/team.png";

//interface for workspace usage type
interface IWorkspacePlan {
    id: number,
    planName: string,
    icon: string,
    description: string,
}

//interface for the user selected information state
interface IUserInfoType {
    fullname?: string,
    displayname?: string,
    workspace?: string,
    workspaceUrl?: string,
    workspacePlan?: IWorkspacePlan,
}

//interface for the onboard context
interface IContextValueType {
    userInfo: IUserInfoType,
    setUserInfo: React.Dispatch<React.SetStateAction<IUserInfoType>>,
    handleInputChange: (event: FormEvent<HTMLInputElement>) => void,
    onboardStage: number,
    setOnboardStage: React.Dispatch<React.SetStateAction<number>>,
}

//prop interface for the children inside onboard context provider
interface IOnboardContextProps {
    children: ReactNode,
}

//workspace types
const WorkspacePlans: IWorkspacePlan[] = [
    {
        id: 0,
        planName: 'For myself',
        icon: SinglePersonIcon,
        description: "Write better. Think more clearly. Stay organized.",
    },
    {
        id: 1,
        planName: "With my team",
        icon: TeamIcon,
        description: "Wikis, docs, tasks & projects, all in one place.",
    }
]

const OnboardContext = createContext<IContextValueType>({} as IContextValueType);

const OnboardContexProvider = ({ children }: IOnboardContextProps) => {
    const initialState: IUserInfoType = {
        fullname: '',
        displayname: '',
        workspace: '',
        workspaceUrl: '',
        workspacePlan: undefined,
    }

    const [userInfo, setUserInfo] = useState(initialState);
    const [onboardStage, setOnboardStage] = useState<number>(0);

    //function to change the user state
    //invoked when the input fields use this function.
    const handleInputChange = (event: FormEvent<HTMLInputElement>) => {
        const { name, value } = event.target as HTMLInputElement;
        setUserInfo(
            (prevData) => {
                return {
                    ...prevData,
                    [name]: value,
                }
            }
        );
    };

    return (
        <OnboardContext.Provider value={{ userInfo, setUserInfo, handleInputChange, onboardStage, setOnboardStage }}>
            {children}
        </OnboardContext.Provider>
    )
}

const useOnboardContext = () => useContext(OnboardContext);
export { OnboardContexProvider, useOnboardContext, WorkspacePlans };