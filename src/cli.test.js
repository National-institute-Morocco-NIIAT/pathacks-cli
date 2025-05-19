import { createCommand } from 'commander'

jest.mock('commander')

const program = {
  version: () => program,
  helpOption: () => program,
  usage: () => program,
  command: () => program,
  alias: () => program,
  description: () => program,
  option: () => program,
  action: () => program,
  parse: () => program,
  help: jest.fn(),
  args: []
}

createCommand.mockReturnValue(program)
const { init } = require('./cli')

describe('CLI pathacks', () => {
  test('Should run pathacks', () => {
    expect(createCommand).toHaveBeenCalled()
  })

  test('Should run pathacks --help', () => {
    init()
    expect(program.help).toHaveBeenCalled()
  })

  test('Should not run pathacks --help', () => {
    program.args = ['submit']
    program.help = jest.fn()
    init()
    expect(program.help).not.toHaveBeenCalled()
  })
})
