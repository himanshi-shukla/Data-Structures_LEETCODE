let timerArrRef = [];

function sleepTimer(r, c, delayMs = delayMsDefault) {
    return new Promise((resolve) => {
        const timerRef = setTimeout(() => {
            // console.log("sleeping completed for ", { r, c });
            // resolve(`resolved ${param}`);
            console.log("=============💤💤💤💤💤=================");
            resolve({ r, c });
        }, delayMs);

        timerArrRef.push(timerRef);
    });
}

function handleCellClick(e) {
    console.log(">>>> 🔥   e.currentTarget", e.target);
    const selectedEl = e.target;

    if (counter !== 1) {
        console.log("Please reset the grid");
        return;
    }

    console.log("starting program : ", { delayMsDefault, rowTotal, colTotal });

    if (selectedEl.classList.contains("cell")) {
        const currentRow = Number(selectedEl.getAttribute("id").split("-")[1]);
        const currentCol = Number(selectedEl.getAttribute("id").split("-")[2]);

        if (typeof dfs !== "undefined") {
            dfs(currentRow, currentCol).then((res) => {
                console.log(res);
            });
        }

        if (typeof bfs !== "undefined") {
            bfs(currentRow, currentCol).then((res) => {
                console.log(res);
            });
        }
    }
}

function handleCellHover(e) {
    console.log(">>>> 🔥   handleCellHover");
}

document.addEventListener("click", handleCellClick);
// root.addEventListener("mouseenter", handleCellHover);

function handleCommonFormInputUpdate(e) {
    rowTotal = Number(document.getElementById("totalRows").value);
    colTotal = Number(document.getElementById("totalCols").value);
    delayMsDefault = Number(document.getElementById("animationSpeed").value);
    isDebugMode = document.getElementById("isDebugMode").checked;

    timerArrRef.forEach((timerRef) => {
        clearTimeout(timerRef);
    });

    timerArrRef = [];

    root.innerHTML = "";
    counter = 1;
    createGrid(rowTotal, colTotal);
}

document.getElementById("inputForm").addEventListener("submit", (e) => {
    e.preventDefault();

    handleCommonFormInputUpdate(e);
});

document.getElementById("isDebugMode").addEventListener("click", (e) => {
    handleCommonFormInputUpdate();
});
