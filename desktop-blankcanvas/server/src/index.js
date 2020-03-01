'use strict'
const path = require('path')
const consola = require('consola')
const feathers = require('@feathersjs/feathers')
const express = require('@feathersjs/express')

const app = require('./app');

process.env.NODE_CONFIG_DIR = path.join(__dirname, 'config/')

async function start() {
  const app = express(feathers())

  const { Nuxt, Builder } = require('nuxt')

  // Setup nuxt.js
  const config = require('../../nuxt.config.js')
  config.rootDir = path.resolve(__dirname, '../..')
  config.dev = process.env.NODE_ENV !== 'production'

  const nuxt = new Nuxt(config)
  await nuxt.ready()
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  const configuration = require('@feathersjs/configuration')
  app.configure(configuration()).use(nuxt.render)

  const host = Object.values(require('os').networkInterfaces())
  .flat()
  .filter((inter) => {
    return inter.family === 'IPv4' && !inter.internal
  })[0].address
  // const port = app.get('port')
  const port = '1992'

  app.listen(port)

  consola.ready({
    message: `Feathers application started on ${host}:${port}`,
    badge: true
  })
}

start()
