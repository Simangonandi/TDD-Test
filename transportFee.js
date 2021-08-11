function transportFee(shift) {
        if (shift.startWith('m'))
        {return 'R20';}
        else if (shift.startWith('a'))
        {return 'R10';}
        else if (shift.startWith('n'))
        {return 'free';}
}