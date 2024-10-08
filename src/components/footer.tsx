import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative w-full px-5 pt-4 lg:px-10 border-t-2 bg-gradient-to-r from-blue-800 via-black to-gray-800 overflow-hidden text-white ">
            {/* <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50 "></div>
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(255,255,255,0.15)_0%,_transparent_70%)]"></div> */}
            <div className=" grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">

                <div className="sm:col-span-2 z-10">
                    <div className="relative flex items-center gap-3">
                        <Image src="/33kb.png"
                            alt='logo'
                            width={50}
                            height={50}
                            className=''
                        ></Image>
                        <div className=" text-2xl relative  font-bold tracking-wide text-white-400 inline-flex  items-center  ">Freelancer on
                            <a title='Visit My Fiverr Account' href="https://www.fiverr.com/arifbusiness200" className="px-2 max-sm:relative flex items-start ">
                                <svg fill="#00e00f" width="90px" height="90px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><path d="M23.004 15.588a.995.995 0 1 0 .002-1.99.995.995 0 0 0-.002 1.99zm-.996-3.705h-.85c-.546 0-.84.41-.84 1.092v2.466h-1.61v-3.558h-.684c-.547 0-.84.41-.84 1.092v2.466h-1.61v-4.874h1.61v.74c.264-.574.626-.74 1.163-.74h1.972v.74c.264-.574.625-.74 1.162-.74h.527v1.316zm-6.786 1.501h-3.359c.088.546.43.858 1.006.858.43 0 .732-.175.83-.487l1.425.4c-.351.848-1.22 1.364-2.255 1.364-1.748 0-2.549-1.355-2.549-2.515 0-1.14.703-2.505 2.45-2.505 1.856 0 2.471 1.384 2.471 2.408 0 .224-.01.37-.02.477zm-1.562-.945c-.04-.42-.342-.81-.889-.81-.508 0-.81.225-.908.81h1.797zM7.508 15.44h1.416l1.767-4.874h-1.62l-.86 2.837-.878-2.837H5.72l1.787 4.874zm-6.6 0H2.51v-3.558h1.524v3.558h1.591v-4.874H2.51v-.302c0-.332.235-.536.606-.536h.918V8.412H2.85c-1.162 0-1.943.712-1.943 1.755v.4H0v1.316h.908v3.558z" /></svg>

                            </a>
                        </div>
                    </div>
                    <div className="mt-6 lg:max-w-xl">
                        <p className="text-sm text-white">
                            As a MERN STACK developer with 2+ years of experience in HTML,Tailwind CSS, JavaScript, MongoDB, Express,Reactn, Node.js and TypeScript, My expertise allows me to develop visually appealing, fully Customable, High-level SEO and user-friendly websites with latest Next.js technology, as well as dynamic and scalable web applications. I am dedicated to delivering high-quality solutions that meet the needs of clients and users. Lets build the future.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col gap-4 md:pt-4 z-10">
                    <div className="flex flex-col gap-1 text-sm">
                        <p className="text-base font-bold tracking-wide text-cyan-400">Popular Courses</p>
                        <a href="#">Next.js</a>
                        <a href="#">Web Development</a>
                        <a href="#">JavaScript</a>
                    </div>
                    <div className="flex flex-col gap-1 text-sm">
                        <p className="text-base font-bold tracking-wide text-cyan-400">Popular Topics</p>
                        <a href="#">How to build Modern Web Apps</a>
                        <a href="#">Software Solutions</a>
                        <a href="#">Artificial Intelligence</a>
                    </div>
                </div>

                <div className='md:pt-4 z-10'>
                    <p className="text-base font-bold tracking-wide text-cyan-400">I AM ALSO AVAILABLE ON</p>
                    <div className="flex flex-wrap items-center gap-2  py-4 ">

                        <a className="w-full flex flex-row justify-start relative items-center " href="https://www.youtube.com/@arifislamz">


                            <svg width="80px" height="35px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="24" cy="24" r="20" fill="#0000" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M35.3005 16.3781C35.6996 16.7772 35.9872 17.2739 36.1346 17.8187C36.9835 21.2357 36.7873 26.6324 36.1511 30.1813C36.0037 30.7261 35.7161 31.2228 35.317 31.6219C34.9179 32.021 34.4212 32.3086 33.8764 32.456C31.8819 33 23.8544 33 23.8544 33C23.8544 33 15.8269 33 13.8324 32.456C13.2876 32.3086 12.7909 32.021 12.3918 31.6219C11.9927 31.2228 11.7051 30.7261 11.5577 30.1813C10.7038 26.7791 10.9379 21.3791 11.5412 17.8352C11.6886 17.2903 11.9762 16.7936 12.3753 16.3945C12.7744 15.9954 13.2711 15.7079 13.8159 15.5604C15.8104 15.0165 23.8379 15 23.8379 15C23.8379 15 31.8654 15 33.8599 15.544C34.4047 15.6914 34.9014 15.979 35.3005 16.3781ZM27.9423 24L21.283 27.8571V20.1428L27.9423 24Z" fill="white" />
                            </svg>
                            <span className='font-bold relative right-5'>YouTube</span>
                        </a>
                        <a href="https://www.linkedin.com/arifislamz" className="w-full min-w-xl flex flex-row justify-start relative items-center">
                            <svg width="80px" height="25px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="24" cy="24" r="20" fill="#ffff" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.7747 14.2839C18.7747 15.529 17.8267 16.5366 16.3442 16.5366C14.9194 16.5366 13.9713 15.529 14.0007 14.2839C13.9713 12.9783 14.9193 12 16.3726 12C17.8267 12 18.7463 12.9783 18.7747 14.2839ZM14.1199 32.8191V18.3162H18.6271V32.8181H14.1199V32.8191Z" fill="black" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M22.2393 22.9446C22.2393 21.1357 22.1797 19.5935 22.1201 18.3182H26.0351L26.2432 20.305H26.3322C26.9254 19.3854 28.4079 17.9927 30.8101 17.9927C33.7752 17.9927 35.9995 19.9502 35.9995 24.219V32.821H31.4922V24.7838C31.4922 22.9144 30.8404 21.6399 29.2093 21.6399C27.9633 21.6399 27.2224 22.4999 26.9263 23.3297C26.8071 23.6268 26.7484 24.0412 26.7484 24.4574V32.821H22.2411V22.9446H22.2393Z" fill="black" />
                            </svg>
                            <span className='font-bold relative right-4'>Linkedin</span>
                        </a>
                        <a href="https://www.instagram.com/arifislamz" className="w-full min-w-xl flex flex-row justify-start relative items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="80px" height="20px" viewBox="0 0 20 20" version="1.1">

                                <title>instagram [#167]</title>
                                <desc>Created with Sketch.</desc>
                                <defs>

                                </defs>
                                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g id="Dribbble-Light-Preview" transform="translate(-340.000000, -7439.000000)" fill="#ffff">
                                        <g id="icons" transform="translate(56.000000, 160.000000)">
                                            <path d="M289.869652,7279.12273 C288.241769,7279.19618 286.830805,7279.5942 285.691486,7280.72871 C284.548187,7281.86918 284.155147,7283.28558 284.081514,7284.89653 C284.035742,7285.90201 283.768077,7293.49818 284.544207,7295.49028 C285.067597,7296.83422 286.098457,7297.86749 287.454694,7298.39256 C288.087538,7298.63872 288.809936,7298.80547 289.869652,7298.85411 C298.730467,7299.25511 302.015089,7299.03674 303.400182,7295.49028 C303.645956,7294.859 303.815113,7294.1374 303.86188,7293.08031 C304.26686,7284.19677 303.796207,7282.27117 302.251908,7280.72871 C301.027016,7279.50685 299.5862,7278.67508 289.869652,7279.12273 M289.951245,7297.06748 C288.981083,7297.0238 288.454707,7296.86201 288.103459,7296.72603 C287.219865,7296.3826 286.556174,7295.72155 286.214876,7294.84312 C285.623823,7293.32944 285.819846,7286.14023 285.872583,7284.97693 C285.924325,7283.83745 286.155174,7282.79624 286.959165,7281.99226 C287.954203,7280.99968 289.239792,7280.51332 297.993144,7280.90837 C299.135448,7280.95998 300.179243,7281.19026 300.985224,7281.99226 C301.980262,7282.98483 302.473801,7284.28014 302.071806,7292.99991 C302.028024,7293.96767 301.865833,7294.49274 301.729513,7294.84312 C300.829003,7297.15085 298.757333,7297.47145 289.951245,7297.06748 M298.089663,7283.68956 C298.089663,7284.34665 298.623998,7284.88065 299.283709,7284.88065 C299.943419,7284.88065 300.47875,7284.34665 300.47875,7283.68956 C300.47875,7283.03248 299.943419,7282.49847 299.283709,7282.49847 C298.623998,7282.49847 298.089663,7283.03248 298.089663,7283.68956 M288.862673,7288.98792 C288.862673,7291.80286 291.150266,7294.08479 293.972194,7294.08479 C296.794123,7294.08479 299.081716,7291.80286 299.081716,7288.98792 C299.081716,7286.17298 296.794123,7283.89205 293.972194,7283.89205 C291.150266,7283.89205 288.862673,7286.17298 288.862673,7288.98792 M290.655732,7288.98792 C290.655732,7287.16159 292.140329,7285.67967 293.972194,7285.67967 C295.80406,7285.67967 297.288657,7287.16159 297.288657,7288.98792 C297.288657,7290.81525 295.80406,7292.29716 293.972194,7292.29716 C292.140329,7292.29716 290.655732,7290.81525 290.655732,7288.98792" id="instagram-[#167]">

                                            </path>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                            <span className='font-bold relative right-4'>instagram</span>
                        </a>
                        <Link href="https://www.fiverr.com/arifbusiness200" className=" flex flex-row justify-center relative items-center">
                            <svg fill="#00e00f" width="200px" height="100px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><path d="M23.004 15.588a.995.995 0 1 0 .002-1.99.995.995 0 0 0-.002 1.99zm-.996-3.705h-.85c-.546 0-.84.41-.84 1.092v2.466h-1.61v-3.558h-.684c-.547 0-.84.41-.84 1.092v2.466h-1.61v-4.874h1.61v.74c.264-.574.626-.74 1.163-.74h1.972v.74c.264-.574.625-.74 1.162-.74h.527v1.316zm-6.786 1.501h-3.359c.088.546.43.858 1.006.858.43 0 .732-.175.83-.487l1.425.4c-.351.848-1.22 1.364-2.255 1.364-1.748 0-2.549-1.355-2.549-2.515 0-1.14.703-2.505 2.45-2.505 1.856 0 2.471 1.384 2.471 2.408 0 .224-.01.37-.02.477zm-1.562-.945c-.04-.42-.342-.81-.889-.81-.508 0-.81.225-.908.81h1.797zM7.508 15.44h1.416l1.767-4.874h-1.62l-.86 2.837-.878-2.837H5.72l1.787 4.874zm-6.6 0H2.51v-3.558h1.524v3.558h1.591v-4.874H2.51v-.302c0-.332.235-.536.606-.536h.918V8.412H2.85c-1.162 0-1.943.712-1.943 1.755v.4H0v1.316h.908v3.558z" /></svg>

                        </Link>

                    </div>
                    <p className="text-base font-bold tracking-wide text-cyan-400">Contacts</p>
                    <div className="flex">
                        <p className="font-bold mr-1 text-white-500">Email:</p>
                        <a href="#" title="send email">admin@company.com</a>
                    </div>
                </div>

            </div>

            <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row z-99">
                <p className="text-sm text-gray-300">© Copyright <span>{currentYear}</span>. All rights reserved.</p>
                <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
                    <li>
                        <a href="/privacy-policy"
                            className="text-sm text-white transition-colors duration-300 hover:text-deep-purple-accent-400">Privacy
                            &amp; Cookies Policy
                        </a>
                    </li>
                    <li>
                        <a href="#"
                            className="text-sm text-gray-300 transition-colors duration-300 hover:text-deep-purple-accent-400">Disclaimer
                        </a>
                    </li>
                </ul>
            </div>

        </footer>
    )
}

export default Footer;
