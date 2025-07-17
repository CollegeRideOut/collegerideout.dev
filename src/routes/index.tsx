import { createFileRoute } from '@tanstack/react-router'
import { ThemeContext } from './__root'
import { useContext } from 'react'
import GitHubCalendar from 'react-github-calendar'

export const Route = createFileRoute('/')({
    component: Index,
})

const github_profile_pic = 'https://avatars.githubusercontent.com/u/32503905?v=4&size=64'

function Index() {
    const { vals: theme } = useContext(ThemeContext);
    return (
        <div style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            flex: '1 1 auto',
        }}>
            <div
                style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center'
                }}
            >
                <div
                    style={{
                        backgroundColor: theme.colors.primary,
                        borderRadius: 25,
                        width: '70%',
                    }}
                >
                    <div style={{
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            padding: 20
                    }}>
                        <div style={{
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'row',
                            columnGap: 30,
                        }}>
                            <div style={{
                            }}>
                                <img
                                    src={github_profile_pic}
                                    style={{
                                        height: 200,
                                        width: 200,
                                        borderRadius: '50%'
                                    }}
                                />
                            </div>
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    color: theme.colors.text,
                                }}>
                                <p style={{ fontSize: 50 }}>Full-Stack Developer</p>
                            </div>

                        </div>

                            <GitHubCalendar username="CollegeRideOut" />
                    </div>
                </div>
            </div>
        </div>
    )
}
