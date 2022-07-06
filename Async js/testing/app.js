function x(){
  setTimeout(() => {console.log("this is the first message")}, 5000);
  setTimeout(() => {console.log("this is the second message")}, 500);
  setTimeout(() => {console.log("this is the third message")}, 1000);
}

x();