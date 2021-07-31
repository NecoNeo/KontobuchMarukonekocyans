const exec = require('child_process').execFile

const MONGODB_PATH = 'C:\\Program Files\\MongoDB\\Server\\5.0\\bin\\mongod.exe'
const DB_PATH = 'D:\\code\\KontobuchMarukonekocyans\\data\\db'

console.log('starting MONGODB...');

exec(
  MONGODB_PATH,
  ['--dbpath', DB_PATH],
  function(err) {
    if (err) { throw err; }
  }
)
