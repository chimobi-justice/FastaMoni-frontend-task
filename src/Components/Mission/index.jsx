import Button from "../Button";

const Mission = () => {
    return (
        <div className="bg-fastaColor-600 h-auto flex flex-col justify-center py-10">
            <div className="w-4/5 mx-auto text-center">
                <h3 className="text-white text-3xl uppercase font-bold break-words whitespace-pre-line leading-10">
                    <span className="block">MISSION IS TO PROTECT</span> 
                    <span className="block">YOUR BUSINESSES &</span> 
                    <span className="block">MUCH MORE</span>
                </h3>
                <div className="my-10">
                    <Button>
                        DISCOVER MORE
                    </Button>
                </div>
            </div>
        </div>
    )
}   

export default Mission;