const addToLocalStorage = time => {
    localStorage.setItem('break-time', time);
}

const getFromLocalStorage = key => {
    return localStorage.getItem(key);
}

export {
    addToLocalStorage,
    getFromLocalStorage
};