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

const generatePersons = (personsCount: number): string[] | undefined => {
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
};

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

const mw = new MockWizard("de-DE");
```

There might be some scenarios where specifying a locale doesn't affect the output.

Here's a list of currently supported locales:

| Language | Country | Locale  |
| -------- | ------- | ------- |
| English  | USA     | `en-US` |
| German   | Germany | `de-DE` |

## Person

### First name

##### **`person.firstName(options: FirstNameOptions = {}): string`**

**Generate a random first name (gender will be picked randomly)**

```js
mw.person.firstName();

// "Laura"
```

**Generate a random male first name**

```js
mw.person.firstName({ gender: "male" });

// "John"
```

**Generate a random female first name**

```ts
mw.person.firstName({ gender: "female" });

// "Sarah"
```

### Last name

##### **`person.lastName(): string`**

**Generate a random last name**

```js
mw.person.lastName();

// "Spencer"
```

### Full name

##### **`person.fullName(options: FullNameOptions = {}): string`**

**Generate a random full name (gender will be picked randomly)**

```js
mw.person.fullName();

// "Melyssa Wilkinson"
```

**Generate a random male full name**

```js
mw.person.fullName({ gender: "male" });

// "John Rice"
```

**Generate a random female full name**

```js
mw.person.fullName({ gender: "female" });

// "Sarah Carter"
```

**Generate a random full name with suffix**

```js
mw.person.fullName({ includeSuffix: true });

// "Anton Jackson Sr."
```

**Generate a random full name with salutation**

```js
mw.person.fullName({ includeSalutation: true });

// "Dr. Melyssa Wilkinson"
```

### Suffix

##### **`person.suffix(): string`**

**Generate a random suffix**

```js
mw.person.suffix();

// "Jr."
```

### Salutation

##### **`person.salutation(options: SalutationOptions = {}): string`**

**Generate a random salutation (no gender specific)**

```js
mw.person.salutation();

// "Prof."
```

**Generate a random male salutation**

```js
mw.person.salutation({ gender: "male" });

// "Mr."
```

**Generate a random female salutation**

```js
mw.person.salutation({ gender: "female" });

// "Ms."
```

## UUID

##### **`uuid.generate(): string`**

**Generate a random uuid**

```js
mw.uuid.generate();

// "db4bd5d9-4cc1-44ef-bdaf-809ebac8003c"
```

## Text

### Word

##### **`text.word(): string`**

**Generate a random word**

```js
mw.text.word();

// "dolor"
```

### Words

##### **`text.words(options: WordsOptions = {}): string[] | string`**

**Generate multiple random words (by default 3)**

```js
mw.text.words();

// [ "dolor", "officia", "nulla" ]
```

**Generate random words as a single string**

```js
mw.text.words({ asString: true });

// "dolor officia nulla"
```

**Generate a specific number of random words**

```js
mw.text.words({ words: 6 });

// [ "dolor", "officia", "nulla", "aliquip", "ipsa", "molestias" ]
```

### Sentence

##### **`text.sentence(options: SentenceOptions = {}): string[] | string`**

**Generate a random sentence (by default 3 - 15 words)**

```js
mw.text.sentence();

// [ "Dolor", "ipsa", "nulla." ]
```

**Generate a random sentence as a single string**

```js
mw.text.sentence({ asString: true });

// "Rhoncus reprehenderit interdum acilisis nisi atque laboris dignissimos."
```

**Generate a random sentence with a specific number of words**

```js
mw.text.sentence({ words: 5 });

// [ "Officia", "nulla", "aliquip", "ipsa", "molestias." ]
```

### Sentences

##### **`text.sentences(options: SentencesOptions = {}): string[] | string`**

**Generate multiple random sentences (by default 3)**

```js
mw.text.sentences();

