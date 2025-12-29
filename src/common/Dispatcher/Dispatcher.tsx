import React,{ useEffect,useRef, ReactNode} from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../app/store";
import { getPlans } from "../../features/ticketBooking/services";
import { getSponsers } from "../../features/sponsers/services/api";

interface DispatcherProps{
    children: ReactNode
}

const Dispatcher: React.FC<DispatcherProps> = React.memo(({children})=>{
    const dispatch = useDispatch<AppDispatch>();


    useEffect(()=>{
        dispatch(getPlans())
        dispatch(getSponsers())
    },[dispatch])

    return <>{children}</>
})

export default Dispatcher;