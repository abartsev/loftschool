/* ДЗ 2 - работа с массивами и объеектами */

/*
 Задание 1:

 Напишите аналог встроенного метода forEach для работы с массивами
 Посмотрите как работает forEach и повторите это поведение для массива, который будет передан в параметре array
 */
function forEach(array, fn) {
    for (var i = 0; i < array.length; i++) {
        fn(array[i], i, array);
    }
}

/*
 Задание 2:

 Напишите аналог встроенного метода map для работы с массивами
 Посмотрите как работает map и повторите это поведение для массива, который будет передан в параметре array
 */
function map(array, fn) {

    let b = [];

    for (let i = 0; i < array.length; i++) {

        b[i] = fn (array[i], i, array);

    }

    return b;
}

/*
 Задание 3:

 Напишите аналог встроенного метода reduce для работы с массивами
 Посмотрите как работает reduce и повторите это поведение для массива, который будет передан в параметре array
 */
function reduce(array, fn, initial) {
    var prew = initial || array[0];
    let i = (initial) ? 0 : 1;

    for (; i < array.length; i++ ) {

        prew = fn(prew, array[i], i, array );

    }

    return prew;
}

/*
 Задание 4:

 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистр и вернуть в виде массива

 Пример:
   upperProps({ name: 'Сергей', lastName: 'Петров' }) вернет ['NAME', 'LASTNAME']
 */
function upperProps(obj) {

    var arr = Object.keys(obj);

    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].toUpperCase();
    }

    return arr;
}

/*
 Задание 5 *:

 Напишите аналог встроенного метода slice для работы с массивами
 Посмотрите как работает slice и повторите это поведение для массива, который будет передан в параметре array
 */
function slice(array, from = 0, to) {

    let newArr = [];
  
    if (to < 0 && to > -array.length) {
        to = array.length + to;
    } else if (from < 0 && from > -array.length) {
        from = array.length + from;
    } else if (from > array.length) {
        from = array.length;
    } else if (from < -array.length) {
        from = 0;
    }

    for (let i = from; i < (to || array.length); i++) {

        newArr.push(array[i]);

    }

    return newArr;
}

/*
 Задание 6 *:

 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат
 */
function createProxy(obj) {
}

export {
    forEach,
    map,
    reduce,
    upperProps,
    slice,
    createProxy
};
