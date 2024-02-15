export const checkUpdate = (data, id) => {
    if (id) {
        if (
            Object.entries(data).length === 0 ||
            data.name == '' ||
            data.description == ''
        ) {
            return false
        }
        return true
    } else {
        if (
            Object.entries(data).length === 0 ||
            data.category ||
            data.category == ''
        ) {
            return false
        }
        return true
    }
}