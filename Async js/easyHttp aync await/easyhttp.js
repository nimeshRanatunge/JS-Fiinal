class easyHttp {
//make htto get request

get(url){


    return new Promise((resolve, reject)=>{
        fetch(url)
        .then(res => res.json()) //mat it to json 
        .then(data => resolve(data)) //gives un the data
        .catch(err => reject(err));
    });


}

//make http post request

post(url, data){
    return new Promise((resolve, reject)=>{
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-type':'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(datxa => resolve(datxa))
        .catch(err => reject(err));
    });
}

//make http put request
put(url, data){
    return new Promise((resolve, reject)=>{
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data = resolve(data))
        .catch(err => reject(err))
    });
}

}