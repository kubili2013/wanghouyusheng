var data = [
    {
        title:"定位是八达岭，但是图片是我家猫。",
        longitude:116.02,
        latitude:40.36,
        icon:"",
        date:"2018",
        photos:[
            {
                "src": "images/badaling/1.jpg",
                "w": 5184,
                "h": 3456
            },
            {
                "src": "images/badaling/10.jpg",
                "w": 5184,
                "h": 3456
            },
            {
                "src": "images/badaling/11.jpg",
                "w": 5184,
                "h": 3456
            },
            {
                "src": "images/badaling/12.jpg",
                "w": 5184,
                "h": 3456
            },
            {
                "src": "images/badaling/13.jpg",
                "w": 5184,
                "h": 3456
            },
            {
                "src": "images/badaling/2.jpg",
                "w": 5184,
                "h": 3456
            },
            {
                "src": "images/badaling/3.jpg",
                "w": 5184,
                "h": 3456
            },
            {
                "src": "images/badaling/4.jpg",
                "w": 5184,
                "h": 3456
            },
            {
                "src": "images/badaling/5.jpg",
                "w": 5184,
                "h": 3456
            },
            {
                "src": "images/badaling/6.jpg",
                "w": 5184,
                "h": 3456
            },
            {
                "src": "images/badaling/7.jpg",
                "w": 5184,
                "h": 3456
            },
            {
                "src": "images/badaling/8.jpg",
                "w": 5184,
                "h": 3456
            },
            {
                "src": "images/badaling/9.jpg",
                "w": 5184,
                "h": 3456
            }
        ]
    }
];

function GetData(lng,lat){
    for(var i=0;i<data.length;i++){
        if(data[i].latitude == lat && data[i].longitude == lng){
            return data[i];
        }
    }
    return null;
}