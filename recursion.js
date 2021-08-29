
function factorialRecursive(number) {
    if(number < 2){
        return 1;
    }

    return number * factorialRecursive(number - 1);
}

