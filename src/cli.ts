#!/usr/bin/env node

import updateNotifier from 'update-notifier'
import { createCommand } from 'commander'
import { bold } from 'chalk'

import submit from './commands/submit'
import login from './commands/login'
import logout from './commands/logout'
import { URL } from './constants'
import * as Sentry from '@sentry/node'
import '@sentry/tracing'

const SENTRY_DSN =
  'https://e3bb7eb4562a4eafb2f925af9a4220ed@o385150.ingest.sentry.io/6559500'

Sentry.init({
  dsn: SENTRY_DSN,

  // Set tracesSampleRate to 0 to stop monitoring
  // the performance of transactions
  tracesSampleRate: 1.0,
})

const pkg = require('../package.json')
const program = createCommand()
updateNotifier({ pkg, updateCheckInterval: 0 }).notify()
console.clear()

export const init = (): void => {
  // List Options
  program
    .version(
      `pathacks cli version: ${bold.magenta(pkg.version)}`,
      undefined,
      'Show the pathacks cli version'
    )
    .helpOption(undefined, 'Display help menu').usage(`[options]

  ${bold.magenta('A command line interface (CLI) for pathacks.com')}`)

  // List Commands
  program
    .command('submit')
    .alias('s')
    .description('Submit git diff of challenge to pathacks.com')
    .option('--url <url> ', 'Set url endpoint for http request', URL)
    .option('-d, --debug')
    .action(submit)

  program
    .command('login')
    .alias('l')
    .description('Login to your pathacks.com account')
    .option('--url <url> ', 'Set url endpoint for http request', URL)
    .action(login)

  program
    .command('logout')
    .description('Logout to your pathacks.com account')
    .action(logout)

  program.parse(process.argv)

  if (!program.args.length) {
    program.help()
  }
}

init()
