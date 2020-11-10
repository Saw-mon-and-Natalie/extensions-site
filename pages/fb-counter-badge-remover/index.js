import Link from 'next/link'

const FBCounterBadgeRemover = () => {
    return (
        <div className="">
            <h1 className="font-bold text-center text-5xl">Facebook Counter Badge Remover</h1>
            <h2 className="text-center text-gray-500">Productivity</h2>

            <div className="rounded-xl overflow-hidden bg-white my-10 p-10">
                <p>This extension removes the red counter badge that appears on Facebook over:</p>
                <ul className="list-disc list-inside">
                    <li>Notification Bell</li>
                    <li>Messages Icon</li>
                    <li>Friends request</li>
                    <li>and any other places that has those red counter badges appearing.</li>
                </ul>

                <p>The extension also removes the number counter in the page title.</p>
                <p className="pt-10">
                    <a href="https://chrome.google.com/webstore/detail/facebook-counter-badge-re/nhhhnfbeajcjpmojognffdpamkinifii?hl=en" target="_blank" rel="noopener noreferrer">The Extension on Chrome Web Store</a> | &nbsp;
                    <a href={process.env.NEXT_PUBLIC_ISSUE_REPORT_LINK} target="_blank" rel="noopener noreferrer">Report an Issue</a> | &nbsp;
                    <Link href="/fb-counter-badge-remover/privacy-policy">Privacy Policy</Link>
                </p>
            </div>
        </div>
    )
}

export default FBCounterBadgeRemover