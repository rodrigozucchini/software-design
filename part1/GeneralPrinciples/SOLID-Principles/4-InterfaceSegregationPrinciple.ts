// Interface Segregation Principle (ISP)

// BAD EXAMPLE
// A fat interface forces classes to implement methods they don't need
/*
interface Worker {
    work(): void;
    eat(): void;
    sleep(): void;
}

class HumanWorker implements Worker {
    work(): void {
        console.log("Human is working");
    }

    eat(): void {
        console.log("Human is eating");
    }

    sleep(): void {
        console.log("Human is sleeping");
    }
}

class RobotWorker implements Worker {
    work(): void {
        console.log("Robot is working");
    }

    eat(): void {
        // Robots do not eat
        throw new Error("Robot does not eat");
    }

    sleep(): void {
        // Robots do not sleep
        throw new Error("Robot does not sleep");
    }
}

*/

// GOOD EXAMPLE
// Small and focused interfaces

interface Workable {
    work(): void;
}

interface Eatable {
    eat(): void;
}

interface Sleepable {
    sleep(): void;
}

class HumanWorker implements Workable, Eatable, Sleepable {
    work(): void {
        console.log("Human is working");
    }

    eat(): void {
        console.log("Human is eating");
    }

    sleep(): void {
        console.log("Human is sleeping");
    }
}

class RobotWorker implements Workable {
    work(): void {
        console.log("Robot is working");
    }
}