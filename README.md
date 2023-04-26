# mockwizard 🪄
mockwizard comes with different modules, that let you create mock data of many different kinds in seconds.

## Highlights

### Saving time and effort ⏰
Manually generating dummy data for testing and development purposes can be time-consuming and error-prone. By using a package that generates a variety of dummy data types, you can save time and effort while ensuring that the data is consistent and accurate.

### Improving testing quality 🧪
High-quality testing requires a variety of test data that accurately reflects real-world scenarios. Using a package that generates diverse dummy data types can help you create more comprehensive and accurate tests, improving the overall quality of your software.

### Rapid prototyping 📈
When building a new application or feature, it can be helpful to generate sample data quickly to get a sense of how the final product will look and behave. This package can facilitate this rapid prototyping process, allowing you to experiment with different scenarios and edge cases without needing to manually create a large amount of data.

## Installation

With npm:
```js
npm install mockwizard
```

With yarn:
```js
yarn add mockwizard
```

## Usage
```ts
import { MockWizard } from "mockwizard";

const mw = new MockWizard();

// Generating mock data for 40 persons
const generatePersons = (personsCount: number): string[] {
  if (!personsCount || typeof personsCount !== "number" || personsCount <= 0) {
    return;
  }
  
  const persons: string[] = [];
  
  let i = 0;
  
  while (i < personsCount) {
    const fullName = mw.person.fullName({ includeSaluation: true, gender: "female" });
    persons.push(fullName);
    i += 1;
  }
  
  return persons;
}

const mockPersons = generatePersons(40);
```

## Basic config

### Language and country specification
By default the `locale` is set to `en-US`, but you can choose other locales if you'd like to get more specific data, like names or city names.
For example, if you'd like to generate only names that are popular in France, just use `fr-FR`, when setting up your `MockWizard` object.
```js
import { MockWizard } from "mockwizard";

// Default: en-US
const mw = new MockWizard();

// Specific locale
const mw = new MockWizard({ locale: "fr-FR" });
```
There might be some scenarios where specifying a locale doesn't affect the output.

Here's a list of currently supported locales:
| Language | Country | Locale |
|----------|----------|----------|
| English | USA | `en-US`|
| German | Germany | `de-DE`

## Person

### First name
```js
import { MockWizard } from "mockwizard";

const mw = new MockWizard();

// Generate a random first name (gender will be picked randomly)
mw.person.firstName(); // "Laura"

// Generate a random male first name
mw.person.firstName({ gender: "male" }); // "John"

// Generate a random female first name
mw.person.firstName({ gender: "female" }); // "Sarah"
```

### Last name
```js
import { MockWizard } from "mockwizard";

const mw = new MockWizard();

// Generate a random last name
mw.person.lastName(); // "Spencer"
```

### Full name
```js
import { MockWizard } from "mockwizard";

const mw = new MockWizard();

// Generate a random full name (gender will be picked randomly)
mw.person.fullName(); // "Melyssa Wilkinson"

// Generate a random male full name
mw.person.fullName({ gender: "male" }); // "John Rice"

// Generate a random female full name
mw.person.fullName({ gender: "female" }); // "Sarah Carter"

// Generate a random full name with suffix
mw.person.fullName({ includeSuffix: true }); // "Anton Jackson Sr."

// Generate a random full name with salutation
mw.person.fullName({ includeSalutation: true }); // "Dr. Melyssa Wilkinson"
```

### Suffix
```js
import { MockWizard } from "mockwizard";

const mw = new MockWizard();

// Generate a random suffix
mw.person.suffix(); // "Jr."
```

### Salutation
```js
import { MockWizard } from "mockwizard";

const mw = new MockWizard();

// Generate a random salutation (no gender specific)
mw.person.salutation(); // "Prof."

// Generate a random male salutation
mw.person.salutation({ gender: "male" }); // "Mr."

// Generate a random female salutation
mw.person.salutation({ gender: "female" }); // "Ms."
```

## UUID
```js
import { MockWizard } from "mockwizard";

const mw = new MockWizard();

// Generate a random uuid
mw.uuid.generate() // "db4bd5d9-4cc1-44ef-bdaf-809ebac8003c"
```

## License

[MIT](https://github.com/jeanmarc5592/mockwizard/blob/main/LICENSE)
