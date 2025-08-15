const d=[{
    id: 1,
    title: "Artilist",
    info: "A list creating website, where lists may contain many list items(Titles, Paragraphs, Images,etc).",
    imgs: ["artilist_0.PNG", "artilist_1.PNG", "artilist_2.PNG", "artilist_3.PNG"],
    tags: ["Laravel", "React"],
    preview: ""
}, {
    id: 2,
    title: "Chat Rock",
    info: "A basic chat bot, that respond with predefined answers assigned by the user through '/learn ..' command.",
    imgs: ["chatrock_0.PNG", "chatrock_1.PNG", "chatrock_2.PNG", "chatrock_3.PNG", "chatrock_4.PNG"],
    tags: ["React"],
    preview: "https://gwolf0.github.com/chat_rock"
}, {
    id: 3,
    title: "Frame Animation Previewer",
    info: "A frame animation previewer, with a spitesheet slicer.",
    imgs: ["frameanimationpreviewer_0.PNG", "frameanimationpreviewer_1.PNG", "frameanimationpreviewer_2.PNG"],
    tags: ["React"],
    preview: "https://gwolf0.github.io/frame_animation_previewer/"
}, {
    id: 4,
    title: "Image Slider (WP Plugin)",
    info: "A wordpress plugin for creating image sliders.",
    imgs: ["imgsliderwpplugin_0.PNG", "imgsliderwpplugin_1.PNG"],
    tags: ["Wordpress"],
    preview: ""
}, {
    id: 5,
    title: "Line Chart",
    info: "A line chart component, it takes one or multiple data as json and fit them in the canvas.",
    imgs: ["linechart_0.PNG", "linechart_1.PNG"],
    tags: ["React"],
    preview: ""
}, {
    id: 6,
    title: "Pixbyte",
    info: "A social media like website, with a fake backend.",
    imgs: ["pixbyte_0.PNG", "pixbyte_1.PNG", "pixbyte_2.PNG", "pixbyte_3.PNG", "pixbyte_4.PNG", "pixbyte_5.PNG", "pixbyte_6.PNG", "pixbyte_7.PNG"],
    tags: ["React"],
    preview: "https://gwolf0.github.io/pixbyte/"
}, {
    id: 7,
    title: "Tetris",
    info: "The closest game to Tetris I can manage to make in javascript (HTML5 Canvas).",
    imgs: ["tetris_0.PNG", "tetris_1.PNG", "tetris_2.PNG"],
    tags: ["Others"],
    preview: "https://gwolf0.github.io/tetris/"
}, {
    id: 8,
    title: "Text Data To Image Data",
    info: "A tool to convert a 'Text' to an 'Image', and vice versa.",
    imgs: ["textdatatoimagedata_0.PNG", "textdatatoimagedata_1.PNG"],
    tags: ["React"],
    preview: "https://gwolf0.github.io/text_data_to_image_data/"
}, {
    id: 9,
    title: "VDroid (WP Theme)",
    info: "A custom Wordpress theme specifically an ecommerce theme using woocommerce.",
    imgs: ["vdroid_0.PNG", "vdroid_1.PNG", "vdroid_2.PNG", "vdroid_3.PNG", "vdroid_4.PNG"],
    tags: ["Wordpress"],
    preview: ""
}, {
    id: 10,
    title: "Exfree",
    info: "A social media like website with posts CRUD operations and authentication, using laravel.",
    imgs: ["exfree_0.PNG", "exfree_1.PNG", "exfree_2.PNG", "exfree_3.PNG", "exfree_4.PNG"],
    tags: ["Laravel"],
    preview: ""
}, {
    id: 11,
    title: "Ecomm",
    info: "An ecommerce website with products CRUD operations. (Status: Unfinished)",
    imgs: ["ecomm_0.PNG", "ecomm_1.PNG", "ecomm_2.PNG", "ecomm_3.PNG", "ecomm_4.PNG", "ecomm_5.PNG"],
    tags: ["React"],
    preview: ""
}, {
    id: 12,
    title: "Clock",
    info: "Analog clock using HTML5 canvas.",
    imgs: ["clock_0.PNG"],
    tags: ["Others"],
    preview: ""
}, {
    id: 13,
    title: "Game UI",
    info: "A game UI.",
    imgs: ["zelda_botw_0.PNG"],
    tags: ["Others"],
    preview: ""
}, {
    id: 14,
    title: "NList",
    info: "A list component with the ability of adding removing and nesting Folders/Files structure like objects.",
    imgs: ["nlist_0.PNG", "nlist_1.PNG", "nlist_2.PNG"],
    tags: ["Others"],
    preview: ""
}, {
    id: 15,
    title: "NSwitch UI",
    info: "A console UI design made with vueJS.",
    imgs: ["nswitch_0.PNG", "nswitch_1.PNG"],
    tags: ["Others"],
    preview: ""
}, {
    id: 16,
    title: "Chart",
    info: "An expenses chart design. (Front end mentor)",
    imgs: ["chart_0.PNG"],
    tags: ["React"],
    preview: ""
}, {
    id: 17,
    title: "Portfolio 0",
    info: "My first portfolio.",
    imgs: ["portf0_0.PNG", "portf0_1.PNG", "portf0_2.PNG"],
    tags: ["Others"],
    preview: ""
}, {
    id: 18,
    title: "Pricing",
    info: "A pricing design component using react. (Front end mentor)",
    imgs: ["pricing_0.PNG", "pricing_1.PNG"],
    tags: ["React"],
    preview: ""
}, {
    id: 19,
    title: "Product Page",
    info: "A product page design using react. (Front end mentor)",
    imgs: ["product_0.PNG", "product_1.PNG"],
    tags: ["React"],
    preview: ""
}, {
    id: 20,
    title: "ToDo",
    info: "A simple todo app with basic adding, removing and checking tasks, and theme switch. (Front end mentor)",
    imgs: ["todo_0.PNG", "todo_1.PNG", "todo_2.PNG", "todo_3.PNG"],
    tags: ["React"],
    preview: ""
}];
const root='';
function extractImgs(){
    let imgs=[];
    d.forEach((p,i)=>{
        imgs.push(p.imgs)  
    });
    return imgs;
}
const imgs=extractImgs();
console.log(imgs.length);
console.log(imgs);

function openImgs(idx){
    for(let i in imgs[idx]){
        window.open(imgs[idx][i],"_blank");
    }
}
openImgs(0);