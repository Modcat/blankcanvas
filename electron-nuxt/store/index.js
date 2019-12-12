import OS from 'os'
import Electron from 'electron'
import Git from 'simple-git'

export const state = () => ({
    os: OS,
    privateIP:  Object.values(OS.networkInterfaces()).flat().filter(inter => { return inter.family === 'IPv4' && !inter.internal })[0].address,
    remote: Electron.remote,
    appDirectory: Electron.remote.app.getAppPath(),
    git: Git
})