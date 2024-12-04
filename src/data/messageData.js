const contacts = [
    {
        img: '/assets/profile-6.jpg',
        name: 'Milagros (tú)',
        id: 1,
        messages: [
            {
                user: 'TÚ',
                hour: '10:10',
                id: 1,
                text: 'Lista para comprar en el súper. 🛒',
                stattus: 'visto',
            },
            {
                user: 'TÚ',
                hour: '10:15',
                id: 2,
                text: 'Huevos 🥚, miel 🍯, fideos 🍜..',
                stattus: 'visto',
            },
        ]

    },
    {
        img: '/assets/profile-1.jpg',
        name: 'Mariana',
        id: 2,
        messages: [
            {
                user: 'USUARIO',
                hour: '15:10',
                id: 1,
                text: 'Hola, ¿estás ocupada?',
            },
            {
                user: 'TÚ',
                hour: '15:11',
                id: 2,
                text: 'Hola amiga, ¿cómo estás? No, estoy en casa!',
                stattus: 'visto',
            },
            {
                user: 'USUARIO',
                hour: '15:15',
                id: 3,
                text: '¿Te parece si salimos a tomar un café y te cuento un chismecito? 😏',
            },
            {
                user: 'TÚ',
                hour: '15:16',
                id: 4,
                text: 'Yendooo.',
                stattus: 'visto',
            },
        ]

    },
    {
        img: '/assets/profile-4.jpg',
        name: 'Jefe',
        id: 3,
        messages: [
            {
                user: 'USUARIO',
                hour: '08:00',
                id: 1,
                text: 'Hola Milagros, ¿ya llegaste a la oficina?',
            },
            {
                user: 'TÚ',
                hour: '08:01',
                id: 2,
                text: '¡Buenos días! Sí, recién.',
                stattus: 'visto',
            },
            {
                user: 'USUARIO',
                hour: '08:02',
                id: 3,
                text: 'Vení a la sala verde, por favor, tenemos reunión.',
            },
            {
                user: 'TÚ',
                hour: '08:03',
                id: 4,
                text: '¡Ok! Acomodo mis cosas y voy...',
                stattus: 'no-visto',
            },
        ]

    },
    {
        img: '/assets/profile-5.jpg',
        name: 'Carolina',
        id: 4,
        messages: [
            {
                user: 'USUARIO',
                hour: '20:10',
                id: 1,
                text: 'Holaaa, ¿estás ahí?',
            },
            {
                user: 'TÚ',
                hour: '20:12',
                id: 2,
                text: 'Hola amiga, sí, ¿pasó algo?',
                stattus: 'visto',
            },
            {
                user: 'USUARIO',
                hour: '20:16',
                id: 3,
                text: 'Tengo ganas de ir al cine.',
            },
            {
                user: 'USUARIO',
                hour: '20:17',
                id: 4,
                text: 'Vi que hoy hay 2x1. ¿Tenés algo que hacer?',
            },
            {
                user: 'USUARIO',
                hour: '20:19',
                id: 5,
                text: 'Dale,  ¡copate!',
            },
            {
                user: 'USUARIO',
                hour: '20:19',
                id: 6,
                text: '¿Pensabas estudiar?',
            },
            {
                user: 'TÚ',
                hour: '20:22',
                id: 7,
                text: 'Jajaja sí, pero quiero ir al cine, a ver esa que se estrenó hace poco.',
                stattus: 'visto',
            },
            {
                user: 'TÚ',
                hour: '20:24',
                id: 8,
                text: '¿O vos qué querés ver?',
                stattus: 'visto',
            },
            {
                user: 'USUARIO',
                hour: '20:25',
                id: 9,
                text: 'Pero... ¿de terror? 👀',
            },
            {
                user: 'TÚ',
                hour: '20:27',
                id: 10,
                text: 'Siii, ¡me encantan!',
                stattus: 'visto',
            },
            {
                user: 'TÚ',
                hour: '20:27',
                id: 11,
                text: '¿Cuál otra sino?',
                stattus: 'visto',
            },
            {
                user: 'USUARIO',
                hour: '20:32',
                id: 12,
                text: 'Mmmm, bueno me fijo los asientos disponibles... 😒',
            },
        ]
    },
    {
        img: '/assets/profile-3.jpg',
        name: 'Amor',
        id: 5,
        messages: [
            {
                user: 'USUARIO',
                hour: '16:10',
                id: 1,
                text: '¡Hola amor! ¿Te parece si el finde nos vemos?',
            },
            {
                user: 'TÚ',
                hour: '16:12',
                id: 2,
                text: 'Hola corazón, sí, obvio.',
                stattus: 'no-visto',
            },
            {
                user: 'TÚ',
                hour: '16:12',
                id: 3,
                text: '¿Vamos a un Starbucks?',
                stattus: 'pendiente',
            },
        ]

    },
    {
        "img": "/assets/profile-7.jpg",
        "name": "Andrés",
        "id": 6,
        "messages": [
            {
                "user": "USUARIO",
                "hour": "11:28",
                "id": 1,
                "text": "Buenas amigaa.",
            },
            {
                "user": "TÚ",
                "hour": "11:30",
                "id": 2,
                "text": "¡Buenas! ¿Cómo va todo por allá?",
                "stattus": "visto"
            },
            {
                "user": "TÚ",
                "hour": "11:31",
                "id": 3,
                "text": "¿Qué tal esas vacaciones? 🌎",
                "stattus": "visto"
            },
            {
                "user": "USUARIO",
                "hour": "11:32",
                "id": 4,
                "text": "Uff, todo lo que tengo para contarte. Hermosas las vistas, hermoso el hotel, ¡todo!",
            },
            {
                "user": "TÚ",
                "hour": "11:33",
                "id": 5,
                "text": "No sabés cuánto gusto me da leer esto. Te lo merecías después de tanto trabajo la verdad...",
                "stattus": "visto"
            },
            {
                "user": "USUARIO",
                "hour": "11:40",
                "id": 6,
                "text": "Gracias amigaaaa.",
            },
            {
                "user": "USUARIO",
                "hour": "11:40",
                "id": 7,
                "text": "¿Sabés qué estaba pensando para mi regreso?",
            },
            {
                "user": "TÚ",
                "hour": "11:41",
                "id": 8,
                "text": "🤔🤔🤔",
                "stattus": "visto"
            },
            {
                "user": "USUARIO",
                "hour": "11:43",
                "id": 9,
                "text": "Ir al festival de este sábado. Ya estuve viendo las entradas, no es tan caro. ¡Yo invito!",
            },
            {
                "user": "TÚ",
                "hour": "11:45",
                "id": 10,
                "text": "Queeeee. ",
                "stattus": "visto"
            },
            {
                "user": "USUARIO",
                "hour": "11:46",
                "id": 11,
                "text": "Dale, ¡vamos!",
            },
            {
                "user": "TÚ",
                "hour": "11:50",
                "id": 12,
                "text": "Sisis, por favor, van a estar un par de artistas que me encantan, ¡no me lo perdería!",
                "stattus": "visto"
            },
            {
                "user": "USUARIO",
                "hour": "11:52",
                "id": 13,
                "text": "Genial, más tarde saco las entradas.",
            },
            {
                "user": "USUARIO",
                "hour": "11:53",
                "id": 14,
                "text": "Hey, te dejo que tenemos una actividad y todavía no preparé nada. 🤣",
            },
            {
                "user": "USUARIO",
                "hour": "11:53",
                "id": 15,
                "text": "Nos vemos a la vuelta. 💖",
            }
        ]
    }

]

export default contacts