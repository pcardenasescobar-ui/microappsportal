"use client"

import { createContext, useContext } from "react"

const LanguageContext = createContext({
  language: "en",
  isHydrated: true,
})

export function LanguageProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <LanguageContext.Provider
      value={{
        language: "en",
        isHydrated: true,
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
