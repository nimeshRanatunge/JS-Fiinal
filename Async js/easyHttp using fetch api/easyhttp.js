class easyHttp {
    //make htto get request

get(url){
    fetch(url)
    .then(res => res.json()) //mat it to json 
    .then(data => console.log(data)) //gives un the data
    .catch(err => console.log(err));
}
}