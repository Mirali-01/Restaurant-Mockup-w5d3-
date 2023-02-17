let menu = {
    beverages: {
        bev1: {
            name: "Coconut Water",
            img: "https://wfg32p.s3.amazonaws.com/media/dishes/green_coconut_water_5429-reg.jpg",
            price: "$2"
        }
    },
    apps: {
        app1: {
            name: "Aloo Shingara",
            img: "https://img-global.cpcdn.com/recipes/ed0544db140e2b0d/680x482cq70/potato-samosa-in-bengali-style-recipe-main-photo.jpg",
            price: "$5"
        }
    },
    entrees: {
        main1: {
            name: "Chicken Bhuna",
            img: "https://food-images.files.bbci.co.uk/food/recipes/bhuna_murgh_masala_90385_16x9.jpg",
            price: "$25"
        }
    },
    desserts: {
        dessert1: {
            name: "Roshmalai",
            img: "https://www.wellfoodbd.com/documents/products/202110/Rosh-Malai.png",
            price: "$10"
        }
    }
}


let clearScreen = document.querySelector(".foodGalleryContainer")

clearScreen.addEventListener("click", (e) => {
    let clear1 = document.querySelector(".top1")
    clear1.setAttribute("src", "https://media.istockphoto.com/id/1282207898/photo/grunge-map-of-bangladesh-with-its-flag-printed-within.jpg?s=612x612&w=0&k=20&c=rO4ORA9cgLk_klVEGQfmd92IA2LlMH-aZpQfWCdA0Qs=")

    let clear2 = document.querySelector(".top2")
    clear2.setAttribute("src", "https://cdn.travelsafe-abroad.com/wp-content/uploads/wp2298962.jpg")

    let clear3 = document.querySelector(".bottom1")
    clear3.setAttribute("src", "https://media.istockphoto.com/id/1369773210/photo/dramatical-colorful-sunset-in-winter-this-image-was-captured-by-me-on-january-31-from-kolatia.jpg?b=1&s=170667a&w=0&k=20&c=mhbIUsqRWg93rKIOYwGPKTLV51uyn96aXVJKdorhz5g=")

    let clear4 = document.querySelector(".bottom2")
    clear4.setAttribute("src", "https://preview.redd.it/2vuglky9mwg61.jpg?auto=webp&s=e7a083182026295a689645987e85c75fdb6e80a3")
    
})


let drinks = document.querySelector(".drink")
let appetizers = document.querySelector(".app")
let mainCourse = document.querySelector(".main")
let sweets = document.querySelector(".dessert")


drinks.addEventListener("click", (e) => {
    let firstPic = document.querySelector(".top1")
    firstPic.setAttribute("src", menu.beverages.bev1.img)

    let firstText = document.querySelector(".item1")
    firstText.innerHTML = menu.beverages.bev1.name 
})

appetizers.addEventListener("click", (e) => {
    let firstPic = document.querySelector(".bottom1")
    firstPic.setAttribute("src", menu.apps.app1.img)

    let firstText = document.querySelector(".item2")
    firstText.innerHTML = menu.apps.app1.name
})

mainCourse.addEventListener("click", (e) => {
    let firstPic = document.querySelector(".top2")
    firstPic.setAttribute("src", menu.entrees.main1.img)

    let firstText = document.querySelector(".item3")
    firstText.innerHTML = menu.entrees.main1.name
})

sweets.addEventListener("click", (e) => {
    let firstPic = document.querySelector(".bottom2")
    firstPic.setAttribute("src", menu.desserts.dessert1.img)

    let firstText = document.querySelector(".item4")
    firstText.innerHTML = menu.desserts.dessert1.name
})
