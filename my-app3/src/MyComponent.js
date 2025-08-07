import React from 'react';

const MyComponent = ({name , children , favoriteNumber}) => {
    return (
        <div>
            안녕하세요. 제이름은 {name} 입니다. <br/>
            children값은 {children} 입니다.
        </div>
    );
};

export default MyComponent;