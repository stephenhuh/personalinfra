var spawn = require('child_process').spawn,
  py = spawn('python3', ['1.py']);

let str = '';

console.log('executing process');

setTimeout( ()  => { 
  py.stdout.setEncoding('utf8')
}, 8000); //TODO: Isnt this a race...? assume this takes forever to run
py.stdout.on('data', (data) => {
  console.log(data);
  console.log(`stdout: ${data}`);
});

py.stderr.on('error', (err) => {
  console.error("heres ur error dude",err);
});

//Connect with Google Sheets


