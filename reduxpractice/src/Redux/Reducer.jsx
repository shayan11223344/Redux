
export default function Reducer(state,action){
    console.log(state,action,"reducer");

    switch(action.type){
        case "inc" :return state+1

        case "dec" :return state-1

        case "res" :return state=1

    }
return state
}