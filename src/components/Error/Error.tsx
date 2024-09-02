import { FC } from "react"
import { StyledError } from "./Error.styled"

export const Error:FC = () => {
    return (
    <StyledError>
        <p>Sorry, an error occurred. Try refreshing the page, or come back later</p>
        <img className='image' src="../../../public/error_icon.png" alt="" />
    </StyledError>
    ) 
}