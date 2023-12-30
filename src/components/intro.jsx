import React from 'react';

function Intro() {
    return (
        <div className="flex items-center
        justify-center flex-col text-center pt-20
        pb-6">
            <h1 className="text-4xl md:text-7xl dark:text-white
            mb-1 md:mb-3 font-bold">Brendan Rice</h1>
            <p className="text-base md:text-xl mb-3 font-medium">Software Engineer</p>
            <p className="text-sm max-w-xl mb-6
            font-bold">I'm a computer science BS new grad from the University of Rhode Island. I'm a hard worker, and I love taking the time to learn something new. My goal is to be the best software engineer I can be, and push the standards of my client, supervisor, and company. I've created both side projects, as well as school projects that are located via my Github {' '}
            <a
                href="https://github.com/Brendanrice2"
                target="_blank"
                className="text-cyan-600 hover:underline
                underline-offset-2 decoration-2
                decoration-blue-600"
                rel="noreferrer noopener"
            >
                Brendanrice2
            </a>{' '}
            .
            
            </p>
        </div>
    )
}

export default Intro;