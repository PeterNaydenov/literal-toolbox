import literal from '../src/main.js'
import { expect } from 'chai'


describe ( 'Literal-toolbox', () => {



    it ( 'Function obj', () => {
                const 
                    person = { 
                          name   : 'Bob'
                        , greet  : 'Hey'
                        , age    : 30
                        , extra  : 12
                    };

                const fn = literal.obj`${'greet'} darling ${'name'}, my age is ${'age'}. Great!`
                const res = fn ( person )
                expect ( res ).to.be.equal ( 'Hey darling Bob, my age is 30. Great!' )
        }) // it obj



    it ( 'Function arr', () => {
                const person = [ 'Hey', 'Bob', 30];

                const fn = literal.arr`${0} darling ${1}, my age is ${2}. Great!`
                const res = fn ( person )
                expect ( res ).to.be.equal ( 'Hey darling Bob, my age is 30. Great!' )
        }) // it arr



    it ( 'Function arg', () => {
                const fn = literal.arg`${0} darling ${1}, my age is ${2}. Great!`
                const res = fn ( 'Hey', 'Bob', 30 )
                expect ( res ).to.be.equal ( 'Hey darling Bob, my age is 30. Great!' )  
        }) // it arg



}) // describe


