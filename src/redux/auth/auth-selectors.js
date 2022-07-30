const getUserName = (session) => session.user.name

const authSelectors = {
  getUserName,
}

export default authSelectors
