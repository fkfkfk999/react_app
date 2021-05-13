const { createGlobalStyle } = require("styled-components");
const { reset } = require("styled-reset");

const globalStyles = createGlobalStyle`
    ${reset};
    a{
        text-decoration:none;
        color:inherit;
    }
    *{
        box-sizing:border-box;
    }
    body{
        font-size:17px;
        background-color:rgba(20,20,20,1);
        color:white;
        padding-top:50px;
    }
`;

export default globalStyles;
