<h1 align="center">
  <br>
  pathacks.com
  <br>
</h1>

<h4 align="center">A command line tool for <a href="https://pathacks.com" target="_blank">pathacks.com</a> challenge submissions.</h4>

<p align="center">
  <a href="#installation">Installation</a> |
  <a href="#Login">Login</a> |
  <a href="#submit">Submit</a> |
  <a href="#logout">Logout</a> |
  <a href="#Contributing">Contributing</a> |
  <a href="#license">License</a>
</p>

## Installation

```bash
  $ npm install --global pathacks
```

## Login
```bash
  $ pathacks login | l
```

## Submit
```bash
  $ pathacks submit | s
```

## Logout
```bash
  $ pathacks logout
```

## Version
```bash
  $ pathacks --version | -V
```

## Help Menu
```bash
  $ pathacks help
```

## Contributing
**CLI options:**

  - pathacks submit:
    - `--url "http://YOUR_DEV_SERVER"` To point to another graphQL endpoint
    - `--debug | -d` To use a test account token instead of you personnal account

  - pathacks login: 
    - `--url "http://YOUR_DEV_SERVER"` To point to another graphQL endpoint

**Paradigme:**

- **Error handeling:** For a sweet user experience do not throw raw error instead throw a comprehensible message.
```javascript
  try {
    // ...code
  } catch {
    throw new Error(MY_USER_FRIENDLY_MESSAGE)
  }
```

### Publishing

1. Update `package.json` version.
2. run `npm run build`
3. Publish! `npm publish`

Must be done in the order above (specifically, build then publish) because build produces a package.json inside the `dist` folder, which is used for upgrade checks

## 

## License

MIT

