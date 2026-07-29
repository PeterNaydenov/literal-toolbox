/**
 * @file literal-toolbox
 * Tag functions that turn template literals into parameterized render functions.
 * Three variants are exported on the default object: `obj`, `arr`, and `arg`.
 *
 * Placeholder values can be plain strings or zero-argument functions that return a
 * string (lazy resolution). Missing keys resolve to an empty string.
 *
 * @since 2024-11-20
 * @author Peter Naydenov
 * @example
 *   import literal from '@peter.naydenov/literal-toolbox'
 *
 *   // Object-keyed lookup
 *   const greet = literal.obj`${'greeting'}, ${'name'}!`
 *   greet({ greeting: 'Hi', name: 'Bob' })   // => "Hi, Bob!"
 *
 *   // Array-indexed lookup
 *   const join = literal.arr`${0} ${1} ${2}`
 *   join(['a', 'b', 'c'])                    // => "a b c"
 *
 *   // Positional arguments
 *   const sig = literal.arg`a=${0} b=${1} c=${2}`
 *   sig('x', 'y', 'z')                       // => "a=x b=y c=z"
 */
export type FillValue = (string | (() => string));
/**
 * Collection of literal tag functions.
 * @namespace literal
 */
declare const _default: {
    /**
     * Substitute placeholders using named keys from a plain object.
     * Placeholder keys must be quoted string literals (e.g. ``${'name'}``).
     *
     * Missing keys resolve to an empty string. Function values are
     * invoked with no arguments and their return value is inserted,
     * which is useful for lazy or conditional content.
     *
     * @type {(strings: TemplateStringsArray, ...keys: string[]) => (data: Record<string, FillValue>) => string}
     * @example
     *   const fn = literal.obj`${'greet'} ${'name'} (${'age'})`
     *   fn({ greet: 'Hey', name: 'Bob', age: 30 })   // => "Hey Bob (30)"
     * @example
     *   // Lazy / dynamic values via functions:
     *   const fn = literal.obj`Status: ${'login'}`
     *   fn({ login: () => 'logged in' })             // => "Status: logged in"
     */
    obj: (strings: TemplateStringsArray, ...keys: string[]) => (data: Record<string, FillValue>) => string;
    /**
     * Substitute placeholders using numeric indices into an array.
     * Placeholder keys must be numeric literals (e.g. ``${0}``).
     *
     * Missing indices resolve to an empty string. Function values are
     * invoked with no arguments and their return value is inserted.
     *
     * @type {(strings: TemplateStringsArray, ...keys: number[]) => (data: FillValue[]) => string}
     * @example
     *   const fn = literal.arr`${0} ${1} ${2}`
     *   fn(['a', 'b', 'c'])                         // => "a b c"
     */
    arr: (strings: TemplateStringsArray, ...keys: number[]) => (data: FillValue[]) => string;
    /**
     * Substitute placeholders using positional arguments.
     * Placeholder keys must be numeric literals (e.g. ``${0}``).
     *
     * Missing positional arguments resolve to an empty string.
     * Function values are invoked with no arguments and their return
     * value is inserted.
     *
     * @type {(strings: TemplateStringsArray, ...keys: number[]) => (...args: FillValue[]) => string}
     * @example
     *   const fn = literal.arg`${0} ${1} ${2}`
     *   fn('a', 'b', 'c')                           // => "a b c"
     */
    arg: (strings: TemplateStringsArray, ...keys: number[]) => (...args: FillValue[]) => string;
};
export default _default;
