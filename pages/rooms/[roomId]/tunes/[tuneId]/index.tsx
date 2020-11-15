import React from 'react'
import { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import { useRouter } from 'next/router'
import { TuneType, QueryParamsType } from '../../../../../interfaces'
import stubTuneData from '../../../../api/stub/tunes'
import DetailLayout from '../../../../../components/templates/DetailLayout'
import Detail from '../../../../../components/organisms/Tune/Detail'

// ______________________________________________________
//
type Props = {
    title: string,
    data: TuneType[],
    params: QueryParamsType,
    errors?: string
}
// ______________________________________________________
//
const Index: NextPage<Props> = (props: Props) => {
    const router = useRouter()
    const { tuneId } = router.query
    const detailData = props.data.find(value => (value.id == tuneId))
    if (!detailData) { return <>'error'</> };
    return (
        <>
            <DetailLayout title={props.title} roomId={props.params.roomId}>
                <Detail data={detailData} />
            </DetailLayout>
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

}
// ______________________________________________________
//
export default Index;

