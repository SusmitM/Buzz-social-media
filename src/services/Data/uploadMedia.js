

export const uploadMedia=(data)=>{
   return(
          fetch("https://api.cloudinary.com/v1_1/djxqg0lar/auto/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => data)
        .catch((err) => console.error(err))
   )

}