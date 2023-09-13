import axios from "axios";

const getApiList = async () => {
    const data = await axios.get("http://ip-api.com/json");
    return data;
};

export { getApiList };
