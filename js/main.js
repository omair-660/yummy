
let rowData = document.querySelector("#row");
let cate = [];

async function getCategory() {
    const api = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
    const result = await api.json();
    cate = result.categories;
    display();
}

function display() {
    rowData.innerHTML=""
    $(".load").css("display", "flex").hide().fadeIn(1000);

    let content = '';

    for (let i = 0; i < cate.length; i++) {
        content += `
            <div class="col-md-3 mb-3 rounded-3">
                <div onclick="details('${cate[i].strCategory}')" class="position-relative box rounded-3">
                    <img src="${cate[i].strCategoryThumb}" alt="">
                    <div class="text position-absolute d-flex flex-coulmn p-2 align-items-center w-100  h-100"><h5>${cate[i].strCategory}</h5></div>
                </div>
            </div>
        `;
    }

    $(".load").fadeOut(250)
    rowData.innerHTML = content;
    $(".sear").fadeOut(1000)
}

async function details(category) {
    rowData.innerHTML=""
    $(".load").css("display", "flex").hide().fadeIn(1000);


    const api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
    const result = await api.json();
    let meals = result.meals;
    let content = '';

    for (let i = 0; i < meals.length; i++) {
        content += `
            <div class="col-md-3 mb-3 rounded-3 ">
    

                <div onclick="getMealDetailsById(${meals[i].idMeal})" class="position-relative box rounded-3">
                    <img src="${meals[i].strMealThumb}" alt="">
                    <div class="text position-absolute d-flex flex-coulmn p-2 align-items-center w-100  h-100"> <h5>${meals[i].strMeal}</h5></div>
                </div>
            </div>
        `;
    }

    $(".load").fadeOut(250)
    rowData.innerHTML = content;
    $(".sear").fadeOut(1000)
}

