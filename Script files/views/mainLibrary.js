function mainLibraryView(){
    model.app.currentPage = 'mainLibrary';
    document.getElementById("app").innerHTML = /*HTML*/`
    <div class="topContainer">
    <h1>Here is your Library</h1>
    ${mainLibraryButtons()}
    </div>
    <div class="bookListsLibraryContainer"></div>
    <Div class="allBookContainer">
    
    ${drawAllBooks()}
    
    </div>
    </div>
    `;
}

function mainLibraryButtons(){
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
                <div class="libraryButton" onclick="finishedLibraryView()">Finished</div>
                </div>
                
                
                
                `;
                
    }


function drawAllBooks(){
    let html= '';
    for (let i= 0; i<model.data.myLibrary.length; i++){
        html += `${drawABookInLibrary(model.data.myLibrary[i])}`
    }
    return html;
}

