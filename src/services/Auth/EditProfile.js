import axios from "axios";

export const editProfileService = async (updatedProfileData, loginToken) =>{
    console.log(updatedProfileData)
return(
    await axios.post(
        "/api/users/edit",
        { userData: updatedProfileData },
        { headers: { authorization: loginToken } }
      )
) 

}
  