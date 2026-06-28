module.exports = function prefixArgs(command, dot = "\\.") {
    return new RegExp(`^${dot}${command}\\s+(.+)$`, "i");
}