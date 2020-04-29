import process from 'process'
import crypto from 'crypto'
import os from 'os'
import zlib from 'zlib'
import path from 'path'

export const state = () => ({
    crypto,
    os,
    zlib,
    path,
    process,
})