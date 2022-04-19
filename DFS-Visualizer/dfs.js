async function dfs(r, c, previousRowColObj = {}, previousCounter = "0") {
    console.groupEnd();
    console.group("🟡 dfs", { r, c });

    if (r < 0 || c < 0 || r === rowTotal || c === colTotal) {
        console.log("🔴 Out of range");
        return;
    }

    const currentCell = document.getElementById(`cell-${r}-${c}`);

    if (currentCell.classList.contains("visited")) {
        // Already visited, return to avoid any infinite loop
        console.log("🔵 Already visited");
        return;
    }

    const currentCounter = updateVisit(
        currentCell,
        previousRowColObj,
        previousCounter
    );

    currentCell.classList.add("arrived");

    await sleepTimer();

    currentCell.classList.remove("arrived");
    currentCell.classList.add("visited");
    console.log("🟢 Marked visited");

    currentCell.dataset["currentCounter"] = currentCounter;
    currentCell.dataset[
        "parentRowCol"
    ] = `cell-${previousRowColObj.r}-${previousRowColObj.c}`;

    await dfs(r - 1, c, { r, c }, currentCounter);

    await dfs(r, c + 1, { r, c }, currentCounter);

    await dfs(r + 1, c, { r, c }, currentCounter);

    await dfs(r, c - 1, { r, c }, currentCounter);

    return "✅ Done...!!";
}
