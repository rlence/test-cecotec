import { url } from '../config/config';

export async function getListCLient(){

    try{
        const res = await fetch(url + 'posts');
        const data = await res.json();
        return Promise.resolve(data);
        

    }catch(err){
        console.log('[ERROR LSIT CLIENT]: ', err);
        return Promise.reject('Se produjo un error intente mas tarde')
    }

}

export async function getListProducts(){

    try{
        const res = await fetch(url + 'comments');
        const data = await res.json();
        
        console.log(data);
        return Promise.resolve(data)
        

    }catch(err){
        console.log('[ERROR LIST PRODUCT]: ', err);
        return Promise.reject('Se produjo un error intente mas tarde')
    }

}