import React, { useState } from 'react'
import './DocNavbar.css'

function DocNavbar() {
    const [subjects, setSubjects] = useState([
        {
            name: "Overview",
            subSubjects: ["summery", "supported technolgies"],
            collapse: false
        },
        {
            name: "Connections",
            subSubjects: ["summery", "create connection", "scopes"],
            collapse: false
        },
        {
            name: "Service",
            subSubjects: [],
            collapse: false
        },
        {
            name: "Map",
            subSubjects: [],
            collapse: false
        },
        {
            name: "Kubernetes",
            subSubjects: ["view configuration", "istio"],
            collapse: false
        }

    ])

    const collapseSubject = (subject) => {
        var newSubjects = []
        subjects.map(_subject => {
            var newSubject = {..._subject}
            if (newSubject.name  === subject.name) {
                newSubject.collapse = !newSubject.collapse;
            }
            newSubjects.push(newSubject)
        })
        setSubjects(newSubjects)
    }


        // "Overview": ["summery", "supported technolgies"], "Connections": ["summery", "create connection", "scopes"], "Service":[], "Map":[], "Kubernetes": ["view configuration", "istio"]};
    return (
        <div className='doc-navbar'>
            {subjects.map(subject => {
                return <div className='subject'>
                    <div className='subject-main-line'>
                        {subject.subSubjects.length > 0 && <button onClick={()=>collapseSubject(subject)} className='collapse-button'>{subject.collapse ? "-" : "+"}</button>}
                        {subject.name}
                    </div>
                    {(subject.collapse && subject.subSubjects.length > 0) && <div className='sub-subjects'>
                            {subject.subSubjects.map(subSubject => {
                                return <div className='sub-subject'>
                                    {subSubject}
                                </div>
                            })}
                        </div>}
                </div>
            })}
        </div>
    )
}

export default DocNavbar