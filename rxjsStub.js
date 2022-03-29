"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.map = exports.mergeMap = exports.of = exports.from = exports.Observable = void 0;
class Observable {
    constructor(promise) {
        this.promise = promise;
    }
    toPromise() {
        return this.promise;
    }
    pipe(callback) {
        return new Observable(this.promise.then(callback));
    }
}
exports.Observable = Observable;
function from(promise) {
    return new Observable(promise);
}
exports.from = from;
function of(value) {
    return new Observable(Promise.resolve(value));
}
exports.of = of;
function mergeMap(callback) {
    return (value) => callback(value).toPromise();
}
exports.mergeMap = mergeMap;
function map(callback) {
    return callback;
}
exports.map = map;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicnhqc1N0dWIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyeGpzU3R1Yi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxNQUFhLFVBQVU7SUFDckIsWUFBb0IsT0FBbUI7UUFBbkIsWUFBTyxHQUFQLE9BQU8sQ0FBWTtJQUFHLENBQUM7SUFFM0MsU0FBUztRQUNQLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDO0lBRUQsSUFBSSxDQUFJLFFBQXNDO1FBQzVDLE9BQU8sSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUNyRCxDQUFDO0NBQ0Y7QUFWRCxnQ0FVQztBQUVELFNBQWdCLElBQUksQ0FBSSxPQUFxQjtJQUMzQyxPQUFPLElBQUksVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ2pDLENBQUM7QUFGRCxvQkFFQztBQUVELFNBQWdCLEVBQUUsQ0FBSSxLQUFRO0lBQzVCLE9BQU8sSUFBSSxVQUFVLENBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQ25ELENBQUM7QUFGRCxnQkFFQztBQUVELFNBQWdCLFFBQVEsQ0FBTyxRQUFxQztJQUNsRSxPQUFPLENBQUMsS0FBUSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7QUFDbkQsQ0FBQztBQUZELDRCQUVDO0FBRUQsU0FBZ0IsR0FBRyxDQUFDLFFBQWE7SUFDL0IsT0FBTyxRQUFRLENBQUM7QUFDbEIsQ0FBQztBQUZELGtCQUVDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIE9ic2VydmFibGU8VD4ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHByb21pc2U6IFByb21pc2U8VD4pIHt9XG5cbiAgdG9Qcm9taXNlKCkge1xuICAgIHJldHVybiB0aGlzLnByb21pc2U7XG4gIH1cblxuICBwaXBlPFM+KGNhbGxiYWNrOiAodmFsdWU6IFQpID0+IFMgfCBQcm9taXNlPFM+KTogT2JzZXJ2YWJsZTxTPiB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKHRoaXMucHJvbWlzZS50aGVuKGNhbGxiYWNrKSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZyb208VD4ocHJvbWlzZTogUHJvbWlzZTxhbnk+KSB7XG4gIHJldHVybiBuZXcgT2JzZXJ2YWJsZShwcm9taXNlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9mPFQ+KHZhbHVlOiBUKSB7XG4gIHJldHVybiBuZXcgT2JzZXJ2YWJsZTxUPihQcm9taXNlLnJlc29sdmUodmFsdWUpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlTWFwPFQsIFM+KGNhbGxiYWNrOiAodmFsdWU6IFQpID0+IE9ic2VydmFibGU8Uz4pIHtcbiAgcmV0dXJuICh2YWx1ZTogVCkgPT4gY2FsbGJhY2sodmFsdWUpLnRvUHJvbWlzZSgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFwKGNhbGxiYWNrOiBhbnkpIHtcbiAgcmV0dXJuIGNhbGxiYWNrO1xufVxuIl19