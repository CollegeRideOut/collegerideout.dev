import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { createContext, useEffect, useState } from 'react'
import { MdOutlineDarkMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
//import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'


const colors_light = {

    background: '#F2E9E4',
    accent: '#C9ADA7',
    text: '#22223B',
    primary: '#9A8C98',
    secondary: '#C9ADA7',
    heapmapBackground: '#2e2e4b',
    heatmap: {
        0: '#dcd6d0',
        1: '#cbbfb7',
        4: '#a99890',
        8: '#a48b81',
        10: '#5e4b44'
    }
}
const colors_dark = {
    background: '#22223B',
    accent: '#C9ADA7',
    text: '#F2E9E4',
    primary: '#4A4E69',
    secondary: '#9A8C98',
    heapmapBackground: '#2e2e4b',
    heatmap: {
        0: '#3a3a5c',
        1: '#66667a',
        4: '#9999aa',
        8: '#cccccc',
        10: '#ffffff'
    }
}

const init_theme: {
    vals: {
        theme: 'light' | 'dark',
        mobile: boolean,
        colors: typeof colors_dark,
    }
    toggleTheme: () => void,
    toggleMobile: () => void

} = {
    vals: {
        theme: 'light',
        mobile: false,
        colors: colors_dark
    },
    toggleTheme: () => { },
    toggleMobile: () => { }
}

export const ThemeContext = createContext(init_theme)
//context
export const Route = createRootRoute({
    component: () => {

        const [theme, setTheme] = useState<{
            theme: 'light' | 'dark',
            mobile: boolean,
            colors: typeof colors_dark,
        }>({ theme: 'dark', mobile: false, colors: colors_dark })
        useEffect(() => {
            let x = localStorage.getItem('theme')
            if (x && x === 'light') {
                setTheme({ theme: 'light', mobile: false, colors: colors_light })
            } else {
                setTheme({ theme: 'dark', mobile: false, colors: colors_dark })
            }
        }, [])

        const toggleTheme = () => {
            console.log(theme.theme)
            if (theme.theme === 'light') {

                setTheme({ ...theme, theme: 'dark', colors: colors_dark })
                localStorage.setItem('theme', 'dark')
            } else {

                setTheme({ ...theme, theme: 'light', colors: colors_light })
                localStorage.setItem('theme', 'light')
            }
        }
        const toggleMobile = () => {
            setTheme(
                { ...theme, mobile: !theme.mobile })
        }

        const linkStyle: React.CSSProperties = { textDecoration: 'none', color: theme.colors.text, fontSize: 20 }
        return (
            <div
                style={{
                    backgroundColor: theme.colors.background,
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    flex: '1 1 auto',
                    textDecoration: 'none', color: theme.colors.text, fontSize: 18,
                }}
            >

                <ThemeContext.Provider value={{ vals: theme, toggleTheme, toggleMobile }}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        color: theme.colors.text,
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        borderBottom: `1px solid ${theme.colors.text}`,
                        padding: 30,
                        paddingLeft: 60,
                        paddingRight: 60,
                    }}>
                        <div
                            style={{ width: 'min-content' }}
                        >
                            <Link to="/" style={linkStyle}>
                                CollegeRideOut
                            </Link>
                        </div>
                        <div style={{
                            display: 'flex',
                            flex: 1,
                            justifyContent: 'center',
                            columnGap: 20,
                            width: 'max-content',
                            textDecoration: 'underline',
                            textUnderlineOffset: 4,
                        }}>

                            <Link to="/" style={{ ...linkStyle, fontSize: 14 }}>
                                HOME
                            </Link>
                            <Link to="/work" style={{ ...linkStyle, fontSize: 14 }}>
                                RESUME
                            </Link>
                        </div>
                        <div onClick={() => { toggleTheme() }}

                            style={{ cursor: 'pointer', width: 'min-content' }}
                        >
                            {theme.theme === 'dark' ? <MdDarkMode size={30} /> : <MdOutlineDarkMode size={30} />}
                        </div>
                    </div>
                    <div

                        style={{
                            height: '100%',
                            width: '100%',
                            flexDirection: 'column',
                            display: 'flex',
                            flex: '1 1 auto',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',

                                height: '100%',
                                flex: '1 1 auto',
                                width: '70%',
                                borderLeft: `1px solid ${theme.colors.text}`,
                                borderRight: `1px solid ${theme.colors.text}`,
                            }}
                        >
                            <Outlet />
                        </div>
                    </div>
                </ThemeContext.Provider>
            </div>
        )
    },
})
