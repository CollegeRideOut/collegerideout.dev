import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { createContext, useState } from 'react'
//import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
//
//


const colors_light = {
    background: '#22223B',
    accent: '#C9ADA7',
    text: '#F2E9E4',
    primary: '#4A4E69',
    secondary: '#9A8C98',
}
const colors_dark = {
    background: '#22223B',
    accent: '#C9ADA7',
    text: '#F2E9E4',
    primary: '#4A4E69',
    secondary: '#9A8C98',
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

        const toggleTheme = () => {
            if (theme.theme === 'light') {
                setTheme({ ...theme, theme: 'dark', colors: colors_dark })
            } else {
                setTheme({ ...theme, theme: 'light', colors: colors_light })
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
                    flex: '1 1 auto'
                }}
            >

                <ThemeContext.Provider value={{ vals: theme, toggleTheme, toggleMobile }}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        color: theme.colors.text,
                        background: theme.colors.primary,
                        justifyContent: 'space-between',
                        padding: 30,
                        paddingLeft: 60,
                        paddingRight: 60,
                        marginBottom: 40,
                    }}>
                        <div>
                            <Link to="/" style={linkStyle}>
                                cro.dev
                            </Link>
                        </div>
                        <div style={{
                            display: 'flex',
                            columnGap: 20
                        }}>
                            <Link to="/stats" style={linkStyle}>
                                Stats
                            </Link>
                            <Link to="/work" style={linkStyle}>
                                Work
                            </Link>
                        </div>
                    </div>
                    <Outlet />
                </ThemeContext.Provider>
            </div>
        )
    },
})