async function getMealDetailsById(id) {
    rowData.innerHTML=""
    $(".load").css("display", "flex").hide().fadeIn(1000);


    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const data = await response.json();
    const meal = data.meals[0];

    let content = `
    <div class="col-md-4">
            <div class="text-white">
                <img src="${meal.strMealThumb}" alt="">
                <h5>${meal.strMeal}</h5>
                
            </div>
            </div>

        <div class="col-md-8">
        <div class="text-white ">
        <h3>Instructions</h3>
        <p >${meal.strInstructions}</p>
        <h4 class="fw-bold">Area: <span class="fw-normal">${meal.strArea}</span></h4>
        <h4 class="fw-bold">Category: <span class="fw-normal">${meal.strCategory}</span></h4>
        <h4 class="fw-bold">Recipes:</h4>
        <div class="d-flex flex-wrap">
    ${meal.strMeasure1 && meal.strIngredient1 ? `<span class="p-2 rounded-3 bg-info bg-opacity-75 m-2">${meal.strMeasure1} ${meal.strIngredient1}</span>` : ''}
    ${meal.strMeasure2 && meal.strIngredient2 ? `<span class="p-2 rounded-3 bg-info bg-opacity-75 m-2">${meal.strMeasure2} ${meal.strIngredient2}</span>` : ''}
    ${meal.strMeasure3 && meal.strIngredient3 ? `<span class="p-2 rounded-3 bg-info bg-opacity-75 m-2">${meal.strMeasure3} ${meal.strIngredient3}</span>` : ''}
    ${meal.strMeasure4 && meal.strIngredient4 ? `<span class="p-2 rounded-3 bg-info bg-opacity-75 m-2">${meal.strMeasure4} ${meal.strIngredient4}</span>` : ''}
    ${meal.strMeasure5 && meal.strIngredient5 ? `<span class="p-2 rounded-3 bg-info bg-opacity-75 m-2">${meal.strMeasure5} ${meal.strIngredient5}</span>` : ''}
    ${meal.strMeasure6 && meal.strIngredient6 ? `<span class="p-2 rounded-3 bg-info bg-opacity-75 m-2">${meal.strMeasure6} ${meal.strIngredient6}</span>` : ''}
    ${meal.strMeasure7 && meal.strIngredient7 ? `<span class="p-2 rounded-3 bg-info bg-opacity-75 m-2">${meal.strMeasure7} ${meal.strIngredient7}</span>` : ''}
    ${meal.strMeasure8 && meal.strIngredient8 ? `<span class="p-2 rounded-3 bg-info bg-opacity-75 m-2">${meal.strMeasure8} ${meal.strIngredient8}</span>` : ''}
    ${meal.strMeasure9 && meal.strIngredient9 ? `<span class="p-2 rounded-3 bg-info bg-opacity-75 m-2">${meal.strMeasure9} ${meal.strIngredient9}</span>` : ''}
    ${meal.strMeasure10 && meal.strIngredient10 ? `<span class="p-2 rounded-3 bg-info bg-opacity-75 m-2">${meal.strMeasure10} ${meal.strIngredient10}</span>` : ''}
    ${meal.strMeasure11 && meal.strIngredient11 ? `<span class="p-2 rounded-3 bg-info bg-opacity-75 m-2">${meal.strMeasure11} ${meal.strIngredient11}</span>` : ''}
    ${meal.strMeasure12 && meal.strIngredient12 ? `<span class="p-2 rounded-3 bg-info bg-opacity-75 m-2">${meal.strMeasure12} ${meal.strIngredient12}</span>` : ''}
    ${meal.strMeasure13 && meal.strIngredient13 ? `<span class="p-2 rounded-3 bg-info bg-opacity-75 m-2">${meal.strMeasure13} ${meal.strIngredient13}</span>` : ''}
    ${meal.strMeasure14 && meal.strIngredient14 ? `<span class="p-2 rounded-3 bg-info bg-opacity-75 m-2">${meal.strMeasure14} ${meal.strIngredient14}</span>` : ''}
    ${meal.strMeasure15 && meal.strIngredient15 ? `<span class="p-2 rounded-3 bg-info bg-opacity-75 m-2">${meal.strMeasure15} ${meal.strIngredient15}</span>` : ''}
    ${meal.strMeasure16 && meal.strIngredient16 ? `<span class="p-2 rounded-3 bg-info bg-opacity-75 m-2">${meal.strMeasure16} ${meal.strIngredient16}</span>` : ''}
    ${meal.strMeasure17 && meal.strIngredient17 ? `<span class="p-2 rounded-3 bg-info bg-opacity-75 m-2">${meal.strMeasure17} ${meal.strIngredient17}</span>` : ''}
    ${meal.strMeasure18 && meal.strIngredient18 ? `<span class="p-2 rounded-3 bg-info bg-opacity-75 m-2">${meal.strMeasure18} ${meal.strIngredient18}</span>` : ''}
    ${meal.strMeasure19 && meal.strIngredient19 ? `<span class="p-2 rounded-3 bg-info bg-opacity-75 m-2">${meal.strMeasure19} ${meal.strIngredient19}</span>` : ''}
    ${meal.strMeasure20 && meal.strIngredient20 ? `<span class="p-2 rounded-3 bg-info bg-opacity-75 m-2">${meal.strMeasure20} ${meal.strIngredient20}</span>` : ''}
    
    
    <button onclick="getCategory()" class="position-fixed fs-3 d-flex justify-content-center align-items-center back text-danger fw-bold">X</button>
    </div>
    ${meal.strSource ? `<br><a target="_blank" href="${meal.strSource}" class="btn btn-success m-2">Source</a>` : ''}
    ${meal.strYoutube ? `<a target="_blank" href="${meal.strYoutube}" class="btn btn-danger">Youtube</a>` : ''}
    </div>
            </div>
`;
$(".load").fadeOut(1000)
    rowData.innerHTML = content;
    $(".sear").fadeOut(1000)
}

function closeDetails() {
    $(".meal-details,.details").fadeOut(1000, function () {
        getCategory();
    });
}


// getCategory();
async function showAria() {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
    const aria = await response.json();
    let content = '';
    let areas = aria.meals;
    rowData.innerHTML=""
    $(".load").css("display", "flex").hide().fadeIn(1000);

    $(".deta").css("visibility", "hidden")
    for (let i = 0; i < areas.length; i++) {

        let flagImageUrl = getFlagImageUrl(areas[i].strArea);

        content += `
            <div class="col-md-3 mb-3 rounded-3 details">
                <div onclick="getMealsByArea('${areas[i].strArea}')" class="box rounded-3 position-relative">
                    <img src="${flagImageUrl}" alt="${areas[i].strArea} flag">
                    <div class="text position-absolute d-flex flex-coulmn p-2 align-items-center"><h5>${areas[i].strArea}</h5></div>
                </div>
            </div>
        `;
    }

    $(".load").fadeOut(250)
    rowData.innerHTML = content;
    $(".sear").fadeOut(1000)
}

