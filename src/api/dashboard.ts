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
export async function deleteElement(id:number, type:string){

    let path = '';
    if(type == 'client'){
        path = 'post';
    }else{
        path = 'comments'
    }

    try{

        const res = await fetch(`${url}${path}/${id}`, {
            method:"DELETE"
        });
     
        if(res.status == 404){
            return Promise.reject(`No se encontro ${type} para eliminar`);
        }
        const data = await res.json();
        return Promise.resolve(data);

    }catch(err){
        console.log('[ERROR DELETE]: ', err);
        return Promise.reject('Se produjo un error');

    }

}