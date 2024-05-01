mainPageView()
function mainPageView(){
    model.app.currentPage = 'mainPage';
    document.getElementById("app").innerHTML = /*HTML*/`
    <div class="topContainer">
    ${mainButtons()}
    </div>
    <div class="bookListsContainer">
    ${currentReadingMain()}
    <br/>
    ${topRateMain10Days()}
    <br/>
    ${topRatedMain()}
    </div>

    `;
}


function mainButtons(){
return `   <div class="leftButtonTop">
                <div class="ButtonDiv" onclick= "">Your Library</div>
            </div>
            <h1>Welcome to your personal Library</h1>
            <div class="RightButtonTop">
                <div class="ButtonDiv" onclick= "">Browse New Books</div>
            </div>`;
}

function currentReadingMain(){
        //Funksjonen for listen av bøker du leser akkurat nå
    return `
    <h3>Currently reading</h3>
    <div class="mainPageBookContainer">

    </div>
    `;
}

function topRateMain10Days(){
        //Funksjon for top rated the last 10 days
    return `
    <h3>Top rated books last 10 days</h3>
    <div class="mainPageBookContainer">
    
    </div>
    `;
}

function topRatedMain(){
        //Funksjonen for top rated books
    return `
    <h3>Top rated books</h3>
    <div class="mainPageBookContainer">
    
    </div>
    `;
}