function getFlagImageUrl(areaName) {

    switch (areaName) {
        case 'American':
            return 'https://www.countryflags.com/wp-content/uploads/united-states-of-america-flag-png-large.png';
        case 'British':
            return 'https://www.countryflags.com/wp-content/uploads/united-kingdom-flag-png-large.png';
        case 'Canadian':
            return 'https://cdn.countryflags.com/thumbs/canada/flag-400.png';
        case 'Chinese':
            return 'https://www.countryflags.com/wp-content/uploads/china-flag-png-xl.png';
        case 'Croatian':
            return 'https://www.countryflags.com/wp-content/uploads/croatia-flag-png-large.png';

        case 'Dutch':
            return 'https://www.countryflags.com/wp-content/uploads/netherlands-flag-png-xl.png';
        case 'Egyptian':
            return 'https://www.countryflags.com/wp-content/uploads/egypt-flag-png-large.png';
        case 'Filipino':
            return 'https://www.countryflags.com/wp-content/uploads/philippines-flag-png-large.png';
        case 'French':
            return 'https://www.countryflags.com/wp-content/uploads/france-flag-png-xl.png';
        case 'Greek':
            return 'https://www.countryflags.com/wp-content/uploads/greece-flag-png-large.png';
        case 'Indian':
            return 'https://www.countryflags.com/wp-content/uploads/india-flag-png-large.png';
        case 'Italian':
            return 'https://www.countryflags.com/wp-content/uploads/italy-flag-png-xl.png';
        case 'Jamaican':
            return 'https://www.countryflags.com/wp-content/uploads/jamaica-flag-png-large.png';
        case 'Japanese':
            return 'https://www.countryflags.com/wp-content/uploads/japan-flag-png-xl.png';
        case 'Kenyan':
            return 'https://www.countryflags.com/wp-content/uploads/kenya-flag-png-xl.png';
        case 'Malaysian':
            return 'https://www.countryflags.com/wp-content/uploads/malaysia-flag-png-xl.png';

        case 'Irish':
            return 'https://www.countryflags.com/wp-content/uploads/ireland-flag-png-large.png';

        case 'Mexican':
            return 'https://www.countryflags.com/wp-content/uploads/mexico-flag-png-large.png';
        case 'Moroccan':
            return 'https://www.countryflags.com/wp-content/uploads/morocco-flag-png-xl.png';
        case 'Polish':
            return 'https://www.countryflags.com/wp-content/uploads/poland-flag-png-large.png';
        case 'Portuguese':
            return 'https://www.countryflags.com/wp-content/uploads/portugal-flag-400.png';
        case 'Russian':
            return 'https://www.countryflags.com/wp-content/uploads/russia-flag-png-xl.png';
        case 'Spanish':
            return 'https://www.countryflags.com/wp-content/uploads/spain-flag-png-large.png';
        case 'Thai':
            return 'https://www.countryflags.com/wp-content/uploads/thailand-flag-png-xl.png';
        case 'Tunisian':
            return 'https://www.countryflags.com/wp-content/uploads/tunisia-flag-png-large.png';
        case 'Turkish':
            return 'https://www.countryflags.com/wp-content/uploads/turkey-flag-png-xl.png';
        case 'Ukrainian':
            return 'https://www.countryflags.com/wp-content/uploads/ukraine-flag-png-large.png';
        case 'Vietnamese':
            return 'https://www.countryflags.com/wp-content/uploads/vietnam-flag-png-large.png';


        default:
            return 'images/flag_5191557.png';
    }
}



