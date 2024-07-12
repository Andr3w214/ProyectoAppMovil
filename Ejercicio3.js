/*realizar un programa que calcule el descuento de una compra dependiendo de los articulos comprados de 5 a 10 el descuento sera del 5%, de 11 a 20 el 10% y arriba de 20 el 15%. Si no alcanzara los 4 articulos no aplica descuento
*/

using System;

namespace DescuentoCompra
{
    class Program
    {
        static void Main(string[] args);
        {
            Console.WriteLine("Ingrese el número de artículos comprados:");
            int cantidadArticulos = int.Parse(Console.ReadLine());

            Console.WriteLine("Ingrese el precio total de la compra:");
            double precioTotal = double.Parse(Console.ReadLine());

            double descuento = 0;

            if (cantidadArticulos >= 5 && cantidadArticulos <= 10)
            {
                descuento = 0.05; // 5%
            }
            else if (cantidadArticulos >= 11 && cantidadArticulos <= 20)
            {
                descuento = 0.10; // 10%
            }
            else if (cantidadArticulos > 20)
            {
                descuento = 0.15; // 15%
            }

            double montoDescuento = precioTotal * descuento;
            double precioFinal = precioTotal - montoDescuento;

            Console.WriteLine($"Descuento aplicado: {descuento * 100}%");
            Console.WriteLine($"Monto del descuento: {montoDescuento:C}");
            Console.WriteLine($"Precio final después del descuento: {precioFinal:C}");
        }
    }
}