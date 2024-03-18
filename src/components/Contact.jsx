import React from 'react';
import Title from './Title';

function Contact() {

    // Edited contact to a simple paragraph

    return (
        <div className="flex flex-col mb-10 mx-auto">
            <div className='flex justify-center
            items-center'>
                <div className="flex flex-col w-full md:w-7/12"
                >
                    <Title>Contact</Title>
                    <p className="text-sm max-w-xl mb-6
            font-bold">I'm always open to new opportunities, and I'm always looking to learn something new. If you have a project that you'd like to work with me on, or if you'd like to get in touch, please feel free to reach out to me via my email: {' '}
    
                        <a
                            className="text-cyan-600 hover:underline
                            underline-offset-2 decoration-2
                            decoration-orange-600">
                            brendanjrice32@gmail.com
                        </a> 
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Contact;