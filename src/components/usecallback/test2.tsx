import { useCallback } from 'react';

interface IProps {
    title: string;
}

export const Test2 = ({ title }: IProps) => {
    const onClick = () => {
        console.log('onclick', title);
    }
    const onClick2 = useCallback(() => {
        console.log(title);
    }, [title])

    return (
        <>
            <button onClick={onClick}>test2</button>
            <button onClick={onClick2}>testUseCallBack</button>
        </>
    )
}