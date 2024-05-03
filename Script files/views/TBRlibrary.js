function tbrLibraryView(){
    model.app.currentPage = 'tbrLibrary';
    document.getElementById("app").innerHTML = /*HTML*/`
    <div class="topContainer">
    <h1>Here is your Library</h1>
    ${drawTBR()}
    </div>
    <div class="bookListsLibraryContainer">
    <h2>Your To be read:</h2>
    <div class="allBookContainer">

    ${drawTBRBooks()}

    </div>
    </div>
    `;
}


function drawTBR(){
    return `   <div class="leftButtonTop">
                    <div class="ButtonDiv" onclick= "mainPageView()">Main Page</div>
                </div>
               
                <div class="RightButtonTop">
                    <div class="ButtonDiv" onclick= "mainBrowseView()">Browse New Books</div>
                </div>
                </div>

                <div class="libraryButtonContainer">
                <div class="libraryButton" onclick="currentReadLibraryView()">Currently reading</div>
                <div class="libraryButton activeButton" onclick= "mainLibraryView()">Back to Library</div>
                <div class="libraryButton" onclick="finishedLibraryView()">Finished</div>
                </div>
                
                
                `;
}


function drawTBRBooks(){
    let html = '';
    for (let i= 0; i<model.data.toBeReadList.length; i++){
        html += `${drawABookInLibrary(model.data.toBeReadList[i])}`
    }
    return html
}