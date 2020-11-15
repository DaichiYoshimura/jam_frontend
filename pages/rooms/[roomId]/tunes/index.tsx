import React from 'react'
import { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import { TuneType, PlayerType } from '../../../../interfaces'
import Layout from '../../../../components/templates/Layout'
import Modal from '../../../../components/organisms/Tune/Modal'
import TuneList from '../../../../components/organisms/Tune/List'
import stubPlayerData from '../../../api/stub/players'
import stubTuneData from '../../../api/stub/tunes'

// ______________________________________________________
//
type Props = {
    title: string,
    data: TuneType[],
    playerData: PlayerType[]
    params: {
        tuneId: string,
        roomId: string
    },
    errors?: string
}
// ______________________________________________________
//
const Index: NextPage<Props> = (props: Props) => {
    return (
        <>
            <Layout title={props.title}>
                <TuneList data={props.data} />
                <Modal data={props.playerData} roomId={props.params.roomId} />
            </Layout>
        </>
    );
}
// ______________________________________________________
//
export const getStaticPaths: GetStaticPaths = async () => {

    const posts = stubTuneData
    const roomId = "85d9a08b-60cd-443b-8799-ad90b75e8317"
    const paths = posts.map(post => ({
        params: {
            tuneId: post.id,
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
        const data = stubTuneData
        const playerData = stubPlayerData
        return {
            props: {
                title: "Tune",
                data,
                playerData,
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

