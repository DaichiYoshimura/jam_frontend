import Data from '../stub/ParticipantList.json'
export default (req:any, res:any) => {
    //const response = await fetch("http://dummy");
    //const data = await response.json();
    const data = Data
    res.status(200).json(data);
}