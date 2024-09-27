import { useContext} from "react";

import { ResultContext } from "./UseContextHook";

const ResultArea =({data}) => {
    // {data} => props.data

    const ctx = useContext(ResultContext);
    return(
        <>
           <h3>props로 전달된 데이터 : {}</h3>
           <h3>context로 전달된 데이터 : {ctx}</h3>
        </>
    )

}

export default ResultArea;