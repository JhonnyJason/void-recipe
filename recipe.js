module.exports = {

    staticBase: [
        ["merge", "createEmpty"],
        {
            //baseRemote"
            merge: ["root-template", "*"]
        }
    ],

    output: [
        ["submodule"],
        ["create"],
        {
            //thingyModuleType"
            create: [null]
        }
    ],

    sources: [
        ["submodule"],
        ["create", "merge", "use"],
        {
            //thingyModuleType"
            create: [null],
            //baseRemote"
            merge: ["*"],
            //baseRemote"
            use: ["*"]
        }
    ],

    testing: [
        ["directory"],
        ["create"],
        {
            create: [null]
        }
    ],

    toolset: [
        ["submodule"],
        ["use"],
        {
            //baseRemote"
            use: ["toolset"]
        }
    ],

    "*": true,

    individualize() {
        return "individual"
    }
}
