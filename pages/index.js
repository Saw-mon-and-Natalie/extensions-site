import ExtensionCard from '../components/ExtensionCard'

const Index = () => {
    return (
        <>
            <h1 className="font-bold text-center text-5xl">Chrome Extensions</h1>
            <h2 className="text-center text-gray-500">by Saw-mon and Natalie</h2>

            <div className="flex flex-row flex-wrap items-center justify-center my-10">
                <ExtensionCard 
                    href="/fb-counter-badge-remover/"
                    img="/images/extensions/fb-counter-badge-remover/tile.svg" 
                    type="Productivity" 
                    name="Facebook Counter Badge Remover" 
                />
            </div>
        </>
    )
}

export default Index