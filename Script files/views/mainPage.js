function mainPageView(){
    model.app.currentPage = 'mainPage';
    document.getElementById("app").innerHTML = /*HTML*/`
    <div class="topContainer">
    <h1>Welcome to your personal Library</h1>
    ${mainButtons()}
    </div>
    <br/>
    <br/>
    <div class="bookListsContainer">
    <br/>
    <br/>
    ${currentReadingMain()}
    <br/>
    ${showToBeRead()}
    <br/>
    ${topRateMain10Days()}
    <br/>
    ${topRatedMain()}
    </div>
    <br/>
    <br/>

    `;
}


function mainButtons(){
return `   <div class="leftButtonTop">
                <div class="ButtonDiv" onclick= "mainLibraryView()">Your Library</div>
            </div>
           
            <div class="RightButtonTop">
                <div class="ButtonDiv" onclick= "mainBrowseView()">Browse New Books</div>
            </div>`;
}

function currentReadingMain(){
        //Funksjonen for listen av bøker du leser akkurat nå
    return `
    <h3>Currently reading</h3>
    <div class="mainPageBookContainer">
        ${drawReading()}
    </div>
    `;
}

function drawReading(){
    let html = '';
    for (let i = 0; i< model.data.currentlyReadingList.length; i++){
        html += `${drawABook(model.data.currentlyReadingList[i])}`
        }
        return html;
}

function showToBeRead(){
        //Funksjon som viser randome bøker fra ditt biblotek som et neste read.
    return /*Html*/`
    <h3>Your next read</h3>
    <div class="mainPageBookContainer">
        ${drawToBeRead()}
    </div>
    `;
}

function drawToBeRead(){
    let html = '';
    for (let i = 0 ; i< model.data.toBeReadList.length; i++){
        html += `${drawABook(model.data.toBeReadList[i])}`
    }
    return html;
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