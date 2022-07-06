class easyHttp {
//make htto get request

async get(url){

    const response = await fetch(url);
    const resdata = await response.json();
    return resdata; 


}

//make http post request

async post(url, data){
    
    const response = await fetch(url, {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(data)
    });

    const resData = await response.json();
    return resData;

}

//make http put request
async put(url, data){
    const response = await fetch(url, {
        method: 'PUT',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(data)
    });

    const resData = await response.json();
    return resData;
}

//make http delete request

async delete(url){
    const response = await fetch(url, {
        method: 'DELETE',
        headers: {'Content-type' : 'application/json'}
    });
    const resdata = await 'Resource Deleted..';
    return resdata;
}

}