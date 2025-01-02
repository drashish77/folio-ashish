import React from 'react'
const faqsList = [
    {
        id: 1
        , question: "What services do you offer as a frontend developer?",
        answer: "I specialize in creating responsive, user-friendly websites and web applications using modern frameworks like React, Angular, and Vue.js. My expertise includes UI/UX design, performance optimization, and integrating APIs."
    },
    {
        id: 2
        , question: "Which programming languages and tools do you use?",
        answer: "I primarily use JavaScript and TypeScript along with frameworks like React, Vue.js, and Angular. I also work with CSS preprocessors like Sass, build tools like Webpack, and testing libraries like Jest and Cypress."
    },
    {
        id: 3
        , question: "Do you have experience with backend development?",
        answer: "While my primary expertise is in frontend development, I have experience working with Node.js and Express for building RESTful APIs and integrating them with frontend applications."
    },
    {
        id: 4
        , question: "Can you work with design tools like Figma or Adobe XD?",
        answer: "Yes, I can work with design tools like Figma, Adobe XD, and Sketch to translate designs into functional and pixel-perfect web interfaces."
    },
    {
        id: 5
        , question: "Do you have experience working in a team environment?",
        answer: "Yes, I have worked in collaborative team environments using Agile methodologies, version control systems like Git, and tools like Jira and Trello for project management."
    },
    {
        id: 6
        , question: "Can you optimize websites for performance and SEO?",
        answer: "Yes, I use best practices such as lazy loading, code splitting, and optimizing assets to enhance performance. I also implement semantic HTML and follow SEO guidelines to improve search engine rankings."
    },
    {
        id: 7
        , question: "What is your approach to responsive design?",
        answer: "I follow a mobile-first approach, using CSS Flexbox, Grid, and media queries to ensure that websites are fully responsive and functional across various devices and screen sizes."
    },
    {
        id: 8
        , question: "Have you worked on any notable projects?",
        answer: "Yes, I have worked on various projects, including e-commerce platforms, dashboards, and portfolio websites. You can find detailed case studies in the Projects section of my portfolio."
    },
    {
        id: 9
        , question: "Do you have experience with testing and debugging?",
        answer: "Yes, I use tools like Jest, React Testing Library, and Cypress for unit, integration, and end-to-end testing. I also have experience using browser developer tools to debug and resolve issues."
    },
    {
        id: 10
        , question: "How can I contact you for a project or collaboration?",
        answer: "You can reach out to me via the Contact section of my portfolio website or directly email me at [your-email@example.com]. I look forward to discussing your project!"
    }
];



const FAQs = () => {
    return (
        <section className='section'>
            <div className=" container">
                <h2 className="text-4xl md:text-7xl lg:text-8xl">FAQs</h2>
                <div className="mt-10 md:mt-16 lg:mt-20">
                    {faqsList.map(({ question, answer, id }) =>
                        <div className="border-t border-stone-400 last:border-b border-dotted py-6 md:py-8 lg:py-10" key={id}>
                            <div className="flex justify-between items-center gap-4">
                                <div className="text-2xl md:text-3xl lg:text-4xl">{question}</div>
                                <div className="inline-flex items-center justify-center size-11 border border-stone-400 rounded-full shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        strokeWidth="1.5" stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>
                                </div>
                            </div>
                            {/* <div className="">{answer}</div> */}

                        </div>)}
                </div>
            </div>
        </section>
    )
}

export default FAQs