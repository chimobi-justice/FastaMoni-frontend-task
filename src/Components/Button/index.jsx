const Button = ({children}) => {
    return (
        <button className="bg-fastaColor-300 text-white text-xs p-3 font-medium hover:bg-blue-600 transition-colors duration-300">
            {children}
        </button>
    )
}

export default Button;