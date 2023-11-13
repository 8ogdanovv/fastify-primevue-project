const fs = require('fs')
const path = require('path')

const sourceEnv = path.join(__dirname, '.env.example')
const targetEnv = path.join(__dirname, '.env')

try {
  if (!fs.existsSync(targetEnv)) {
    fs.copyFileSync(sourceEnv, targetEnv);
    console.log(`Created ${targetEnv} from ${sourceEnv}`)
  } else {
    console.log(`${targetEnv} already exists. Skipped creation.`)
  }
} catch (err) {
  console.error(`Error occurred while copying ${sourceEnv} to ${targetEnv}: `, err)
}
