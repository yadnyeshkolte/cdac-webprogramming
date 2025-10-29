import React from "react";

function ImageProps(props: {name: string, size: string, pixels: number}){
    const name: string = props ? props.name : "NullImage";
    const size: string = props ? props.size : "0B"
    const pixels: number = props ? props.pixels: 0

    return(
        <>
            <div>
                <table>
                    <th>
                        <td><p>Image name: {name}</p></td>
                        <td><p>Image size: {size}</p></td>
                        <td><p>Image pixels: {pixels}</p></td>
                    </th>
                </table>

            </div>
        </>
    )

}

ImageProps.defaultProps = {
    name: "Guest",
    size: "0B",
    pixels: 0
}
export default ImageProps;