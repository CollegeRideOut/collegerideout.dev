import { createFileRoute } from '@tanstack/react-router'
import { ThemeContext } from './__root'
import { useContext, useEffect, useState } from 'react'
//import { Heatmap } from '../component/heatmap'
import HeatMap from '@uiw/react-heat-map';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { useMediaQuery } from 'react-responsive';
export const Route = createFileRoute('/')({
    component: Index,
})


const user = 'CollegeRideOut'
const query = `
{ 
    matchedUser(username: "CollegeRideOut") {
        username

        submissionCalendar
        submitStats: submitStatsGlobal {
            acSubmissionNum {
                difficulty
                count
                submissions
            }
        }
    }
}
`

const iconSize = 50
const allLinks = [
    { link: 'https://leetcode.com/u/CollegeRideOut/', alt: 'leetcode', icon: <SiLeetcode size={iconSize} /> },
    { link: 'https://github.com/CollegeRideOut', alt: 'github', icon: <FaGithub size={iconSize} /> },
    { link: 'https://www.linkedin.com/in/manuelopez1/t', alt: 'linkedin', icon: <FaLinkedin size={iconSize} /> },
]


function Index() {
    const { vals: theme } = useContext(ThemeContext);
    const [leetData, setLeetData] = useState<any>({
        difficult: [
            { difficulty: 'All', count: 0 },
            { difficulty: 'Easy', count: 100 },
            { difficulty: 'Medium', count: 54 },
            { difficulty: 'Hard', count: 6 },
        ],
        submissionCalendar: []
    })
    const [githubData, setGithubData] = useState<any>(null)

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isMobile = useMediaQuery({ query: '(max-width: 500px)' })
    useEffect(() => { console.log(isMobile) })

    useEffect(() => {
        async function getData() {

            const leetdata = await fetch('/api/leetcode', {
                method: 'POST',
                headers: {
                    'Content-Type':
                        'application/json',
                    'Referer': 'https://leetcode.com',
                },
                body: JSON.stringify({
                    query: query,
                }),
            })

            const githubdata = await fetch(`https://github-contributions-api.jogruber.de/v4/${user}?`,
                {
                    method: 'GET',
                    headers: {
                        'Content-Type':
                            'application/json',
                    }
                }
            )
            const githubJsonData = await githubdata.json();
            const leetJsonData = await leetdata.json()

            githubJsonData.contributions = githubJsonData.contributions.map((g: any) => {
                return { date: new Date(g.date).toLocaleDateString(), count: g.count }

            }).filter((g: any) => { return g.count > 0 })

            setGithubData(githubJsonData)
            leetJsonData.data.matchedUser.submissionCalendar = JSON.parse(leetJsonData.data.matchedUser.submissionCalendar)
            leetJsonData.data.matchedUser.submissionCalendar = Object.entries(leetJsonData.data.matchedUser.submissionCalendar).map((sub: any) => {

                return { date: new Date(sub[0] * 1000).toLocaleDateString(), count: sub[1] }
            })
            setLeetData({ difficult: leetJsonData.data.matchedUser.submitStats.acSubmissionNum, submissionCalendar: leetJsonData.data.matchedUser.submissionCalendar })

        }
        getData()


    }, [])
    return (
        <div style={{
            marginTop: 40,
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
                        //borderLeft: `1px solid ${theme.colors.text}`,

                        //width: '70%',

                    }}
                >
                    <div style={{
                        display: 'flex',

                        rowGap: 40,
                        flexDirection: 'column',
                        //padding: 40,
                    }}>
                        <div style={{
                            width: '100%',

                            display: 'flex',
                            flexDirection: isTabletOrMobile ? 'column' : 'row',
                            alignItems: 'center',
                            columnGap: 60,
                        }}>
                            <div style={{
                            }}>
                                <img
                                    src={'/profile.png'}
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

                                    rowGap: 20,
                                    flexDirection: 'column',
                                    color: theme.colors.text,
                                    height: '100%',
                                    overflowWrap: 'break-word',

                                    alignItems: 'center'
                                }}>
                                <p style={{ fontSize: isTabletOrMobile ? '10vw' : 60, fontWeight: 'bold' }}>Full-Stack Developer</p>
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    width: '70%'

                                }}>
                                    {allLinks.map((l, idx) => {
                                        return <a
                                            key={`a-${idx}`}
                                            style={{ color: 'inherit' }}
                                            href={l.link}
                                            target="_blank"
                                        >{l.icon}</a>
                                    })}

                                </div>
                            </div>

                        </div>
                        <div style={{ width: '100%' }}>


                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    rowGap: 20,
                                    width: '100%'


                                    //border: `1px solid ${theme.colors.text}`
                                }}
                            >

                                <div

                                    style={{
                                        display: 'flex',
                                        width: '100%',
                                        justifyContent: 'center',
                                        fontSize: 30
                                    }}
                                >Leetcode Stats</div>
                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        textAlign: 'center',
                                    }}
                                >
                                    {leetData.difficult.map((stat: any, idx: any) => {
                                        return (
                                            <div
                                                key={`diff-${idx}`}
                                                style={{
                                                    height: 50,
                                                    width: '100%',
                                                    textAlign: 'center',
                                                    borderRight: idx !== leetData.difficult.length - 1 ? `1px solid ${theme.colors.text}` : '',
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    rowGap: 10
                                                }}
                                            >
                                                <p
                                                    style={{ fontSize: 20 }}
                                                >{stat.difficulty}</p>
                                                <p>{stat.count}</p>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                    <HeatMap
                                        value={leetData ? (
                                            leetData.submissionCalendar
                                        ) : []}
                                        startDate={(() => {
                                            let x = new Date()


                                            if (isMobile) {
                                                x.setMonth(x.getMonth() - 4)
                                            } else if (isTabletOrMobile) {
                                                x.setMonth(x.getMonth() - 8)
                                            } else {
                                                x.setFullYear(x.getFullYear() - 1)
                                            }

                                            return x
                                        })()}
                                        width={isTabletOrMobile ? (isMobile ? 300 : 500) : 750}
                                        style={{ color: theme.colors.text, }}
                                        endDate={new Date()}
                                        weekLabels={['', '', '', '', '', '', '']}
                                        panelColors={theme.colors.heatmap}

                                    />
                                </div>
                            </div>



                        </div>
                        <div>
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column',

                                    alignItems: 'center',
                                    rowGap: 20
                                    //
                                    //border: `1px solid ${theme.colors.text}`
                                }}
                            >

                                <div

                                    style={{
                                        display: 'flex',
                                        width: '100%',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        fontSize: 30
                                    }}
                                >Github Stats</div>
                                <HeatMap
                                    value={githubData ? (
                                        githubData.contributions
                                    ) : []}
                                    startDate={(() => {
                                        let x = new Date()

                                        if (isMobile) {
                                            x.setMonth(x.getMonth() - 4)
                                        } else if (isTabletOrMobile) {
                                            x.setMonth(x.getMonth() - 8)
                                        } else {
                                            x.setFullYear(x.getFullYear() - 1)
                                        }
                                        return x
                                    })()}
                                    width={isTabletOrMobile ? (isMobile ? 300 : 500) : 750}
                                    style={{ color: theme.colors.text, display: 'flex', justifyContent: 'center' }}
                                    endDate={(() => {
                                        let x = new Date()
                                        //x.setMonth(x.getMonth())
                                        return x
                                    })()}
                                    weekLabels={['', '', '', '', '', '', '']}
                                    panelColors={theme.colors.heatmap}

                                />
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}