// [ "Tristique vestibulum accusantium urna architecto.", "Deleniti congue rhoncus.", "Voluptatum veritatis tempor adipiscing laboris qui." ]
```

**Generate a mulitple random sentences as a single string**

```js
mw.text.sentences({ asString: true });

// "Tristique vestibulum accusantium urna architecto. Deleniti congue rhoncus. Voluptatum veritatis tempor adipiscing laboris qui."
```

**Generate any number of random sentences**

```js
mw.text.sentences({ sentences: 2 });

// [ "Tristique vestibulum accusantium urna architecto.", "Deleniti congue rhoncus." ]
```

**Generate multiple random sentences with a specific number of words for each sentence (by default 3 - 15)**

```js
mw.text.sentences({ words: 6 });

// [ "Similique ipsa do omnis eros nulla.", "Nibh in culpa aut aliquet cupiditate.", "Lacus scelerisque quisque dictum corrupti officia." ]
```

### Paragraphs

##### **`text.paragraphs(options: ParagraphsOptions = {}): string[] | string`**

**Generate multiple random paragraphs (by default 3)**

```js
mw.text.paragraphs();

/*
[
"Enim mauris cillum maecenas voluptate porta sagittis bibendum. Sapien sit viverra praesentium vestibulum dolor.",
"Mauris mollitia quisque bibendum. Officia lorem nostrud. Ipsa varius aenean vitae et dui veritatis porttitor curabitur qui.",
"Maecenas purus sint rhoncus adipiscing nec curabitur qui id occaecati. Sunt pretium id mollit doloremque excepturi. Integer felis magna provident bibendum qui."
]

*/
```

**Generate multiple random paragraphs as a single string**

```js
mw.text.paragraphs({ asString: true });

/*
"
Enim mauris cillum maecenas voluptate porta sagittis bibendum. Et sagittis mollitia aliqua. Sapien sit viverra praesentium vestibulum dolor.
Deserunt turpis aliquet aliquip lobortis eleifend do fringilla turpis. Maximus praesentium ullamco non sapien porta. Est augue cupiditate dignissimos nulla.
Maecenas purus sint rhoncus adipiscing nec curabitur qui id occaecati. Sunt pretium id mollit doloremque excepturi. Integer felis magna provident bibendum qui.
"
*/
```

**Generate any number of random paragraphs**

```js
mw.text.paragraphs({ paragraphs: 5 });

/*
[
"Enim mauris cillum maecenas voluptate porta sagittis bibendum. Et sagittis mollitia aliqua. Sapien sit viverra praesentium vestibulum dolor.",
"Mauris mollitia quisque bibendum. Officia lorem nostrud. Ipsa varius aenean vitae et dui veritatis porttitor curabitur qui.",
"Maecenas purus sint rhoncus adipiscing nec curabitur qui id occaecati. Sunt pretium id mollit doloremque excepturi. Integer felis magna provident bibendum qui.",
"Fugiat non lobortis morbi quam dolor. Lobortis posuere commodo diam corrupti quis. Fringilla tempor gravida iaculit dignissim nibh maecenas scelerisque.",
"Doloremque aute quos in qui metus aute minim nec cupidatat tortor architecto iaculit error eaque. Nulla tristique ut. Velit tempus velit quam."
]
*/
```

**Generate multiple paragraphs with a specific number of sentences for each paragraph (by default 3 - 8)**

```js
mw.text.paragraphs({ sentences: 2 });

/*
[
"Et sagittis mollitia aliqua. Sapien sit viverra praesentium vestibulum dolor.",
"Officia lorem nostrud. Ipsa varius aenean vitae et dui veritatis porttitor curabitur qui.",
"Maecenas purus sint rhoncus adipiscing nec curabitur qui id occaecati. Sunt pretium id mollit doloremque excepturi."
]
*/
```

**Generate multiple paragraphs with a specific number of words for each sentence (by default 3 - 15)**

```js
mw.text.paragraphs({ words: 4 });

