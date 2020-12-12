//find text between to HTML-Tags
function findTags(str) {
    const content = {};

    //search with regex for an opening and closing tag
    str.replace(/<([a-z]+).*?>(.*?)<\/\1>/gmi, (match, g1, g2) => {
        /*instead of replacing the match store it in the content object with the tag as the key
        and the conntent as the value. Values stored in an array due the possibility of multiple occurence */
        content[g1] ? content[g1].push(g2) : content[g1] = [g2];
    } )

    return content;
}

