class TwoSum {
    constructor() {
        this.tracker = new Map();
    }
    add(val) {
        this.tracker.set(val, this.tracker.get(val) + 1 || 1);
    }

    findValue(sum) {
        for (const val of this.tracker.keys()) {
            let compliment = sum - val;
            if (compliment === val) {
                if (this.tracker.get(val) > 1) return true;
                else
                    continue;
            }
            else if (
                this.tracker.has(compliment)) return true;
        }
        return false;
    }
}

const twoSum = new TwoSum();
twoSum.add(1);
twoSum.add(3);
twoSum.add(5);
twoSum.add(4);

twoSum.findValue(4);
twoSum.findValue(7);


console.log("result", twoSum);
console.log('Is two sum possible ?', twoSum.findValue(4));
console.log('Is two sum possible now ?', twoSum.findValue(7));