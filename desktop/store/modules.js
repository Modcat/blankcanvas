import process from 'process'
import crypto from 'crypto'
import os from 'os'
import path from 'path'

export const state = () => ({
    crypto,
    os,
    path,
    process,
})