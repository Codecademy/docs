---
Title: '.Asin()'
Description: 'Returns an angle in radians whose sine is a specified number.'
Subjects:
  - 'Computer Science'
Tags:
  - 'Libraries'
  - 'Arithmetic'
  - 'Functions'
CatalogContent:
  - 'learn-c-sharp'
  - 'paths/computer-science'
---

The **Math.Asin()** method computes an angle in radians whose sine is a specified number. In Math, this is known as the inverse sine function.

## Syntax

```pseudo
Math.Asin(value);
```

`value` is the input value of type double, which must be in the range -1 <= `value` <= 1.

Returns an angle measured in radians, of type `double`, whose sine is `value`. If an invalid value is passed to the function, or no value is passed at all, `NaN` is returned.

## Codebyte Example

```codebyte/csharp
using System;

class CodecademyDemo
{
    static void Main()
    {
        Double result = Math.Asin(0);
        System.Console.WriteLine("Asin(0) = "+ result + " radians");

        Double result1 = Math.Asin(1);
        System.Console.WriteLine("Asin(1) = "+ result1 + " radians");

        Double result2 = Math.Asin(-1);
        System.Console.WriteLine("Asin(-1) = "+ result2 + " radians");

        Double result3 = Math.Asin(2);
        System.Console.WriteLine("Asin(2) = "+ result3);
    }
}
```
## Codebyte Example

The following example uses `Asin` to assist in the computation of the inner angles of a given trapezoid.

```codebyte/csharp
/// <summary>
/// The following class represents simple functionality of the trapezoid.
/// </summary>
using System;

namespace MathClassCS
{
    class MathTrapezoidSample
    {
        private double m_longBase;
        private double m_shortBase;
        private double m_leftLeg;
        private double m_rightLeg;

        public MathTrapezoidSample(double longbase, double shortbase, double leftLeg, double rightLeg)
        {
            m_longBase = Math.Abs(longbase);
            m_shortBase = Math.Abs(shortbase);
            m_leftLeg = Math.Abs(leftLeg);
            m_rightLeg = Math.Abs(rightLeg);
        }

        private double GetRightSmallBase()
        {
            return (Math.Pow(m_rightLeg,2.0) - Math.Pow(m_leftLeg,2.0) + Math.Pow(m_longBase,2.0) + Math.Pow(m_shortBase,2.0) - 2* m_shortBase * m_longBase)/ (2*(m_longBase - m_shortBase));
        }

        public double GetHeight()
        {
            double x = GetRightSmallBase();
            return Math.Sqrt(Math.Pow(m_rightLeg,2.0) - Math.Pow(x,2.0));
        }

        public double GetSquare()
        {
            return GetHeight() * m_longBase / 2.0;
        }

        public double GetLeftBaseRadianAngle()
        {
            double sinX = GetHeight()/m_leftLeg;
            return Math.Round(Math.Asin(sinX),2);
        }

        public double GetRightBaseRadianAngle()
        {
            double x = GetRightSmallBase();
            double cosX = (Math.Pow(m_rightLeg,2.0) + Math.Pow(x,2.0) - Math.Pow(GetHeight(),2.0))/(2*x*m_rightLeg);
            return Math.Round(Math.Acos(cosX),2);
        }

        public double GetLeftBaseDegreeAngle()
        {
            double x = GetLeftBaseRadianAngle() * 180/ Math.PI;
            return Math.Round(x,2);
        }

        public double GetRightBaseDegreeAngle()
        {
            double x = GetRightBaseRadianAngle() * 180/ Math.PI;
            return Math.Round(x,2);
        }

        static void Main(string[] args)
        {
            MathTrapezoidSample trpz = new MathTrapezoidSample(20.0, 10.0, 8.0, 6.0);
            Console.WriteLine("The trapezoid's bases are 20.0 and 10.0, the trapezoid's legs are 8.0 and 6.0");
            double h = trpz.GetHeight();
            Console.WriteLine("Trapezoid height is: " + h.ToString());
            double dxR = trpz.GetLeftBaseRadianAngle();
            Console.WriteLine("Trapezoid left base angle is: " + dxR.ToString() + " Radians");
            double dyR = trpz.GetRightBaseRadianAngle();
            Console.WriteLine("Trapezoid right base angle is: " + dyR.ToString() + " Radians");
            double dxD = trpz.GetLeftBaseDegreeAngle();
            Console.WriteLine("Trapezoid left base angle is: " + dxD.ToString() + " Degrees");
            double dyD = trpz.GetRightBaseDegreeAngle();
            Console.WriteLine("Trapezoid left base angle is: " + dyD.ToString() + " Degrees");
        }
    }
}
```
