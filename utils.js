//ex4
export const greet = (name, Boolean) =>{
    if (Boolean === true) {
        return `Good evening, ${name}`;
    }   else{
        return `Hi,${name}`;
    }
};

//ex5
export const calculate = (x,y,math = "") =>{
    if (math == 'add') {
        return x + y;
    } else if (math == 'multiply') {
        return x * y; 
    }   else if (math == 'subtract') {
        return x - y; 
    } else if (math == 'divide') {
        return x / y; 
    } 
};

export const calculateSwitch = (x,y,math = "") =>{
    switch (math) {
        case 'add':
            return x + y;
            break;
        case 'subtract':
            return x - y;
            break;
        case 'multiply':
            return x * y;
            break;
        default:
            return x / y;
            break;
    }

};

