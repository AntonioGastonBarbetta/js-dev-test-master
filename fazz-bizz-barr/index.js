
 export function FazzBizzBarr (Num) {

        var Word = ""

        if (Num%3 === 0){
            Word = "Fazz";
        }

        if (Num%5 === 0){
            Word += "Bizz";
        }

        if (Num%7 ===0){
            Word += "Barr";
        }

        if(Word){
            
            return Word;
        
        } else{

            return Num;
        }



}


