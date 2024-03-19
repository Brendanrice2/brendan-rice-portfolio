import React from 'react';

function Intro() {
    return (
        <div className="flex items-center
        justify-center flex-col text-center pt-20
        pb-6">
            <h1 className="text-4xl md:text-7xl dark:text-white
            mb-1 md:mb-3 font-bold">Brendan Rice</h1>
            <p className="text-base md:text-xl mb-3 font-medium">Recent CS Graduate</p>
            { <p className="text-sm max-w-xl mb-6
            font-bold">I'm a computer science BS new grad from the University of Rhode Island. I thoroughly enjoy improving myself every single day, and have a passion for working with people. Using perseverence, discipline, and a deep desire to learn, I will do my very best at whatever challenge I'm taking on. You can view some of my school, and side projects via my GitHub {' '}
            <a
                href="https://github.com/Brendanrice2"
                target="_blank"
                className="text-cyan-600 hover:underline
                underline-offset-2 decoration-2
                decoration-orange-600"
                rel="noreferrer noopener"
            >
                Brendanrice2
            </a>{' '}
            .
            </p>}
        </div>
    )
}

export default Intro;