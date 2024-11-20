function obj ( list ) {
    let tpl =  arguments
    return function objClosure ( vals ) {
                let extra = 1;
                return list.reduce ( ( acc, part ) => {
                        let 
                              key = tpl[extra++]
                            , extraData = vals[key]? vals[key] : ''
                            ;
                        if ( !part )   part = extraData
                        else           part = part + extraData
                        return acc + part
                }, '' )
        } 
} // obj func.



function arr (list ) {
    let tpl =  arguments
    return function arrClosure ( vals ) {
                let extra = 1;
                return list.reduce ( ( acc, part ) => {
                        let 
                              key = tpl[extra++]
                            , extraData = vals[key]? vals[key] : ''
                            ;
                        if ( !part )   part = extraData
                        else           part = part + extraData
                        return acc + part
                }, '' )
    } 
} // arr func.



function arg (list ) {
    let tpl =  arguments
    return function argClosure () {
                let extra = 1;
                let vals = arguments
                return list.reduce ( ( acc, part ) => {
                        let 
                              key = tpl[extra++]
                            , extraData = vals[key]? vals[key] : ''
                            ;
                        if ( !part )   part = extraData
                        else           part = part + extraData
                        return acc + part
                }, '' )
    } 
} // arg func.




export default { obj, arr, arg }


