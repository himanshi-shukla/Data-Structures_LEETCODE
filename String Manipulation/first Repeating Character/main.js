function firstRep(s) {
    map = new Map();
    let c = '#';
    let index = Number.MAX_SAFE_INTEGER;

    // single traversal of string.
    for (let i = 0; i < s.length; i++) {
        let p = s[i];

        if (!map.has(p)) map.set(p, i);
        else {
            if (map.get(p) < index) {
                index = map.get(p);
                c = p;
            }
        }
    }
    return c;
}