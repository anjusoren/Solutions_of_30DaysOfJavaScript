// Exercises:Level 1

//1. Display the countries array as a table
const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
  ]
console.table(countries)

// 2.Display the countries object as a table
const countries1 = [
    {
        "name": "Afghanistan",
        "capital": "Kabul",
        "languages": [
                "Pashto",
                "Uzbek",
                "Turkmen"
        ],
        "population": 40218234,
        "flag": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg",
        "region": "Asia",
        "area": 652230
},
{
        "name": "Åland Islands",
        "capital": "Mariehamn",
        "languages": [
                "Swedish"
        ],
        "population": 28875,
        "flag": "https://flagcdn.com/ax.svg",
        "region": "Europe",
        "area": 1580
},
{
        "name": "Albania",
        "capital": "Tirana",
        "languages": [
                "Albanian"
        ],
        "population": 2837743,
        "flag": "https://flagcdn.com/al.svg",
        "region": "Europe",
        "area": 28748
}
]
//console.table(countries1)

// 3.Use console.group() to group logs
const user = {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
  }
  const users = [
    {
      name: 'Asabeneh',
      title: 'Programmer',
      country: 'Finland',
      city: 'Helsinki',
      age: 250
    },
    {
      name: 'Eyob',
      title: 'Teacher',
      country: 'Sweden',
      city: 'London',
      age: 25
    },
    {
      name: 'Asab',
      title: 'Instructor',
      country: 'Norway',
      city: 'Oslo',
      age: 22
    },
    {
      name: 'Matias',
      title: 'Developer',
      country: 'Denmark',
      city: 'Copenhagen',
      age: 28
    }
  ]

  console.group('Users')
  console.log(user)
  console.log(users)
  console.groupEnd()
  