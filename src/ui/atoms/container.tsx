import React from 'react';

interface IContainerProps {
    children: JSX.Element | JSX.Element[]
}

const Container:React.FC<IContainerProps> = ({children}) => {
    return <div className="atom-container">{children}</div>
}

export default Container;