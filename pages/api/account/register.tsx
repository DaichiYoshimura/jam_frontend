type Props = {
    data: {
        email: string,
        password: string,
        roomId: string
    };
};

const api = async (props: Props) => {

    const res = await fetch(
        "http://" + process.env.HOST_SERVERSIDE + "/api/login/register",
        {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(props.data)
        }
    );
    const Data = await res.json();
    console.log(Data);
    return {
        props: {
            data: Data
        }
    };
};

export default api;