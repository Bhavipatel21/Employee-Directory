import axios from "axios";

// Export an object containing methods we'll use for accessing the Random User API

export default {
    getEmployeeList: function () {
        return axios.get("https://randomuser.me/api/?results=50&seed=abc");
    }
};
