import { createFileRoute } from '@tanstack/react-router'
import { useContext, useState } from 'react';
import { ThemeContext } from './__root';

export const Route = createFileRoute('/work')({
    component: Work,
})



const initSkills = [
    {
        title: 'Languages',
        visible: true,
        vals: [
            { value: 'Typescript', on: true, },
            { value: 'Javascript', on: true },
            { value: 'Java', on: true },
            { value: 'Go', on: true },
            { value: 'SQL', on: true },
        ]
    },
    {
        title: 'Frameworks',
        vals: [
            { value: 'React', on: true },
            { value: 'React - Native', on: true },
            { value: 'Express Js', on: true },
            { value: 'Nest Js', on: true },
            { value: 'Spring', on: true },
            { value: 'REST', on: true },
            { value: 'GraphQL APIs', on: true },
        ]
    },
    {
        title: 'Tools', vals: [
            { value: 'PostgreSQL', on: true },
            { value: 'MySQL', on: true },
            { value: 'MongoDB', on: true },
            { value: 'Redis', on: true, },
            { value: 'Node Js', on: true },
        ]
    },
    {
        title: 'Cloud', vals: [
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
]

let initExperience = [
    {
        company: 'IQtek Solutions',
        position: 'NodeJS Developer',
        localtion: 'Santo Domingo, Dominican Republic',
        startDate: 'Sep 2022',
        endDate: 'May 2024',
        _skills: [
            'Java', 'Typescript', 'Javascript', 'SQL', 'React',
            'Spring', 'MySQL', 'AWS', 'Node Js', 'EC2'
        ],
        skills: [['1', 1]],
        description: [
            {
                value: 'Automated IVR workflows to address delays in client incident resolutions, cutting processing time by 20 %',
                visible: true
            },
            {
                value: 'Added French and Portuguese language support to the IVR system by refactoring the Java codebase for multilingual capability, enabling broader client accessibility.',
                visible: true
            },
            {
                value: 'Implemented the front- end interface for a new Platinum card offering in a React / Lerna monorepo by integrating dynamic API data, designing responsive layouts, and handling image assets, resulting in a successful launch.',
                visible: true
            },
            {
                value: 'Developed and optimized stored procedures in MS SQL Server to track IVR requests, user journeys, and key data insights, empowering clients with improved system analytics and decision - making capabilities.',
                visible: true
            },
            {
                value: 'Trained the support team to independently debug and resolve client issues by delivering hands - on sessions and creating clear documentation, reducing escalations to the development team.',
                visible: true
            },

        ]
    },

    {
        company: 'Empresa de Transmisión Eléctrica Dominicana',
        position: 'Full Stack Developer',
        localtion: 'Santo Domingo, Dominican Republic',
        startDate: 'Aug 2021',
        endDate: 'Aug 2022',

        skills: [['1', 1]],
        _skills: [
            'Typescript', 'Javascript', 'SQL', 'React',
            'MySQL', 'AWS', 'Node Js', 'EC2', 'Nest Js'
        ],
        description: [
            {
                value: 'Integrated SAP’s API to automate incident management, enabling real-time ticket generation from network fault alerts and reducing manual workload.',
                visible: true
            },
            {
                value:
                    'Implemented real-time notifications via email and messaging services to keep operations teams promptly informed of critical issues, improving incident response speed.',
                visible: true
            },

        ]
    },


    {
        company: 'ETEE ',
        position: 'Full Stack Developer',
        localtion: 'Santo Domingo, Dominican Republic',
        startDate: 'May 2019',
        endDate: 'Nov 2021',

        skills: [['1', 1]],
        _skills: [
            'Typescript', 'SQL', 'React',
            'MySQL', 'Node Js', 'Nest Js', 'Digital Ocean', 'GraphQL APIs', 'Redis'
        ],
        description: [
            {
                value:
                    'Designed a customized load dispatch system that optimized resource allocation for hydro and thermal plants, increasing economic efficiency by 10% and reducing energy production costs by 5%.',
                visible: true
            },
            {
                value:
                    'Integrated the Heliomont model for solar irradiance forecasting into the dispatch algorithm to estimate daily solar plant generation, enhancing dispatch decisions.',
                visible: true
            },

        ]
    }

]
const flatSkills = initSkills.flatMap((type, i) => { return type.vals.map((s, idx) => [type.title, i, s.value, idx]) })

// this is wrong  just modifing to have idxes and names of each experience
initExperience.forEach((e) => {
    e.skills = flatSkills.filter((fs) => e._skills.includes(fs[2] as string))
})


function Work() {
    const { vals: theme } = useContext(ThemeContext);
    const [skills, setSkills] = useState(initSkills);
    const [experience, setExperience] = useState(initExperience)
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
                        //padding: 40,
                    }}>

                        <div style={{

                            display: 'flex',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            rowGap: 40


                        }}>

                            <div
                                style={{
                                    width: '100%',
                                    display: 'flex',

                                    justifyContent: 'center',
                                    flexDirection: 'row',
                                    rowGap: 50,
                                    fontWeight: 'bold'
                                }}

                            >
                                Skills
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', rowGap: 20 }}>
                                {skills.map((currSkill, currSkillIdx) => {
                                    return (
                                        <div key={`${currSkill.title}-${currSkillIdx}`}
                                            style={{
                                                display: 'flex',
                                                flexDirection: 'row',

                                                height: 'min-content',
                                                rowGap: 50,
                                                columnGap: 10,
                                                alignItems: 'center'

                                            }}
                                        >
                                            <div style={{
                                                width: 100,
                                                fontWeight: 'bold'
                                            }}>{currSkill.title}: </div>{
                                                (currSkill.vals.map((skill, idx) => (
                                                    <div key={`skill-${idx}}`}
                                                        onClick={() => {
                                                            const skillsCopy: typeof skills = JSON.parse(JSON.stringify(skills))
                                                            skillsCopy[currSkillIdx].vals[idx].on = !skillsCopy[currSkillIdx].vals[idx].on

                                                            setSkills(skillsCopy);
                                                        }}
                                                        style={{
                                                            background: skill.on ? theme.colors.primary : theme.colors.secondary,
                                                            //height: 'min-content',
                                                            padding: 8,
                                                            borderRadius: '10%',
                                                        }}
                                                    > {skill.value}</div>
                                                )))}
                                        </div>
                                    )
                                })}
                            </div>
                            <div
                                style={{
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    flexDirection: 'row',
                                    rowGap: 50,
                                    fontWeight: 'bold'

                                }}
                            >Experience</div>
                            {experience.map((ex, exIdx) => {
                                return (
                                    <div style={{ display: 'flex', flexDirection: 'column', rowGap: 20 }} key={`ex-${exIdx}`}>
                                        <div

                                            style={{ fontWeight: 'bold', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}
                                        >
                                            <div
                                                style={{ rowGap: 10, fontWeight: 'bold', display: 'flex', flexDirection: 'column', }}
                                            >

                                                <p>{ex.company}</p>
                                                <p>{ex.position}</p>

                                            </div>

                                            <div
                                                style={{ rowGap: 10, display: 'flex', flexDirection: 'column' }}
                                            >

                                                <p>{ex.localtion}</p>
                                                <p>{ex.startDate} - {ex.endDate}</p>
                                            </div>
                                        </div>
                                        <div style={{ marginLeft: 20, display: 'flex', flexDirection: 'column', rowGap: 10 }}>
                                            {ex.description.map((des, desIdx) => {
                                                return (
                                                    <li key={`ex-des${desIdx}`}
                                                        style={{
                                                            display: 'list-item',
                                                            listStyleType: 'disc'
                                                        }}>
                                                        {des.value}
                                                    </li>
                                                )
                                            })}
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap', marginLeft: 20 }}>
                                            {skills.map((currSkill, currSkillIdx) => {
                                                return (
                                                    <>
                                                        {
                                                            (currSkill.vals.filter((i) => (ex._skills.includes(i.value))).map((skill, idx) => (
                                                                <div key={`skill-${idx}}`}
                                                                    onClick={() => {
                                                                        const skillsCopy: typeof skills = JSON.parse(JSON.stringify(skills))
                                                                        skillsCopy[currSkillIdx].vals[idx].on = !skillsCopy[currSkillIdx].vals[idx].on

                                                                        setSkills(skillsCopy);
                                                                    }}
                                                                    style={{
                                                                        background: skill.on ? theme.colors.primary : theme.colors.secondary,
                                                                        //height: 'min-content',
                                                                        padding: 8,
                                                                        borderRadius: '10%',
                                                                    }}
                                                                > {skill.value}</div>
                                                            )))}
                                                    </>
                                                )
                                            })}

                                        </div>
                                    </div>
                                )
                            })}
                            <div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div >
    )
}
