import { createContext, useState, ReactElement } from "react";

interface Props {
    children: ReactElement;
}

interface ILoadingContext {
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LoadingContext = createContext<ILoadingContext>({
    loading: true,
    setLoading: () => {
        return;
    },
});

const LoadingContextProvider = ({ children }: Props) => {
    const [loading, setLoading] = useState<boolean>(true);

    const loadingContextValue: ILoadingContext = {
        loading,
        setLoading,
    };

    return (
        <LoadingContext.Provider value={loadingContextValue}>
            {children}
        </LoadingContext.Provider>
    );
};

export default LoadingContextProvider;
