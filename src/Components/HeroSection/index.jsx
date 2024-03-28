import Button from "../Button";

const HeroSection = () => {
    return (
        <section className="bg-fastaColor-500 h-auto flex flex-col justify-center py-10">
            <div className="w-4/5 mx-auto">
                <h4 className="text-xs text-white inline-block bg-fastaColor-100 p-1 mt-20 mb-5">
                    WELCOME TO CODESHAPER
                </h4>
                <h1 className="text-white text-6xl uppercase font-bold break-words whitespace-pre-line">
                    <span className="block">Consulting</span> 
                    <span className="block">For Every</span> 
                    <span className="block">Business</span>
                </h1>
                <div className="my-10">
                    <Button>
                        DISCOVER MORE
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;