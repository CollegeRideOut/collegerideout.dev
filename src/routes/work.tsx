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
            { value: 'Typescript', on: false, },
            { value: 'Javascript', on: false },
            { value: 'Java', on: false },
            { value: 'Go', on: false },
            { value: 'SQL', on: false },
        ]

    },
    {
        title: 'Frameworks',
        visible: true,
        vals: [
            { value: 'React', on: false },
            { value: 'React - Native', on: false },
            { value: 'Express Js', on: false },
            { value: 'Nest Js', on: false },
            { value: 'Spring', on: false },
            { value: 'REST', on: false },
            { value: 'GraphQL APIs', on: false },
        ]
    },
    {
        title: 'Tools',
        visible: true,
        vals: [
            { value: 'PostgreSQL', on: false },
            { value: 'MySQL', on: false },
            { value: 'MongoDB', on: false },
            { value: 'Redis', on: false, },
            { value: 'Node Js', on: false },
        ]
    },
    {
        title: 'Cloud',
        visible: true,
        vals: [
            { value: 'Docker', on: false },
            { value: 'AWS', on: false },
            { value: 'EC2', on: false },
            { value: 'Amplify', on: false },
            { value: 'S3', on: false },
            { value: 'Lambda', on: false },
            { value: 'API Gateway', on: false },
            { value: 'Digital Ocean', on: false },
            { value: 'Linode', on: false },

        ]
    }
]

