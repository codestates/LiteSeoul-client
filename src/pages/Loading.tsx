import React from 'react'
import styled from 'styled-components';

const Loadinging = styled.div`
margin-top: 300px;
color: #189cc4;
font-size: 100px;
text-align: center;
align-items: center;
`


function Loading(){
    return(
        <Loadinging>
            로뒹중임뉘다....
        </Loadinging>
    )
}

export default Loading;