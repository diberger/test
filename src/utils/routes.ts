import Experience from "../components/experience";
import Info from "../components/info";
import Skills from "../components/skills";
import Education from "../components/education";
import Interest from "../components/interest";
import Portfolio from "../components/portfolio";
import Resume from "../components/resume";
import {FunctionComponent} from "react";

export interface IRoute {
    path: string,
    name: string,
    component: FunctionComponent,
    isMain?: boolean
}

export const routes : IRoute[] = [
    {
        path: '/',
        name: 'A propos',
        component: Info,
        isMain: true
    },
    {
        path: '/experiences',
        name: 'Expériences',
        component: Experience
    },
    {
        path: '/education',
        name: 'Diplômes',
        component: Education
    },
    {
        path: '/skills',
        name: 'Compétences',
        component: Skills
    },
    {
        path: '/portfolio',
        name: 'Portfolio',
        component: Portfolio
    },
    {
        path: '/interests',
        name: 'Intérêts',
        component: Interest
    },
    {
        path: '/cv',
        name: 'CV',
        component: Resume
    },
]