async function getMealsByArea(area) {
    rowData.innerHTML=""
    $(".load").css("display", "flex").hide().fadeIn(1000);


    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`);
    const result = await response.json();
    let meals = result.meals;
    let content = '';

    for (let i = 0; i < meals.length; i++) {
        content += `
            <div class="col-md-3 mb-3 rounded-3">
                <div onclick="getMealDetailsById(${meals[i].idMeal})" class="position-relative box rounded-3">
                    <img src="${meals[i].strMealThumb}" alt="">
                    <div class="text position-absolute d-flex flex-coulmn p-2 align-items-center">
                    <h5>${meals[i].strMeal}</h5>
                </div>
                </div>
            </div>
        `;
    }

    $(".load").fadeOut(250)
    rowData.innerHTML = content;
    $(".sear").fadeOut(1000)
}
// showAria()

// let asideWidth = $("aside").outerWidth(true);
$(document).ready(function () {
    let asideWidth = $("aside").outerWidth(true);

    $("aside").css("left", -asideWidth + "px");
    $(".open").on("click", function () {
        if ($("aside").css("left") === "0px") {
            $("aside").css("left", -asideWidth + "px");
            $("ul li").css("transform", "translateY(320px)");
            $(this).removeClass("active");
        } else {
            $("aside").css("left", "0");
            $("ul li").css("transform", "translateY(0px)");
            $(this).addClass("active");
        }
    });

    $(".closes").on("click", function () {
        $("aside").css("left", -asideWidth + "px");
        $(".open").removeClass("active");
    });

    $("aside ul li").on("click", function () {
        $("aside").css("left", -asideWidth + "px");
        $(".open").removeClass("active");
    });
});


async function getIngred() {

    const api = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
    const result = await api.json();
    const meals = result.meals;
    let content = '';
    $(".load").css("display", "flex").hide().fadeIn(1000);

    for (let i = 0; i < meals.length; i++) {
        let description = meals[i].strDescription ? meals[i].strDescription.split(' ').slice(0, 15).join(' ') + " ..." : 'Description not available';
        content += `
            <div class="col-md-3 mb-3 rounded-3">
                <div onclick="getDesIngred(${meals[i].idIngredient})"  class="box rounded-3 text-white">
                <div class="text-center">   
                <i class="fa-solid fa-drumstick-bite fa-4x mb-2"></i>
                <h5>${meals[i].strIngredient}</h5>
                    <p>${description}</p>
                    </div>
                </div>
            </div>
        `;
    }

    $(".load").fadeOut(250)
    rowData.innerHTML = content;
    $(".sear").fadeOut(1000)
}

async function getDesIngred(id) {

    const api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${id}`);
    const result = await api.json();
    let meals = result.meals[0];
    $(".load").css("display", "flex").hide().fadeIn(1000);

    let content = '';

    for (let i = 0; i < meals.length; i++) {
        content += `
            <div class="col-md-3 mb-3 ">
                <div class="box rounded-3 position-relative">
                    <img src="${meals[i].strMealThumb}" alt="">
                    <div class="">   
                    <h5>${meals[i].strMeal}</h5>
                    </div>
                    </div>
            </div>
        `;
    }

    $(".load").fadeOut(250)
    rowData.innerHTML = content;
    $(".sear").fadeOut(1000)
}

// getIngred();