let initExperience = [
    {

        visible: true,
        company: 'IQtek Solutions',
        position: 'NodeJS Developer',
        localtion: 'Santo Domingo, Dominican Republic',
        startDate: 'Sep 2022',
        endDate: 'May 2024',
        _skills: [
            'Java', 'Typescript', 'Javascript', 'SQL', 'React',
            'Spring', 'MySQL', 'AWS', 'Node Js', 'EC2'
        ],
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

        visible: true,
        company: 'Empresa de Transmission Electrica Dominicana',
        position: 'Full Stack Developer',
        localtion: 'Santo Domingo, Dominican Republic',
        startDate: 'Aug 2021',
        endDate: 'Aug 2022',
        _skills: [
            'Java', 'Typescript', 'Javascript', 'SQL', 'React',
            'Spring', 'MySQL', 'AWS', 'Node Js', 'EC2'

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

        visible: true,
        company: 'ETEE ',
        position: 'Full Stack Developer',
        localtion: 'Santo Domingo, Dominican Republic',
        startDate: 'May 2019',
        endDate: 'Nov 2021',
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

const intProjects = [
    {
        visible: true,
        name: '8085 Microprocessor Simulator',
        linkShow: '/Microprocessor-Simulator-8085',
        _link: 'https://github.com/CollegeRideOut/Microprocessor-Simulator-8085',
        _skills: [
            'Go'
        ],
        description: [
            {
                value: 'lt an interactive visualization interface using Raylib to display memory, and register states.',
                visible: true
            },
            {
                value: 'implemented a custom 8085 assembler with linting and error checking, enabling users to write and debug assembly code within the same environment.',
                visible: true
            },

        ]
    },
]


function Work() {
    const { vals: theme } = useContext(ThemeContext);
    const [skills, setSkills] = useState(initSkills);
    const [experience, setExperience] = useState(initExperience)
    const [projects, setProjects] = useState(intProjects)
    const [skillfilterVals, setSkillsFillterVals] = useState<[number, number][]>([])
    const genHtmlForPdf = () => {
        let x = document.getElementById('resume');
        console.log(x?.innerHTML)
    }


    const webAndPdf = (pdf = false) => {
        return (
            <div id={'resume'} style={{
                width: '100%',
                flexDirection: 'column',
                display: 'flex',
                flex: '1 1 auto',
                height: '100%',
                color: theme.colors.text

            }}>
                <div onClick={() => genHtmlForPdf()} >PREEEESSSS MEEEE </div>
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
                                                    display: !pdf ? 'flex' : (currSkill.visible ? 'flex' : 'none'),
                                                    flexDirection: 'row',
                                                    height: 'min-content',
                                                    rowGap: 50,
                                                    columnGap: 10,
                                                    alignItems: 'center'

                                                }}
                                            >
                                                <div
                                                    style={{
                                                        width: 110,
                                                        fontWeight: 'bold'
                                                    }}
                                                    onClick={() => {
                                                        const skillCopy: typeof skills = JSON.parse(JSON.stringify(skills))

                                                        skillCopy[currSkillIdx].visible = !skillCopy[currSkillIdx].visible

                                                        setSkills(skillCopy)
                                                    }}
                                                >
                                                    {currSkill.title}
                                                </div>
                                                {
                                                    (currSkill.vals.map((skill, idx) => (
                                                        <div key={`skill-${idx}}`}
                                                            onClick={() => {
                                                                const skillsCopy: typeof skills = JSON.parse(JSON.stringify(skills))
                                                                const setSkillsFillterValsCopy: typeof skills = JSON.parse(JSON.stringify(setSkillsFillterVals))
                                                                if (skillsCopy[currSkillIdx].vals[idx].on){

                                                                }
                                                                skillsCopy[currSkillIdx].vals[idx].on = !skillsCopy[currSkillIdx].vals[idx].on

                                                                setSkills(skillsCopy);
                                                            }}
                                                            style={{
                                                                background: !skill.on ? theme.colors.primary : theme.colors.secondary,
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
                                        fontWeight: 'bold'

                                    }}
                                >Experience</div>
                                {experience.map((ex, exIdx) => {
                                    return (
                                        <div
                                            style={{
                                                display: !pdf ? 'flex' : (ex.visible ? 'flex' : 'none'),
                                                flexDirection: 'column', rowGap: 20
                                            }}
                                            key={`ex-${exIdx}`}

                                        >
                                            <div

                                                onClick={() => {
                                                    console.log('ex ', exIdx)
                                                    const experienceCopy: typeof experience = JSON.parse(JSON.stringify(experience))
                                                    experienceCopy[exIdx].visible = !experienceCopy[exIdx].visible
                                                    setExperience(experienceCopy)
                                                }}

                                                style={{ fontWeight: 'bold', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}
                                            >
                                                <div
                                                    style={{ rowGap: 10, fontWeight: 'bold', display: 'flex', flexDirection: 'column', }}
                                                >

                                                    <p>{ex.company}</p>
                                                    <p>{ex.position}</p>

                                                </div>

                                                <div
                                                    style={{ rowGap: 10, display: 'flex', flexDirection: 'column', justifyContent: 'right', alignItems: 'end' }}
                                                >

                                                    <p>{ex.localtion}</p>
                                                    <p>{ex.startDate} - {ex.endDate}</p>
                                                </div>
                                            </div>
                                            <div style={{ marginLeft: 20, display: 'flex', flexDirection: 'column', rowGap: 10 }}>
                                                {ex.description.map((des, desIdx) => {
                                                    return (
                                                        <li
                                                            onClick={() => {

                                                                const experienceCopy: typeof experience = JSON.parse(JSON.stringify(experience))
                                                                experienceCopy[exIdx].description[desIdx].visible = !experienceCopy[exIdx].description[desIdx].visible
                                                                setExperience(experienceCopy)
                                                            }}
                                                            key={`ex-des${desIdx}`}
                                                            style={{
                                                                display: !pdf ? 'list-item' : (des.visible ? 'list-item' : 'none'),
                                                                listStyleType: 'disc'
                                                            }}>
                                                            {des.value}
                                                        </li>
                                                    )
                                                })}
                                            </div>
                                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap', marginLeft: 20 }}>
                                                {skills.map((currSkill) => {
                                                    return (
                                                        <>
                                                            {
                                                                (currSkill.vals.filter((i) => (ex._skills.includes(i.value))).map((skill, idx) => (
                                                                    <div key={`ex-skill-${idx}}`}
                                                                        style={{
                                                                            background: !skill.on ? theme.colors.primary : theme.colors.secondary,
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
                                <div
                                    style={{
                                        width: '100%',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        flexDirection: 'row',
                                        fontWeight: 'bold'

                                    }}
                                >Projects</div>


                                {projects.map((pj, pjIdx) => {
                                    return (
                                        <div
                                            style={{
                                                display: !pdf ? 'flex' : (pj.visible ? 'flex' : 'none'),
                                                flexDirection: 'column', rowGap: 20
                                            }}
                                            key={`pj-${pjIdx}`}
                                        >
                                            <div


                                                onClick={() => {
                                                    const projectsCopy: typeof projects = JSON.parse(JSON.stringify(projects))
                                                    projectsCopy[pjIdx].visible = !projectsCopy[pjIdx].visible
                                                    setProjects(projectsCopy)
                                                }}
                                                style={{ fontWeight: 'bold', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}
                                            >
                                                <div
                                                    style={{ rowGap: 10, fontWeight: 'bold', display: 'flex', flexDirection: 'column', }}
                                                >
                                                    <p>{pj.name}</p>

                                                </div>

                                                <div
                                                    style={{ rowGap: 10, display: 'flex', flexDirection: 'column' }}
                                                >
                                                    <a style={{ textDecoration: 'none', color: 'inherit' }} href={pj._link}>{pj.linkShow}</a>
                                                </div>
                                            </div>
                                            <div style={{ marginLeft: 20, display: 'flex', flexDirection: 'column', rowGap: 10 }}>
                                                {pj.description.map((des, desIdx) => {
                                                    return (
                                                        <li
                                                            onClick={() => {
                                                                const projectsCopy: typeof projects = JSON.parse(JSON.stringify(projects))
                                                                projectsCopy[pjIdx].description[desIdx].visible = !projectsCopy[pjIdx].description[desIdx].visible
                                                                setProjects(projectsCopy)
                                                            }}
                                                            key={`pj-des${desIdx}`}
                                                            style={{
                                                                display: !pdf ? 'list-item' : (des.visible ? 'list-item' : 'none'),
                                                                listStyleType: 'disc'
                                                            }}>
                                                            {des.value}
                                                        </li>
                                                    )
                                                })}
                                            </div>
                                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap', marginLeft: 20 }}>
                                                {skills.map((currSkill) => {
                                                    return (
                                                        <>
                                                            {
                                                                (currSkill.vals.filter((i) => (pj._skills.includes(i.value))).map((skill, idx) => (
                                                                    <div key={`pj-skill-${idx}}`}
                                                                        style={{
                                                                            background: !skill.on ? theme.colors.primary : theme.colors.secondary,
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

                            </div>

                        </div>
                    </div>
                </div>
            </div >
        )

    }


    return webAndPdf(true)

}
