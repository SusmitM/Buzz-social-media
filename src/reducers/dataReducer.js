export const dataReducer=(dataState,action)=>{
    switch(action.type){

        case "addUsers":{
            return {...dataState,users:action.users}
        }

        case "addPosts":{
            return {...dataState,allPosts:action.posts}
        }

         case "updatePosts":{
            return {...dataState,allPosts:action.posts}
        }

        case "addBookmarkedPosts":{
            return {...dataState,bookmarkedPost:action.bookmarkedPosts}
        }
        case "updateBookmarkedPosts":{
            return {...dataState,bookmarkedPost:action.bookmarkedPosts}
        }
        case "updateUserData":{
            const newUserData= dataState?.users?.map((userData)=>userData._id===action.userData._id ? action.userData :userData)
            return {...dataState,users:newUserData}
        }
       

        default: return dataState 
        
    }
}

export const initialDataState={users:[],allPosts:[],bookmarkedPost:[]}