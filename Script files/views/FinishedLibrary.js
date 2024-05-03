function finishedLibraryView(){
    model.app.currentPage = 'finishedLibrary';
    document.getElementById("app").innerHTML = /*HTML*/`
    <div class="topContainer">
    <h1>Welcome to your personal Library</h1>
    ${drawFinished()}
    </div>
    <div class="bookListsLibraryContainer">
    <h2>Your finished books:</h2>
    <div class="allBookContainer">

    ${drawFinishedBooks()}

    </div>
    </div>
    `;
}


function drawFinished(){
    return `   <div class="leftButtonTop">
                    <div class="ButtonDiv" onclick= "mainPageView()">Main Page</div>
                </div>
               
                <div class="RightButtonTop">
                    <div class="ButtonDiv" onclick= "mainBrowseView()">Browse New Books</div>
                </div>
                </div>

                <div class="libraryButtonContainer">
                <div class="libraryButton" onclick="currentReadLibraryView()">Currently reading</div>
                <div class="libraryButton" onclick="tbrLibraryView()">To be Read</div>
                <div class="libraryButton activeButton" onclick= "mainLibraryView()">Back to Library</div>
                </div>
                Bya 
                
                `;
}

function drawFinishedBooks(){
    let html = '';
    for (let i= 0; i<model.data.finishedReading.length; i++){
        html += `${drawABookInLibrary(model.data.finishedReading[i])}`
    }
    return html
}