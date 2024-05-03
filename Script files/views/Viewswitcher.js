function viewSwitcher(){
    let currentPage = model.app.currentPage;
    if (currentPage == 'mainPage') mainPageView();
    if (currentPage == 'mainLibrary') mainLibraryView();
    if (currentPage == 'mainBrowse') mainBrowseView();
    if (currentPage == 'currentLibrary') currentReadLibraryView();
    if (currentPage == 'tbrLibrary') tbrLibraryView();
    if (currentPage == 'finishedLibrary') finishedLibraryView();
    if (currentPage == 'choosenView') ChosenPage();
    if (currentPage == 'choosenView') ChosenPage();
    if (currentPage == 'choosenView') ChosenPage();
}