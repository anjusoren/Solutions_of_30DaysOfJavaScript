//Exercises : Level 3

//Needs to be updated



/*Create an object literal called personAccount.
 It has firstName, lastName, incomes, expenses properties
  and it has totalIncome, totalExpense, accountInfo,addIncome,
   addExpense and accountBalance methods. Incomes is a set 
   of incomes and its description and expenses is a set of 
   incomes and its description. */

   /* -------------------> Need fix
const personAccount={
    firstName:'Rambo',
    lastName:'Roy',
    incomes :{
        incomes:['full-time','part-time'],
        description:'Incomes will includes both part-time and full-time income'
    },
    expenses:{
        totalIncome : function(){
            return ` partTime+fulltime income`
        }
        totalExpense,
        accountInfo,
        addIncome,
        addExpense,
        accountBalance
    }
   
}*/

const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

    const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]


//**********************************************************************************

function signUp(userName){
    let foundUser;
    let newArr =[]
    for(const user in users){
        if(users[user].username.includes(userName)){
            foundUser = user
            newArr.push(foundUser)
        }
    }

    if(newArr.length >0){
        console.log(`user exists`)
    }
    else{
        console.log("Move to SignUp section to create account")
    }

}
signUp('Martha')
signUp('Ajay')