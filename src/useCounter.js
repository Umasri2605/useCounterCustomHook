import { useEffect, useState } from "react";

export function useCounter(icount,step,name){
    var[count,setCount]=useState(icount);
    useEffect(()=>{
        if(window.localStorage.getItem(name)){
            setCount(+window.localStorage.getItem(name)) 
        } 
        else{
            window.localStorage.setItem(name,icount); 
        } 
    },[])

    function inCount(){
        setCount((cv)=>{
           return cv+step; 
        });
    }
    useEffect(()=>{
        window.localStorage.setItem(name,count); 
        document.title=`${name} ${count}`
    },[count,name])
    function decCount(){
        setCount(count-step);

    }
    return[count,inCount,decCount]
}