import Head from 'next/head'
import { NextPageContext } from 'next'
import { getApi } from '../../api/index'



export default function User({ user }) {
    return (
        <div >
            <Head>
                <title>DiIngat - User</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
                    integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossOrigin="anonymous" />
            </Head>
            <h4>User</h4>
            <div>All User {JSON.stringify(user)}</div>
        </div>
    )
}


//client side rendering
User.getInitialProps = async (ctx: NextPageContext) => {
    const json = await getApi('http://localhost:3000/api/v1/di-ingat/users', ctx)
    return { user: json }
}

