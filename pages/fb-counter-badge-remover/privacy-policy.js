import Link from 'next/link'

const PrivacyPolicy = () => {
    return (
        <div>
            <h1 className="font-bold text-center text-5xl">Privacy Policy</h1>
            <h2 className="text-center text-gray-500">Last updated November 10, 2020</h2>
            <div className="rounded-xl overflow-hidden bg-white my-10 p-10">
                <p>The <Link href="/fb-counter-badge-remover">Facebook Counter Badge Remover</Link> does not collect any usr data except when an error occurs. When an error occurs the extension sends the error information including error type, error message, error stack and the URL that the error has occured on to <a href="https://sentry.io/" target="_blank" rel="noopener noreferrer">Sentry.io</a> for further investigation by the developer.</p>

                <p>No sensitive user data is ever collected or stored by this extension.</p>
                
            </div>
        </div>
    )
}

export default PrivacyPolicy