/*
[
"Enim mauris cillum bibendum. Et sagittis mollitia aliqua. Sapien sit viverra vestibulum.",
"Mauris mollitia quisque bibendum. Officia lorem nostrud enim. Ipsa varius curabitur qui.",
"Maecenas purus curabitur occaecati. Sunt pretium id excepturi. Integer provident bibendum qui."
]
*/
```

## Internet

### Password

##### **`internet.password(options: PasswordOptions = {}): string`**

**Generate a random password (includes lowercase and uppercase letters, symbols and numbers by default)**

```js
mw.internet.password();

// "Z6Vrc<!3e^"
```

**Only include lowercase letters**

```js
mw.internet.password({ includeLowercase: true });

// "jpozlphted"
```

**Only include uppercase letters**

```js
mw.internet.password({ includeUppercase: true });

// "HMCAOVTORO"
```

**Only include symbols**

```js
mw.internet.password({ includeSymbols: true });

// "!?>&/,<@&;"
```

**Only include numbers**

```js
mw.internet.password({ includeNumbers: true });

// "2408014800
```

**Specify a certain length between 6 and 120 (10 by default)**

```js
mw.internet.password({ length: 16 });

// "5HpNxF$VYd&W-^Il"
```

**Combine options (Example)**

```js
mw.internet.password({ includeUppercase: true, length: 32, includeLowercase: true, includeNumbers: true });

// "TAJxCaZzIgUftNy73vw2vZFyps4z9DKb"
```

### MAC address

##### **`internet.macAddress(): string`**

**Generate a random MAC address**

```js
mw.internet.macAddress();

// "ad:31:2e:04:5c:da"
```

### IPv4

##### **`internet.ipv4(options: IpOptions = {}): string`**

**Generate a random IPv4 address**

```js
mw.internet.ipv4();

// "115.74.191.114"
```

**Generate a local IPv4 address**

```js
mw.internet.ipv4({ isLocal: true });

// "192.168.223.133"
```

### IPv6

##### **`internet.ipv6(options: IpOptions = {}): string`**

**Generate a random IPv6 address**

```js
mw.internet.ipv6();

// "5839:e415:e800:7ce3:990d:5880:56ae:4282"
```

**Generate a local IPv6 address**

```js
mw.internet.ipv6({ isLocal: true });

// "fe80:df7c:e94a:16b9:95bb:287a:dcf3:c12b"
```

### Slug

##### **`internet.slug(options: SlugOptions = {}): string`**

**Generate a random slug**

```js
mw.internet.slug();

// "purus-augue-lorem"
```

**Specify the length between 1 and 10 (3 by default)**

```js
mw.internet.slug({ length: 5 });

// "ornare-iaculit-morbi-pariatur-massa"
```

### Domain

##### **`internet.domain(options: DomainOptions = {}): string`**

```js
// Generate a random domain

mw.internet.domain();

// "dictum.com"
```

**Specify the Top Level Domain (by default "com")**

```js
mw.internet.domain({ tld: "net" });

// "scelerisque.net"
```

### URL

##### **`internet.url(options: UrlOptions = {}): string`**

**Generate a random URL**

```js
mw.internet.url();

// "www.tristique.com"
```

**Specify the Top Level Domain (by default "com")**

```js
mw.internet.url({ tld: "io" });

// "www.mollitia.io"
```

**Include SSL**

```js
mw.internet.url({ includeSSL: true });

// "https://www.tempor.com"
```

**Include a random slug**

```js
mw.internet.url({ includeSlug: true });

// "www.lobortis.com/voluptatum-sollicitudin-rhoncus"
```

**Combine options**

```js
mw.internet.url({ includeSlug: true, includeSSL: true, tld: "biz" });

// "https://www.velit.biz/mollitia-gravida-aperiam"
```

### Username

##### **`internet.userName(options: UserNameOptions = {}): string`**

**Generate a random username**

```js
mw.internet.userName();

