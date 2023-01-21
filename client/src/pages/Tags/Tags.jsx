import React from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import TagList from './TagList'
import './Tags.css'

const Tags = () => {

    const tagsList = [{
        id:1,
        tagName: 'javascript',
        tagDesc: "JavaScript is the most popular programming language. JavaScript is the programming language of the Web."
    },{
        id:2,
        tagName: 'Python',
        tagDesc: "Python is a computer programming language often used to build websites and software, automate tasks, and conduct data analysis."
    },{
        id:3,
        tagName: 'Java',
        tagDesc: "Java is a widely used object-oriented programming language and software platform that runs on billions of devices, including notebook computers, mobile devices and many others."
    },{
        id:4,
        tagName: 'PHP',
        tagDesc: "PHP is an open-source server-side scripting language that many devs use for web development. It is also a general-purpose language that you can use to make lots of projects, including Graphical User Interfaces (GUIs)."
    },{
        id:5,
        tagName: 'Node JS',
        tagDesc: "It is used for server-side programming, and primarily deployed for non-blocking, event-driven servers, such as traditional web sites and back-end API services, but was originally designed with real-time, push-based architectures in mind."
    },{
        id:6,
        tagName: 'Mainframes',
        tagDesc: "Because of these design strengths, the mainframe is often used by IT organizations to host the most important, mission-critical applications."
    },{
        id:7,
        tagName:'Angular JS',
        tagDesc:"AngularJS is a structural framework for dynamic web apps. It lets you use HTML as your template language and lets you extend HTML's syntax to express your application's components clearly and succinctly."
    }]


  return (
    <div className='home-container-1'>
        <LeftSidebar/>
        <div className='home-container-2'>
            <h1 className='tags-h1'>Tags</h1>
            <p className='tags-p'>A Tag is a keyword  or label that categorizes your question with other, similar questions</p>
            <div className='tags-list-container'>
           { 
                tagsList.map((tag) => (
                    <TagList tag={ tag } key={tagsList.id} />
                ))
            }
            </div>
        </div>
    </div>
  )
}

export default Tags