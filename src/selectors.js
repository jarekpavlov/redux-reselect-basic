import {createSelector} from "reselect";

export const userSelector = (state) => state.users.users;

// export const filterSelector = (state) =>{
//   return userSelector(state).filter((user) => {
//         console.log("filtering users");
//         return user.includes(state.users.search);
//     });
//}

export const filterSelector = createSelector(
    state => state.users.users,
    state => state.users.search,
    (users, search) =>{
        return users.filter((user) => {
            console.log("filtering users...");
            return user.includes(search);
        })
    }
)
