import { ReactElement, createContext, useState } from "react";

interface Props {
    children: ReactElement;
}

interface IResultsPageTitle {
    resultsPageTitle: string | null;
    setResultsPageTitle: React.Dispatch<React.SetStateAction<string | null>>;
}

export const ResultsPageTitleContext = createContext<IResultsPageTitle>({
    resultsPageTitle: "",
    setResultsPageTitle: () => {},
});

const ResultsPageTitleContextProvider = ({ children }: Props) => {
    const [resultsPageTitle, setResultsPageTitle] = useState<string | null>(
        null
    );

    const contextValue: IResultsPageTitle = {
        resultsPageTitle,
        setResultsPageTitle,
    };

    return (
        <ResultsPageTitleContext.Provider value={contextValue}>
            {children}
        </ResultsPageTitleContext.Provider>
    );
};

export default ResultsPageTitleContextProvider;
