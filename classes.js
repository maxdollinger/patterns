/*
A pattern that allows to have "private" variables and functions and behaves like a traditional Class.
Without using Class or ES2019 Features.
 */

function ClassLikePrivateVars(arg) {

    function Class(arg) {
        //Set privat Variables
        let privateVar = arg || 'Default';

        // define getters and setters
        const getVarOne =  () => varPrivate;
        const setVarOne = (value) => {
            //do some checking and converting here
            varOne = value};

        //a private function
        function somePrivateFunction() {
            //do some stuff
        }

        //exposed function
        function somePublicFunction() {
            //do some stuff
        }

        //everything that should be accessible should be return
        return {
            getVarOne,
            setVarOne,
            somePrivateFunction
        };
    }

    // returns a new Class Object and prevents it from being altered.
    return Object.freeze(new Class(arg));
}

const ClassObject = ClassLikePrivateVars();

// Using latest JS features. Can be combined with a wrapper that returns an frozen object like above
class Class {
    //setting class variables
    #privateVar = 'variable can only be accessed inside the class';
    publicVar = 'variable can be accessed publicly';

    //Same for functions
    #privateFunction = (arg) => {
        console.log(arg + ' can only be accessed from inside the class');
    }

    setPrivateVar(arg) {
        this.#privateVar = arg;
    }

    getPrivateVar() {
        return this.#privateVar;
    }
}

const ClassObjectNewestFeatures = new Class();
