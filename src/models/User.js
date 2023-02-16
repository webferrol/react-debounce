export class User {
  constructor ({ name = '', userName = '', userCreatedAt = '', githubUrl = '', avatarUrl = '' }) {
    this.avatarUrl = avatarUrl
    this.githubUrl = githubUrl
    this.name = name
    this.userName = userName
    this.userCreatedAt = userCreatedAt
  }
}
