export default class Validator {
  validateUsername(userName) {
    /* eslint-disable no-useless-escape */
    return /^[a-zA-Z0-9_\-]+$/.test(userName)
        && !/[0-9]{4}/.test(userName)
        && !/^[0-9_\-]/.test(userName)
        && !/[0-9_\-]$/.test(userName);
    /* eslint-enable no-useless-escape */
  }
}
