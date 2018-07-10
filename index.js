const minimist = require('minimist');

module.exports = () => {
  const args = minimist(process.argv.slice(2))
  const cmd = args._[0];

  switch (cmd) {
    case 'create':
      require('./cmds/create')(args)
      break
    default:
      console.error(`"${cmd}" is not a valid command!`)
      break
  }
}
