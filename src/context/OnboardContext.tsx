import { createContext, useContext, useState, ReactNode, FormEvent } from "react"

import SinglePersonIcon from "../assets/images/person.png";
import TeamIcon from "../assets/images/team.png";

interface IWorkspacePlan {
    id: number,
    planName: string,
    icon: string,
    description: string,
}

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

interface UserInfoType {
    fullname?: string,
    displayname?: string,
    workspace?: string,
    workspaceUrl?: string,
    workspacePlan?: IWorkspacePlan,
}

interface ContextValueType {
    userInfo: UserInfoType,
    setUserInfo: React.Dispatch<React.SetStateAction<UserInfoType>>,
    handleInputChange: (event: FormEvent<HTMLInputElement>) => void,
    onboardStage: number,
    setOnboardStage: React.Dispatch<React.SetStateAction<number>>,
}

interface OnboardContextProps {
    children: ReactNode,
}

const OnboardContext = createContext<ContextValueType>({} as ContextValueType);

const OnboardContexProvider = ({ children }: OnboardContextProps) => {

    const initialState: UserInfoType = {
        fullname: '',
        displayname: '',
        workspace: '',
        workspaceUrl: '',
        workspacePlan: undefined,
    }

    const [userInfo, setUserInfo] = useState(initialState);
    const [onboardStage, setOnboardStage] = useState<number>(0);

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