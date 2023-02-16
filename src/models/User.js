export class User {
  constructor ({ name = '', userName = '', githubUrl = '', avatarUrl = '' }) {
    this.avatarUrl = avatarUrl
    this.githubUrl = githubUrl
    this.name = name
    this.userName = userName
  }
}