// "Stefan_Will_39"
```

**Specify a first name that should be included**

```js
mw.internet.userName({ firstName: "John" });

// "John_Schuster_12"
```

**Specify a last name that should be included**

```js
mw.internet.userName({ lastName: "Miller" });

// "Ottilie_Miller_97"
```

**Generate an anonymous username**

```js
mw.internet.userName({ isAnonymous: true });

// "ByteBattler51"
```

### Email address

##### **`internet.email(options: EmailOptions = {}): string`**

**Generate a random email address**

```js
mw.internet.email();

// "myra_funk_18@example.com"
```

**Specify the provider (by default "example.com")**

```js
mw.internet.email({ provider: "gmail.com" });

// "kendrick_toy_29@gmail.com"
```

**Specify the username (same options as for "userName" function)**

```js
mw.internet.email({ userName: { firstName: "Sarah", lastName: "Johnson" } });

// "sarah_johnson_55@example.com"
```

## Data

### Digit

##### **`data.digit(options: DigitOptions = {}): number`**

**Generate a random digit between 0 and 9**

```js
mw.data.digit();

// 3
```

**Generate a random digit between 1 and 9 (exclude 0)**

```js
mw.data({ notNull: true });

// 8
```

### Integer

### **`data.integer(options: IntegerOptions = {}): number`**

**Generate a random integer**

```js
mw.data.integer();

// 1873
```

**Specify the amount of digits**

```js
mw.data.integer({ digitsCount: 5 });

// 87352
```

### Float

##### **`data.float(options: FloatOptions = {}): number`**

**Generate a random float**

```js
mw.data.float();

// 32.94
```

\*Specify the amount of integers (by default between 1 - 10)\*\*

```js
mw.data.float({ integersCount: 2 });

// 44.56783
```

**Specify the amount of decimals (by default 1 - 5)**

```js
mw.data.float({ decimalsCount: 3 });

// 2352.273
```

**Combine options**

```js
mw.data.float({ integersCount: 3, decimalsCount: 2 });

// 142.22
```

### Number Between

##### **`data.numberBetween(min: number, max: number, options: NumberBetweenOptions = {}): number`**

**Generate a random number between 3 and 923 (by default an integer)**

```js
mw.data.numberBetween(3, 923);

// 832
```

**Generate a random float between 7 and 20 (2 decimals)**

```js
mw.data.numberBetween(3, 20, { asFloat: true });

// 11.32
```

### Letter

##### **`data.letter(options: LetterOptions = {}): string`**

**Generate a random letter (not case-sensitive)**

```js
mw.data.letter();

// "f"
```

**Generate a random lowercase letter**

```js
mw.data.letter({ onlyLowercase: true });

// "s"
```

**Generate a random uppercase letter**

```js
mw.data.letter({ onlyUppercase: true });

// "U"
```

### Array Element

##### **`data.digit(array: any[]): any`**

```js
// Generate one random element from a given Array

mw.data.arrayElement(["a", "b", "c", "d", "e", "f"]);

// "d"
```

### Array Elements

##### **`data.arrayElements(array: any[], options: ArrayElementsOptions = {}): any[]`**

**Generate multiple unique elements from a given Array (by default 1)**

```js
mw.data.arrayElements(["a", "b", "c", "d", "e", "f"]);

// ["f"]
```

**Specify how many unique elements should be generated**

```js
mw.data.arrayElements(["a", "b", "c", "d", "e", "f"], { elementsCount: 4 });

// ["f", "a", "d", "e"]
```

**When 'elementsCount' option is greater than the amount of unique elements, it returns all possible unique elements**

```js
mw.data.arrayElements(["a", "b", "b", "b", "c"], { elementsCount: 10 });

// ["a", "b", "c"]

mw.data.arrayElements(["a", "b", "c", "d", "e", "f"], { elementsCount: 25 });

