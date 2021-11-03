export default function usersReducer(users = [], action) {
  switch (action.type) {
    case 'add_user':
      return [...users, action.user]
    case 'remove_user':
      return users.filter( user => user.name !== action.user.name);
    default:
      return users
  }
}