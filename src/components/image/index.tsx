import React from 'react'
import { APP_NAME } from '../../utils/config'

type Props = {
    src: string,
    height: string,
    width: string,
    loading?: "lazy" | "eager",
    alt?: string,
    className?: string,
    style?: object,
    onClick?: any
}
const Image = (props: Props) => {

    return (
        <React.Fragment>
            <img
                src={props.src}
                loading="lazy"
                alt={APP_NAME}
                onClick={props.onClick}
                className={props.className}
                {...props}
            />
        </React.Fragment>
    )
}

export default Image
