document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJson);
document.getElementById('button3').addEventListener('click', getExternal);

// Get local text file data
function getText() {
  fetch('text.txt')
    .then(function(res){
      return res.text();
    })
    .then(function(datax) {
      console.log(datax);
      document.getElementById('output').innerHTML = datax;
    })
    .catch(function(err){
      console.log(err);
    });
}

function getJson() {
    fetch('xyz.json')
      .then(function(res){
        return res.json();
      })
      .then(function(data) {
        let dataL = '';
        data.forEach(post => {
            dataL += `<li>${post.title}</li>`
        });
        document.getElementById('output').innerHTML = dataL;
      })
      .catch(function(err){
        console.log(err);
      });
  }
  

  function getExternal() {
    fetch('https://api.github.com/users')
      .then(function(res){
        return res.json();
      })
      .then(function(data) {
        let dataL = '';
        data.forEach(post => {
            dataL += `<li>${post.login}</li>`
        });
        document.getElementById('output').innerHTML = dataL;
      })
      .catch(function(err){
        console.log(err);
      });
  }
  

