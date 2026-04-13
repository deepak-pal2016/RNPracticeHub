/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
  FC,
  Children,
} from 'react';


type themetype = 'dark' | 'light'

type themeprops = {
theme:themetype;
themetoggle:() => void
}

export const ThemeContext = createContext<themeprops>({
    theme:'light',
    themetoggle:()=> {
    },
})

const ThemeProvider = ({children}:{children:ReactNode}) => {
    const [theme,setTheme] = useState<themetype>('light');

    const themetoggle = () => {
        setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
    }

    return(
        <ThemeContext.Provider value={{theme,themetoggle}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider