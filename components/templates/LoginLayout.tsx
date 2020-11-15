import * as React from 'react'
import Head from 'next/head'
import { GetStaticProps } from 'next'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Header from '../organisms/Header'
import Footer from '../organisms/Footer'

type Props = {
    title?: string
}
// ______________________________________________________
//
const Layout: React.FunctionComponent<Props> = ({ children, title }) => {
    const styleClass = useStyles();

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className={styleClass.body}>
                {children}
            </div>
        </>
    )
};
// ______________________________________________________
//
export const getStaticProps: GetStaticProps = async () => {
    return {
        props: { title: "test" }
    };
};
// ______________________________________________________
//
const useStyles = makeStyles((theme: Theme) => createStyles({
    body: {
        backgroudColor: theme.palette.background.default
    }
}

));
export default Layout