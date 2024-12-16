import { Hr } from "./person.ts";

const person: Hr.Person = {
    id: 1,
    active: true,
    name: "John Doe",
    birthDate: new Date("2000-01-01"),
    gender: Hr.Gender.Male
};

Hr.logPerson(person);
