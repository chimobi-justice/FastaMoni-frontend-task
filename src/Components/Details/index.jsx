import { Progress } from "flowbite-react";

const Details = () => {
    return (
        <div className="border-gray-200 py-20">
            <div className="w-4/5 mx-auto flex items-start justify-between">
                <div className="w-2/4">
                    <div className="bg-fastaColor-300 inline-block h-auto p-7 items-center">
                        <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M20.6353 10.0622L3.74196 0.30791C2.36938 -0.48425 0.267312 0.28447 0.267312 2.24377V21.7477C0.267312 23.5054 2.2206 24.5648 3.74196 23.6835L20.6353 13.9339C22.1423 13.0668 22.1471 10.9294 20.6353 10.0622Z" fill="white"/>
                        </svg>
                    </div>
                </div>

                <div className="w-2/4">
                    <h2 className="break-words whitespace-pre-line font-bold text-4xl leading-10 mb-10 uppercase">
                        <span className="block">We're leading in</span> 
                        <span className="block">the market</span> 
                    </h2>
                    <p className="text-xs leading-6 text-fastaColor-800 my-5">Lorem ipsum is simply free text dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua lonm andhn.</p>
                    <p className="text-lg leading font-semibold text-fastaColor-300">We have 35+ years of experience. We offer marketing and consulting services</p>

                    <div className="my-3">
                        <Progress progress={88} />
                        <div className="flex justify-between w-10/12">
                            <p className="font-semibold mt-1 text-xs">CONSULTING</p>
                            <p className="text-sm text-fastaColor-800">88%</p>
                        </div>
                    </div>

                    <div className="my-3">
                        <Progress progress={68} />
                        <div className="flex justify-between w-4/6">
                            <p className="font-semibold mt-1 text-xs">ADVICES</p>
                            <p className="text-sm text-fastaColor-800">68%</p>
                        </div>
                    </div>

                    <div className="flex gap-2 mt-10 mb-28">
                        <div className="bg-fastaColor-50 inline-block h-auto p-3 items-center">
                            <svg width="22" height="22" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M25.3169 21.0175L24.5986 19.7006C24.1167 19.9635 23.8169 20.4686 23.8169 21.0175H25.3169ZM25.3169 24.6012H23.8169L23.8169 24.6073L25.3169 24.6012ZM24.5414 26.3714L25.5544 27.4776L25.5544 27.4776L24.5414 26.3714ZM22.7077 26.9903L22.546 28.4815C22.555 28.4825 22.564 28.4834 22.573 28.4842L22.7077 26.9903ZM12.3789 23.323L13.194 22.0637L13.1823 22.0563L12.3789 23.323ZM5.19779 16.1556L6.46316 15.35L6.456 15.339L5.19779 16.1556ZM1.52345 5.79872L0.029563 5.93397C0.0302712 5.94179 0.0310408 5.94961 0.0318718 5.95742L1.52345 5.79872ZM2.13955 3.97297L3.24642 4.98531L3.24642 4.98531L2.13955 3.97297ZM3.90519 3.19456V1.69456L3.90376 1.69456L3.90519 3.19456ZM7.49575 3.19456V4.69456C7.50066 4.69456 7.50557 4.69454 7.51048 4.69449L7.49575 3.19456ZM9.88946 5.24921L11.3766 5.05269L11.3746 5.03888L9.88946 5.24921ZM10.7273 8.60594L9.32224 9.13123L9.32352 9.13462L10.7273 8.60594ZM10.1887 11.1265L11.2483 12.1882L11.2542 12.1822L10.1887 11.1265ZM8.66868 12.6436L7.60904 11.5819C7.13041 12.0596 7.03061 12.7985 7.36535 13.3861L8.66868 12.6436ZM15.8498 19.811L15.1094 21.1155C15.6958 21.4483 16.4322 21.3489 16.9094 20.8726L15.8498 19.811ZM17.3698 18.2939L16.3161 17.2262L16.3102 17.2322L17.3698 18.2939ZM19.8952 17.7563L19.3683 19.1607L19.3716 19.162L19.8952 17.7563ZM23.2583 18.5925L23.4675 17.1071L23.4541 17.1053L23.2583 18.5925ZM25.3169 21.0175L26.0352 22.3343C26.5054 22.0778 26.8031 21.5901 26.8164 21.0547L25.3169 21.0175ZM17.1641 0.509136C16.3407 0.417841 15.5992 1.01131 15.5079 1.83469C15.4166 2.65808 16.0101 3.39957 16.8335 3.49086L17.1641 0.509136ZM25.0232 11.6527C25.1158 12.4759 25.8583 13.0681 26.6816 12.9754C27.5048 12.8827 28.097 12.1403 28.0043 11.317L25.0232 11.6527ZM17.2855 5.30592C16.4723 5.14757 15.6848 5.6784 15.5264 6.49155C15.3681 7.3047 15.8989 8.09226 16.7121 8.2506L17.2855 5.30592ZM20.2542 11.7846C20.4131 12.5976 21.2011 13.1279 22.0141 12.9689C22.8271 12.81 23.3574 12.0221 23.1985 11.209L20.2542 11.7846ZM23.8169 21.0175V24.6012H26.8169V21.0175H23.8169ZM23.8169 24.6073C23.8179 24.8566 23.7136 25.0955 23.5284 25.2651L25.5544 27.4776C26.3626 26.7376 26.8213 25.6911 26.8169 24.5951L23.8169 24.6073ZM23.5284 25.2651C23.3431 25.4347 23.0941 25.5191 22.8425 25.4964L22.573 28.4842C23.6639 28.5826 24.7464 28.2175 25.5544 27.4776L23.5284 25.2651ZM22.8695 25.499C19.4193 25.1249 16.1054 23.9482 13.194 22.0637L11.5639 24.5822C14.8689 26.7214 18.6303 28.0569 22.546 28.4815L22.8695 25.499ZM13.1823 22.0563C10.4763 20.34 8.18232 18.0504 6.46312 15.35L3.93247 16.9612C5.8884 20.0334 8.49791 22.6378 11.5755 24.5897L13.1823 22.0563ZM6.456 15.339C4.56167 12.4204 3.38292 9.09766 3.01503 5.64002L0.0318718 5.95742C0.449709 9.88456 1.78849 13.6581 3.93959 16.9722L6.456 15.339ZM3.01734 5.66347C2.99493 5.41588 3.07771 5.16978 3.24642 4.98531L1.03268 2.96063C0.295376 3.76678 -0.068961 4.84574 0.029563 5.93397L3.01734 5.66347ZM3.24642 4.98531C3.41526 4.80072 3.65474 4.6948 3.90662 4.69456L3.90376 1.69456C2.8118 1.6956 1.76985 2.15462 1.03268 2.96063L3.24642 4.98531ZM3.90519 4.69456H7.49575V1.69456H3.90519V4.69456ZM7.51048 4.69449C7.96142 4.69006 8.34198 5.0196 8.40428 5.45954L11.3746 5.03888C11.1006 3.10396 9.43305 1.67546 7.48102 1.69463L7.51048 4.69449ZM8.40239 5.44572C8.56879 6.70494 8.87737 7.94131 9.32225 9.13123L12.1323 8.08065C11.7668 7.10297 11.5132 6.0872 11.3765 5.0527L8.40239 5.44572ZM9.32352 9.13462C9.44545 9.45836 9.36782 9.82376 9.12312 10.0707L11.2542 12.1822C12.3237 11.1028 12.6667 9.49968 12.131 8.07726L9.32352 9.13462ZM9.12904 10.0648L7.60904 11.5819L9.72833 13.7052L11.2483 12.1881L9.12904 10.0648ZM7.36535 13.3861C9.20293 16.6116 11.8785 19.2819 15.1094 21.1155L16.5902 18.5064C13.8284 16.939 11.542 14.6569 9.97201 11.9011L7.36535 13.3861ZM16.9094 20.8726L18.4294 19.3555L16.3102 17.2322L14.7902 18.7493L16.9094 20.8726ZM18.4235 19.3615C18.6714 19.1167 19.0405 19.0377 19.3683 19.1607L20.4221 16.3519C19.0003 15.8185 17.3972 16.1593 16.3161 17.2263L18.4235 19.3615ZM19.3716 19.162C20.5634 19.6058 21.8015 19.9137 23.0626 20.0797L23.4541 17.1053C22.417 16.9688 21.3987 16.7156 20.4187 16.3506L19.3716 19.162ZM23.0492 20.0778C23.5005 20.1414 23.8285 20.5313 23.8174 20.9802L26.8164 21.0547C26.8656 19.0782 25.4231 17.3825 23.4675 17.1072L23.0492 20.0778ZM24.5986 19.7006L24.5986 19.7006L26.0352 22.3343L26.0352 22.3343L24.5986 19.7006ZM16.8335 3.49086C21.141 3.96848 24.5398 7.35898 25.0232 11.6527L28.0043 11.317C27.3637 5.62662 22.8611 1.14082 17.1641 0.509136L16.8335 3.49086ZM16.7121 8.2506C18.5053 8.59981 19.9051 9.9986 20.2542 11.7846L23.1985 11.209C22.6145 8.22152 20.2748 5.88803 17.2855 5.30592L16.7121 8.2506Z" fill="#3C72FC"/>
                            </svg>
                        </div>

                        <div>
                            <p className="text-xs text-fastaColor-800 mb-1">Have any question? Give us a call</p>
                            <p className="text-sm font-semibold">+92 666 888 0000</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details;