"use client";

import { useRouter } from 'next/navigation';
import { CodeBracketIcon, ComputerDesktopIcon, LightBulbIcon, BriefcaseIcon, AcademicCapIcon } from '@heroicons/react/24/outline';


const AboutPage = () => {
    const router = useRouter();
    const handleContactClick = () => {
        router.push('/contact');
    }


    return (
        <div className=" text-gray-300 min-h-screen px-6 py-12">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-center text-5xl font-bold text-white mb-12">
                    About Me
                </h1>

                <section className="mb-16">
                    <div className="flex items-center mb-6">
                        <CodeBracketIcon className="h-8 w-8 text-green-500 mr-3" />
                        <h2 className="text-3xl font-semibold text-white">Who Am I?</h2>
                    </div>
                    <p className="text-lg leading-7 mb-6">
                        Hi! I&apos;m <span className="font-semibold text-blue-400">Arif Islam</span>, a passionate Full Stack MERN Developer with over 2 years of hands-on experience in building dynamic, responsive, and efficient web applications. I have expertise in the <strong>MERN Stack</strong>(MongoDB, Express.js, React, Node.js), as well as cutting-edge technologies like <strong>Next.js</strong>, <strong>Tailwind CSS</strong>, and <strong>TypeScript</strong>.
                    </p>
                    <p className="text-lg leading-7">
                        I thrive in delivering high-quality solutions that meet client needs while also pushing the boundaries of what web technologies can achieve. Whether it’s developing full-scale web applications, managing databases, or optimizing for performance, my focus is always on combining creativity and technical skill.
                    </p>
                </section>

                <section className="mb-16">
                    <div className="flex items-center mb-6">
                        <ComputerDesktopIcon className="h-8 w-8 text-blue-500 mr-3" />
                        <h2 className="text-3xl font-semibold text-white">What I Do</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-lg leading-7">
                        <div>
                            <h3 className="flex items-center text-2xl font-semibold mb-4">
                                <LightBulbIcon className="h-6 w-6 text-yellow-500 mr-2" /> Frontend Development
                            </h3>
                            <p>
                                My frontend skills include building interactive and beautiful UIs using <strong>React.js</strong> and <strong>Next.js</strong>, with responsive layouts powered by <strong>Tailwind CSS</strong>. I focus on creating user-friendly designs that are both fast and intuitive.
                            </p>
                        </div>
                        <div>
                            <h3 className="flex items-center text-2xl font-semibold mb-4">
                                <BriefcaseIcon className="h-6 w-6 text-green-500 mr-2" /> Backend Development
                            </h3>
                            <p>
                                I build robust and scalable backends using <strong>Next.js</strong>and <strong>Express.js</strong>, ensuring efficient database management with <strong>MongoDB</strong>. From RESTful APIs to real-time data handling, I ensure that the server-side logic works flawlessly.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="mb-16">
                    <div className="flex items-center mb-6">
                        <AcademicCapIcon className="h-8 w-8 text-purple-500 mr-3" />
                        <h2 className="text-3xl font-semibold text-white">My Journey</h2>
                    </div>
                    <p className="text-lg leading-7 mb-6">
                        I&apos;m currently in my final year pursuing a <strong>B.Sc. in Computer Science</strong> at <strong>West Bengal State University</strong>. Before college, I started my journey into web development with basic <strong>HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong>. Over time, I honed my skills and moved towards mastering <strong>Full Stack Development</strong> with the <strong>MERN stack</strong>.
                    </p>
                    <p className="text-lg leading-7">
                        My experience spans creating static websites, dynamic applications, and business solutions, including affiliate websites, portfolios, landing pages, and more. I also offer <strong>SEO</strong> services, ensuring the sites I build rank well in search engines.
                    </p>
                </section>

                <section className="mb-16">
                    <div className="flex items-center mb-6">
                        <LightBulbIcon className="h-8 w-8 text-yellow-500 mr-3" />
                        <h2 className="text-3xl font-semibold text-white">Skills & Expertise</h2>
                    </div>
                    <ul className="list-disc list-inside space-y-4 text-lg leading-7">
                        <li className='flex gap-3 list-none'><span className=' text-green-400 font-semibold'>✓</span><span>JavaScript(Core & Advanced)</span></li>
                        <li className='flex gap-3 list-none'><span className=' text-green-400 font-semibold'>✓</span><span>React.js and Next.js</span></li>
                        <li className='flex gap-3 list-none'><span className=' text-green-400 font-semibold'>✓</span><span>Tailwind CSS & TypeScript</span></li>
                        <li className='flex gap-3 list-none'><span className=' text-green-400 font-semibold'>✓</span><span>MongoDB, Express.js, Node.js</span></li>
                        <li className='flex gap-3 list-none'><span className=' text-green-400 font-semibold'>✓</span><span>SEO Optimization and Content Creation</span></li>
                        <li className='flex gap-3 list-none'><span className=' text-green-400 font-semibold'>✓</span><span>Git, Version Control, and CI/CD Pipelines</span></li>
                    </ul>
                </section>

                <section className="mb-16">
                    <div className="flex items-center mb-6">
                        <BriefcaseIcon className="h-8 w-8 text-green-500 mr-3" />
                        <h2 className="text-3xl font-semibold text-white">What Drives Me</h2>
                    </div>
                    <p className="text-lg leading-7 mb-6">
                        I am passionate about <strong>technology</strong>, always exploring new trends and tools to expand my knowledge. My long-term goal is to become a <strong>JavaScript Engineer</strong>, contributing to impactful projects and helping businesses build amazing web applications.
                    </p>
                    <p className="text-lg leading-7">
                        I am also an avid learner, currently exploring <strong>AI technologies</strong> to integrate cutting-edge features into my web projects. With a strong commitment to continuous learning, I stay updated with the latest developments in the web development world.
                    </p>
                </section>

                <section>
                    <div className="flex items-center mb-6">
                        <BriefcaseIcon className="h-8 w-8 text-blue-500 mr-3" />
                        <h2 className="text-3xl font-semibold text-white">Let&apos;s Build Something Great Together</h2>
                    </div>
                    <p className="text-lg leading-7">
                        I’m always open to new challenges and collaboration opportunities. Whether you need a <strong>full-stack developer</strong> to bring your idea to life or just some guidance on your web development project, I’m here to help. Feel free to <span onClick={handleContactClick} className="text-blue-400 cursor-pointer underline" >contact me</span>!
                    </p>
                </section>
            </div>
        </div>
    );
};

export default AboutPage;
