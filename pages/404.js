import Head from 'next/head'
import Link from 'next/link'

const ErrorPage = () => (
    <div className="w-full max-w-xl py-10 px-5 sm:px-0 mx-auto">
        <Head>
            <title key="title">404 Page | Chrome Extensions by Saw-mon and Natalie</title> 
        </Head>
        <h1 className="font-bold text-5xl mb-5">Hmm, you might be lost</h1>
        <p>Go back to <Link href="/">homepage</Link>.</p>
    </div>

)

export default ErrorPage