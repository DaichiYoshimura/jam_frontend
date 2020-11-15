import React from 'react'
import { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import { PlayerType, QueryParamsType } from '../../../../../interfaces'
import stubPlayerData from '../../../../api/stub/players'
import stubTuneData from '../../../../api/stub/tunes'
import DetailLayout from '../../../../../components/templates/DetailLayout'
import Detail from '../../../../../components/organisms/Player/Detail'

// ______________________________________________________
//
type Props = {
    title: string,
    data: PlayerType[],
    params: QueryParamsType,
    errors?: string
}
// ______________________________________________________
//
const Index: NextPage<Props> = (props: Props) => {
    const detailData = props.data.find(value => (value.id == props.params.playerId))
    if (!detailData) { return <>'error'</> };
    return (
        <>
            <DetailLayout title={props.title} roomId={props.params.roomId}>
                <Detail data={detailData} />
            </DetailLayout>
        </>
    );

};
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
        const player_data = stubPlayerData
        const tune_data = stubTuneData
        const data = player_data.map(val => (
            tune_data.map(t => (t.id in val.performedTunes))
        ));
        return {
            props: {
                title: "Detail",
                data,
                params
            }
        }
    } catch (err) {
        return {
            props: {
                errors: err.message
            }
        }
    }

};
// ______________________________________________________
//
export default Index;