async function defult() {
    rowData.innerHTML=""
    $(".load").css("display", "flex").hide().fadeIn(1000);


    const api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`);
    const result = await api.json();
    const meals = result.meals;
    let content = '';

    for (let i = 0; i < meals.length; i++) {
        content += `
            <div class="col-md-3 mb-3 rounded-3">
                <div onclick="getDesDefult(${meals[i].idMeal})" class="position-relative box  rounded-3">
                    <img src="${meals[i].strMealThumb}" alt="">
                    <div class="text position-absolute d-flex flex-coulmn p-2 align-items-center"> 
                    <h5>${meals[i].strMeal}</h5>
                    </div>
                </div>
            </div>
        `;
    }

    $(".load").fadeOut(250)
    rowData.innerHTML = content;
    $(".sear").fadeOut(1000)
}

async function getDesDefult(idMeal) {
    rowData.innerHTML=""
    $(".load").css("display", "flex").hide().fadeIn(1000);


    const api = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
    const result = await api.json();
    const meal = result.meals[0];

    let content = `
        <div class="col-md-4">
            <div class="text-white">
                <img src="${meal.strMealThumb}" alt="">
                <h5>${meal.strMeal}</h5>
                
            </div>
            </div>

        <div class="col-md-8">
        <div class="text-white ">
        <h3>Instructions</h3>
        <p >${meal.strInstructions}</p>
        <h4 class="fw-bold">Area: <span class="fw-normal">${meal.strArea}</span></h4>
        <h4 class="fw-bold">Category: <span class="fw-normal">${meal.strCategory}</span></h4>
        <h4 class="fw-bold">Recipes:</h4>
        <div class="d-flex flex-wrap">
    ${meal.strMeasure1 && meal.strIngredient1 ? `<span class="p-2 rounded-3 bg-info bg-opacity-75 m-2">${meal.strMeasure1} ${meal.strIngredient1}</span>` : ''}
    ${meal.strMeasure2 && meal.strIngredient2 ? `<span class="p-2 rounded-3 bg-info bg-opacity-75 m-2">${meal.strMeasure2} ${meal.strIngredient2}</span>` : ''}
    ${meal.strMeasure3 && meal.strIngredient3 ? `<span class="p-2 rounded-3 bg-info bg-opacity-75 m-2">${meal.strMeasure3} ${meal.strIngredient3}</span>` : ''}
    ${meal.strMeasure4 && meal.strIngredient4 ? `<span class="p-2 rounded-3 bg-info bg-opacity-75 m-2">${meal.strMeasure4} ${meal.strIngredient4}</span>` : ''}
    ${meal.strMeasure5 && meal.strIngredient5 ? `<span class="p-2 rounded-3 bg-info bg-opacity-75 m-2">${meal.strMeasure5} ${meal.strIngredient5}</span>` : ''}
    ${meal.strMeasure6 && meal.strIngredient6 ? `<span class="p-2 rounded-3 bg-info bg-opacity-75 m-2">${meal.strMeasure6} ${meal.strIngredient6}</span>` : ''}
    ${meal.strMeasure7 && meal.strIngredient7 ? `<span class="p-2 rounded-3 bg-info bg-opacity-75 m-2">${meal.strMeasure7} ${meal.strIngredient7}</span>` : ''}
    ${meal.strMeasure8 && meal.strIngredient8 ? `<span class="p-2 rounded-3 bg-info bg-opacity-75 m-2">${meal.strMeasure8} ${meal.strIngredient8}</span>` : ''}
    ${meal.strMeasure9 && meal.strIngredient9 ? `<span class="p-2 rounded-3 bg-info bg-opacity-75 m-2">${meal.strMeasure9} ${meal.strIngredient9}</span>` : ''}
    ${meal.strMeasure10 && meal.strIngredient10 ? `<span class="p-2 rounded-3 bg-info bg-opacity-75 m-2">${meal.strMeasure10} ${meal.strIngredient10}</span>` : ''}
    ${meal.strMeasure11 && meal.strIngredient11 ? `<span class="p-2 rounded-3 bg-info bg-opacity-75 m-2">${meal.strMeasure11} ${meal.strIngredient11}</span>` : ''}
    ${meal.strMeasure12 && meal.strIngredient12 ? `<span class="p-2 rounded-3 bg-info bg-opacity-75 m-2">${meal.strMeasure12} ${meal.strIngredient12}</span>` : ''}
    ${meal.strMeasure13 && meal.strIngredient13 ? `<span class="p-2 rounded-3 bg-info bg-opacity-75 m-2">${meal.strMeasure13} ${meal.strIngredient13}</span>` : ''}
    ${meal.strMeasure14 && meal.strIngredient14 ? `<span class="p-2 rounded-3 bg-info bg-opacity-75 m-2">${meal.strMeasure14} ${meal.strIngredient14}</span>` : ''}
    ${meal.strMeasure15 && meal.strIngredient15 ? `<span class="p-2 rounded-3 bg-info bg-opacity-75 m-2">${meal.strMeasure15} ${meal.strIngredient15}</span>` : ''}
    ${meal.strMeasure16 && meal.strIngredient16 ? `<span class="p-2 rounded-3 bg-info bg-opacity-75 m-2">${meal.strMeasure16} ${meal.strIngredient16}</span>` : ''}
    ${meal.strMeasure17 && meal.strIngredient17 ? `<span class="p-2 rounded-3 bg-info bg-opacity-75 m-2">${meal.strMeasure17} ${meal.strIngredient17}</span>` : ''}
    ${meal.strMeasure18 && meal.strIngredient18 ? `<span class="p-2 rounded-3 bg-info bg-opacity-75 m-2">${meal.strMeasure18} ${meal.strIngredient18}</span>` : ''}
    ${meal.strMeasure19 && meal.strIngredient19 ? `<span class="p-2 rounded-3 bg-info bg-opacity-75 m-2">${meal.strMeasure19} ${meal.strIngredient19}</span>` : ''}
    ${meal.strMeasure20 && meal.strIngredient20 ? `<span class="p-2 rounded-3 bg-info bg-opacity-75 m-2">${meal.strMeasure20} ${meal.strIngredient20}</span>` : ''}
    
    </div>
    ${meal.strSource ? `<br><a target="_blank" href="${meal.strSource}" class="btn btn-success m-2">Source</a>` : ''}
    ${meal.strYoutube ? `<a target="_blank" href="${meal.strYoutube}" class="btn btn-danger">Youtube</a>` : ''}

                <button onclick="defult()" class="position-fixed fs-3 d-flex justify-content-center align-items-center back text-danger fw-bold">X</button>
        </div>
            </div>
    `;

    $(".load").fadeOut(250)
    rowData.innerHTML = content;
}

defult();
let check = false;
function validate(ele) {
    const regex = {
        inputAge: /^(0?[1-9]|[1-9][0-9])$/,
        inputMail: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        inputName: /^[A-Za-z\s.'!]+$/,
        inputPass: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
        inputPhone: /^\+(?:[0-9] ?){6,14}[0-9]$/
    };

    if (regex[ele.id].test($(ele).val())) {
        $(ele).addClass("is-valid").removeClass("is-invalid");
        $(ele).next().addClass("d-none").removeClass("d-block");
        check = true
    } else {
        $(ele).addClass("is-invalid").removeClass("is-valid");
        $(ele).next().addClass("d-block").removeClass("d-none");
        check = false
    }
}


function contact() {
    $(".load").css("display", "flex").hide().fadeIn(1000);

    let content = '';
    content += `
    <div class='container my-5 py-5 d-flex justify-content-center align-items-center vh-100'>
        <form action="" class="my-5 py-5">
            <div class=" my-2">
                <input oninput="validate(this)" id="inputName" class='form-control my-2' type="text" placeholder="Enter Your Name">
                <div class="alert alert-danger w-50 d-none">enter name valid</div>
                <input oninput="validate(this)" id="inputMail" class='form-control my-2' type="email" placeholder="Enter Your Email">
                <div class="alert alert-danger w-50 d-none">enter email-valid *ex@eg.co</div>
            </div>

            <div class=" my-2">
                <input oninput="validate(this)" id="inputPhone" class='form-control my-2' type="text" placeholder="Enter Your Phone">
                <div class="alert alert-danger w-50 d-none">enter a true number </div>
                <input oninput="validate(this)" id="inputAge" class='form-control my-2' type="number" placeholder="Enter Your Age">
                <div class="alert alert-danger w-50 d-none">enter a true age</div>
            </div>

            <div class=" my-2">
                <input oninput="validate(this)" id="inputPass" class='form-control my-2' type="password" placeholder="Enter Your Password">
                <div class="alert alert-danger w-50 d-none">Enter valid password *Minimum eight characters, at least one letter and one number</div>
                <input oninput="validate(this)" id="inputRePass" class='form-control my-2' type="password" placeholder="Re-enter Password">
                <div class="alert alert-danger w-50 d-none">Enter valid repassword</div>
            </div>
            <button id="submitBtn" class="btn btn-danger" disabled>Submit</button>
        </form>
    </div>
    `;

    $(".load").fadeOut(250)
    rowData.innerHTML = content;
    $(".sear").fadeOut(1000)

    const inputName = $("#inputName");
    const inputMail = $("#inputMail");
    const inputPhone = $("#inputPhone");
    const inputAge = $("#inputAge");
    const inputPass = $("#inputPass");
    const inputRePass = $("#inputRePass");
    const submitBtn = $("#submitBtn");

    $("form").on("input", function () {
        if (inputName.val() !== "" &&
            inputMail.val() !== "" &&
            inputPhone.val() !== "" &&
            inputAge.val() !== "" &&
            inputPass.val() !== "" &&
            inputRePass.val() !== "" &&
            inputPass.val() === inputRePass.val()
        ) {
            submitBtn.removeAttr("disabled");
        } else {
            submitBtn.attr("disabled", "disabled");
        }
    });

    submitBtn.on("click", function (event) {
        event.preventDefault();
        if (inputAge.val() == "" ||
            inputMail.val() == "" ||
            inputName.val() == "" ||
            inputPass.val() == "" ||
            inputPhone.val() == "" ||
            inputRePass.val() == "" ||
            check==false)
            {
            alert("Please fill in all fields.");
        } else {
            alert("Form submitted successfully!");
            $("input").removeClass("is-valid")
            $("form")[0].reset();
            submitBtn.attr("disabled", "disabled");
        }
    });
}


let row2 = document.querySelector(".search-results");

async function search() {
    $(".load").css("display", "flex").hide().fadeIn(1000);

    let searchQuery = document.getElementById("searchInput").value.trim();
    console.log(searchQuery);

    if (!searchQuery) {
        row2.innerHTML = `<h5 class="text-center">Please enter a search term</h5>`;
        return;
    }

    const api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`);
    const result = await api.json();
    let meals = result.meals;

    if (!meals) {
        row2.innerHTML = `<h5 class="text-center">No results found for "${searchQuery}"</h5>`;
        return;
    }

    let content = '';

    for (let i = 0; i < meals.length; i++) {
        content += `
            <div class="col-md-3 mb-3 rounded-3 details">
                <div onclick="getMealDetailsById(${meals[i].idMeal})">
                    <img src="${meals[i].strMealThumb}" alt="">
                    <h5>${meals[i].strMeal}</h5>
                </div>
            </div>
        `;
    }

    row2.innerHTML = content;
    $(".load").fadeOut(250)
}

