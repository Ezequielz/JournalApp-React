import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry pointer">

            <div 
                className="journal__entry-picture"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://i.pinimg.com/originals/5c/a1/5b/5ca15b851a4ec27f4a67ba5862878b9e.jpg)'
                }}
            ></div>
            
            <div  className="journal__entry-body">
                <p className="journal__entry-title">
                    Un nuevo dia
                </p>
                <p className="journal__entry-content">
                    Lorem ipsum dolor sit amet.
                </p>

            </div>

            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>28</h4>
            </div>


        </div>
    )
}
