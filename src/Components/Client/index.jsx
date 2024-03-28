const Client = () => {
    return (
        <div className="bg-fastaColor-700 h-auto py-16">
            <div className="w-4/5 mx-auto flex justify-between gap-5">
                <div className="w-1/3">
                    <h1 className="text-4xl uppercase font-bold break-words whitespace-pre-line leading-10">
                        <span className="block">WHAT THEY</span> 
                        <span className="block">ARE TALKING</span> 
                        <span className="block">ABOUT?</span>
                    </h1>
                    <p className="text-xs text-fastaColor-800 my-4">Trusted by more than 4,200 customer</p>

                    <div className="flex gap-5">
                        <div className="bg-white p-3 rounded-full cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
                            </svg>
                        </div>

                        <div className="bg-white p-3 rounded-full cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 w-1/3">
                    <p className="text-xs leading-6 text-fastaColor-800">Lorem ipsum is simply free text dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum is simply free text dolor sit amet,consectetur notted adipisicing elit sed do eiusmod tempor</p>
                    <p className="text-fastaColor-300 font-semibold text-sm mt-3 mb-2">Todd Higgins</p>
                    <p className="text-xs font-base text-fastaColor-800">customer</p>
                </div>

                <div className="bg-white p-6 w-1/3">
                    <p className="text-xs leading-6 text-fastaColor-800">Lorem ipsum is simply free text dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum is simply free text dolor sit amet,consectetur notted adipisicing elit sed do eiusmod tempor</p>
                    <p className="text-fastaColor-300 font-semibold text-sm mt-3 mb-2">Todd Higgins</p>
                    <p className="text-xs font-base text-fastaColor-800">customer</p>
                </div>
            </div>
        </div>
    )
}

export default Client;