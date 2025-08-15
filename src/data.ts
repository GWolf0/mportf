import { PortfolioDataDef } from "./types";

const data:PortfolioDataDef={
    imgsRoot:"./imgs/p_imgs/",
    links:[
        {tag:"github",url:"https://github.com/GWolf0",icon:"bi bi-github"},
        {tag:"email",url:"mailto:aman.mohcine@gmail.com",icon:"bi bi-envelope-at"},
        // {tag:"linkedin",url:"#",icon:"bi bi-linkedin"},
    ],
    featured: [19],
    projects:[
        // {
        //     id:1,
        //     title:"The title",
        //     description:"The description",
        //     imgs:["vite.svg","vite.svg"],
        //     tags:["tag1","tag2","tag3"],
        //     codeLink:"#",
        //     previewLink:"#"
        // },
        {
            id:19,
            title:"TMS (Transportation Management System)",
            description:"A multi-tenant application designed to manage employee transportation.",
            imgs:["tms_1.png","tms_2.png","TMS Demo Video.mp4"],
            tags:["PHP","Laravel","React","Typescript"],
            codeLink:"https://github.com/GWolf0/TMS",
            previewLink:"#"
        },
        {
            id:20,
            title:"Marketplace",
            description:"This is a marketplace-style website where users can browse and post products.",
            imgs:["marketplace_nextjs_1.png","marketplace_nextjs_2.png","marketplace_nextjs_3.png","marketplace_nextjs_4.png","marketplace_nextjs_5.png","marketplace_nextjs_6.png","marketplace_nextjs_vid.mp4"],
            tags:["PHP","Laravel","NextJS","React","Typescript"],
            codeLink:"https://github.com/GWolf0/marketplace",
            previewLink:"#"
        },
        {
            id:1,
            title:"CV Maker",
            description:"A simple cv maker, with preview.",
            imgs:["cv_maker_1.jpeg","cv_maker_2.jpeg","cv_maker_3.jpeg","cv_maker_4.jpeg","cv_maker_5.jpeg"],
            tags:["Frontend", "React", "Typescript"],
            codeLink:"https://github.com/GWolf0/cv-maker",
            previewLink:"https://gwolf0.github.io/cv-maker/"
        },
        {
            id:2,
            title:"Pomodoro",
            description:"A pomodoro app. (Design inspiration: frontendmentor.io)",
            imgs:["pomodoro_1.jpeg","pomodoro_2.jpeg","pomodoro_3.jpeg","pomodoro_4.jpeg"],
            tags:["Frontend", "React", "Typescript"],
            codeLink:"https://github.com/GWolf0/pomodoro",
            previewLink:"https://gwolf0.github.io/pomodoro/"
        },
        {
            id:3,
            title:"Fake DB",
            description:"A UI interface to mimic a database management system.",
            imgs:["fkdb_1.jpeg","fkdb_2.jpeg","fkdb_3.jpeg","fkdb_4.jpeg","fkdb_5.jpeg","fkdb_6.jpeg","fkdb_7.jpeg","fkdb_8.jpeg"],
            tags:["Frontend", "React", "Typescript"],
            codeLink:"https://github.com/GWolf0/fkdb",
            previewLink:"https://gwolf0.github.io/fkdb/"
        },
        {
            id:4,
            title:"Vocapp",
            description:"An app to train for a specifc language, currently (German, and Japanese).",
            imgs:["vocab_1.jpeg","vocab_2.jpeg","vocab_3.jpeg","vocab_4.jpeg","vocab_5.jpeg"],
            tags:["Frontend", "React", "Typescript"],
            codeLink:"https://github.com/GWolf0/vocapp",
            previewLink:"https://gwolf0.github.io/vocapp/"
        },
        {
            id:5,
            title:"2048 Game",
            description:"A 2048 game clone with typescript, (I can't dare to look back at the code).",
            imgs:["2048_1.PNG","2048_Gameplay.mp4"],
            tags:["Game", "Typescript"],
            codeLink:"https://github.com/GWolf0/2048_game",
            previewLink:"https://gwolf0.github.io/2048_game/"
        },
        {
            id:6,
            title:"Hell Bat",
            description:"A micro pixel art game made with Unity where the player controls a bat escalating infinitely.",
            imgs:["hellbat_1.png","HellBat_Gameplay.mp4"],
            tags:["Unity","Game"],
            codeLink:"#",
            previewLink:"https://pandev08.itch.io/hell-bat"
        },
        {
            id:7,
            title:"Glide Man",
            description:"A game I made years ago, I lost the source code :/",
            imgs:["glideman_1.webp","GlideMan_Gameplay.mp4"],
            tags:["Unity","Game"],
            codeLink:"#",
            previewLink:"#"
        },
        {
            id:21,
            title:"ZigSlide",
            description:"A game I made years ago, I lost the source code :/ (2)",
            imgs:["zigslide_1.png","ZigSlide Gameplay.mp4"],
            tags:["Unity", "Game"],
            codeLink:"#",
            previewLink:"#"
        },
        {
            id:22,
            title:"Ball Proto",
            description:"A game I made years ago, I lost the source code :/ (3)",
            imgs:["ball_proto_1.png","Ball Proto Video.mp4"],
            tags:["Unity", "Game"],
            codeLink:"#",
            previewLink:"#"
        },
        {
            id: 8,
            title: "Pixbyte",
            description: "A social media like website, with a fake backend.",
            imgs: ["pixbyte_0.png", "pixbyte_1.png", "pixbyte_2.png", "pixbyte_3.png", "pixbyte_4.png", "pixbyte_5.png", "pixbyte_6.png", "pixbyte_7.png"],
            tags: ["Frontend", "React"],
            codeLink:"https://github.com/GWolf0/pixbyte",
            previewLink: "https://gwolf0.github.io/pixbyte/"
        },
        {
            id: 9,
            title: "Tetris",
            description: "The day I tried making tetris, there are some bugs, but I can't touch the code anymore.",
            imgs: ["tetris_0.png", "tetris_1.png", "tetris_2.png"],
            tags: ["Game"],
            codeLink:"https://github.com/GWolf0/tetris",
            previewLink: "https://gwolf0.github.io/tetris/"
        },
        {
            id: 10,
            title: "Chart",
            description: "An expenses chart design. (Design inspiration: frontendmentor.io)",
            imgs: ["chart_0.png"],
            tags: ["Frontend", "React"],
            codeLink:"#",
            previewLink: ""
        },
        {
            id: 11,
            title: "Pricing",
            description: "A pricing design component using react. (Design inspiration: frontendmentor.io)",
            imgs: ["pricing_0.png", "pricing_1.png"],
            tags: ["Frontend", "React"],
            codeLink:"#",
            previewLink: ""
        },
        {
            id: 12,
            title: "Product Page",
            description: "A product page design using react. (Design inspiration: frontendmentor.io)",
            imgs: ["product_0.png", "product_1.png"],
            tags: ["Frontend", "React"],
            codeLink:"#",
            previewLink: ""
        },
        {
            id: 13,
            title: "ToDo",
            description: "A simple todo app with basic adding, removing and checking tasks, and theme switch. (Design inspiration: frontendmentor.io)",
            imgs: ["todo_0.png", "todo_1.png", "todo_2.png", "todo_3.png"],
            tags: ["Frontend", "React"],
            codeLink:"#",
            previewLink: ""
        },
        {
            id: 14,
            title: "Image Slider (WP Plugin)",
            description: "A wordpress plugin for creating image sliders.",
            imgs: ["imgsliderwpplugin_0.png", "imgsliderwpplugin_1.png"],
            tags: ["Wordpress"],
            codeLink:"#",
            previewLink: ""
        },
        {
            id: 15,
            title: "Line Chart",
            description: "A line chart component, it takes one or multiple data as json and fit them in the canvas.",
            imgs: ["linechart_0.png", "linechart_1.png"],
            tags: ["Frontend", "React"],
            codeLink:"#",
            previewLink: ""
        },
        {
            id: 16,
            title: "Text Data To Image Data",
            description: "A tool to convert a 'Text' to an 'Image', and vice versa.",
            imgs: ["textdatatoimagedata_0.png", "textdatatoimagedata_1.png"],
            tags: ["Frontend", "React"],
            codeLink:"#",
            previewLink: "https://gwolf0.github.io/text_data_to_image_data/"
        },
        {
            id: 17,
            title: "NList",
            description: "A list component with the ability of adding removing and nesting Folders/Files structure like objects.",
            imgs: ["nlist_0.png", "nlist_1.png", "nlist_2.png"],
            tags: ["Frontend"],
            codeLink:"#",
            previewLink: ""
        },
        {
            id: 18,
            title: "NSwitch UI",
            description: "A console UI design made with vueJS. (Very old project)",
            imgs: ["nswitch_0.png", "nswitch_1.png"],
            tags: ["Frontend", "VueJS"],
            codeLink:"#",
            previewLink: ""
        },
        {
            id:23,
            title:"This Portfolio Website",
            description:"Yes this profolio website deserves a place in this listing.",
            imgs:["mportf_1.jpeg"],
            tags:["React", "Typescript"],
            codeLink:"https://github.com/GWolf0/mportf",
            previewLink:"https://gwolf0.github.io/mportf/"
        },
        // {
        //     id: 17,
        //     title: "Portfolio 0",
        //     description: "My first portfolio.",
        //     imgs: ["portf0_0.png", "portf0_1.png", "portf0_2.png"],
        //     tags: ["Others"],
        //     codeLink:"#",
        //     previewLink: ""
        // },
        // {
        //     id: 1,
        //     title: "Artilist",
        //     description: "A list creating website, where lists may contain many list items(Titles, Paragraphs, Images,etc).\nFeatures:\n\t-Feat 1.",
        //     imgs: ["artilist_0.png", "artilist_1.png", "artilist_2.png", "artilist_3.png"],
        //     tags: ["Laravel", "React"],
        //     codeLink:"#",
        //     previewLink: ""
        // },
        // {
        //     id: 2,
        //     title: "Chat Rock",
        //     description: "A basic chat bot, that respond with predefined answers assigned by the user through '/learn ..' command.",
        //     imgs: ["chatrock_0.png", "chatrock_1.png", "chatrock_2.png", "chatrock_3.png", "chatrock_4.png"],
        //     tags: ["React"],
        //     codeLink:"#",
        //     previewLink: "https://gwolf0.github.com/chat_rock"
        // },
        // {
        //     id: 3,
        //     title: "Frame Animation Previewer",
        //     description: "A frame animation previewer, with a spitesheet slicer.",
        //     imgs: ["frameanimationpreviewer_0.png", "frameanimationpreviewer_1.png", "frameanimationpreviewer_2.png"],
        //     tags: ["React"],
        //     codeLink:"#",
        //     previewLink: "https://gwolf0.github.io/frame_animation_previewer/"
        // },
        // {
        //     id: 9,
        //     title: "VDroid (WP Theme)",
        //     description: "A custom Wordpress theme specifically an ecommerce theme using woocommerce.",
        //     imgs: ["vdroid_0.png", "vdroid_1.png", "vdroid_2.png", "vdroid_3.png", "vdroid_4.png"],
        //     tags: ["Wordpress"],
        //     codeLink:"#",
        //     previewLink: ""
        // },
        // {
        //     id: 10,
        //     title: "Exfree",
        //     description: "A social media like website with posts CRUD operations and authentication, using laravel.",
        //     imgs: ["exfree_0.png", "exfree_1.png", "exfree_2.png", "exfree_3.png", "exfree_4.png"],
        //     tags: ["Laravel"],
        //     codeLink:"#",
        //     previewLink: ""
        // },
        // {
        //     id: 11,
        //     title: "Ecomm",
        //     description: "An ecommerce website with products CRUD operations. (Status: Unfinished)",
        //     imgs: ["ecomm_0.png", "ecomm_1.png", "ecomm_2.png", "ecomm_3.png", "ecomm_4.png", "ecomm_5.png"],
        //     tags: ["React"],
        //     codeLink:"#",
        //     previewLink: ""
        // },
        // {
        //     id: 12,
        //     title: "Clock",
        //     description: "Analog clock using HTML5 canvas.",
        //     imgs: ["clock_0.png"],
        //     tags: ["Others"],
        //     codeLink:"#",
        //     previewLink: ""
        // },
        // {
        //     id: 13,
        //     title: "Game UI",
        //     description: "A game UI.",
        //     imgs: ["zelda_botw_0.png"],
        //     tags: ["Others"],
        //     codeLink:"#",
        //     previewLink: ""
        // },
    ]
}

export default data;
