import { createFileRoute } from '@tanstack/react-router'
import { ThemeContext } from './__root'
import { useContext } from 'react'
import { Heatmap } from '../component/heatmap'

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
                    justifyContent: 'center',
                    textWrap: 'wrap',
                    whiteSpace: 'pre-line',

                    wordWrap: 'break-word',
                    wordBreak: 'break-word'
                }}
            >
                <div
                    style={{
                        //backgroundColor: theme.colors.primary,
                        borderRadius: 25,
                        width: '70%',

                    }}
                >
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        //padding: 40,
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
                                    flexDirection: 'column',
                                    color: theme.colors.text,
                                    width: '100%',
                                    textWrap: 'wrap',
                                    wordWrap: 'break-word',
                                    wordBreak: 'break-word',
                                    height: '100%',
                                    overflowWrap: 'break-word'

                                }}>
                                <p style={{ fontSize: 50 }}>Full-Stack Developer</p>
                                <p style={{
                                    textWrap: 'wrap',

                                    wordWrap: 'break-word',
                                    wordBreak: 'break-word'
                                }}>

                                    With a strong background in software engineering, technical leadership, and product innovation, I excel at turning complex challenges into scalable, high-impact solutionssssalways staying ahead by leveraging the latest technologies and best practices.
                                </p>
                            </div>

                        </div>
                        <Heatmap />

                    </div>
                </div>
            </div>
        </div>
    )
}
