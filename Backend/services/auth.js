const setIdToUserMap=new Map();

export function setUser(id,user){
    setIdToUserMap.set(id,user);
}

export function getUser(id){
    return setIdToUserMap.get(id);
}