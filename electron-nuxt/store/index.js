import OS from 'os'

export const state = () => ({
    os: OS,
    privateIP:  Object.values(OS.networkInterfaces()).flat().filter(inter => { return inter.family === 'IPv4' && !inter.internal })[0].address
})