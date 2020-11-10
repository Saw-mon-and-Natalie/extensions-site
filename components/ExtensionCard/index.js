import Image from 'next/image'
import Link from 'next/link'

const ExtensionCard = ({ href='', img, name, type }) => {
    return (
        <Link href={href}>
            <div className="overflow-hidden rounded-xl cursor-pointer bg-white" style={{ maxWidth: 400 }}>
                <Image src={img} alt={name} width={440} height={280} />
                <div className='bg-black p-5'>
                    <p className="text-red-500 text-sm m-0">{type}</p>
                    <h3 className="font-bold text-lg text-white">{name}</h3>
                </div>
            </div>
        </Link>

    )
}

export default ExtensionCard