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
// Generate a random first name (gender will be picked randomly)
mw.person.firstName(); 
// "Laura"


// Generate a random male first name
mw.person.firstName({ gender: "male" }); 
// "John"


// Generate a random female first name
mw.person.firstName({ gender: "female" }); 
// "Sarah"
```

### Last name
```js
// Generate a random last name
mw.person.lastName(); 
// "Spencer"
```

### Full name
```js
// Generate a random full name (gender will be picked randomly)
mw.person.fullName(); 
// "Melyssa Wilkinson"


// Generate a random male full name
mw.person.fullName({ gender: "male" }); 
// "John Rice"


// Generate a random female full name
mw.person.fullName({ gender: "female" }); 
// "Sarah Carter"


// Generate a random full name with suffix
mw.person.fullName({ includeSuffix: true }); 
// "Anton Jackson Sr."


// Generate a random full name with salutation
mw.person.fullName({ includeSalutation: true }); 
// "Dr. Melyssa Wilkinson"
```

### Suffix
```js
// Generate a random suffix
mw.person.suffix(); 
// "Jr."
```

### Salutation
```js
// Generate a random salutation (no gender specific)
mw.person.salutation(); 
// "Prof."


// Generate a random male salutation
mw.person.salutation({ gender: "male" }); 
// "Mr."


// Generate a random female salutation
mw.person.salutation({ gender: "female" }); 
// "Ms."
```

## UUID
```js
// Generate a random uuid
mw.uuid.generate() 
// "db4bd5d9-4cc1-44ef-bdaf-809ebac8003c"
```

## Text

### Word
```js
// Generate a random word
mw.text.word() 
// "dolor"
```

### Words
```js
// Generate multiple random words (by default 3)
mw.text.words() 
// [ "dolor", "officia", "nulla" ]


// Generate random words as a single string
mw.text.words({ asString: true }) 
// "dolor officia nulla"


// Generate a specific number of random words
mw.text.words({ words: 6 }) 
// [ "dolor", "officia", "nulla", "aliquip", "ipsa", "molestias" ]
```

### Sentence
```js
// Generate a random sentence (by default 3 - 15 words)
mw.text.sentence() 
// [ "Dolor", "ipsa", "nulla." ]


// Generate a random sentence as a single string
mw.text.sentence({ asString: true }) 
// "Rhoncus reprehenderit interdum acilisis nisi atque laboris dignissimos."


// Generate a random sentence with a specific number of words
mw.text.sentence({ words: 5 }) 
// [ "Officia", "nulla", "aliquip", "ipsa", "molestias." ]
```

### Sentences
```js
// Generate multiple random sentences (by default 3)
mw.text.sentences() 
// [ "Tristique vestibulum accusantium urna architecto.", "Deleniti congue rhoncus.", "Voluptatum veritatis tempor adipiscing laboris qui." ]


// Generate a mulitple random sentences as a single string
mw.text.sentences({ asString: true }) 
// "Tristique vestibulum accusantium urna architecto. Deleniti congue rhoncus. Voluptatum veritatis tempor adipiscing laboris qui."


// Generate any number of random sentences
mw.text.sentences({ sentences: 2 }) 
// [ "Tristique vestibulum accusantium urna architecto.", "Deleniti congue rhoncus." ]


// Generate multiple random sentences with a specific number of words for each sentence (by default 3 - 15)
mw.text.sentences({ words: 6 }) 
// [ "Similique ipsa do omnis eros nulla.", "Nibh in culpa aut aliquet cupiditate.", "Lacus scelerisque quisque dictum corrupti officia." ]
```

### Paragraphs
```js
// Generate multiple random paragraphs (by default 3)
mw.text.paragraphs() 
/* 
	[ 
		"Enim mauris cillum maecenas voluptate porta sagittis bibendum. Sapien sit viverra praesentium vestibulum dolor.", 
		"Mauris mollitia quisque bibendum. Officia lorem nostrud. Ipsa varius aenean vitae et dui veritatis porttitor curabitur qui.", 
		"Maecenas purus sint rhoncus adipiscing nec curabitur qui id occaecati. Sunt pretium id mollit doloremque excepturi. Integer felis magna provident bibendum qui." 
	]
*/ 


// Generate multiple random paragraphs as a single string
mw.text.paragraphs({ asString: true })
/* 
	"
		Enim mauris cillum maecenas voluptate porta sagittis bibendum. Et sagittis mollitia aliqua. Sapien sit viverra praesentium vestibulum dolor.
 
		Deserunt turpis aliquet aliquip lobortis eleifend do fringilla turpis. Maximus praesentium ullamco non sapien porta. Est augue cupiditate dignissimos nulla.
	
		Maecenas purus sint rhoncus adipiscing nec curabitur qui id occaecati. Sunt pretium id mollit doloremque excepturi. Integer felis magna provident bibendum qui.
	"
*/


// Generate any number of random paragraphs
mw.text.paragraphs({ paragraphs: 5 })
/* 
	[ 
		"Enim mauris cillum maecenas voluptate porta sagittis bibendum. Et sagittis mollitia aliqua. Sapien sit viverra praesentium vestibulum dolor.", 
		"Mauris mollitia quisque bibendum. Officia lorem nostrud. Ipsa varius aenean vitae et dui veritatis porttitor curabitur qui.", 
		"Maecenas purus sint rhoncus adipiscing nec curabitur qui id occaecati. Sunt pretium id mollit doloremque excepturi. Integer felis magna provident bibendum qui.",
		"Fugiat non lobortis morbi quam dolor. Lobortis posuere commodo diam corrupti quis. Fringilla tempor gravida iaculit dignissim nibh maecenas scelerisque.",
		"Doloremque aute quos in qui metus aute minim nec cupidatat tortor architecto iaculit error eaque. Nulla tristique ut. Velit tempus velit quam." 
	]
*/ 


// Generate multiple paragraphs with a specific number of sentences for each paragraph (by default 3 - 8)
mw.text.paragraphs({ sentences: 2 })
/* 
	[ 
		"Et sagittis mollitia aliqua. Sapien sit viverra praesentium vestibulum dolor.", 
		"Officia lorem nostrud. Ipsa varius aenean vitae et dui veritatis porttitor curabitur qui.", 
		"Maecenas purus sint rhoncus adipiscing nec curabitur qui id occaecati. Sunt pretium id mollit doloremque excepturi." 
	]
*/ 


// Generate multiple paragraphs with a specific number of words for each sentence (by default 3 - 15)
mw.text.paragraphs({ words: 4 })
/* 
	[ 
		"Enim mauris cillum bibendum. Et sagittis mollitia aliqua. Sapien sit viverra vestibulum.", 
		"Mauris mollitia quisque bibendum. Officia lorem nostrud enim. Ipsa varius curabitur qui.", 
		"Maecenas purus curabitur occaecati. Sunt pretium id excepturi. Integer provident bibendum qui." 
	]
*/ 


```

## License

[MIT](https://github.com/jeanmarc5592/mockwizard/blob/main/LICENSE)