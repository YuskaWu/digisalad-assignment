import fs from 'fs'
import fsExtra from 'fs-extra'

const targetPath = './dist'

if (fs.existsSync(targetPath)) {
  fs.rmSync(targetPath, { recursive: true })
}

await fsExtra.move('.output/public', targetPath)
fs.closeSync(fs.openSync(targetPath + '/.nojekyll', 'w'))
