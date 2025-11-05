
```sql
USE e2eaappdb;

-- Create the expenses table
CREATE TABLE expenses (
    id INT NOT NULL AUTO_INCREMENT,
    amount INT,
    category VARCHAR(20),
    edesc VARCHAR(100),
    edate DATE,
    PRIMARY KEY (id)
);

-- Insert the data
INSERT INTO expenses (amount, category, edesc, edate) VALUES
(4000, 'morning', 'Milk and Eggs', '2025-06-12'),
(56, 'morning', 'Vagetables and Juices', '2025-06-22'),
(23000, 'evening', 'Snacks and Leafy', '2025-02-23'),
(13000, 'night', 'Dinner and Sweet', '2025-02-23'),
(13000, 'night', 'Dinner and Snacks', '2025-02-22'),
(13000, 'latenight', 'Dinner and Snacks', '2025-02-24'),
(4000, 'good', 'Vagetables and Juices', '2025-06-22'),
(4000, 'good', 'Vagetables and Juices', '2025-06-22'),
(4000, 'badone', 'Vagetables and Juices', '2025-06-22'),
(34235, 'dfdfs', 'fff', '2025-11-09');

-- View the data
SELECT * FROM expenses;

-- View table structure
DESC expenses;
```
