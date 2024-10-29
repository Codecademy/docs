---
Title: 'Sort Methods'
Description: 'Sorting methods written in C#'
Subjects:
  - 'Computer Science'
  - 'Code Foundations'
Tags:
  - 'Methods'
  - 'Sort'
  - 'C#'
CatalogContent:
  - 'learn-c-sharp' 
---

In C#, sorting methods are fundamental for data manipulation, and their efficiency can have a significant impact on application performance.
There are two types:
Internal sorting operates with data in the main memory, allowing quick and uniform access to elements regardless of their position in memory. This is possible due to the nature of RAM, where access time is constant.
•	Insertion (InsertionSort)
•	Selection (SelectionSort)
•	Exchange
•	Tree sorting
•	QuickSort
•	MergeSort
•	RadixSort
External sorting deals with data stored on secondary memory devices, such as hard drives or magnetic tapes, where access time varies depending on the physical position of the data. These methods are crucial when handling large volumes of information that do not fit in the main memory but require more complex management due to the inherent latency of these storage devices.
•	Straight merging
•	Natural merging
•	Balanced multiway merging
•	Polyphase sort
•	Distribution of initial runs
Now let’s look at some internal sorting methods. For example, bubble sort is a simple algorithm that checks each element of the list and swaps them if they are in the wrong order. This process is repeated until the list is sorted. Although it is easy to understand and implement, it is not the most efficient for large lists.
QuickSort divides the list into sub-lists based on a pivot element, recursively sorting the sub-lists. This method is much faster and is widely used in practice. Each of these methods has its own advantages and disadvantages, and the choice of one over another will depend on the specific situation and the performance requirements of the application.

## Syntax

## InsertionSort
```
Console.WriteLine("Metodo de insercion directa");
                    int auxili;
                    int j;
                    for (int i = 0; i < numeros.Length ; i++)
                    {
                        auxili = numeros[i];
                        j = i - 1;
                        while (j >= 0 && numeros[j] > auxili)
                        {
                            numeros[j + 1] = numeros[j];
                            j--;
                        }
                        numeros[j + 1] = auxili;
                    }
                    for (int i = 0; i < longitud; i++)
                    Console.WriteLine(" " + numeros[i]);

```
## Binari Insertion
```
int auxiliar;
                    int q;
                    int izqui;
                    int dere;
                    for (int i = 0; i < numeros.Length; i++)
                    {
                        auxiliar = numeros[i];
                        izqui = 0;
                        dere = i - 1;
                        while (izqui <= dere)
                        {
                            q = ((izqui + dere) / 2);
                            if (auxiliar < numeros[q])
                            {
                                dere = q - 1;
                            }
                            else
                            {
                                izqui = q + 1;
                            }
                            j = i - 1;
                            while (j >= izqui)
                            {
                                numeros[j + 1] = numeros[j];
                                j = j - 1;
                            }
                            numeros[izqui] = auxiliar;
                        }
                    }
                    for (int i = 0; i < longitud; i++)
                        Console.WriteLine(" " + numeros[i]);
```
## Shell Sort
```
int salto = 0;
                    int sw=0;
                    int auxi = 0;
                    int e=0;
                    salto =longitud /2;
                    while (salto >0)
                    {
                        sw=1;
                        while (sw!=0)
                        {
                            sw=0;
                            e=1;
                            while (e<=(longitud -salto ))
                            {
                                if (numeros [e-1]>numeros [(e-1)+salto ])
                                {
                                    auxi =numeros [(e-1)+salto ];
                                    numeros [(e-1)+salto ]=numeros [e-1];
                                    numeros [(e-1)]=auxi;
                                    sw=1;
                                }
                                e++;
                            }
                        }
                        salto =salto /2;
                    }
                    for (int i = 0; i < longitud; i++)
                    Console.WriteLine(" " + numeros[i]);
```
## Quick sort
```
int izquierda,derecha;
                    int pivot, i_det, d_det;
                    i_det = izquierda;
                    d_det = derecha;
                    pivot = numeros[izquierda];

                    while (izquierda <derecha )
                    {
                        while ((numeros [derecha ]>=pivot ) &&(izquierda <derecha ))
                        {
                            derecha --;
                        }
                        if (izquierda !=derecha )
                        {
                            numeros [izquierda]=numeros [derecha ];
                            izquierda ++;
                        }
                        while ((numeros [izquierda ]<=pivot )&&(izquierda <derecha ))
                        {
                            izquierda ++;
                        }
                        if (izquierda !=derecha )
                        {
                            numeros [derecha]=numeros [izquierda ];
                            derecha --;
                        }
                    }
                    numeros[izquierda] = pivot;
                    pivot = izquierda;
                    izquierda = i_det;
                    derecha = d_det;

                    if (izquierda < pivot)
                    {
                        quicksort(izquierda, pivot - 1);
                    }
                    if (derecha > pivot)
                    {
                        quicksort(pivot + 1, derecha);
                    }

```
## Bubble sort
```
int a,b,t;

               for(a=1;a<longitud ;a++)
                        for(b=longitud -1;b>=a;b--)
                        {
                            if (numeros [b-1]>numeros [b])
                            {
                                t=numeros [b-1];
                                numeros [b-1]=numeros [b];
                                numeros [b]=t;
                            }
                        }
                    //desplegar arreglo
                    Console.WriteLine("Bubble sort");
                    for (int i = 0; i < longitud; i++)
                    Console.WriteLine(" " + numeros[i]);
```
## Shaker Sort 
```
int n = numeros.Length;
                    int izq = 1;
                    int k = n;
                    int aux;
                    int der = n;

                    do
                    {
                        for (int i = der; i >= izq; i--)
                        {
                            if (numeros[i - 1] > numeros[i])
                            {
                                aux = numeros[i - 1];
                                numeros[i - 1] = numeros[i];
                                numeros[i] = aux;
                                k = i;
                            }
                        }
                        izq =k+1;
                        for (int i=izq;i<=der;i++)
                        {
                            if (numeros [i-1]>numeros [i])
                            {
                                aux=numeros [i-1];
                                numeros [i-1]=numeros [i];
                                numeros [i] =aux;
                                k=1;
                            }
                            }
                        der =k-1;
                    }
                    while (der>=izq );
                   
                    for (int i = 0; i < longitud; i++)
                    Console.WriteLine(" " + numeros[i]);
```