// ["a", "b", "c", "d", "e", "f"]
```

### Object Element

##### **`data.objectElement(object: {}, options: ObjectElementOptions = {}): any`**

**Generate a random value from a given Object**

```js
mw.data.objectElement({ foo: "bar", hello: "world", num: 3 });

// "world"
```

**Generate a random key from a given Object**

```js
mw.data.objectElement({ foo: "bar", hello: "world", num: 3 }, { returnKey: true });

// "num"
```

### Object Elements

##### **`data.objectElements(object: {}, options: ObjectElementsOptions = {}): any[]`**

**Generate multiple unique values from a given Object (by default 1)**

```js
mw.data.objectElements({ foo: "bar", hello: "world", num: 3 });

// ["world"]
```

**Specify the amount of unique values that should be generated**

```js
mw.data.objectElements({ foo: "bar", hello: "world", num: 3 }, { elementsCount: 2 });

// ["world", 3]
```

**Generate multiple unique keys from a given Object**

```js
mw.data.objectElements({ foo: "bar", hello: "world", num: 3 }, { returnKey: true });

// ["num"]
```

**Specify the amount of unique keys that should be generated**

```js
mw.data.objectElements({ foo: "bar", hello: "world", num: 3 }, { elementsCount: 2, returnKey: true });

// ["foo", "num"]
```

## Location

### State

##### **`location.state(options: StateOptions = {}): string`**

**Generate a random state based on the provided locale**

```js
mw.location.state();

// "North Carolina"
```

**Receive the abbreviation of the generated state**

```js
mw.location.state({ abbreviation: true });

// "NY"
```

### City

##### **`location.city(): string`**

**Generate a random city based on the provided locale**

```js
mw.location.city();

// "Boston"
```

### Country

##### **`location.country(): string`**

**Generate a random country**

```js
mw.location.country();

// "France"
```

### Country Code (ISO 3166-1)

##### **`location.countryCode(): string`**

**Generate a random ISO 3166-1 country code**

```js
mw.location.countryCode();

// "DE"
```

### Latitude

##### **`location.latitude({ options: CoordinatesOptions = {}}): number`**

**Generate a random latitude**

```js
mw.location.latitude();

// -56.2351
```

**Specify the lower bound (by default -90)**

```js
mw.location.latitude({ min: 45 });

// 77.4214
```

**Specify the upper bound (by default 90)**

```js
mw.location.latitude({ max: 55 });

// 43.5241
```

**Combine the options**

```js
mw.location.latitude({ min: -20.3482, max: 43.7628 });

// 12.3713
```

### Longitude

##### **`location.longitude({ options: CoordinatesOptions = {}}): number`**

**Generate a random longitude**

```js
mw.location.longitude();

// 123.3124
```

**Specify the lower bound (by default -180)**

```js
mw.location.longitude({ min: -100.5 });

// -88.4516
```

**Specify the upper bound (by default 180)**

```js
mw.location.longitude({ max: 99.4124 });

// 78.6893
```

**Combine the options**

```js
mw.location.longitude({ min: -7, max: 120.76 });

// -4.9982
```

### Coordinates

##### **`location.coordinates(): Coordinates`**

**Generate a random coordinates object**

```js
mw.location.coordinates();

// { lat: 35.6932, lng: -42.9943 }
```

### Zip Code

##### **`location.zipCode(): string`**

**Generate a random zip code based on the provided locale**

```js
mw.location.zipCode();

// "10001"
```

### Street Name

##### **`location.streetName(): string`**

**Generate a random street name based on the provided locale**

```js
mw.location.streetName();

// "Birch Street"
```

### Full Address

##### **`location.fullAddress(): string`**

**Generate a random full address based on the provided locale**

- It contains street name, street number, zip code, city and state
- The formatting of the address is also based on the provided locale

```js
mw.location.fullAddress();

// "355 Elm Street, Toledo, Ohio 43601"
```

## License

[MIT](https://github.com/jeanmarc5592/mockwizard/blob/main/LICENSE)
