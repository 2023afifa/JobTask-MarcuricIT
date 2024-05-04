const records = [
    {
        id: 1,
        code: 1593914720,
        name: "Aash",
        phone: "+923160154602",
        email: "penisvagin@gmail.com",
        total: "405037.04 USD",
        paid: "73726 USD",
        due: "331311.04 USD",
    },
    {
        id: 2,
        code: 1593914721,
        name: "Bob",
        phone: "+1234567890",
        email: "bob@example.com",
        total: "500000 USD",
        paid: "250000 USD",
        due: "250000 USD",
    },
    {
        id: 3,
        code: 1593914722,
        name: "Charlie",
        phone: "+1987654321",
        email: "charlie@example.com",
        total: "10000 EUR",
        paid: "5000 EUR",
        due: "5000 EUR",
    },
    {
        id: 4,
        code: 1593914723,
        name: "David",
        phone: "+9876543210",
        email: "david@example.com",
        total: "75000 GBP",
        paid: "60000 GBP",
        due: "15000 GBP",
    },
    {
        id: 5,
        code: 1593914724,
        name: "Emma",
        phone: "+1122334455",
        email: "emma@example.com",
        total: "200000 JPY",
        paid: "180000 JPY",
        due: "20000 JPY",
    },
    {
        id: 6,
        code: 1593914725,
        name: "Frank",
        phone: "+9876543210",
        email: "frank@example.com",
        total: "120000 CAD",
        paid: "100000 CAD",
        due: "20000 CAD",
    },
    {
        id: 7,
        code: 1593914726,
        name: "Grace",
        phone: "+3344556677",
        email: "grace@example.com",
        total: "300000 AUD",
        paid: "200000 AUD",
        due: "100000 AUD",
    },
    {
        id: 8,
        code: 1593914727,
        name: "Henry",
        phone: "+9988776655",
        email: "henry@example.com",
        total: "6000000 INR",
        paid: "4000000 INR",
        due: "2000000 INR",
    },
    {
        id: 9,
        code: 1593914728,
        name: "Ivy",
        phone: "+5566778899",
        email: "ivy@example.com",
        total: "800000 CNY",
        paid: "600000 CNY",
        due: "200000 CNY",
    },
    {
        id: 10,
        code: 1593914729,
        name: "Jack",
        phone: "+1122334455",
        email: "jack@example.com",
        total: "40000 MXN",
        paid: "30000 MXN",
        due: "10000 MXN",
    },
    {
        id: 11,
        code: 1593914730,
        name: "Kelly",
        phone: "+9988776655",
        email: "kelly@example.com",
        total: "900000 ZAR",
        paid: "700000 ZAR",
        due: "200000 ZAR",
    },
    {
        id: 12,
        code: 1593914731,
        name: "Liam",
        phone: "+2233445566",
        email: "liam@example.com",
        total: "1500000 BRL",
        paid: "1000000 BRL",
        due: "500000 BRL",
    },
    {
        id: 13,
        code: 1593914732,
        name: "Mia",
        phone: "+3344556677",
        email: "mia@example.com",
        total: "250000 ARS",
        paid: "200000 ARS",
        due: "50000 ARS",
    },
    {
        id: 14,
        code: 1593914733,
        name: "Noah",
        phone: "+5566778899",
        email: "noah@example.com",
        total: "1800000 KRW",
        paid: "1600000 KRW",
        due: "200000 KRW",
    },
    {
        id: 15,
        code: 1593914734,
        name: "Olivia",
        phone: "+2233445566",
        email: "olivia@example.com",
        total: "3000000 PHP",
        paid: "2500000 PHP",
        due: "500000 PHP",
    },
    {
        id: 16,
        code: 1593914735,
        name: "Peter",
        phone: "+3344556677",
        email: "peter@example.com",
        total: "1200000 CHF",
        paid: "1000000 CHF",
        due: "200000 CHF",
    },
    {
        id: 17,
        code: 1593914736,
        name: "Quinn",
        phone: "+5566778899",
        email: "quinn@example.com",
        total: "70000 SEK",
        paid: "60000 SEK",
        due: "10000 SEK",
    },
    {
        id: 18,
        code: 1593914737,
        name: "Ryan",
        phone: "+1122334455",
        email: "ryan@example.com",
        total: "5000000 RUB",
        paid: "4500000 RUB",
        due: "500000 RUB",
    },
    {
        id: 19,
        code: 1593914738,
        name: "Samantha",
        phone: "+3344556677",
        email: "samantha@example.com",
        total: "100000 SGD",
        paid: "80000 SGD",
        due: "20000 SGD",
    },
    {
        id: 20,
        code: 1593914739,
        name: "Thomas",
        phone: "+5566778899",
        email: "thomas@example.com",
        total: "4000000 TRY",
        paid: "3500000 TRY",
        due: "500000 TRY",
    },
    {
        id: 21,
        code: 1593914740,
        name: "Uma",
        phone: "+1122334455",
        email: "uma@example.com",
        total: "60000 HUF",
        paid: "50000 HUF",
        due: "10000 HUF",
    },
    {
        id: 22,
        code: 1593914741,
        name: "Victor",
        phone: "+3344556677",
        email: "victor@example.com",
        total: "2000000 THB",
        paid: "1800000 THB",
        due: "200000 THB",
    },
    {
        id: 23,
        code: 1593914742,
        name: "Wendy",
        phone: "+5566778899",
        email: "wendy@example.com",
        total: "800000 LKR",
        paid: "700000 LKR",
        due: "100000 LKR",
    },
    {
        id: 24,
        code: 1593914743,
        name: "Xavier",
        phone: "+1122334455",
        email: "xavier@example.com",
        total: "1000000 CLP",
        paid: "900000 CLP",
        due: "100000 CLP",
    },
    {
        id: 25,
        code: 1593914744,
        name: "Yara",
        phone: "+3344556677",
        email: "yara@example.com",
        total: "1500000 COP",
        paid: "1300000 COP",
        due: "200000 COP",
    },
    {
        id: 26,
        code: 1593914745,
        name: "Zack",
        phone: "+5566778899",
        email: "zack@example.com",
        total: "90000 EGP",
        paid: "80000 EGP",
        due: "10000 EGP",
    },
    {
        id: 27,
        code: 1593914746,
        name: "Alice",
        phone: "+1122334455",
        email: "alice@example.com",
        total: "3000000 NPR",
        paid: "2500000 NPR",
        due: "500000 NPR",
    },
    {
        id: 28,
        code: 1593914747,
        name: "Brian",
        phone: "+3344556677",
        email: "brian@example.com",
        total: "1800000 NPR",
        paid: "1600000 NPR",
        due: "200000 NPR",
    },
    {
        id: 29,
        code: 1593914748,
        name: "Cindy",
        phone: "+5566778899",
        email: "cindy@example.com",
        total: "50000 NPR",
        paid: "45000 NPR",
        due: "5000 NPR",
    },
    {
        id: 30,
        code: 1593914749,
        name: "David",
        phone: "+1122334455",
        email: "david@example.com",
        total: "1000000 NPR",
        paid: "900000 NPR",
        due: "100000 NPR",
    },
];


export { records };