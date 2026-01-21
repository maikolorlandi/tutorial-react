import { createContext, useContext, useState } from "react";
import useFetch from "./utils/useFetch";

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [query, setQuery] = useState("negroni");
    const [scrollPosition, setScrollPosition] = useState(0);
    const { data, loading, isError, count } = useFetch(`s=${query}`);
    const openSidebar = () => {
        setIsSidebarOpen(true);
    }
    const closeSidebar = () => {
        setIsSidebarOpen(false);
    }

    const searchCocktail = (input) => {
        setQuery(input);
    }

    //Aggiorno lo state con la posizione in cui ho cliccato sulla ricetta
    const getScrollPosition = (value) => {
        setScrollPosition(value);
    };

    //Imposto state dello scroll position a 0
    const deleteScrollPosition = () => {
        setScrollPosition(0);
    };

    return <AppContext.Provider value={{
        isSidebarOpen,
        openSidebar,
        closeSidebar,
        searchCocktail,
        getScrollPosition,
        deleteScrollPosition,
        scrollPosition,
        query,
        data,
        loading,
        isError,
        count
    }}>
        {children}
    </AppContext.Provider>
}

const useGlobalContext = () => {
    return useContext(AppContext);
}

export { useGlobalContext, AppProvider };
