// parse urls to get the specific id

export const urlParser = (url) => {
    if (!url) return null;

    const parts = url.split("/");
    const id = parts[parts.length - 2];
    return id;
}