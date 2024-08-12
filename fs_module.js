
const {readFile,writeFile} = require('fs');
// const text=readFileSync('./text_files/test.txt','utf-8');

// writeFileSync('./text_files/test2.txt','Hello Naveen !',{flag:'a'});

readFile('./text_files/test.txt','utf8',(err,result)=>{

    if(err){
        console.log(err);
        return;
    }
    console.log(result);
});

// console.log(text);