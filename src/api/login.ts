import { url } from '../config/config';

interface User {
    username:string,
    password:string
}

 export async  function login(user:User){

    try{

        const res = await fetch(url + 'profile', {
            method:'GET'
        });
        const data = await res.json();
        console.log(data);
        if(user.username != data.name || user.password != data.password){
            return Promise.reject('user o contraseña incorrectos'); 
        }

        return Promise.resolve(true);

    }catch(err){
        
        console.log('[ERROR Login]: ', err);
        return Promise.reject('Se produjo algun uerr');

    }

}