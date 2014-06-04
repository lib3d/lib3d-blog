require.config({
    paths: {
        'MainModule': './app/Main/MainModule'
    },

    "modules": [
        {
            "name": "blog",
            "include": [
                "MainModule"
            ],
            "exclude": [
                "common"
            ]
        }
    ]
});
