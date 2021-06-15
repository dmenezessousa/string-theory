let greed = 'helloo?.';
// `xify`==================================================================================================================

function replace(str){
    let xxx = '';
    for( const char of str){ 
        xxx +='x';
    }
    return xxx;
}
console.log(replace(greed));
console.log();

//  `yellingChars`=========================================================================================================

function replace2(str){
    let xxx = '';
    for( const char of str){ 
        xxx += char +'!';
    }
    return xxx;
}
console.log(replace2(greed));
console.log();

//`indexedChars`=============================================================================================================

function replace3(str){
    let xxx = '';
    let index = 0;
    for( const char of str){ 
        xxx += (index++)  + char ;
    }
    return xxx;
}
console.log(replace3(greed));
console.log();

//numberedChars =============================================================================================================

function replace4(str){
    let xxx = '';
    let number = 1;
    for( const char of str){ 
        xxx +=  (number++) + char ;
    }
    return xxx;
}
console.log(replace4(greed));
console.log();

//exclaim =================================================================================================================
function replace5(str){
    let xxx = '';
    for(const char of str){ 
        if(char === '?' || char === '.'){
            xxx += '!';
        }
        else{
            xxx += char;
        }
    }
    return xxx;
}
console.log(replace5(greed));
console.log();

//`repeatIt` =============================================================================================================
function repeat(s, n){
    let a = [];
    while(a.length < n){
        a.push(s);
    }
    return a.join('');
}
console.log(repeat('Hello!!',3));
console.log();

//`truncate` =============================================================================================================

function short(str){
    let xxx = '';
    for(const char of str){ 
        if(char === '?' || char === '.'){
            xxx += '!';
        }
        else{
            xxx += char;
        }
    }
    return xxx;
}
console.log(short(greed));
console.log();

//`ciEmailify`===========================================================================================================
function ciEmailify(str){
    let xxx = '';
    for(const char of str){ 
        if(char === ' '){
            xxx += '.';
        }
        else{ 
            xxx += char;
        }
    }
    xxx += '@codeimmersives.com';
    return xxx.toLowerCase();
}
console.log(ciEmailify('Diego Sousa'));
console.log();
//`reverse`==============================================================================================================
function reverse(str){
    let xxx = '';
    for(let i = str.length - 1; i >= 0; i--){ 
        xxx += str[i];
    }
    return xxx;
}
console.log(reverse(greed));
console.log();
//`onlyVowels` ==========================================================================================================
function onlyVowels(str){
    let xxx = '';
    let vowels = 'aeiou';
    for(const char of str){
        if(vowels.indexOf(char) !== -1){
            xxx += char;
        }    
    }
    return xxx;
}
console.log(onlyVowels(greed));
console.log();
//`crazyCase` ============================================================================================================
function crazyCase(str){
    let xxx = '';
    let upper = false;
    for(const char of str){
        if(upper){
        xxx += char.toUpperCase();
        upper = false;
    }else{
        xxx += char.toLowerCase();
        upper = true;
    }
}
    return xxx;
}
console.log(crazyCase(greed));
console.log();
//`titleCase` ==============================================================================================================
function titleCase(str){
    let xxx = '';
    let upCase = true;
    for ( const char of str){
        const isSpace = char === ' ';
        if(upCase){
            xxx += char.toUpperCase();
            upCase = false;
        }else{
            xxx += char.toLowerCase();
            upCase = false;
        }
        if(isSpace){
            upCase = true;
        }
    }
    return xxx;
}
console.log(titleCase('return of the king'));
//`camelCase` =================================================================================================================

//`crazyCase2ReturnOfCrazyCase` ===============================================================================================

function crazyCase2ReturnOfCrazyCase(String){
    let xxx = '';
    let count = 0;

    for (const char of String){
        if (char !== ' '){
            count++;
        }
        if(count % 2 === 0){
            xxx += char.toUpperCase();
        }else{
            xxx += char.toLowerCase();
        }
    }
    return xxx;
}
console.log(crazyCase2ReturnOfCrazyCase('return of the king'));

