import React from "react";

function useLocalStorage(itemName,initialValue) {
  
    const [loading,setLoading] = React.useState(true);
    const [sincronizedItem,setSincronizedItem] = React.useState(false);
    const [error,setError] = React.useState(false);
    const [item, setItem] = React.useState(initialValue);
  
    React.useEffect(() => {
      setTimeout(() => {
        try{
          const localStorageItem = localStorage.getItem(itemName);
  
          let parsedItem;
  
          if(!localStorageItem){
            localStorage.setItem(itemName,JSON.stringify(initialValue));
            parsedItem = [];
          }else{
            parsedItem = JSON.parse(localStorageItem);
          }
  
          setItem(parsedItem);
          setLoading(false);
          setSincronizedItem(true);
        }catch(error){
          setError(error);
        }
      },1500);
    },[sincronizedItem,itemName,initialValue]);

    const sincronize = () => {
      setLoading(true);
      setSincronizedItem(false);
    }
    
    const saveItem = (newItem) => {
      try{
        const stringItem = JSON.stringify(newItem);
        localStorage.setItem(itemName,stringItem);
        setItem(newItem);
      }catch(error){
        setError(error);
      }
    };
  
    return {item,saveItem,loading,error,sincronize};
}

export {useLocalStorage};
