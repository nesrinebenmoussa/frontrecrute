import axios from "axios";

const API_URL = "http://localhost:5000/api/cv/";

// Create
const update = async(Data, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    const response = await axios.patch(API_URL + Data._id, Data, config);

    return response.data;
};

const get = async(id, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    const response = await axios.get(API_URL + "condidat/" + id, config);

    return response.data;
};

const create = async(data, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    const response = await axios.post(API_URL, data, config);

    return response.data;
};
const getbyDiplome = async(diplome, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    const response = await axios.get(
        "http://localhost:5000/api/cv/diplome/" + diplome,
        config
    );
    console.log(response.data, "from the api ");
    return response.data;
};

const CVservice = {
    update,
    get,
    create,
    getbyDiplome,
};

export default CVservice;