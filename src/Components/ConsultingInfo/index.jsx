const ConsultingInfo = () => {
    return (
        <div className="bg-fastaColor-900 h-auto py-36">
            <div className="flex justify-between gap-4 w-4/5 mx-auto">
                <div className="w-4/5 mx-auto text-white text-center border-r">
                   <div className="bg-fastaColor-500 inline-block p-3">
                        <svg width="48" height="48" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M60 60H47V58H47.347C49.951 58 52.091 56.045 52.326 53.453L52.995 46.091L51.003 45.91L50.334 53.272C50.193 54.827 48.909 56 47.347 56H41C40.449 56 40 55.551 40 55C40 54.449 40.449 54 41 54H46.087C47.128 54 47.984 53.218 48.079 52.173L48.483 47.293C48.729 44.325 51.253 42 54.231 42C57.412 42 60 44.588 60 47.769V60ZM53 32C55.206 32 57 33.794 57 36C57 38.206 55.206 40 53 40C50.794 40 49 38.206 49 36C49 33.794 50.794 32 53 32ZM56.953 40.502C58.205 39.401 59 37.794 59 36C59 32.691 56.309 30 53 30C49.691 30 47 32.691 47 36C47 38.243 48.239 40.2 50.067 41.229C48.084 42.501 46.695 44.647 46.49 47.128L46.087 52H41C39.346 52 38 53.346 38 55C38 56.654 39.346 58 41 58H45V62H62V47.769C62 44.444 59.897 41.608 56.953 40.502Z" fill="#3C72FC"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M21 56H14.653C13.091 56 11.807 54.827 11.666 53.272L10.997 45.91L9.005 46.091L9.674 53.453C9.909 56.045 12.049 58 14.653 58H15V60H2V47.769C2 44.588 4.588 42 7.769 42C10.747 42 13.272 44.325 13.518 47.293L13.922 52.181C14.016 53.218 14.872 54 15.913 54H21C21.551 54 22 54.449 22 55C22 55.551 21.551 56 21 56ZM9 32C11.206 32 13 33.794 13 36C13 38.206 11.206 40 9 40C6.794 40 5 38.206 5 36C5 33.794 6.794 32 9 32ZM21 52L15.914 52.008L15.51 47.128C15.304 44.647 13.915 42.501 11.933 41.229C13.761 40.2 15 38.243 15 36C15 32.691 12.309 30 9 30C5.691 30 3 32.691 3 36C3 37.794 3.795 39.401 5.047 40.502C2.103 41.608 0 44.444 0 47.769V62H17V58H21C22.654 58 24 56.654 24 55C24 53.346 22.654 52 21 52Z" fill="#3C72FC"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M37.196 39.946L35.217 38.817L34.731 39.073C34.282 39.31 33.821 39.503 33.36 39.645L32.835 39.807L32.237 42H29.763L29.163 39.807L28.638 39.645C28.178 39.503 27.716 39.311 27.266 39.073L26.781 38.817L24.803 39.945L23.053 38.196L24.182 36.217L23.926 35.731C23.689 35.282 23.496 34.821 23.354 34.36L23.192 33.835L21 33.237V30.763L23.193 30.163L23.355 29.638C23.497 29.178 23.689 28.716 23.927 28.266L24.183 27.781L23.055 25.803L23.355 25.503C23.569 25.644 23.807 25.749 24.055 25.832C24.216 27.186 24.762 28.423 25.584 29.427C25.203 30.228 25 31.103 25 32C25 35.309 27.691 38 31 38C34.309 38 37 35.309 37 32C37 31.102 36.797 30.228 36.416 29.428C37.239 28.424 37.784 27.186 37.946 25.833C38.194 25.75 38.431 25.645 38.646 25.504L38.946 25.804L37.818 27.782L38.074 28.267C38.311 28.717 38.504 29.178 38.646 29.639L38.808 30.164L41.001 30.764V33.238L38.808 33.837L38.646 34.362C38.504 34.822 38.312 35.283 38.074 35.733L37.818 36.219L38.947 38.198L37.196 39.946ZM31 13C29.897 13 29 12.103 29 11C29 9.897 29.897 9 31 9C32.103 9 33 9.897 33 11C33 12.103 32.103 13 31 13ZM22 10.708C22 5.906 25.906 2 30.708 2H31.292C36.094 2 40 5.906 40 10.708C40 12.053 39.682 13.399 39.081 14.603L36.382 20H32V14.858C33.72 14.411 35 12.858 35 11C35 8.794 33.206 7 31 7C28.794 7 27 8.794 27 11C27 12.858 28.28 14.411 30 14.858V20H25.618L22.919 14.603C22.318 13.399 22 12.053 22 10.708ZM31 30C28.586 30 26.566 28.279 26.101 26H35.899C35.434 28.279 33.414 30 31 30ZM25 22H37C37.551 22 38 22.449 38 23C38 23.551 37.551 24 37 24H25C24.449 24 24 23.551 24 23C24 22.449 24.449 22 25 22ZM35 32C35 34.206 33.206 36 31 36C28.794 36 27 34.206 27 32C27 31.607 27.058 31.221 27.168 30.851C28.27 31.575 29.586 32 31 32C32.414 32 33.73 31.575 34.831 30.851C34.942 31.221 35 31.607 35 32ZM40.089 36.166C40.193 35.939 40.289 35.711 40.375 35.481L43 34.763V29.237L40.375 28.519C40.289 28.29 40.194 28.061 40.089 27.834L41.439 25.468L39.852 23.881C39.94 23.601 40 23.309 40 23C40 21.866 39.36 20.888 38.429 20.379L40.87 15.497C41.416 14.403 41.769 13.213 41.918 12H43.434L47 17.944L50.299 12.444C50.464 12.17 50.765 12 51.084 12C51.589 12 52 12.411 52 12.916V20H54V12.916C54 11.308 52.692 10 51.084 10C50.065 10 49.108 10.542 48.584 11.416L47 14.056L44.566 10H41.964C41.597 4.426 36.957 0 31.292 0H30.708C25.043 0 20.403 4.426 20.036 10H17.434L15 14.056L13.416 11.416C12.892 10.542 11.934 10 10.916 10C9.308 10 8 11.308 8 12.916V20H10V12.916C10 12.411 10.411 12 10.916 12C11.236 12 11.537 12.17 11.701 12.445L15 17.944L18.566 12H20.082C20.231 13.214 20.584 14.404 21.13 15.497L23.571 20.379C22.64 20.888 22 21.866 22 23C22 23.309 22.06 23.601 22.148 23.882L20.561 25.469L21.911 27.835C21.807 28.062 21.711 28.29 21.625 28.52L19 29.237V34.763L21.625 35.48C21.711 35.71 21.807 35.938 21.911 36.165L20.561 38.531L24.469 42.439L26.835 41.089C27.062 41.193 27.29 41.289 27.52 41.375L28.237 44H33.763L34.48 41.375C34.71 41.289 34.938 41.193 35.165 41.089L37.531 42.439L41.439 38.531L40.089 36.166Z" fill="#3C72FC"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M52 26H54V28H52V26Z" fill="#3C72FC"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M52 22H54V24H52V22Z" fill="#3C72FC"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8 26H10V28H8V26Z" fill="#3C72FC"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8 22H10V24H8V22Z" fill="#3C72FC"/>
                        </svg>
                   </div>
                   <h3 className="text-lg font-bold mb-3">420</h3>
                   <p className="text-xs text-fastaColor-800">CONSULTING SOLUTIONS</p>
                </div>

                <div className="w-4/5 mx-auto text-white text-center border-r">
                   <div className="bg-fastaColor-500 inline-block p-3">
                        <svg width="48" height="48" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M60 60H47V58H47.347C49.951 58 52.091 56.045 52.326 53.453L52.995 46.091L51.003 45.91L50.334 53.272C50.193 54.827 48.909 56 47.347 56H41C40.449 56 40 55.551 40 55C40 54.449 40.449 54 41 54H46.087C47.128 54 47.984 53.218 48.079 52.173L48.483 47.293C48.729 44.325 51.253 42 54.231 42C57.412 42 60 44.588 60 47.769V60ZM53 32C55.206 32 57 33.794 57 36C57 38.206 55.206 40 53 40C50.794 40 49 38.206 49 36C49 33.794 50.794 32 53 32ZM56.953 40.502C58.205 39.401 59 37.794 59 36C59 32.691 56.309 30 53 30C49.691 30 47 32.691 47 36C47 38.243 48.239 40.2 50.067 41.229C48.084 42.501 46.695 44.647 46.49 47.128L46.087 52H41C39.346 52 38 53.346 38 55C38 56.654 39.346 58 41 58H45V62H62V47.769C62 44.444 59.897 41.608 56.953 40.502Z" fill="#3C72FC"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M21 56H14.653C13.091 56 11.807 54.827 11.666 53.272L10.997 45.91L9.005 46.091L9.674 53.453C9.909 56.045 12.049 58 14.653 58H15V60H2V47.769C2 44.588 4.588 42 7.769 42C10.747 42 13.272 44.325 13.518 47.293L13.922 52.181C14.016 53.218 14.872 54 15.913 54H21C21.551 54 22 54.449 22 55C22 55.551 21.551 56 21 56ZM9 32C11.206 32 13 33.794 13 36C13 38.206 11.206 40 9 40C6.794 40 5 38.206 5 36C5 33.794 6.794 32 9 32ZM21 52L15.914 52.008L15.51 47.128C15.304 44.647 13.915 42.501 11.933 41.229C13.761 40.2 15 38.243 15 36C15 32.691 12.309 30 9 30C5.691 30 3 32.691 3 36C3 37.794 3.795 39.401 5.047 40.502C2.103 41.608 0 44.444 0 47.769V62H17V58H21C22.654 58 24 56.654 24 55C24 53.346 22.654 52 21 52Z" fill="#3C72FC"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M37.196 39.946L35.217 38.817L34.731 39.073C34.282 39.31 33.821 39.503 33.36 39.645L32.835 39.807L32.237 42H29.763L29.163 39.807L28.638 39.645C28.178 39.503 27.716 39.311 27.266 39.073L26.781 38.817L24.803 39.945L23.053 38.196L24.182 36.217L23.926 35.731C23.689 35.282 23.496 34.821 23.354 34.36L23.192 33.835L21 33.237V30.763L23.193 30.163L23.355 29.638C23.497 29.178 23.689 28.716 23.927 28.266L24.183 27.781L23.055 25.803L23.355 25.503C23.569 25.644 23.807 25.749 24.055 25.832C24.216 27.186 24.762 28.423 25.584 29.427C25.203 30.228 25 31.103 25 32C25 35.309 27.691 38 31 38C34.309 38 37 35.309 37 32C37 31.102 36.797 30.228 36.416 29.428C37.239 28.424 37.784 27.186 37.946 25.833C38.194 25.75 38.431 25.645 38.646 25.504L38.946 25.804L37.818 27.782L38.074 28.267C38.311 28.717 38.504 29.178 38.646 29.639L38.808 30.164L41.001 30.764V33.238L38.808 33.837L38.646 34.362C38.504 34.822 38.312 35.283 38.074 35.733L37.818 36.219L38.947 38.198L37.196 39.946ZM31 13C29.897 13 29 12.103 29 11C29 9.897 29.897 9 31 9C32.103 9 33 9.897 33 11C33 12.103 32.103 13 31 13ZM22 10.708C22 5.906 25.906 2 30.708 2H31.292C36.094 2 40 5.906 40 10.708C40 12.053 39.682 13.399 39.081 14.603L36.382 20H32V14.858C33.72 14.411 35 12.858 35 11C35 8.794 33.206 7 31 7C28.794 7 27 8.794 27 11C27 12.858 28.28 14.411 30 14.858V20H25.618L22.919 14.603C22.318 13.399 22 12.053 22 10.708ZM31 30C28.586 30 26.566 28.279 26.101 26H35.899C35.434 28.279 33.414 30 31 30ZM25 22H37C37.551 22 38 22.449 38 23C38 23.551 37.551 24 37 24H25C24.449 24 24 23.551 24 23C24 22.449 24.449 22 25 22ZM35 32C35 34.206 33.206 36 31 36C28.794 36 27 34.206 27 32C27 31.607 27.058 31.221 27.168 30.851C28.27 31.575 29.586 32 31 32C32.414 32 33.73 31.575 34.831 30.851C34.942 31.221 35 31.607 35 32ZM40.089 36.166C40.193 35.939 40.289 35.711 40.375 35.481L43 34.763V29.237L40.375 28.519C40.289 28.29 40.194 28.061 40.089 27.834L41.439 25.468L39.852 23.881C39.94 23.601 40 23.309 40 23C40 21.866 39.36 20.888 38.429 20.379L40.87 15.497C41.416 14.403 41.769 13.213 41.918 12H43.434L47 17.944L50.299 12.444C50.464 12.17 50.765 12 51.084 12C51.589 12 52 12.411 52 12.916V20H54V12.916C54 11.308 52.692 10 51.084 10C50.065 10 49.108 10.542 48.584 11.416L47 14.056L44.566 10H41.964C41.597 4.426 36.957 0 31.292 0H30.708C25.043 0 20.403 4.426 20.036 10H17.434L15 14.056L13.416 11.416C12.892 10.542 11.934 10 10.916 10C9.308 10 8 11.308 8 12.916V20H10V12.916C10 12.411 10.411 12 10.916 12C11.236 12 11.537 12.17 11.701 12.445L15 17.944L18.566 12H20.082C20.231 13.214 20.584 14.404 21.13 15.497L23.571 20.379C22.64 20.888 22 21.866 22 23C22 23.309 22.06 23.601 22.148 23.882L20.561 25.469L21.911 27.835C21.807 28.062 21.711 28.29 21.625 28.52L19 29.237V34.763L21.625 35.48C21.711 35.71 21.807 35.938 21.911 36.165L20.561 38.531L24.469 42.439L26.835 41.089C27.062 41.193 27.29 41.289 27.52 41.375L28.237 44H33.763L34.48 41.375C34.71 41.289 34.938 41.193 35.165 41.089L37.531 42.439L41.439 38.531L40.089 36.166Z" fill="#3C72FC"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M52 26H54V28H52V26Z" fill="#3C72FC"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M52 22H54V24H52V22Z" fill="#3C72FC"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8 26H10V28H8V26Z" fill="#3C72FC"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8 22H10V24H8V22Z" fill="#3C72FC"/>
                        </svg>
                   </div>
                   <h3 className="text-lg font-bold mb-3">420</h3>
                   <p className="text-xs text-fastaColor-800">CONSULTING SOLUTIONS</p>
                </div>

                <div className="w-4/5 mx-auto text-white text-center border-r">
                   <div className="bg-fastaColor-500 inline-block p-3">
                        <svg width="48" height="48" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M60 60H47V58H47.347C49.951 58 52.091 56.045 52.326 53.453L52.995 46.091L51.003 45.91L50.334 53.272C50.193 54.827 48.909 56 47.347 56H41C40.449 56 40 55.551 40 55C40 54.449 40.449 54 41 54H46.087C47.128 54 47.984 53.218 48.079 52.173L48.483 47.293C48.729 44.325 51.253 42 54.231 42C57.412 42 60 44.588 60 47.769V60ZM53 32C55.206 32 57 33.794 57 36C57 38.206 55.206 40 53 40C50.794 40 49 38.206 49 36C49 33.794 50.794 32 53 32ZM56.953 40.502C58.205 39.401 59 37.794 59 36C59 32.691 56.309 30 53 30C49.691 30 47 32.691 47 36C47 38.243 48.239 40.2 50.067 41.229C48.084 42.501 46.695 44.647 46.49 47.128L46.087 52H41C39.346 52 38 53.346 38 55C38 56.654 39.346 58 41 58H45V62H62V47.769C62 44.444 59.897 41.608 56.953 40.502Z" fill="#3C72FC"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M21 56H14.653C13.091 56 11.807 54.827 11.666 53.272L10.997 45.91L9.005 46.091L9.674 53.453C9.909 56.045 12.049 58 14.653 58H15V60H2V47.769C2 44.588 4.588 42 7.769 42C10.747 42 13.272 44.325 13.518 47.293L13.922 52.181C14.016 53.218 14.872 54 15.913 54H21C21.551 54 22 54.449 22 55C22 55.551 21.551 56 21 56ZM9 32C11.206 32 13 33.794 13 36C13 38.206 11.206 40 9 40C6.794 40 5 38.206 5 36C5 33.794 6.794 32 9 32ZM21 52L15.914 52.008L15.51 47.128C15.304 44.647 13.915 42.501 11.933 41.229C13.761 40.2 15 38.243 15 36C15 32.691 12.309 30 9 30C5.691 30 3 32.691 3 36C3 37.794 3.795 39.401 5.047 40.502C2.103 41.608 0 44.444 0 47.769V62H17V58H21C22.654 58 24 56.654 24 55C24 53.346 22.654 52 21 52Z" fill="#3C72FC"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M37.196 39.946L35.217 38.817L34.731 39.073C34.282 39.31 33.821 39.503 33.36 39.645L32.835 39.807L32.237 42H29.763L29.163 39.807L28.638 39.645C28.178 39.503 27.716 39.311 27.266 39.073L26.781 38.817L24.803 39.945L23.053 38.196L24.182 36.217L23.926 35.731C23.689 35.282 23.496 34.821 23.354 34.36L23.192 33.835L21 33.237V30.763L23.193 30.163L23.355 29.638C23.497 29.178 23.689 28.716 23.927 28.266L24.183 27.781L23.055 25.803L23.355 25.503C23.569 25.644 23.807 25.749 24.055 25.832C24.216 27.186 24.762 28.423 25.584 29.427C25.203 30.228 25 31.103 25 32C25 35.309 27.691 38 31 38C34.309 38 37 35.309 37 32C37 31.102 36.797 30.228 36.416 29.428C37.239 28.424 37.784 27.186 37.946 25.833C38.194 25.75 38.431 25.645 38.646 25.504L38.946 25.804L37.818 27.782L38.074 28.267C38.311 28.717 38.504 29.178 38.646 29.639L38.808 30.164L41.001 30.764V33.238L38.808 33.837L38.646 34.362C38.504 34.822 38.312 35.283 38.074 35.733L37.818 36.219L38.947 38.198L37.196 39.946ZM31 13C29.897 13 29 12.103 29 11C29 9.897 29.897 9 31 9C32.103 9 33 9.897 33 11C33 12.103 32.103 13 31 13ZM22 10.708C22 5.906 25.906 2 30.708 2H31.292C36.094 2 40 5.906 40 10.708C40 12.053 39.682 13.399 39.081 14.603L36.382 20H32V14.858C33.72 14.411 35 12.858 35 11C35 8.794 33.206 7 31 7C28.794 7 27 8.794 27 11C27 12.858 28.28 14.411 30 14.858V20H25.618L22.919 14.603C22.318 13.399 22 12.053 22 10.708ZM31 30C28.586 30 26.566 28.279 26.101 26H35.899C35.434 28.279 33.414 30 31 30ZM25 22H37C37.551 22 38 22.449 38 23C38 23.551 37.551 24 37 24H25C24.449 24 24 23.551 24 23C24 22.449 24.449 22 25 22ZM35 32C35 34.206 33.206 36 31 36C28.794 36 27 34.206 27 32C27 31.607 27.058 31.221 27.168 30.851C28.27 31.575 29.586 32 31 32C32.414 32 33.73 31.575 34.831 30.851C34.942 31.221 35 31.607 35 32ZM40.089 36.166C40.193 35.939 40.289 35.711 40.375 35.481L43 34.763V29.237L40.375 28.519C40.289 28.29 40.194 28.061 40.089 27.834L41.439 25.468L39.852 23.881C39.94 23.601 40 23.309 40 23C40 21.866 39.36 20.888 38.429 20.379L40.87 15.497C41.416 14.403 41.769 13.213 41.918 12H43.434L47 17.944L50.299 12.444C50.464 12.17 50.765 12 51.084 12C51.589 12 52 12.411 52 12.916V20H54V12.916C54 11.308 52.692 10 51.084 10C50.065 10 49.108 10.542 48.584 11.416L47 14.056L44.566 10H41.964C41.597 4.426 36.957 0 31.292 0H30.708C25.043 0 20.403 4.426 20.036 10H17.434L15 14.056L13.416 11.416C12.892 10.542 11.934 10 10.916 10C9.308 10 8 11.308 8 12.916V20H10V12.916C10 12.411 10.411 12 10.916 12C11.236 12 11.537 12.17 11.701 12.445L15 17.944L18.566 12H20.082C20.231 13.214 20.584 14.404 21.13 15.497L23.571 20.379C22.64 20.888 22 21.866 22 23C22 23.309 22.06 23.601 22.148 23.882L20.561 25.469L21.911 27.835C21.807 28.062 21.711 28.29 21.625 28.52L19 29.237V34.763L21.625 35.48C21.711 35.71 21.807 35.938 21.911 36.165L20.561 38.531L24.469 42.439L26.835 41.089C27.062 41.193 27.29 41.289 27.52 41.375L28.237 44H33.763L34.48 41.375C34.71 41.289 34.938 41.193 35.165 41.089L37.531 42.439L41.439 38.531L40.089 36.166Z" fill="#3C72FC"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M52 26H54V28H52V26Z" fill="#3C72FC"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M52 22H54V24H52V22Z" fill="#3C72FC"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8 26H10V28H8V26Z" fill="#3C72FC"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8 22H10V24H8V22Z" fill="#3C72FC"/>
                        </svg>
                   </div>
                   <h3 className="text-lg font-bold mb-3">420</h3>
                   <p className="text-xs text-fastaColor-800">CONSULTING SOLUTIONS</p>
                </div>

                <div className="w-4/5 mx-auto text-white text-center">
                   <div className="bg-fastaColor-500 inline-block p-3">
                        <svg width="48" height="48" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M60 60H47V58H47.347C49.951 58 52.091 56.045 52.326 53.453L52.995 46.091L51.003 45.91L50.334 53.272C50.193 54.827 48.909 56 47.347 56H41C40.449 56 40 55.551 40 55C40 54.449 40.449 54 41 54H46.087C47.128 54 47.984 53.218 48.079 52.173L48.483 47.293C48.729 44.325 51.253 42 54.231 42C57.412 42 60 44.588 60 47.769V60ZM53 32C55.206 32 57 33.794 57 36C57 38.206 55.206 40 53 40C50.794 40 49 38.206 49 36C49 33.794 50.794 32 53 32ZM56.953 40.502C58.205 39.401 59 37.794 59 36C59 32.691 56.309 30 53 30C49.691 30 47 32.691 47 36C47 38.243 48.239 40.2 50.067 41.229C48.084 42.501 46.695 44.647 46.49 47.128L46.087 52H41C39.346 52 38 53.346 38 55C38 56.654 39.346 58 41 58H45V62H62V47.769C62 44.444 59.897 41.608 56.953 40.502Z" fill="#3C72FC"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M21 56H14.653C13.091 56 11.807 54.827 11.666 53.272L10.997 45.91L9.005 46.091L9.674 53.453C9.909 56.045 12.049 58 14.653 58H15V60H2V47.769C2 44.588 4.588 42 7.769 42C10.747 42 13.272 44.325 13.518 47.293L13.922 52.181C14.016 53.218 14.872 54 15.913 54H21C21.551 54 22 54.449 22 55C22 55.551 21.551 56 21 56ZM9 32C11.206 32 13 33.794 13 36C13 38.206 11.206 40 9 40C6.794 40 5 38.206 5 36C5 33.794 6.794 32 9 32ZM21 52L15.914 52.008L15.51 47.128C15.304 44.647 13.915 42.501 11.933 41.229C13.761 40.2 15 38.243 15 36C15 32.691 12.309 30 9 30C5.691 30 3 32.691 3 36C3 37.794 3.795 39.401 5.047 40.502C2.103 41.608 0 44.444 0 47.769V62H17V58H21C22.654 58 24 56.654 24 55C24 53.346 22.654 52 21 52Z" fill="#3C72FC"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M37.196 39.946L35.217 38.817L34.731 39.073C34.282 39.31 33.821 39.503 33.36 39.645L32.835 39.807L32.237 42H29.763L29.163 39.807L28.638 39.645C28.178 39.503 27.716 39.311 27.266 39.073L26.781 38.817L24.803 39.945L23.053 38.196L24.182 36.217L23.926 35.731C23.689 35.282 23.496 34.821 23.354 34.36L23.192 33.835L21 33.237V30.763L23.193 30.163L23.355 29.638C23.497 29.178 23.689 28.716 23.927 28.266L24.183 27.781L23.055 25.803L23.355 25.503C23.569 25.644 23.807 25.749 24.055 25.832C24.216 27.186 24.762 28.423 25.584 29.427C25.203 30.228 25 31.103 25 32C25 35.309 27.691 38 31 38C34.309 38 37 35.309 37 32C37 31.102 36.797 30.228 36.416 29.428C37.239 28.424 37.784 27.186 37.946 25.833C38.194 25.75 38.431 25.645 38.646 25.504L38.946 25.804L37.818 27.782L38.074 28.267C38.311 28.717 38.504 29.178 38.646 29.639L38.808 30.164L41.001 30.764V33.238L38.808 33.837L38.646 34.362C38.504 34.822 38.312 35.283 38.074 35.733L37.818 36.219L38.947 38.198L37.196 39.946ZM31 13C29.897 13 29 12.103 29 11C29 9.897 29.897 9 31 9C32.103 9 33 9.897 33 11C33 12.103 32.103 13 31 13ZM22 10.708C22 5.906 25.906 2 30.708 2H31.292C36.094 2 40 5.906 40 10.708C40 12.053 39.682 13.399 39.081 14.603L36.382 20H32V14.858C33.72 14.411 35 12.858 35 11C35 8.794 33.206 7 31 7C28.794 7 27 8.794 27 11C27 12.858 28.28 14.411 30 14.858V20H25.618L22.919 14.603C22.318 13.399 22 12.053 22 10.708ZM31 30C28.586 30 26.566 28.279 26.101 26H35.899C35.434 28.279 33.414 30 31 30ZM25 22H37C37.551 22 38 22.449 38 23C38 23.551 37.551 24 37 24H25C24.449 24 24 23.551 24 23C24 22.449 24.449 22 25 22ZM35 32C35 34.206 33.206 36 31 36C28.794 36 27 34.206 27 32C27 31.607 27.058 31.221 27.168 30.851C28.27 31.575 29.586 32 31 32C32.414 32 33.73 31.575 34.831 30.851C34.942 31.221 35 31.607 35 32ZM40.089 36.166C40.193 35.939 40.289 35.711 40.375 35.481L43 34.763V29.237L40.375 28.519C40.289 28.29 40.194 28.061 40.089 27.834L41.439 25.468L39.852 23.881C39.94 23.601 40 23.309 40 23C40 21.866 39.36 20.888 38.429 20.379L40.87 15.497C41.416 14.403 41.769 13.213 41.918 12H43.434L47 17.944L50.299 12.444C50.464 12.17 50.765 12 51.084 12C51.589 12 52 12.411 52 12.916V20H54V12.916C54 11.308 52.692 10 51.084 10C50.065 10 49.108 10.542 48.584 11.416L47 14.056L44.566 10H41.964C41.597 4.426 36.957 0 31.292 0H30.708C25.043 0 20.403 4.426 20.036 10H17.434L15 14.056L13.416 11.416C12.892 10.542 11.934 10 10.916 10C9.308 10 8 11.308 8 12.916V20H10V12.916C10 12.411 10.411 12 10.916 12C11.236 12 11.537 12.17 11.701 12.445L15 17.944L18.566 12H20.082C20.231 13.214 20.584 14.404 21.13 15.497L23.571 20.379C22.64 20.888 22 21.866 22 23C22 23.309 22.06 23.601 22.148 23.882L20.561 25.469L21.911 27.835C21.807 28.062 21.711 28.29 21.625 28.52L19 29.237V34.763L21.625 35.48C21.711 35.71 21.807 35.938 21.911 36.165L20.561 38.531L24.469 42.439L26.835 41.089C27.062 41.193 27.29 41.289 27.52 41.375L28.237 44H33.763L34.48 41.375C34.71 41.289 34.938 41.193 35.165 41.089L37.531 42.439L41.439 38.531L40.089 36.166Z" fill="#3C72FC"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M52 26H54V28H52V26Z" fill="#3C72FC"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M52 22H54V24H52V22Z" fill="#3C72FC"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8 26H10V28H8V26Z" fill="#3C72FC"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8 22H10V24H8V22Z" fill="#3C72FC"/>
                        </svg>
                   </div>
                   <h3 className="text-lg font-bold mb-3">420</h3>
                   <p className="text-xs text-fastaColor-800">CONSULTING SOLUTIONS</p>
                </div>                
            </div>
        </div>
    )
}

export default ConsultingInfo;