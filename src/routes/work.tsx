import { createFileRoute } from '@tanstack/react-router'
import { useContext, useState } from 'react';
import { ThemeContext } from './__root';

export const Route = createFileRoute('/work')({
    component: Work,
})


const init_skills = {
    Languages: [
        { value: 'Typescript', on: true, },
        { value: 'Javascript', on: true },
        { value: 'Java', on: true },
        { value: 'SQL', on: true },
    ],
    Frameworks: [
        { value: 'React', on: true },
        { value: 'React - Native', on: true },
        { value: 'Express Js', on: true },
        { value: 'Nest Js', on: true },
        { value: 'Spring', on: true },
        { value: 'REST / GraphQL APIs', on: true },
    ],
    Tools: [
        { value: 'PostgreSQL', on: true },
        { value: 'MongoDB', on: true },
        { value: 'Redis', on: true, },
        { value: 'Node Js', on: true },
    ],
    Cloud: [
        { value: 'Docker', on: true },
        { value: 'AWS', on: true },
        { value: 'EC2', on: true },
        { value: 'Amplify', on: true },
        { value: 'S3', on: true },
        { value: 'Lambda', on: true },
        { value: 'API Gateway', on: true },
        { value: 'Digital Ocean', on: true },
        { value: 'Linode', on: true },

    ]
}


function Work() {
    const { vals: theme } = useContext(ThemeContext);
    const [skills, setSkills] = useState(init_skills);
    return (
        <div style={{
            width: '100%',
            flexDirection: 'column',
            display: 'flex',
            flex: '1 1 auto',
            height: '100%',
            color: theme.colors.text
        }}>
            <div
                style={{
                    width: '100%',
                    flex: '1 1 auto',
                    height: '100%',
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
                        borderRadius: 25,
                        width: '70%',
                        height: '100%',
                        //backgroundColor: 'black'
                    }}
                >
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        padding: 40,
                    }}>

                        <div style={{

                            display: 'flex',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            rowGap: 20


                        }}>

                            <div
                                style={{
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    flexDirection: 'row',
                                    rowGap: 50,
                                }}

                            >Skills</div>
                            {Object.entries(skills).map(([_title, values], k) => {
                                let title = _title as keyof typeof skills;
                                return (
                                    <div key={`${title}-${k}`}
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            rowGap: 50,
                                            columnGap: 10,

                                        }}
                                    >
                                        <div style={{ width: 100, padding: 8 }}>{title}: </div>{(values.map((skill, idx) => (
                                            <div key={`skill-${idx}}`}
                                                onClick={() => {
                                                    const skillsCopy: typeof skills = JSON.parse(JSON.stringify(skills))
                                                    skillsCopy[title][idx].on = !skillsCopy[title][idx].on

                                                    setSkills(skillsCopy);
                                                }}
                                                style={{
                                                    background: skill.on ? theme.colors.primary : theme.colors.secondary,
                                                    padding: 8,
                                                    borderRadius: '10%',
                                                }}
                                            > {skill.value}</div>
                                        )))}
                                    </div>
                                )
                            })}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
