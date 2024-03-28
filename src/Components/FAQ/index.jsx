import { Accordion } from "flowbite-react";

const FAQ = () => {
    return (
        <div className="bg-white h-auto py-10">
            <div className="text-center py-10">
                <h2 className="text-fastaColor-500 text-3xl uppercase font-bold mb-2">QUESTION ANSWERS</h2>
                <p className="text-xs text-fastaColor-400 text-fastaColor-800">We help our clients renew their business</p>
            </div> 

            <div className="w-4/5 mx-auto flex items-end gap-5">
                <div className="w-3/6">
                    <Accordion collapseAll>
                        <Accordion.Panel>
                            <Accordion.Title><span className="text-fastaColor-300">1.</span> THINK AHEAD AND BOOST YOUR BUSINESS?</Accordion.Title>
                            <Accordion.Content>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.
                            </p>
                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Title><span className="text-fastaColor-300">2.</span> HOW CONSULTANCY EXPERTS WORK?</Accordion.Title>
                            <Accordion.Content>
                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, totam?
                                </p>
                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Title><span className="text-fastaColor-300">3.</span> WHAT IS THE BEST ADVICE FOR GROWTH?</Accordion.Title>
                            <Accordion.Content>
                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, totam?
                                </p>
                            </Accordion.Content>
                        </Accordion.Panel>
                        
                        <Accordion.Panel>
                            <Accordion.Title><span className="text-fastaColor-300">4.</span> HOW TO IMPROVE YOUR BUSINESS?</Accordion.Title>
                            <Accordion.Content>
                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, totam?
                                </p>
                            </Accordion.Content>
                        </Accordion.Panel>
                    </Accordion>
                </div>

                <div  className="w-3/6 flex justify-between">
                    <div>
                        <p className="text-xs leading-6 text-fastaColor-800 flex items-center gap-1">
                            <span>
                                <svg width="14" height="10" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22 1.5L8.25 14.5L2 8.59091" stroke="#2D95FD" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </span>
                            <span>
                                Nsectetur cing elit.
                            </span>
                        </p>
                        <p className="text-xs leading-6 text-fastaColor-800 flex items-center gap-1">
                            <span>
                                <svg width="14" height="10" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22 1.5L8.25 14.5L2 8.59091" stroke="#2D95FD" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </span>
                            <span>
                                Suspe ndisse suscipit sagittis leo
                            </span> 
                        </p>
                        <p className="text-xs leading-6 text-fastaColor-800 flex items-center gap-1">
                            <span>
                                <svg width="14" height="10" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22 1.5L8.25 14.5L2 8.59091" stroke="#2D95FD" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </span>
                            <span>
                                Entum estibulum dignissim posuere
                            </span>
                        </p>
                        <p className="text-xs leading-6 text-fastaColor-800 flex items-center gap-1">
                            <span>
                                <svg width="14" height="10" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22 1.5L8.25 14.5L2 8.59091" stroke="#2D95FD" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </span>
                            <span>
                                If you are going to use a passage
                            </span>
                        </p>
                        <p className="text-xs leading-6 text-fastaColor-800 flex items-center gap-1">
                            <span>
                                <svg width="14" height="10" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22 1.5L8.25 14.5L2 8.59091" stroke="#2D95FD" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </span>
                            <span>
                                If you are going to use a passage test data.
                            </span>
                        </p>
                    </div>
                    <div className="bg-fastaColor-300 inline-block h-auto p-6 text-white text-center">
                        <h4 className="text-4xl font-bold">30</h4>
                        <p className="text-xs font-semibold">Years of</p>
                        <p className="text-xs font-semibold">Expeirence</p>
                    </div>
                </div>
            </div>   
        </div>
    )
}

export default FAQ;