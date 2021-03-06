import { url } from '../config/config';
import moment from 'moment'

export async function updateElement(id:number, data:any, type:string) {
    try{
        let path = '';
        if(type == 'client'){
            path = 'posts'
        }else{
            path = 'comments'
        }

        const res = await fetch(`${url}${path}/${id}`,{
            method:'PUT',
            body:JSON.stringify(data),
            headers:{
                "Content-Type":"application/json"
            }
        });
        const dataJson = await res.json();
        return Promise.resolve(dataJson);

    }catch(error){
        console.log('[ERROR CREATE]:', error);
        return Promise.reject('Se produjo un error al actualizar el ' + type);
    }
}

export async function createElement(data:any, type:string){

    try{
        data.date = moment().format('YYYY-MM-DD');
        let path = '';
        if(type == 'client'){
            path = 'posts'
        }else{
            data.price = data.price + '€';
            path = 'comments'
        }

        const res = await fetch(`${url}${path}`,{
            method:'POST',
            body:JSON.stringify(data),
            headers:{
                "Content-Type":"application/json"
            }
        });

        if(res.status!= 201){
            return Promise.reject('Se produjo un error')
        }

        const dataJson = await res.json();
        return Promise.resolve(dataJson);

    }catch(err){
        console.log('[ERROR CREATE]:', err);
        return Promise.reject('Se produjo un error al crear el elemento');
    }
}