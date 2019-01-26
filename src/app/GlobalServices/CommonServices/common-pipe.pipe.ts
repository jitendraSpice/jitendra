import { PipeTransform } from "@angular/core";
import { Pipe } from "@angular/core";

@Pipe({
    name: 'orderBy'
  })
  export class OrderPipe implements PipeTransform {
    transform(value: any | any[], expression?: any, reverse?: boolean): any {
      if (!value) {
        return value;
      }
      const isArray = value instanceof Array;
      if (isArray) {

        if (typeof value[0] === 'string') {
          var array: any[] = value.sort((a: any, b: any): number => {
            return a.toLowerCase() > b.toLowerCase() ? 1 : -1;
          });
          return array;
        }
        else
          return this.sortArray(value, expression, reverse);
      }
      if (typeof value === 'object') {
        return this.transformObject(value, expression, reverse);
      }
      return value;
    }
    private sortArray(value: any[], expression?: any, reverse?: boolean): any[] {
      const isDeepLink = expression && expression.indexOf('.') !== -1;
      if (isDeepLink) {
        expression = OrderPipe.parseExpression(expression);
      }
      let array: any[] = value.sort((a: any, b: any): number => {
        if (!expression) {
          return a > b ? 1 : -1;
        }
        if (!isDeepLink) {
          if (isNaN(a[expression]))
            return (a[expression] || "").toLowerCase() > (b[expression] || "").toLowerCase() ? 1 : -1;
          else
            return a[expression] > b[expression] ? 1 : -1;
        }
        return OrderPipe.getValue(a, expression) > OrderPipe.getValue(b, expression) ? 1 : -1;
      });
      if (reverse) {
        return array.reverse();
      }
      return array;
    }
    /**
     * Transform Object
     *
     * @param value
     * @param expression
     * @param reverse
     * @returns {any[]}
     */
    private transformObject(value: any | any[], expression?: any, reverse?: boolean): any {
      let parsedExpression = OrderPipe.parseExpression(expression);
      let lastPredicate = parsedExpression.pop();
      let oldValue = OrderPipe.getValue(value, parsedExpression);
      if (!(oldValue instanceof Array)) {
        parsedExpression.push(lastPredicate);
        lastPredicate = null;
        oldValue = OrderPipe.getValue(value, parsedExpression);
      }
      if (!oldValue) {
        return value;
      }
      const newValue = this.transform(oldValue, lastPredicate, reverse);
      OrderPipe.setValue(value, newValue, parsedExpression);
      return value;
    }
    /**
     * Parse expression, split into items
     * @param expression
     * @returns {string[]}
     */
    private static parseExpression(expression: string): string[] {
      expression = expression.replace(/\[(\w+)\]/g, '.$1');
      expression = expression.replace(/^\./, '');
      return expression.split('.');
    }
    /**
     * Get value by expression
     *
     * @param object
     * @param expression
     * @returns {any}
     */
    private static getValue(object: any, expression: string[]) {
      for (let i = 0, n = expression.length; i < n; ++i) {
        const k = expression[i];
        if (!(k in object)) {
          return;
        }
        object = object[k];
      }
  
      return object;
    }
    /**
     * Set value by expression
     *
     * @param object
     * @param value
     * @param expression
     */
    private static setValue(object: any, value: any, expression: string[]) {
      let i;
      for (i = 0; i < expression.length - 1; i++) {
        object = object[expression[i]];
      }
      object[expression[i]] = value;
    }
  
    private stringToDate(date) {
      let pattern = /(\d{2})\/(\d{2})\/(\d{4})/;
      let dt = new Date(date.replace(pattern, '$3-$2-$1'));
      return dt.getTime();
    }
  
    private longDateToStr(date) {
      let lDate = new Date(date);
      let dateToStr = lDate.toString().split(' ');
      let cleanDate = dateToStr[2] + '/' + dateToStr[1] + '/' + dateToStr[3];
      return cleanDate;
    }
  
  }