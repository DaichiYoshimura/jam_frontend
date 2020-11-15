import React from 'react'
import { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import SettingList from '../../../../components/organisms/Setting/List'
import { SettingType } from '../../../../interfaces'
import Layout from '../../../../components/templates/Layout'
import stubSettingData from '../../../api/stub/settings'
// ______________________________________________________
//
type Props = {
    title: string,
    data: SettingType[],
    errors?: string
}
// ______________________________________________________
//
const Index: NextPage<Props> = (props: Props) => {
    return (
        <>
            <Layout title={props.title}>
                <SettingList data={props.data} />
            </Layout>
        </>
    );
}
// ______________________________________________________
//
export const getStaticPaths: GetStaticPaths = async () => {

    const posts = stubSettingData

    const paths = [{
        params: {
            roomId: posts[0].roomId
        }
    }]


    return {
        paths,
        fallback: false
    }
}
// ______________________________________________________
//
export const getStaticProps: GetStaticProps = async ({ params }) => {

    try {
        const data = stubSettingData
        return {
            props: {
                title: "Setting",
                data
            }
        }
    } catch (err) {
        return {
            props: {
                errors: err.message
            }
        }
    }

}
// ______________________________________________________
//
export default Index;

