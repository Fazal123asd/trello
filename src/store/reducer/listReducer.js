const initialState = [
    {title: 'Last Episode',
        id: 0,
        cards: [
            {
                id: 0,
                text: 'dssdfdscdscsddsccsd',
            },
            {
                id: 1,
                text: 'dssdfdscdscsddscasadsadcsd',
            }
        ]
},

{title: 'This Last Episode',
id: 1,
cards: [
    {
        id: 0,
        text: 'dssdfdscdscsddsccsd',
    },
    {
        id: 1,
        text: 'dssdfdscdscsddscasadsadcsd',
    },

    {
        id: 2,
        text: 'dssdfdscdscsddscasadsadcsd',
    }
]
}
]

 const reducer = (state= initialState, action) =>{
    switch(action.type){
        default: return state
    }
}

export default reducer;