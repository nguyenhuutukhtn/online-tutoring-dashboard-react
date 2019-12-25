import userConstants from '../constants/user.constants';

const users = (state = {}, action) => {
  switch (action.type) {
    case userConstants.GETALL_REQUEST:
      return {
        loading: true
      };
    case userConstants.GETALL_SUCCESS:
      return {
        items: action.users
      };
    case userConstants.GETALL_FAILURE:
      return {
        error: action.error
      };
    case userConstants.DELETE_REQUEST:
      // add 'deleting:true' property to user being deleted
      return {
        ...state,
        items: state.items.map(user =>
          user.id === action.id ? { ...user, deleting: true } : user
        )
      };
    case userConstants.DELETE_SUCCESS:
      // remove deleted user from state
      return {
        items: state.items.filter(user => user.id !== action.id)
      };
    case userConstants.DELETE_FAILURE:
      // remove 'deleting:true' property and add 'deleteError:[error]' property to user
      return {
        ...state,
        items: state.items.map(user => {
          if (user.id === action.id) {
            // make copy of user without 'deleting:true' property
            const { deleting, ...userCopy } = user;
            // return copy of user with 'deleteError:[error]' property
            return { ...userCopy, deleteError: action.error };
          }

          return user;
        })
      };
    case userConstants.LIST_USER_SUCCESS:
      return {
        ...state,
        listUser: action.data
      };
    case userConstants.LIST_SKILL_SUCCESS:
      return {
        ...state,
        listSkill: action.data
      };
    case userConstants.LIST_ALL_COMPLAIN:
      return {
        ...state,
        listComplain: action.data
      };
    case userConstants.GET_DETAIL_COMPLAIN:
      return {
        ...state,
        complainDetail: action.data
      };
    case userConstants.GET_PROFIT:
      return {
        ...state,
        profit: action.data
      };
    case userConstants.GET_PROFIT_TUTOR:
      return {
        ...state,
        profitByTutor: action.data
      };
    case userConstants.GET_ALL_INFO:
      return {
        ...state,
        allInfo: action.data
      };
    default:
      return state;
  }
};

export default users;
