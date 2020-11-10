const Layout = ({ children }) => {
    return (
        <div className="max-w-5xl m-auto  pt-10 min-h-screen">
            {children}
            <div className="text-xs">
                <p className="text-center"><span className="text-gray-400">This site is designed and built by</span> <a className="whitespace-pre" href="https://www.sawmon-and-natalie.com" target="_blank" rel="noopener noreferrer">Saw-mon and Natalie</a></p>
            </div>
        </div>
    )
}

export default Layout