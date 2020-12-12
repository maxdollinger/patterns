//find text between to HTML-Tags
function findTags(str) {
    const tagsAndContent = {};

    //search with regex for an opening and closing tag
    str.replace(/<([a-z]+).*?>(.*?)<\/\1>/gmi, (match, g1, g2) => {
        /*instead of replacing the match store it in the tagsAndContent object with tag as key
        and the value as an array so that multiple contents can be stored */
        tagsAndContent[g1] ? tagsAndContent[g1].push(g2) : tagsAndContent[g1] = [g2];
    } )

    return tagsAndContent;
}

