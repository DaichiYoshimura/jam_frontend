import { useRouter } from 'next/router'
import { GetStaticProps } from 'next'

const getStaticProps: GetStaticProps = async context => {

    if (process.env.mode == 'DEV') {
        return { props: { data: await fetch('../stub/ParticipantList.json') } }
    }

    const router = useRouter()
    const baseURL = "http://" + process.env.HOST_SERVERSIDE + "/api/rooms/"
    const detailURL = router.query.room_id + "/player"
    const res = await fetch(baseURL + detailURL, {
        method: 'GET',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' }
    });

    const Data = await res.json();
    console.log(Data);
    return {
        props: {
            data: Data
        }
    };
}

export default getStaticProps;