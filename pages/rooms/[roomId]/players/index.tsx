import React from 'react'
import { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import { PlayerType, QueryParamsType } from '../../../../interfaces'
import stubPlayerData from '../../../api/stub/players'
import Layout from '../../../../components/templates/Layout'
import Modal from '../../../../components/organisms/Player/Modal'
import PlayerList from '../../../../components/organisms/Player/List'
// ______________________________________________________
//
type Props = {
    title: string,
    data: PlayerType[],
    params: QueryParamsType
    errors?: string
}
// ______________________________________________________
//
const Index: NextPage<Props> = (props: Props) => {

    return (
        <>
            <Layout title={props.title}>
                <PlayerList data={props.data} />
                <Modal roomId={props.params.roomId} />
            </Layout>
        </>
    );
}
// ______________________________________________________
//
export const getStaticPaths: GetStaticPaths = async () => {

    const posts = stubPlayerData;
    const roomId = "85d9a08b-60cd-443b-8799-ad90b75e8317"

    const paths = posts.map(post => ({
        params: {
            playerId: post.id,
            roomId: roomId
        },
    }));

    return {
        paths,
        fallback: false
    };
};
// ______________________________________________________
//
export const getStaticProps: GetStaticProps = async ({ params }) => {

    try {
        const data = stubPlayerData
        return {
            props: {
                title: "Player",
                data,
                params
            }
        };
    } catch (err) {
        return {
            props: {
                errors: err.message
            }
        };
    }
};
// ______________________________________________________
//
export default Index;

