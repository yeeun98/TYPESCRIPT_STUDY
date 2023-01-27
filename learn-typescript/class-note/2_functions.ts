// 함수의 파라미터에 타입을 정의하는 방식
// function sum(a: number, b: number) {
//     return a + b;
// }

// sum(10, 20);

// 함수의 반환 값에 타입울 정의하는 방식
function add(): number{
    return 10;
}

// 함수에 타입을 정의하는 방식
function sum2(a: number, b: number): number {
    return a + b;
}
sum2(10, 20, 30, 40);

// 함수의 옵셔널 파라미터
// ?가 붙어있는 파라미터는 있어도 되고 없어도 된다.
function log(a: string, b?: string, c?: string) {

}
log('hello world');
log('hello world', 'abc');
log('hello world', 'abc', '1');