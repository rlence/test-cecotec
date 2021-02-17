import { url } from '../config/config';

export async function updateElement(id:number, data:any, type:string) {
    try{
        let path = '';
        if(type == 'client'){
            path = 'post'
        }else{
            path = 'comments'
        }

        const res = await fetch(`${url}${path}/${id}`,{
            method:'PUT',
            body:JSON.stringify(data)
        });
        const dataJson = await res.json();
        console.log(dataJson);

    }catch(error){
        console.log('[ERROR CREATE]:', error);
        return Promise.reject('Se produjo un error al actualizar el ' + type);
    }
}

export async function createElement(data:any, type:string){

    try{
        let path = '';
        if(type == 'client'){
            path = 'post'
        }else{
            path = 'comments'
        }

        const res = await fetch(`${url}${path}`,{
            method:'POST',
            body:JSON.stringify(data)
        });
        const dataJson = await res.json();
        console.log(dataJson);

    }catch(err){
        console.log('[ERROR CREATE]:', err);
        return Promise.reject('Se produjo un error al crear el elemento');
    }
}