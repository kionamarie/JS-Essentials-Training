/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const bonsai = {
    name: "Napalm",
    height: 1.5,
    vaseType: "ceramic",
    health: {
        hydration: true,
        deadLeaves: false,
    },
    watered: false,
    toggleWatered: function (wateredStatus){
        this.watered = wateredStatus;
    }
}

console.log("My bonsai's name is", bonsai.name);
console.log("His height is", bonsai.height);
console.log("His vase is grey, and it is", bonsai.vaseType);
console.log("If you were to ask me if he was hydrated, I would say", bonsai.health.hydration);
console.log("Does", bonsai.name, "have dead leaves?");
console.log(bonsai.health.deadLeaves);
 
