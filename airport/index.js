var DataBase = [{"hour": 1, "minute": 25}, 
                {"hour": 4, "minute": 5},
                {"hour": 0, "minute": 10},
                {"hour": 0, "minute": 31},
                {"hour": 0, "minute": 52},
                {"hour": 5, "minute": 51}];


export class Scheduler {


    // returns true if there’s room to schedule at ‘time’
    CouldScheduleAt (Hour, Min){
        var MaxMininute;
        var MinMininute;
        var MaxHour;
        var MinHour;
        var DataBaseHourMax;
        var DataBaseHourMin;
        var DataBaseMinuteMax;
        var DataBaseMinuteMin;
        var i;
        
        if (Min>49){
            MaxMininute = -(50 - Min);
            MaxHour = Hour + 1;
        } else {
            MaxMininute = Min + 10;
            MaxHour = Hour;
        }

        if (Min<10){
            MinMininute = 50 + Min;
            MinHour = Hour - 1;

        } else {
            MinMininute = Min - 10;
            MinHour = Hour
        }


        for(i = 0; i<DataBase.length; i++){

            if (DataBase[i].minute>49){
                DataBaseMinuteMax = -(50 - DataBase[i].minute);
                DataBaseHourMax = DataBase[i].hour + 1;
            } else {
                DataBaseMinuteMax = DataBase[i].minute + 10;
                DataBaseHourMax =  DataBase[i].hour;
            }
    
            if (DataBase[i].minute<10){
                DataBaseMinuteMin = 50 + DataBase[i].minute;
                DataBaseHourMin = DataBase[i].hour - 1;
    
            } else {
                DataBaseMinuteMin = DataBase[i].minute - 10;
                DataBaseHourMin = DataBase[i].hour
            }

            
            if (MaxHour  === DataBaseHourMax && MaxHour  === DataBaseHourMin){
             
                if (MaxMininute  <= DataBaseMinuteMax && MaxMininute  >= DataBaseMinuteMin){

                    return false;
                }

                if (MinMininute  <= DataBaseMinuteMax && MinMininute  >= DataBaseMinuteMin){

                    return false;
                }

            
                
            }
            
            if (MaxHour  === DataBaseHourMax && MinHour  === DataBaseHourMin && MaxHour != MinHour) {
                
                    return false;

            }
            
            

            if (MaxHour === DataBaseHourMin && MaxMininute >= DataBaseMinuteMin && MinHour === MaxHour && DataBaseHourMin != DataBaseHourMax) {

                
                    return false;

            }

            if (MinHour === DataBaseHourMax && MinMininute <= DataBaseMinuteMax && MinHour === MaxHour && DataBaseHourMin != DataBaseHourMax) {
                
                    return false;

            }


        }

        return true;
    }
        

    // returns true if we successfully scheduled
    ScheduleAt(Hour, Min){
        if (this.CouldScheduleAt(Hour, Min)){

    
            DataBase.push( 
                {
                    "hour": Hour,
                    "minute": Min,
                }
            );


            return true;
            

        } else {

            return false;
        }
    }


    // Choose an available time to schedule at, and return that time
    Schedule(){
        var Hour;
        var Min;

        for(Hour = 0; Hour<24; Hour++){
            
            for(Min = 0; Min<60; Min++){


                if (this.CouldScheduleAt(Hour, Min)){

                    return  {"Hour": Hour, "Minute": Min};
                }
            

            }   

        } 
        
    }


    // returns true if we successfully  something
    UnscheduleAt(Hour, Min){

        var i;

        for(i = 0; i<DataBase.length; i++){
        
            if (Hour === DataBase[i].hour && Min === DataBase[i].minute){

                DataBase.splice(i, 1);


                return true;


            } else {

                return false;
            }


        
        }

    }

}



