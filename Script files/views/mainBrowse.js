function mainBrowseView(){
    model.app.currentPage = 'mainBrowse';
    document.getElementById("app").innerHTML = /*HTML*/`
    <div class="topContainer">
    <h1>Welcome to your personal Library</h1>
    ${mainBrowseButtons()}
    </div>
    <div class="browseContainer"></div>


    </div>
    `;
}

function mainBrowseButtons(){
    return `   <div class="leftButtonTop">
                    <div class="ButtonDiv" onclick= "mainLibraryView()">Your Library</div>
                </div>
               
                <div class="RightButtonTop">
                    <div class="ButtonDiv" onclick= "mainPageView()">Main Page</div>
                </div>
                
                
                `;
    }