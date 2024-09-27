import { useMemo } from "react";

const MemoView = (props) => {
    const {num, text} = props;

    const getNumber = (number) => {
        console.log("숫자가 변경되었습니다. 계산하여 적용");

        return number *7;
    }

    const getText = (text) => {
        console.log("글자가 변경되었습니다");
        return text + "**";
    }

     //useMemo 사용
     // : MemoriZation 기범을 사용한 리액트 훅
    // -> 한번 연산된 결과를 기억해 두고 다시 동일한 값이 입력되었을때 기억해둔 데이터를 반환

    /*
     useMemo(calculateValue, dependencies)
     *calculateValue : 캐싱하려는 값을 계산하는 함수
     *dependencies : calculateValue 함수 내에서 참조된 모든 값들의 목록(의존성 배열)
    */

     const numberValue = useMemo(()=> getNumber(num), [num]);
     const textValue = useMemo(()=>getText(text), [text]);

    return(
       <>
       <h3>{numberValue}</h3>
       <h3>{textValue}</h3>
       </>
    )
}
export default MemoView;