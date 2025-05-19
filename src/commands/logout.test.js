import logout from './logout'
import { promises as fsPromises } from 'fs'

jest.mock('fs', () => {
  return {
    promises: {
      rmdir: jest.fn(),
    }
  }
})

describe('pathacks logout', () => {
  test('Should delete .pathacks folder', () => {
    fsPromises.rmdir.mockResolvedValue()
    expect(logout()).resolves.toBe(undefined)
    expect(fsPromises.rmdir).toBeCalled()
  })

  test('Should throw error', () => {
    fsPromises.rmdir.mockRejectedValue('sdf')
    expect(logout())
    expect(fsPromises.rmdir).toBeCalled()
  })
})