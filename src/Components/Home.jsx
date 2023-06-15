import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Home.css'


export default function Home() {
   return (
    <Fragment>
        <span className="home-container">
            <div className="border">
                <div className="name-container">
                <h1 className="name">Melissa Donegan</h1>
                <h2 className="description">Software Engineer & Designer</h2>
                </div>
                <div className="nav-container">
                    <Link to="/projects">Projects</Link>
                </div>
            </div>
        </span>
    </Fragment>
   )
}