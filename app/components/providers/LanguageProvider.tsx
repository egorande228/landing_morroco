"use client";

import {
    createContext,
    useContext,
    useEffect,
    useMemo,
    useState,
    type ReactNode,
} from "react";
import { getDictionary, getDirection, type Dictionary, type Language } from "@/lib/dictionary";

type LanguageContextValue = {
    language: Language;
    setLanguage: (language: Language) => void;
    dictionary: Dictionary;
    direction: "ltr" | "rtl";
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>(() => {
        if (typeof window === "undefined") {
            return "en";
        }

        const savedLanguage = localStorage.getItem("language") as Language | null;
        return savedLanguage === "en" || savedLanguage === "ar" || savedLanguage === "fr"
            ? savedLanguage
            : "en";
    });

    useEffect(() => {
        localStorage.setItem("language", language);
        document.documentElement.lang = language;
        document.documentElement.dir = getDirection(language);
    }, [language]);

    const value = useMemo(
        () => ({
            language,
            setLanguage,
            dictionary: getDictionary(language),
            direction: getDirection(language),
        }),
        [language]
    );

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);

    if (!context) {
        throw new Error("useLanguage must be used within LanguageProvider");
    }

    return context;
}
