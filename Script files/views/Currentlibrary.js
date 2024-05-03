function currentReadLibraryView(){
    model.app.currentPage = 'currentLibrary';
    document.getElementById("app").innerHTML = /*HTML*/`
    <div class="topContainer">
    <h1>Here is your Library</h1>
    ${drawCurrentRead()}
    </div>
    <div class="bookListsLibraryContainer">
    <h2>Your currently reading:</h2>
    <div class="allBookContainer">

    ${drawCurrentBooks()}

    </div>
    </div>
    `;
}


function drawCurrentRead(){
    return `   <div class="leftButtonTop">
                    <div class="ButtonDiv" onclick= "mainPageView()">Main Page</div>
                </div>
               
                <div class="RightButtonTop">
                    <div class="ButtonDiv" onclick= "mainBrowseView()">Browse New Books</div>
                </div>
                </div>

                <div class="libraryButtonContainer">
                <div class="libraryButton activeButton" onclick="mainLibraryView()">Back to Library</div>
                <div class="libraryButton" onclick="tbrLibraryView()">To be Read</div>
                <div class="libraryButton" onclick="finishedLibraryView()">Finished</div>
                </div>
                
                
                `;
}

function drawCurrentBooks(){
    let html = '';
    for (let i= 0; i<model.data.currentlyReadingList.length; i++){
        html += `${drawABookInLibrary(model.data.currentlyReadingList[i])}`
    }
    return html
}