async function getMealDetailsById(id) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    const data = await response.json();
    const meal = data.meals[0];
    $(".load").css("display", "flex").hide().fadeIn(1000);

    let content = `
    <div class="fixed-top bg-black row py-5  overflow-auto h-100 deta ms-auto col-11">
    
<div class="col-md-4">
<div class="text-white">
    <img src="${meal.strMealThumb}" alt="">
    <h5>${meal.strMeal}</h5>
    
</div>
</div>

<div class="col-md-8">
<div class="text-white ">
<h3>Instructions</h3>
<p >${meal.strInstructions}</p>
<h4 class="fw-bold">Area: <span class="fw-normal">${meal.strArea}</span></h4>
<h4 class="fw-bold">Category: <span class="fw-normal">${meal.strCategory}</span></h4>
<h4 class="fw-bold">Recipes:</h4>
<div class="d-flex flex-wrap">
${meal.strMeasure1 && meal.strIngredient1 ? `<span class="p-2 rounded-3 bg-info bg-opacity-75 m-2">${meal.strMeasure1} ${meal.strIngredient1}</span>` : ''}
${meal.strMeasure2 && meal.strIngredient2 ? `<span class="p-2 rounded-3 bg-info bg-opacity-75 m-2">${meal.strMeasure2} ${meal.strIngredient2}</span>` : ''}
${meal.strMeasure3 && meal.strIngredient3 ? `<span class="p-2 rounded-3 bg-info bg-opacity-75 m-2">${meal.strMeasure3} ${meal.strIngredient3}</span>` : ''}
${meal.strMeasure4 && meal.strIngredient4 ? `<span class="p-2 rounded-3 bg-info bg-opacity-75 m-2">${meal.strMeasure4} ${meal.strIngredient4}</span>` : ''}
${meal.strMeasure5 && meal.strIngredient5 ? `<span class="p-2 rounded-3 bg-info bg-opacity-75 m-2">${meal.strMeasure5} ${meal.strIngredient5}</span>` : ''}
${meal.strMeasure6 && meal.strIngredient6 ? `<span class="p-2 rounded-3 bg-info bg-opacity-75 m-2">${meal.strMeasure6} ${meal.strIngredient6}</span>` : ''}
${meal.strMeasure7 && meal.strIngredient7 ? `<span class="p-2 rounded-3 bg-info bg-opacity-75 m-2">${meal.strMeasure7} ${meal.strIngredient7}</span>` : ''}
${meal.strMeasure8 && meal.strIngredient8 ? `<span class="p-2 rounded-3 bg-info bg-opacity-75 m-2">${meal.strMeasure8} ${meal.strIngredient8}</span>` : ''}
${meal.strMeasure9 && meal.strIngredient9 ? `<span class="p-2 rounded-3 bg-info bg-opacity-75 m-2">${meal.strMeasure9} ${meal.strIngredient9}</span>` : ''}
${meal.strMeasure10 && meal.strIngredient10 ? `<span class="p-2 rounded-3 bg-info bg-opacity-75 m-2">${meal.strMeasure10} ${meal.strIngredient10}</span>` : ''}
${meal.strMeasure11 && meal.strIngredient11 ? `<span class="p-2 rounded-3 bg-info bg-opacity-75 m-2">${meal.strMeasure11} ${meal.strIngredient11}</span>` : ''}
${meal.strMeasure12 && meal.strIngredient12 ? `<span class="p-2 rounded-3 bg-info bg-opacity-75 m-2">${meal.strMeasure12} ${meal.strIngredient12}</span>` : ''}
${meal.strMeasure13 && meal.strIngredient13 ? `<span class="p-2 rounded-3 bg-info bg-opacity-75 m-2">${meal.strMeasure13} ${meal.strIngredient13}</span>` : ''}
${meal.strMeasure14 && meal.strIngredient14 ? `<span class="p-2 rounded-3 bg-info bg-opacity-75 m-2">${meal.strMeasure14} ${meal.strIngredient14}</span>` : ''}
${meal.strMeasure15 && meal.strIngredient15 ? `<span class="p-2 rounded-3 bg-info bg-opacity-75 m-2">${meal.strMeasure15} ${meal.strIngredient15}</span>` : ''}
${meal.strMeasure16 && meal.strIngredient16 ? `<span class="p-2 rounded-3 bg-info bg-opacity-75 m-2">${meal.strMeasure16} ${meal.strIngredient16}</span>` : ''}
${meal.strMeasure17 && meal.strIngredient17 ? `<span class="p-2 rounded-3 bg-info bg-opacity-75 m-2">${meal.strMeasure17} ${meal.strIngredient17}</span>` : ''}
${meal.strMeasure18 && meal.strIngredient18 ? `<span class="p-2 rounded-3 bg-info bg-opacity-75 m-2">${meal.strMeasure18} ${meal.strIngredient18}</span>` : ''}
${meal.strMeasure19 && meal.strIngredient19 ? `<span class="p-2 rounded-3 bg-info bg-opacity-75 m-2">${meal.strMeasure19} ${meal.strIngredient19}</span>` : ''}
${meal.strMeasure20 && meal.strIngredient20 ? `<span class="p-2 rounded-3 bg-info bg-opacity-75 m-2">${meal.strMeasure20} ${meal.strIngredient20}</span>` : ''}
${meal.strSource ? `<br><a target="_blank" href="${meal.strSource}" class="btn btn-success m-2">Source</a>` : ''}
${meal.strYoutube ? `<a target="_blank" href="${meal.strYoutube}" class="btn btn-danger m-2">Youtube</a>` : ''}

</div>

    <button onclick="showAria()" class="position-fixed fs-3 d-flex justify-content-center align-items-center back text-danger fw-bold">X</button>
</div>
</div>
</div>
    </div>
    </div>
    `;
    $(".deta").css("visibility", "visible")
    
    row2.innerHTML = content;
    $(".load").fadeOut(250)
}

function closeDetails() {
    $(".meal-details, .details").fadeOut(1000, function () {
        getCategory();
    });
}
function displaySearch() {
    $(".sear").fadeIn(1000)
    rowData.innerHTML = ""
}
let humyOffcet = $(".humy").outerWidth(true)

$("section .container .row").css("marginLeft", humyOffcet + "px")
// $(".deta").css("left", humyOffcet + "px")

$("ul li").on("click",function(){
    $("ul li").removeClass("active");
    $(this).addClass("active")
})
