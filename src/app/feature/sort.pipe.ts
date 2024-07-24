import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "sort",
    pure: false
})

export class Sort implements PipeTransform {
    transform(value: Array<number>, seperator: string) {
        let temp
        for (let i = 0; i < value.length; i++) {
            for (let j = 0; j < value.length - i - 1; j++) {
                if (value[j] > value[j + 1]) {
                    temp = value[j + 1];
                    value[j + 1] = value[j];
                    value[j] = temp;
                }
            }
        }
        return value.join(seperator)
    }
}