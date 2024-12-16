export namespace Hr {
    export enum Gender {
        Female = 0,
        Male = 1
    }

    export interface Person {
        id: number;
        active: boolean;
        name: string;
        birthDate: Date;
        gender: Gender;
    }

    export function logPerson(person: Person): void {
        // eslint-disable-next-line no-console
        console.log(person);
    }
}
