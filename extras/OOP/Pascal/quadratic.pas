program Real_Imaginary_roots;
var a,b,c,r1,r2,discriminant,imaginary: double;
begin
writeln('This program calculates the real or imaginary roots of a quadratic equation.');
writeln('Input is of the form A B C where A,B and C are the coefficients of the equation.');
writeln('Enter 0 0 0 to quit.');
writeln('Enter a b c values:');
readln(a,b,c);
writeln('A =',a);
writeln('B =',b);
writeln('C =',c);
discriminant:= b * b - 4 * a * c;
if discriminant > 0 then
        begin
          r1:=(- b - sqrt(discriminant))/(2*a);
          r2:=(- b + sqrt(discriminant))/(2*a);
          writeln('Roots are real....');writeln('Root1 =',r1 );
          writeln('Root2=',r2);
        end
  else
      begin
      if a=0 then
      begin
         if (b=0) then
             begin
              if (c=0) then writeln('3 equations were solved.')
             end
      end
      else
        begin
        if discriminant = 0 then
        begin
        writeln('One real root...') ;
        writeln('Root1= ',-b/(2*a));
        end
        else
          begin
              imaginary:= sqrt(-discriminant)/(2*a);
             writeln('Roots are imaginary...');
             writeLn('Root1= ','-i*',imaginary );
             writeLn('Root2= ' ,'+i*',imaginary);
          end;
        end
end;
readln
END.