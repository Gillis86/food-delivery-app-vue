export default {
    pizze:{
        type:"pizze",
        typeOne:{
            title: "Pizze Rosse",
            data:[
                {id:1,type:"pizza",name:"Margherita",price:4,ingredients:["pomodoro","mozzarella"],quantity:0,inventory:100},
                {id:2,type:"pizza",name:"Marinara",price:3.5,ingredients:["aglio","pomodoro"],quantity:0,inventory:100},
                {id:3,type:"pizza",name:"Salsiccia e funghi",price:6,ingredients:["salsiccia","funghi","mozzarella","pomodoro"],quantity:0,inventory:100},
                {id:4,type:"pizza",name:"Carciofi",price:4,ingredients:["mozzarella","carciofi","pomodoro"],quantity:0,inventory:100},  
            ]
        },
        typeTwo:{
            title:"Pizze Bianche",
            data:[
                {id:5,type:"pizza",name:"Gorgonzola e noci",price:5.50,ingredients:["gorgonzola","noci","mozzarella"],quantity:0,inventory:100},
                {id:6,type:"pizza",name:"Stracchino e rucola",price:4.50,ingredients:["stracchino","rucola","basilico"],quantity:0,inventory:100},
                {id:7,type:"pizza",name:"Tartufo e salsiccia",price:8,ingredients:["tartufo","salsiccia","mozzarella"],quantity:0,inventory:100},
                {id:8,type:"pizza",name:"Zucchine e Gamberi",price:5,ingredients:["zucchine","gamberi","pomodorini"],quantity:0,inventory:100},
            ]

        }
    },
    primiPiatti:{
        type:"primiPiatti",
        typeOne:{
            title: "Primi di carne",
            data:[
                {id:12,type:"primiPiatti",name:"Lasagne alla Bolognese",price:9,quantity:0,inventory:100},
                {id:13,type:"primiPiatti",name:"Spaghetti alla carbonara",price:14,quantity:0,inventory:100},
                {id:14,type:"primiPiatti",name:"pennette all'amatriciana",price:10,quantity:0,inventory:100},
                {id:15,type:"primiPiatti",name:"paccheri salsiccia e funghi",price:12,quantity:0,inventory:100},  
            ]
        },
        typeTwo:{
            title:"Primi di pesce",
            data:[
                {id:16,type:"primiPiatti",name:"spaghetti allo scoglio",price:8.50,quantity:0,inventory:100},
                {id:17,type:"primiPiatti",name:"zuppa di cozze",price:14.50,quantity:0,inventory:100},
                {id:18,type:"primiPiatti",name:"pappardelle asparagi e gamberi",price:18,quantity:0,inventory:100},
                {id:19,type:"primiPiatti",name:"lasagne al salmone",price:15,quantity:0,inventory:100},
            ]

        },
        typeThree:{
            title:"Primi vegetariani",
            data:[
                {id:20,type:"primiPiatti",name:"Potage di cavolfiori e porri",price:15.50,quantity:0,inventory:100},
                {id:21,type:"primiPiatti",name:"lasagne con patate e taleggio",price:14.50,quantity:0,inventory:100},
                {id:22,type:"primiPiatti",name:"crespelle formaggio e zucca",price:12,quantity:0,inventory:100},
                {id:23,type:"primiPiatti",name:"cannelloni coste e noci",price:15,quantity:0,inventory:100},
            ]

        },
    },
    secondiPiatti:{
        type:"secondiPiatti",
        typeOne:{
            title: "secondi di carne",
            data:[
                {id:24,type:"secondiPiatti",name:"agnello al forno con patate",price:9,quantity:0,inventory:100},
                {id:25,type:"secondiPiatti",name:"arrosto di vitello",price:12.5,quantity:0,inventory:100},
                {id:26,type:"secondiPiatti",name:"coniglio al forno",price:11,quantity:0,inventory:100},
                {id:27,type:"secondiPiatti",name:"vitello al tonno",price:12.5,quantity:0,inventory:100},  
            ]
        },
        typeTwo:{
            title:"secondi di pesce",
            data:[
                {id:28,type:"secondiPiatti",name:"seppie con piselli",price:8.5,quantity:0,inventory:100},
                {id:29,type:"secondiPiatti",name:"orata al forno",price:14.5,quantity:0,inventory:100},
                {id:30,type:"secondiPiatti",name:"filetto di merluzzo al forno",price:18.5,quantity:0,inventory:100},
                {id:31,type:"secondiPiatti",name:"calamari ripieni",price:16,quantity:0,inventory:100},
            ]

        },
        typeThree:{
            title:"secondi vegetariani",
            data:[
                {id:32,type:"secondiPiatti",name:"parmigiana di melanzane",price:9.50,quantity:0,inventory:100},
                {id:33,type:"secondiPiatti",name:"polpette di verdure",price:7.50,quantity:0,inventory:100},
                {id:34,type:"secondiPiatti",name:"frittata di asparagi",price:7,quantity:0,inventory:100},
                {id:35,type:"secondiPiatti",name:"burger di patate",price:12,quantity:0,inventory:100},
            ]

        },

    },
    dolci:{
        type:"dolci",
        typeOne:{
            title:"Bomboloni",
            data:[
                {id:9,type:"dolci",name:"Bombolone alla crema",price:2.50,quantity:0,inventory:100},
                {id:10,type:"dolci",name:"Bombolone alla marmellata",price:2.50,quantity:0,inventory:100},
                {id:11,type:"dolci",name:"Bombolone alla nutella",price:2.50,quantity:0,inventory:100},
            ]
        },
        typeTwo:{
            title:"Crepes",
            data:[
                {id:36,type:"dolci",name:"crepes con nutella",price:1.50,quantity:0,inventory:100},
                {id:37,type:"dolci",name:"crepes con miele",price:1.50,quantity:0,inventory:100},
                {id:38,type:"dolci",name:"crepes con mascarpone",price:1.50,quantity:0,inventory:100},
            ]
        },
        typeThree:{
            title:"Pancake",
            data:[
                {id:39,type:"dolci",name:"pancake con sciroppo d'acero",price:1.20,quantity:0,inventory:100},
                {id:40,type:"dolci",name:"pancake con mascarpone",price:1.80,quantity:0,inventory:100},
                {id:41,type:"dolci",name:"pancake con miele",price:1.90,quantity:0,inventory:100},
            ]
        },       
    },
    bevande:{
        type:"bevande",
        typeOne:{
            title:"Bevande",
            data:[
                {id:42,type:"bevande",name:"Acqua",price:1.00,quantity:0,inventory:100},
                {id:43,type:"bevande",name:"Coca Cola",price:1.50,quantity:0,inventory:100},
                {id:44,type:"bavande",name:"Birra",price:2.90,quantity:0,inventory:100},
            ]
        }
    }
}