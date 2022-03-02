const root = document.getElementById("root");

let rowTotal = Number(document.getElementById("totalRows").value) || 10;
let colTotal = Number(document.getElementById("totalCols").value) || 10;
let delayMsDefault =
    Number(document.getElementById("animationSpeed").value) || 100;

let counter = 1;

let isDebugMode = document.getElementById("isDebugMode").checked;

function createRow(rowId) {
    const rowEl = document.createElement("div");
    rowEl.className = "row flex";
    rowEl.setAttribute("id", `row-${rowId}`);
    root.append(rowEl);

    return rowEl;
}

function createCol(colId, currentRow) {
    const colEl = document.createElement("div");
    colEl.classList.add("col");
    colEl.setAttribute("id", `col-${colId}`);
    currentRow.append(colEl);

    return colEl;
}

function createCell(currentCol, rowId, colId) {
    const cellEl = document.createElement("div");
    cellEl.classList.add("cell");

    cellEl.setAttribute("id", `cell-${rowId}-${colId}`);

    if (isDebugMode) {
        cellEl.classList.add("debug");

        const cellCounterEl = document.createElement("span");
        cellCounterEl.className = "update-sequence";
        cellCounterEl.textContent = "-";

        cellEl.append(cellCounterEl);

        const cellIndexEl = document.createElement("span");
        cellIndexEl.textContent = `${rowId},${colId}`;
        cellIndexEl.className = "index-row-col";

        cellEl.append(cellIndexEl);
    }

    currentCol.append(cellEl);

    return cellEl;
}

function createGrid(rows, cols) {
    for (let r = 0; r < rows; r++) {
        const currentRow = createRow(r);

        for (let c = 0; c < cols; c++) {
            const currentCol = createCol(c, currentRow);
            createCell(currentCol, r, c);
        }
    }
}

createGrid(rowTotal, colTotal);

function updateVisit(currentCell, _, previousCounter) {
    if (isDebugMode) {
        currentCell.children[0].textContent = `${counter} ⬅️ ${previousCounter}`;
        return counter++;
    }
}