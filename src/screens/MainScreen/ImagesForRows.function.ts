export default function imagesForRows(images_buffer : string[]) : string[][] {
    let result  = [];
    const chunksize : number = 3;
    for (let i = 0; i < images_buffer.length; i += chunksize) {
        result.push(images_buffer.slice(i, i + chunksize))
    }
    return result
}
