import {hash, compare} from 'bcrypt'

export const encrypt = (password)=>{
    try {
        return hash(password, 10)
    } catch (error) {
        console.error(error)
        return error
    }
}

export const comparePassword = async(password, hash)=>{
    try {
        return await compare(password, hash)
    } catch (error) {
        console.error(error);
        return error  
    }
}

export const checkUpdate = (data, id) => {
    if (id) {
        if (
            Object.entries(data).length === 0 ||
            data.name == '' ||
            data.description == '' ||
            data.password ||
            data.password == '' ||
            data.role == '' 

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

export const checkUpdateUser = (data,id)=>{
    if (id) {
        if (
            Object.entries(data).length === 0 ||
            data.role ||
            data.role == '' ||
            data.role == 'CLIENT'
        ) {
            return false
        }
        if(data.password == id.password){
            return false
        }
        return true
    }
}