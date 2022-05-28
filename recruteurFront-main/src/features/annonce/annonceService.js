import axios from "axios";

const API_URL = "http://localhost:5000/api/annonces/";

// Create
const create = async(Data, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    const response = await axios.post(`${API_URL}`, Data, config);

    return response.data;
};

//update
const update = async(data, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    const response = await axios.put(`${API_URL}/${data._id}`, data, config);

    return response.data;
};
// Get all
const getAll = async() => {
    const response = await axios.get(API_URL + "all");
    return response.data;
};
const getAnnonceByid = async(id) => {
    console.log(id, "hedha lid");
    const response = await axios.get("http://localhost:5000/api/annonces/" + id);
    return response.data;
};
const getAnnonceByrec = async(recruter) => {
    const response = await axios.get(
        "http://localhost:5000/api/annonces/rec/" + recruter
    );
    return response.data;
};
// Delete
const deleteById = async(Id, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    const response = await axios.delete(API_URL + Id, config);

    return response.data;
};

const annonceService = {
    create,
    getAll,
    deleteById,
    getAnnonceByid,
    getAnnonceByrec,
    update,
};

export default annonceService;