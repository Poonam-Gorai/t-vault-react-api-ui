
export const createSafe = (safeDetails) => ({
    type: "SET_CREATE_SAFE",
    payload: safeDetails,
});
export const deleteItem = (index) => ({
           type: "DELETE_ITEM",
            payload: index,
    });

    export const EditItem = (safeDetails,index) => 
    {
        console.log("Edit item",safeDetails,index);
        return{
        type: "EDIT_ITEM",
         payload: {safeDetails,index}
        };

 };
 export const reLoadsafe = (status) => ({
    type: "SET_RELOADING",
     payload: status,
});

