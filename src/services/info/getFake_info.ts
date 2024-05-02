import axios from 'axios';

export async function getFake_info(alertId:number, resourceArn: string, isSolved: boolean) {
    try {
        const body = {
            "alertId": alertId,
            "resourceArn": resourceArn,
            "isSolved": isSolved
        };
        const response = await axios.post('http://localhost:5000/fake/info', body);
        //const response = await axios.post('https://temporal-p27ymwll2a-uc.a.run.app/fake/info', body);
        console.log(response);
        return response.data;
        // Handle the response data here
    } catch (error) {
        console.error('Error:', error);
        // Handle errors here
    }
}
