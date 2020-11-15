import * as React from 'react'
import Head from 'next/head'
import { GetStaticProps } from 'next'
import Header from '../organisms/Player/Detail/Header'

type Props = {
    title?: string
    roomId?: string
}
// ______________________________________________________
//
const Layout: React.FunctionComponent<Props> = ({ children, title, roomId }) => (
    <>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Header title={title} roomId={roomId} />
        {children}
    </>
);
// ______________________________________________________
//
export const getStaticProps: GetStaticProps = async () => {
    return {
        props: { title: "test" }
    };
};
// ______________________________________________________
//
export default Layout