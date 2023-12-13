// for each

const programing=["js","cpp","py","html"]
// callback function
programing.forEach(function (item){
    console.log(item)
});
// Arrow function

programing.forEach((item)=>{
    console.log(item)
});

function basic(item) {
    console.log(item)    
}

programing.forEach(basic)

// for each brings many parameters as item's value, index and array like

programing.forEach((item, index, lang) => {
    console.log(item, index, lang)
});

// for objects inside an array

const coding =[
    {
        short: "py",
        name: "Python"
    },
    {
        short: "js",
        name: "Javascript"
    },
    {
        short: "java",
        name: "Java"
    },
    {
        short: "cpp",
        name: "c++"
    },
    {
        short: "css",
        name: "cssheet"
    },
    {
        short: "html",
        name: "markup lang"
    },
    {
        short: "ts",
        name: "typescript"
    }
]

coding.forEach((element) => {
    console.log(element.name)
});