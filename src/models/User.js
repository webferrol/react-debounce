export class User {
  constructor ({ name = '', githubUrl = '', avatarUrl = '' }) {
    this.avatarUrl = avatarUrl
    this.githubUrl = githubUrl
    this.name = name
  }
}
