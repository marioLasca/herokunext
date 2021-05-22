import Layout from '../components/Layout'
import Head from 'next/head'

const Custom404 = () => (
    <Layout>
        <Head>
            <title>Página no encontrada</title>
        </Head>
        <div className="text-center">
            <h1>404</h1>
            <p>Página no encontrada</p>
        </div>
    </Layout>
)

export default Custom404;