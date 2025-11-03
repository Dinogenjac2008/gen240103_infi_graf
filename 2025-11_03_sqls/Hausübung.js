#aufgabe 1:

select count(distinct CustomerName) from customers WHERE City = 'Berlin';

Antwort: "1"


#aufgabe 2:

SELECT CustomerName, City, Country FROM Customers;


#Aufgabe 3:

select count(distinct CustomerName) from customers Where City = 'london';

Antwort: "6"


#Aufgabe 4:

select distinct ProductName from products Where Price > 20;


#Aufgabe 5:


select distinct ProductName from products Where not Price = 18;    //nur der Name des Produktes//
select * from products Where not Price = 18;