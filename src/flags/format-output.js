const { flags } = require('@oclif/command')

module.exports.json = flags.build({
  description: 'Return results in JSON format'
})

module.exports.yaml = flags.build({
  description: 'Return results in YAML format'
})
