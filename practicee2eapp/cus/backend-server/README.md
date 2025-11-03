```sql
use e2eappdb;
create table customer (fullName Integer primary key, phoneNo Integer, emailAddress varchar(20));
create table customer (id Integer primary key, fullName varchar(20), phoneNo bigint, emailAddress varchar(20));
insert into customer values (1, "yadnyesh", 9435235498, "yad@email.com");
insert into customer values (2, "rushikesh", 9411135498, "rus@email.com");
insert into customer values (3, "deepak", 9435333398, "dep@email.com");
insert into customer values (4, "aavdut", 9433245498, "aav@email.com");
insert into customer values (5, "aaman", 9433241111, "aam@email.com");

```