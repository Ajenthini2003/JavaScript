/*
Bitwise operators:
1.Bitwise AND(&)
2.Bitwise OR(|)
3.Bitwise NOT(~)
4.Bitwise XOR(^)
5.Left shipt(<<)
6.Right shift(>>)
7.Unsigned right shift
*/ 

//&                                    method
let a=12;  //1100                      0000 1100                1      0        0         0
let b=24;  //11000                     0001 1000              2^3*1   2^2*0    2^1*0    2^0*0
console.log(a&b)      //              -----------             8       0        0        0
                      //               0000 1000             ---------------------------------
                      //                                                    8


 //&= 
 a&=b;
 console.log(a)  

 // |                                   method             
 a=12;                            //    0000 1100            1       1         1       0        0
 b=24;                            //    0001 1000         2^4*1     2^3*1   2^2*1    2^1*0    2^0*0
 console.log(a|b);                //    -----------      -------------------------------------------
                                  //    0001 1100           16        8       4        0        0
                                  //                            total:28
// |=   
a|=b;
console.log(a);

//~                                        ~a=-a-1
a=25;
console.log(~a);

//^
a=2;          //10
b=3;          //11
              //01             if both one,then it is 0. if both opposite(0,1) then it is 1
 console.log(a^b); 
 
// <<
a=5;                     //        00000101   <<
b=2;                     //        00010100    decimal value=20
console.log(a<<b);
a<<=b;
console.log(a);

//>>
a=5;                   //          0101    
b=2;                   //          0001            decimal :10
console.log(a>>b);
a>>=b;
console.log(a);
