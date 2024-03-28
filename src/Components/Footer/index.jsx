import Button from "../Button";

const Footer = () => {
    return (
        <footer className="bg-fastaColor-600 py-10 h-auto">
            <div className="w-4/5 mx-auto container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                    <h4 className="text-left md:text-center text-white text-sm font-semibold py-3">CreativeLogo</h4>
                    <p className="text-xs text-fastaColor-800 leading-7 border-b p-2 mb-5">Welcome to our consultancy agency. Lore ipsum simply text amet cing elit simply text amet cing elit.</p>
                    <p className="flex items-center gap-1 text-fastaColor-800 text-xs leading-7">
                        <span>
                            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M17.3061 13.8666L16.6294 16.799C16.5586 17.106 16.2853 17.3235 15.9703 17.3237C8.75206 17.3237 2.88728 11.472 2.88728 4.24069C2.8983 3.92955 3.11121 3.66209 3.41195 3.58158L6.34434 2.90487C6.39436 2.89429 6.44526 2.8884 6.49637 2.88728C6.76287 2.90073 7.00107 3.05775 7.11849 3.29736L8.4719 6.45532C8.50505 6.54047 8.52351 6.63062 8.52649 6.72194C8.51547 6.92226 8.4264 7.11029 8.27836 7.24571L6.569 8.64424C7.60473 10.8394 9.3715 12.6062 11.5667 13.6419L12.9652 11.9326C13.1006 11.7845 13.2887 11.6955 13.489 11.6845C13.5803 11.6874 13.6705 11.7059 13.7556 11.739L16.9136 13.0925C17.1533 13.2097 17.3104 13.448 17.3237 13.7146C17.3228 13.7657 17.3169 13.8166 17.3061 13.8666H17.3061ZM18.0455 0H2.16546C0.96951 0 0 0.96951 0 2.16546V18.0455C0 19.2414 0.96951 20.2109 2.16546 20.2109H18.0455C19.2414 20.2109 20.2109 19.2414 20.2109 18.0455V2.16546C20.2109 0.96951 19.2414 0 18.0455 0H18.0455Z" fill="#3C72FC"/>
                            </svg>
                        </span> 
                        <span>
                            +92 666 888 0000
                        </span>
                    </p>
                    <p className="flex items-center gap-1 text-fastaColor-800 text-xs leading-7">
                        <span>
                            <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M18 3.5L10 7.875L2 3.5V1.75L10 6.125L18 1.75V3.5ZM18 0H2C0.9 0 0.01 0.7875 0.01 1.75L0 12.25C0 13.2125 0.9 14 2 14H18C19.1 14 20 13.2125 20 12.25V1.75C20 0.7875 19.1 0 18 0Z" fill="#2D95FD"/>
                            </svg>
                        </span>
                        <span>
                            needhelp@company.com
                        </span>
                    </p>
                    <p className="flex items-center gap-1 text-fastaColor-800 text-xs leading-7">
                        <span>
                            <svg width="17" height="23" viewBox="0 0 17 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.4232 12.471C10.3615 12.471 11.9329 10.8996 11.9329 8.9613C11.9329 7.02295 10.3615 5.45163 8.4232 5.45163C6.48485 5.45163 4.91353 7.02295 4.91353 8.9613C4.91353 10.8996 6.48485 12.471 8.4232 12.471ZM7.55754 22.5468C1.18319 13.3059 0 12.3575 0 8.96129C0 4.30927 3.77118 0.538086 8.4232 0.538086C13.0752 0.538086 16.8464 4.30927 16.8464 8.96129C16.8464 12.3575 15.6632 13.3059 9.28886 22.5468C8.87055 23.1511 7.97581 23.151 7.55754 22.5468Z" fill="#22B0FE"/>
                            </svg>
                        </span>
                        <span>
                            66 Broklyn Street New York, USA
                        </span>
                    </p>
                </div>

                <div className="md:ml-20">
                    <h4 className="text-white text-sm font-semibold py-3">Explore</h4>
                    <div className="mt-5 text-fastaColor-800">
                        <p className="text-xs leading-7">About</p>
                        <p className="text-xs leading-7">Meet Our Team</p>
                        <p className="text-xs leading-7">Case Studies</p>
                        <p className="text-xs leading-7">Latest News</p>
                        <p className="text-xs leading-7">Contact</p>
                    </div>
                </div>

                <div>
                    <div className="md:text-left mt-14 text-fastaColor-800">
                        <p className="text-xs leading-7">Support</p>
                        <p className="text-xs leading-7">Term of Use</p>
                        <p className="text-xs leading-7">Privacy Policy</p>
                        <p className="text-xs leading-7">Help</p>
                    </div>
                </div>

                <div>
                    <h4 className="text-white text-sm font-semibold py-3">NEWLETTER</h4>
                    <div className="bg-fastaColor-500 p-4 box-border my-3">
                        <p className="text-xs text-fastaColor-800">subscribe for latest article and resources</p>
                        <div class="flex my-4">
                            <input type="email" placeholder="Email Address" class="p-3 w-full focus:outline-none" />
                            <Button>
                                REGISTER
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-4/5 mx-auto flex justify-between p-3 border-t mt-16">
                <p className="text-fastaColor-800 text-xs font-semibold">© Copyright 2021 by Company</p>

                <ul className="flex">
                    <li className="pl-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-white" viewBox="0 0 16 16">
                            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                        </svg>
                    </li>
                    <li className="pl-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-white" viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                        </svg>
                    </li>
                    <li className="pl-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-white" viewBox="0 0 16 16">
                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15"/>
                        </svg>
                    </li>
                    <li className="pl-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-white" viewBox="0 0 16 16">
                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                        </svg>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;