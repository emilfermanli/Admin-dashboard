import * as actionTypes from "./actionTypes"
import data from "../../data/data"

export const userInfo = (users) => {
    console.log(users)
    return{
        type: actionTypes.GET_USER_INFO,
        payload: users
    }
}

export function getUsersInfo() {
    return function (dispatch) {
        return data.get(`/info`)
            .then(res => res.data.data)
            .then(result => dispatch(userInfo(result)))
            .catch(error => {
                console.log(error)
            });
    }
}

export const userList = (users) => {
    return{
        type: actionTypes.GET_USER_LIST,
        payload: users
    }
}

export function getUsersList() {
    return function (dispatch) {
        return data.get(`/users`)
            .then(res => res.data.data)
            .then(result => dispatch(userList(result)))
            .catch(error => {
                console.log(error)
            });
    }
}

export const betaProducts = (product) => {
    return{
        type: actionTypes.GET_PRODUCT,
        payload: product
    }
}

export function getProducts() {
    return function (dispatch) {
        return data.get(`/products`)
            .then(res => res.data.data)
            .then(result => dispatch(betaProducts(result)))
            .catch(error => {
                console.log(error)
            });
    }
}

export const servicesList = (services) => {
    return{
        type: actionTypes.GET_SERVICES,
        payload: services
    }
}

export function getServicesList() {
    return function (dispatch) {
        return data.get(`/services`)
            .then(res => res.data.data)
            .then(result => dispatch(servicesList(result)))
            .catch(error => {
                console.log(error)
            });
    }
}


export const devicesList = (devices) => {
    return{
        type: actionTypes.GET_DEVICES,
        payload: devices
    }
}

export function getDeviceList() {
    return function (dispatch) {
        return data.get(`/careers`)
            .then(res => res.data.data)
            .then(result => dispatch(devicesList(result)))
            .catch(error => {
                console.log(error)
            });
    }
}


// export const careerList = (career) => {
//     return{
//         type: actionTypes.GET_CAREER,
//         payload: career
//     }
// }

// export function getCareerList() {
//     return function (dispatch) {
//         return data.get(`/mqtt/devices`)
//             .then(res => res.data.data)
//             .then(result => dispatch(careerList(result)))
//             .catch(error => {
//                 console.log(error)
//             });
//     }
// }

export const allMessages = (messages) => {
    return{
        type: actionTypes.GET_MESSAGES,
        payload: messages
    }
}

export function getCareerList() {
    return function (dispatch) {
        return data.get(`/messages`)
            .then(res => res.data.data)
            .then(result => dispatch(allMessages(result)))
            .catch(error => {
                console.log(error)
            });
    }
}

export const allSubscribe = (subscribes) => {
    return{
        type: actionTypes.GET_SUBSCRIBES,
        payload: subscribes
    }
}

export function getSubscribes() {
    return function (dispatch) {
        return data.get(`/subscribes`)
            .then(res => res.data.data)
            .then(result => dispatch(allSubscribe(result)))
            .catch(error => {
                console.log(error)
            });
    }
}

export const helpUs = (help) => {
    return{
        type: actionTypes.GET_HELP,
        payload: help
    }
}

export function getHelp() {
    return function (dispatch) {
        return data.get(`/help`)
            .then(res => res.data.data)
            .then(result => dispatch(helpUs(result)))
            .catch(error => {
                console.log(error)
            });
    }
}

export const resumes = (resume) => {
    return{
        type: actionTypes.GET_RESUME,
        payload: resume
    }
}

export function getResumes() {
    return function (dispatch) {
        return data.get(`/resumes`)
            .then(res => res.data.data)
            .then(result => dispatch(resumes(result)))
            .catch(error => {
                console.log(error)
            });
    }
}

export const activities = (activities) => {
    return{
        type: actionTypes.GET_ACTIVITY,
        payload: activities
    }
}

export function getActivities() {
    return function (dispatch) {
        return data.get(`/resumes`)
            .then(res => res.data.data)
            .then(result => dispatch(activities(result)))
            .catch(error => {
                console.log(error)
            });
    }
}





export const blogPosts = (posts) => {
    return{
        type: actionTypes.GET_BLOG_POST,
        payload: posts
    }
}

export function getPosts() {
    return function (dispatch) {
        return data.get(`/blogs`)
            .then(res => res.data.data)
            .then(result => dispatch(blogPosts(result)))
            .catch(error => {
                console.log(error)
            });
    }
}
