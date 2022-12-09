const filters = {
    toUrlFriendly: function (text: string):string {
        return text && text.replace(/\s+/g,"-").toLowerCase();
    }
}

export default filters