import { createContext, useContext, useEffect, useState, ReactNode, FormEvent } from "react"

interface UserInfoType {
    fullname?: string,
    displayname?: string,
    workspace?: string,
    workspaceUrl?: string,
    workspacePlan?: string,
}

interface ContextValueType {
    userInfo: UserInfoType,
    handleInputChange: (event: FormEvent<HTMLInputElement>) => void,
    onboardStage: number,
    setOnboardStage: React.Dispatch<React.SetStateAction<number>>,
}

interface OnboardContextProps {
    children: ReactNode,
}

const OnboardContext = createContext<ContextValueType>(undefined!);

const OnboardContexProvider = ({ children }: OnboardContextProps) => {
    
    const initialState : UserInfoType = {
        fullname: undefined,
        displayname: undefined,
        workspace: undefined,
        workspaceUrl: undefined,
        workspacePlan: undefined,
    }

    const [userInfo, setUserInfo] = useState(initialState);
    const [onboardStage, setOnboardStage] = useState<number>(1);

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
        <OnboardContext.Provider value={{userInfo, handleInputChange, onboardStage, setOnboardStage}}>
            {children}
        </OnboardContext.Provider>
    )
}

const useOnboardContext = () => useContext(OnboardContext);

export { OnboardContexProvider, useOnboardContext };