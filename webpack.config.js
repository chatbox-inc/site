module.exports = {
    "entry": {
        "common":"./script/app.js",
        "hoge": [function(){
            return [
                "hoge"
            ]
        }]
    },
    "output": {
        "filename": "contents/assets/js/[name].bundle.js"
    },
    module: {
        loaders: [
            { test: /\.js/, loader: "babel" },
            { test: /\.html/, loader: "html" }
        ]
    },
    resolve: {
        extensions:["",".js"]
    }
}