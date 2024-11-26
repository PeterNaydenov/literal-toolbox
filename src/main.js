function literal ( type ) {
return function main ( list ) {
    let tpl =  arguments;
    return function tagClosure () {
                let extra = 1;
                let vals = arguments[0];
                if ( type === 'arg' )   vals = arguments
                return list.reduce ( ( acc, part ) => {
                                let key = tpl[extra++];
                                let extraData = vals[key]? vals[key] : '';
                                const isItFunc = typeof extraData === 'function';
                                if ( isItFunc )   extraData = extraData ()

                                if ( !part )   part = extraData
                                else           part = part + extraData
                                return acc + part
                    }, '' )
        } // tagClosure func. 
}} // literal and main func.




export default { 
                  obj : function obj () { return literal ( 'obj' )( ...arguments ) }
                , arr : function arr () { return literal ( 'arr' )( ...arguments ) }
                , arg : function arg () { return literal ( 'arg' )( ...arguments ) }
            }


